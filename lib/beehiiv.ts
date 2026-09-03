import "server-only";
import { parse, type HTMLElement } from "node-html-parser";

// Server-side beehiiv client. Imported only from Server Components and
// Route Handlers — the `server-only` import above makes it a build error to
// accidentally pull this into a Client Component bundle, which would leak
// BEEHIIV_API_KEY to the browser.

const API_BASE = "https://api.beehiiv.com/v2";

function env(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function beehiiv<T = unknown>(path: string, init: RequestInit = {}): Promise<T> {
  const apiKey = env("BEEHIIV_API_KEY");
  const maxAttempts = 10;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const res = await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        ...(init.headers ?? {}),
      },
      // Next.js's own data cache: revalidate hourly so a new beehiiv post
      // shows up without needing a full redeploy.
      next: { revalidate: 3600 },
    });

    // Next's build-time static generation runs many pages concurrently
    // (generateStaticParams fetches 2 endpoints per article across ~100
    // articles), which trips beehiiv's rate limiter. Back off exponentially
    // and retry rather than failing the whole build.
    if (res.status === 429 && attempt < maxAttempts) {
      await sleep(Math.min(1000 * 2 ** attempt, 15000));
      continue;
    }

    const text = await res.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!res.ok) {
      throw new Error(`beehiiv ${res.status}: ${JSON.stringify(data)}`);
    }

    return data as T;
  }

  throw new Error("beehiiv: exhausted retries");
}

type BeehiivContentTag = { display: string; slug: string };

type BeehiivPostListItem = {
  id: string;
  title: string;
  subtitle: string | null;
  slug: string;
  thumbnail_url: string | null;
  web_url: string;
  publish_date: number | null;
  displayed_date: number | null;
  content_tags?: (string | BeehiivContentTag)[];
};

type BeehiivPostDetail = BeehiivPostListItem & {
  content: {
    free?: { web?: string };
  };
};

export type ArticleSummary = {
  slug: string;
  title: string;
  summary: string;
  publishedDate: string;
  category: string;
  thumbnailUrl: string | null;
};

export type ArticleDetail = ArticleSummary & {
  keyTakeaways: string[];
  tweetable: string | null;
  bodyHtml: string;
};

function deriveCategory(tags?: (string | BeehiivContentTag)[]): string {
  const first = tags?.[0];
  if (!first) return "ESSAY";
  const display = typeof first === "string" ? first : first.display;
  return display.toUpperCase();
}

// beehiiv falls back to a generic stock thumbnail when no real image was
// ever set on the post. None of the migrated articles have real images, so
// surfacing this placeholder would be a visual regression.
const DEFAULT_THUMBNAIL_MARKER = "static_assets/defaults/";

function realThumbnailUrl(url: string | null): string | null {
  if (!url || url.includes(DEFAULT_THUMBNAIL_MARKER)) return null;
  return url;
}

function toIsoDate(post: BeehiivPostListItem): string {
  const seconds = post.displayed_date ?? post.publish_date;
  return seconds ? new Date(seconds * 1000).toISOString() : new Date(0).toISOString();
}

function toSummary(post: BeehiivPostListItem): ArticleSummary {
  return {
    slug: post.slug,
    title: post.title,
    summary: post.subtitle ?? "",
    publishedDate: toIsoDate(post),
    category: deriveCategory(post.content_tags),
    thumbnailUrl: realThumbnailUrl(post.thumbnail_url),
  };
}

export async function listArticles(): Promise<ArticleSummary[]> {
  const pub = env("BEEHIIV_PUBLICATION_ID");
  const articles: ArticleSummary[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const data = await beehiiv<{ data: BeehiivPostListItem[]; total_pages: number }>(
      `/publications/${pub}/posts?status=confirmed&order_by=publish_date&direction=desc&limit=${perPage}&page=${page}&expand[]=content_tags`
    );
    articles.push(...data.data.map(toSummary));
    if (page >= data.total_pages) break;
    page += 1;
  }

  return articles;
}

/**
 * beehiiv's email-render HTML wraps every block in its own presentational
 * `<div style="...">`, bakes in its own fonts/colors as inline styles, and
 * renders "quote" blocks as a styled `<div>` rather than a semantic
 * `<blockquote>`. This normalizes it into plain semantic HTML so the site
 * can style it with its own CSS (see .article-content in globals.css).
 */
