import { useNavigate } from "react-router-dom";
import ARTICLES from "../data/articles";

const WritingPage = () => {
  const navigate = useNavigate();

  // Sort articles by date (most recent first)
  const sortedArticles = [...ARTICLES].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <div className="max-w-3xl animate-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-6xl mb-16">Writing</h1>
      <div className="space-y-12">
        {sortedArticles.map((article) => {
          const publishedDate = new Date(article.publishedDate);
          const year = publishedDate.getFullYear().toString();
          const platform = article.relatedIntelligence?.[0]?.type || "ESSAY";

          return (
            <article key={article.id} className="group">
              <div className="flex items-center gap-4 mb-4 font-mono text-xs font-bold text-nouns-blue uppercase tracking-widest">
                <span>{year}</span>
                <span className="w-12 h-1 bg-nouns-red rounded-full" />
                <span>{platform}</span>
              </div>
              <h2
                onClick={() => {
                  navigate(`/writing/${article.id}`);
                  window.scrollTo(0, 0);
                }}
                className="font-heading text-4xl mb-4 group-hover:text-nouns-red transition-colors cursor-pointer leading-tight"
              >
                {article.title}
              </h2>
              <p className="font-mono text-lg opacity-70 leading-relaxed mb-6">
                {article.summary}
              </p>
              <button
                onClick={() => {
                  navigate(`/writing/${article.id}`);
                  window.scrollTo(0, 0);
                }}
                className="inline-flex items-center gap-2 font-heading text-xl text-nouns-red hover:translate-x-2 transition-transform"
              >
                Read Article ⌐◨-◨
              </button>
              <div className="h-1 w-full bg-charcoal/5 dark:bg-white/5 mt-12 rounded-full" />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default WritingPage;
