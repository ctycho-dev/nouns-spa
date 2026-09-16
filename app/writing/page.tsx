import type { Metadata } from "next";
import { listArticles } from "@/lib/beehiiv";
import WritingPageClient from "./WritingPageClient";

export const revalidate = 3600; // 1 hour

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays on DAOs, governance, and coordination — internoun.wtf",
};

export default async function WritingPage() {
  let articles;
  try {
    articles = await listArticles();
  } catch {
    return (
      <div className="max-w-3xl animate-in slide-in-from-bottom-4 duration-500">
        <h1 className="font-heading text-6xl mb-16">Writing</h1>
        <div className="text-center py-16">
          <p className="font-mono text-lg text-charcoal/60 dark:text-cream/60">
            Couldn&apos;t load articles. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return <WritingPageClient articles={articles} />;
}