function cleanBodyHtml(html: string): string {
  const root = parse(html);

  root.querySelectorAll("style").forEach((el) => el.remove());

  for (const div of root.querySelectorAll("div")) {
    const style = div.getAttribute("style") ?? "";
    if (style.includes("border-radius:10px") && style.includes("border:1px solid")) {
      const p = div.querySelector("p");
      div.replaceWith(`<blockquote><p>${p ? p.innerHTML : ""}</p></blockquote>`);
    }
  }

  for (const div of root.querySelectorAll("div")) {
    if (div.querySelector('div[style*="border-top"]')) {
      div.replaceWith("<hr>");
    }
  }

  root.querySelectorAll("*").forEach((el) => el.removeAttribute("style"));

  root.querySelectorAll("a").forEach((a) => {
    if (a.getAttribute("href")) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    }
  });

  let remaining = root.querySelectorAll("div");
  while (remaining.length > 0) {
    remaining[0].replaceWith(remaining[0].innerHTML);
    remaining = root.querySelectorAll("div");
  }

  return root.toString().trim();
}

// The migration always emits Key Takeaways / Tweetable as an <h2> heading
// immediately followed by their content (a <ul> or a quote callout), each
// wrapped in its own <div> by beehiiv's email renderer. Pull them out so
// the site can render them in its bespoke sidebar box / trailing line.
function extractSpecialSections(contentBlocksHtml: string): {
  keyTakeaways: string[];
  tweetable: string | null;
  bodyHtml: string;
} {
  const root = parse(contentBlocksHtml);
  const keyTakeaways: string[] = [];
  let tweetable: string | null = null;

  const headingDivs = root.querySelectorAll("div").filter((div) => {
    const heading = div.querySelector("h2");
    return heading !== null && div.children.length === 1 && div.childNodes.length === 1;
  });

  for (const headingDiv of headingDivs) {
    const heading = headingDiv.querySelector("h2")!;
    const text = heading.text.trim().toLowerCase();
    if (text !== "key takeaways" && text !== "tweetable") continue;

    const contentDiv = headingDiv.nextElementSibling;
    if (!contentDiv) continue;

    if (text === "key takeaways") {
      contentDiv.querySelectorAll("li p").forEach((p: HTMLElement) => {
        const item = p.text.trim();
        if (item) keyTakeaways.push(item);
      });

      const dividerDiv = contentDiv.nextElementSibling;
      if (dividerDiv && dividerDiv.querySelector('div[style*="border-top"]')) {
        dividerDiv.remove();
      }
    } else {
      const quoteP = contentDiv.querySelector("p");
      tweetable = quoteP ? quoteP.text.trim() : null;
    }

    contentDiv.remove();
    headingDiv.remove();
  }

  return { keyTakeaways, tweetable, bodyHtml: root.toString().trim() };
}

function extractContentBlocks(fullHtml: string): string {
  const marker = "id='content-blocks'";
  const start = fullHtml.indexOf(marker);
  if (start === -1) return "";

  const openTagEnd = fullHtml.indexOf(">", start) + 1;
  let depth = 1;
  let i = openTagEnd;
  while (depth > 0 && i < fullHtml.length) {
    const nextOpen = fullHtml.indexOf("<div", i);
    const nextClose = fullHtml.indexOf("</div>", i);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      i = nextOpen + 4;
    } else {
      depth--;
      i = nextClose + 6;
    }
  }
  return fullHtml.slice(openTagEnd, i - 6);
}

export async function getArticle(slug: string): Promise<ArticleDetail | null> {
  const pub = env("BEEHIIV_PUBLICATION_ID");

  const list = await beehiiv<{ data: BeehiivPostListItem[] }>(
    `/publications/${pub}/posts?status=confirmed&slugs[]=${encodeURIComponent(slug)}&expand[]=content_tags`
  );
  const found = list.data[0];
  if (!found) return null;

  const detail = await beehiiv<{ data: BeehiivPostDetail }>(
    `/publications/${pub}/posts/${found.id}?expand[]=free_web_content`
  );

  const fullHtml = detail.data.content?.free?.web ?? "";
  const contentBlocksHtml = extractContentBlocks(fullHtml);
  const { keyTakeaways, tweetable, bodyHtml: rawBodyHtml } = extractSpecialSections(contentBlocksHtml);
  const bodyHtml = cleanBodyHtml(rawBodyHtml);

  return {
    slug: found.slug,
    title: found.title,
    summary: found.subtitle ?? "",
    publishedDate: toIsoDate(found),
    category: deriveCategory(found.content_tags),
    thumbnailUrl: realThumbnailUrl(found.thumbnail_url),
    keyTakeaways,
    tweetable,
    bodyHtml,
  };
}

export async function subscribeToNewsletter(email: string): Promise<void> {
  const pub = env("BEEHIIV_PUBLICATION_ID");
  await beehiiv(`/publications/${pub}/subscriptions`, {
    method: "POST",
    body: JSON.stringify({
      email,
      utm_source: "internoun.wtf",
      utm_medium: "website",
      send_welcome_email: true,
    }),
  });
}
