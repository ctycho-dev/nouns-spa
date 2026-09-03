import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, Calendar } from "lucide-react";
import { getArticle, listArticles } from "@/lib/beehiiv";

export const revalidate = 3600; // 1 hour

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const articles = await listArticles().catch(() => []);
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug).catch(() => null);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedDate,
      ...(article.thumbnailUrl ? { images: [article.thumbnailUrl] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const [article, allArticles] = await Promise.all([
    getArticle(slug),
    listArticles().catch(() => []),
  ]);

  if (!article) notFound();

  const relatedArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 3);

  const publishedDate = new Date(article.publishedDate);
  const formattedDate = publishedDate
    .toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
    .toUpperCase()
    .replace(",", "");

  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = article.bodyHtml.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Back Button */}
      <Link
        href="/writing"
        className="flex items-center gap-2 font-mono text-xs font-bold mb-12 hover:text-nouns-red transition-colors group w-fit"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        BACK TO ARCHIVE
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content Area */}
        <div className="lg:col-span-8">
          {/* Meta Header */}
          <div className="flex flex-wrap gap-6 items-center font-mono text-xs font-bold text-charcoal/40 dark:text-cream/40 mb-6 uppercase tracking-widest">
            <div className="flex items-center gap-2 text-nouns-green">
              <BookOpen size={14} />
              {article.category}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              {formattedDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              {readTime} MIN READ
            </div>
          </div>

          {/* Title */}
          <h1 className="font-heading text-5xl md:text-7xl leading-[1.1] mb-12 max-w-2xl text-charcoal dark:text-cream">
            {article.title}
          </h1>

          {/* Hero Image - Only show if a real thumbnail exists */}
          {article.thumbnailUrl && (
            <div className="w-full aspect-video bg-white dark:bg-zinc-900 border-4 border-charcoal rounded-[2rem] shadow-nouns mb-16 relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.thumbnailUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Body */}
          <div
            className="article-content space-y-8 text-lg font-mono leading-relaxed text-charcoal/80 dark:text-cream/80 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
          />

          {article.tweetable && (
            <p className="opacity-50 text-sm italic pt-12 max-w-2xl font-mono">
              &quot;{article.tweetable}&quot; ⌐◨-◨
            </p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-10">
            {/* Takeaways Box */}
            {article.keyTakeaways.length > 0 && (
              <div className="bg-white dark:bg-zinc-900 border-4 border-charcoal rounded-3xl shadow-nouns p-8">
                <h3 className="font-mono text-[10px] font-bold tracking-widest text-nouns-red uppercase mb-6 flex items-center gap-2">
                  <span className="h-1 w-4 bg-nouns-red" />
                  Key Takeaways
                </h3>
                <ul className="space-y-6">
                  {article.keyTakeaways.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-4 items-start font-mono text-sm leading-relaxed"
                    >
                      <span className="text-nouns-blue flex-shrink-0 text-xl font-bold">
                        +
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Writing */}
            {relatedArticles.length > 0 && (
              <div>
                <h3 className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-40 mb-6 px-2">
                  Related Writing
                </h3>
                <div className="space-y-2">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/writing/${rel.slug}`}
                      className="block w-full text-left p-4 rounded-xl hover:bg-white dark:hover:bg-zinc-900 hover:shadow-nouns-sm border-2 border-transparent hover:border-charcoal transition-all group"
                    >
                      <span className="block font-mono text-[8px] font-bold text-nouns-green uppercase mb-1">
                        {rel.category}
                      </span>
                      <span className="block font-heading text-lg leading-tight group-hover:text-nouns-red">
                        {rel.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
