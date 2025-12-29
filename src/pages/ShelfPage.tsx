import { useState } from "react";
import { Search, FileText, Star, Heart } from "lucide-react";
import { BOOKS, EXTERNAL_ESSAYS } from "../data";

const ShelfPage = () => {
  const [shelfTab, setShelfTab] = useState("BOOKSHELF");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookFilter, setBookFilter] = useState("ALL");

  const filteredBooks = BOOKS.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = bookFilter === "ALL" || b.rating === bookFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-wrap items-center gap-4 mb-16">
        {["BOOKSHELF", "MOVIE", "ESSAYS"].map((tab) => (
          <button
            key={tab}
            onClick={() => setShelfTab(tab)}
            className={`px-8 py-3 font-heading text-2xl rounded-2xl border-4 border-charcoal transition-all shadow-nouns-sm ${
              shelfTab === tab
                ? "bg-nouns-blue text-white translate-y-1 shadow-none"
                : "bg-white dark:bg-zinc-800 hover:bg-nouns-blue/10"
            }`}
          >
            {tab === "MOVIE" ? "MOVIE SHELF" : tab}
          </button>
        ))}
      </div>

      {shelfTab === "BOOKSHELF" && (
        <div>
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-center">
            <div className="relative flex-grow w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30"
                size={20}
              />
              <input
                type="text"
                placeholder="Search books..."
                className="w-full bg-white dark:bg-zinc-900 border-4 border-charcoal rounded-2xl p-4 pl-12 font-mono focus:outline-none focus:ring-4 ring-nouns-blue/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {["ALL", "LIFE-CHANGING", "LIKED"].map((f) => (
                <button
                  key={f}
                  onClick={() => setBookFilter(f)}
                  className={`px-4 py-2 font-mono text-[10px] font-bold uppercase rounded-xl border-2 border-charcoal ${
                    bookFilter === f
                      ? "bg-nouns-red text-white"
                      : "bg-white dark:bg-zinc-800"
                  }`}
                >
                  {f === "LIFE-CHANGING"
                    ? "⭐ Life-Changing"
                    : f === "LIKED"
                    ? "❤️ Liked"
                    : f}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8 font-heading text-xl text-nouns-blue">
            {filteredBooks.length} BOOKS ON THE SHELF
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {filteredBooks.map((book) => (
              <div key={book.id} className="group cursor-pointer">
                <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-2xl border-4 border-charcoal shadow-nouns group-hover:rotate-2 transition-all">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    {book.rating === "LIFE-CHANGING" ? (
                      <div className="bg-nouns-yellow p-1.5 rounded-lg border-2 border-charcoal shadow-nouns-sm">
                        <Star size={14} fill="currentColor" />
                      </div>
                    ) : (
                      <div className="bg-nouns-red p-1.5 rounded-lg border-2 border-charcoal shadow-nouns-sm">
                        <Heart
                          size={14}
                          fill="white"
                          className="text-white"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <h4 className="font-heading text-lg line-clamp-1">
                  {book.title}
                </h4>
                <p className="text-xs font-mono opacity-50 mt-1">
                  {book.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {shelfTab === "ESSAYS" && (
        <div className="max-w-3xl space-y-10">
          {EXTERNAL_ESSAYS.map((essay, idx) => (
            <div
              key={idx}
              className="group flex gap-8 p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border-4 border-charcoal shadow-nouns hover:translate-x-2 transition-transform"
            >
              <div
                className={`p-4 rounded-2xl border-4 border-charcoal shadow-nouns-sm h-fit ${
                  essay.star ? "bg-nouns-yellow" : "bg-nouns-blue"
                }`}
              >
                {essay.star ? (
                  <Star size={24} fill="currentColor" />
                ) : (
                  <FileText size={24} className="text-white" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h4 className="font-heading text-2xl group-hover:text-nouns-red transition-colors">
                    {essay.title}
                  </h4>
                  <span className="font-mono text-xs font-bold px-2 py-1 bg-charcoal/5 rounded-lg">
                    {essay.year}
                  </span>
                </div>
                <p className="font-mono text-sm font-bold text-nouns-blue mb-4 uppercase tracking-tighter">
                  — {essay.author} ({essay.source})
                </p>
                <p className="font-mono text-sm leading-relaxed opacity-70 border-l-4 border-nouns-red/20 pl-4 py-2 italic">
                  {essay.rec}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShelfPage;
