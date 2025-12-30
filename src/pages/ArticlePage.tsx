import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, BookOpen, Clock, Calendar } from "lucide-react";
import ARTICLES from "../data/articles";

const Noggles = ({ className = "w-12 h-auto" }) => (
  <svg viewBox="0 0 100 40" className={className} fill="currentColor">
    <rect x="5" y="5" width="30" height="30" rx="2" />
    <rect x="65" y="5" width="30" height="30" rx="2" />
    <rect x="35" y="15" width="30" height="10" />
    <rect x="0" y="15" width="5" height="10" />
    <rect x="95" y="15" width="5" height="10" />
    <rect x="12" y="12" width="16" height="16" fill="white" />
    <rect x="72" y="12" width="16" height="16" fill="white" />
  </svg>
);

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = ARTICLES.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="max-w-3xl animate-in fade-in duration-700">
        <h1 className="font-heading text-6xl mb-8">Article Not Found</h1>
        <button
          onClick={() => navigate("/writing")}
          className="inline-flex items-center gap-2 font-heading text-xl text-nouns-red hover:translate-x-2 transition-transform"
        >
          <ArrowLeft size={20} />
          Back to Writing
        </button>
      </div>
    );
  }

  // Parse the published date
  const publishedDate = new Date(article.publishedDate);
  const formattedDate = publishedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).toUpperCase().replace(",", "");

  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = article.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  // Get category from relatedIntelligence or default to "ESSAY"
  const category = article.relatedIntelligence?.[0]?.type || "ESSAY";

  // Get other articles for "Related Writing" section
  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Back Button */}
      <button
        onClick={() => navigate("/writing")}
        className="flex items-center gap-2 font-mono text-xs font-bold mb-12 hover:text-nouns-red transition-colors group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        BACK TO ARCHIVE
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content Area */}
        <div className="lg:col-span-8">
          {/* Meta Header */}
          <div className="flex flex-wrap gap-6 items-center font-mono text-xs font-bold text-charcoal/40 dark:text-cream/40 mb-6 uppercase tracking-widest">
            <div className="flex items-center gap-2 text-nouns-green">
              <BookOpen size={14} />
              {category}
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

          {/* Hero Placeholder */}
          <div className="w-full aspect-video bg-white dark:bg-zinc-900 border-4 border-charcoal rounded-[2rem] shadow-nouns flex items-center justify-center mb-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-nouns-beige opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="text-center z-10">
              <Noggles className="w-20 text-nouns-red/20 mb-4 mx-auto" />
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-30 block">
                Featured Technical Illustration
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="article-content space-y-8 text-lg font-mono leading-relaxed text-charcoal/80 dark:text-cream/80 max-w-2xl">
            <ReactMarkdown
              components={{
                // Customize rendering of markdown elements
                h1: ({ children }) => (
                  <h2 className="font-heading text-3xl text-charcoal dark:text-cream pt-6 mb-4">
                    {children}
                  </h2>
                ),
                h2: ({ children }) => (
                  <h2 className="font-heading text-3xl text-charcoal dark:text-cream pt-6 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-heading text-2xl text-charcoal dark:text-cream pt-4 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => <p className="mb-6">{children}</p>,
                blockquote: ({ children }) => (
                  <blockquote className="py-12 px-8 border-l-4 border-nouns-red bg-white/50 dark:bg-zinc-900/50 rounded-r-3xl my-12 italic text-2xl font-heading text-charcoal dark:text-cream leading-snug">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-4 list-none pl-0 my-6">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="flex gap-4 items-start">
                    <span className="text-nouns-red mt-1">/</span>
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-charcoal dark:text-cream">
                    {children}
                  </strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-nouns-blue underline hover:text-nouns-red transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>

            {article.tweetable && (
              <p className="opacity-50 text-sm italic pt-12">
                "{article.tweetable}" ⌐◨-◨
              </p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-10">
            {/* Takeaways Box */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
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
                  {relatedArticles.map((rel) => {
                    const relCategory =
                      rel.relatedIntelligence?.[0]?.type || "ESSAY";
                    return (
                      <button
                        key={rel.id}
                        onClick={() => {
                          navigate(`/writing/${rel.id}`);
                          window.scrollTo(0, 0);
                        }}
                        className="w-full text-left p-4 rounded-xl hover:bg-white dark:hover:bg-zinc-900 hover:shadow-nouns-sm border-2 border-transparent hover:border-charcoal transition-all group"
                      >
                        <span className="block font-mono text-[8px] font-bold text-nouns-green uppercase mb-1">
                          {relCategory}
                        </span>
                        <span className="block font-heading text-lg leading-tight group-hover:text-nouns-red">
                          {rel.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticlePage;
