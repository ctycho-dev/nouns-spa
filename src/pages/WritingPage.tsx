import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import ARTICLES from "../data/articles";

const WritingPage = () => {
  const navigate = useNavigate();

  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYears, setSelectedYears] = useState<Set<number>>(new Set());
  const [displayCount, setDisplayCount] = useState(20);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const yearDropdownRef = useRef<HTMLDivElement>(null);

  // Sort articles by date (most recent first)
  const sortedArticles = [...ARTICLES].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  // Get unique years for filters
  const availableYears = Array.from(
    new Set(
      ARTICLES.map((article) => new Date(article.publishedDate).getFullYear())
    )
  ).sort((a, b) => b - a);

  const getYearCount = (year: number) =>
    ARTICLES.filter(
      (article) => new Date(article.publishedDate).getFullYear() === year
    ).length;

  // Filter articles based on search and filters
  const filteredArticles = sortedArticles.filter((article) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());

    // Year filter
    const articleYear = new Date(article.publishedDate).getFullYear();
    const matchesYear =
      selectedYears.size === 0 || selectedYears.has(articleYear);

    return matchesSearch && matchesYear;
  });

  // Articles to display based on infinite scroll
  const displayedArticles = filteredArticles.slice(0, displayCount);

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(20);
  }, [searchQuery, selectedYears]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          displayCount < filteredArticles.length &&
          !isLoadingMore
        ) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setDisplayCount((prev) => prev + 20);
            setIsLoadingMore(false);
          }, 300);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [displayCount, filteredArticles.length, isLoadingMore]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target as Node)
      ) {
        setYearDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedYears(new Set());
  };

  const hasActiveFilters = searchQuery !== "" || selectedYears.size > 0;

  const getSelectedYearLabel = () => {
    if (selectedYears.size === 0) return "All Years";
    return Array.from(selectedYears)[0].toString();
  };

  return (
    <div className="max-w-3xl animate-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-heading text-6xl mb-16">Writing</h1>

      {/* Search Bar and Filters Row */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40 dark:text-cream/40" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4 font-mono text-base bg-white dark:bg-zinc-900 border-2 border-charcoal/20 dark:border-cream/20 rounded-2xl focus:outline-none focus:border-charcoal dark:focus:border-cream focus:shadow-nouns transition-all"
            aria-label="Search articles"
          />
        </div>

        {/* Year Filter Dropdown */}
        <div className="relative" ref={yearDropdownRef}>
          <button
            onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
            className="w-full md:w-auto px-6 py-4 font-mono text-sm font-bold bg-white dark:bg-zinc-900 border-2 border-charcoal/20 dark:border-cream/20 rounded-2xl hover:border-charcoal dark:hover:border-cream focus:outline-none focus:border-charcoal dark:focus:border-cream focus:shadow-nouns transition-all flex items-center justify-between gap-3 min-w-[180px]"
            aria-label="Filter by year"
          >
            <span className="text-charcoal dark:text-cream">
              {getSelectedYearLabel()}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-charcoal/60 dark:text-cream/60 transition-transform ${
                yearDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {yearDropdownOpen && (
            <div className="absolute z-10 mt-2 w-full bg-white dark:bg-zinc-900 border-2 border-charcoal dark:border-cream rounded-2xl shadow-nouns overflow-hidden">
              <button
                onClick={() => {
                  setSelectedYears(new Set());
                  setYearDropdownOpen(false);
                }}
                className={`w-full px-6 py-3 font-mono text-sm font-bold text-left hover:bg-nouns-beige dark:hover:bg-charcoal/50 transition-colors ${
                  selectedYears.size === 0
                    ? "bg-nouns-blue/10 text-nouns-blue"
                    : "text-charcoal dark:text-cream"
                }`}
              >
                All Years
              </button>
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYears(new Set([year]));
                    setYearDropdownOpen(false);
                  }}
                  className={`w-full px-6 py-3 font-mono text-sm font-bold text-left hover:bg-nouns-beige dark:hover:bg-charcoal/50 transition-colors ${
                    selectedYears.has(year)
                      ? "bg-nouns-blue/10 text-nouns-blue"
                      : "text-charcoal dark:text-cream"
                  }`}
                >
                  {year} ({getYearCount(year)})
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-mono text-sm text-charcoal/60 dark:text-cream/60">
          {filteredArticles.length} article
          {filteredArticles.length !== 1 ? "s" : ""}
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="font-mono text-xs font-bold text-nouns-red hover:underline uppercase tracking-wide"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-heading text-4xl mb-4">🔍</p>
          <p className="font-mono text-lg text-charcoal/60 dark:text-cream/60 mb-6">
            No articles found. Try adjusting your filters.
          </p>
          <button
            onClick={clearAllFilters}
            className="font-heading text-xl text-nouns-red hover:translate-x-2 transition-transform inline-block"
          >
            Clear Filters ⌐◨-◨
          </button>
        </div>
      ) : (
        <>
          {/* Article List */}
          <div className="space-y-12">
            {displayedArticles.map((article, i) => {
              const publishedDate = new Date(article.publishedDate);
              const year = publishedDate.getFullYear().toString();
              const platform =
                article.relatedIntelligence?.[0]?.type || "ESSAY";

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
                  {i < displayedArticles.length - 1 && (
                    <div className="h-1 w-full bg-charcoal/5 dark:bg-white/5 mt-12 rounded-full" />
                  )}
                </article>
              );
            })}
          </div>

          {/* Infinite Scroll Sentinel & Loading Indicator */}
          <div ref={sentinelRef} className="py-8">
            {isLoadingMore && displayCount < filteredArticles.length && (
              <p className="text-center font-mono text-sm text-charcoal/40 dark:text-cream/40">
                Loading more...
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default WritingPage;
