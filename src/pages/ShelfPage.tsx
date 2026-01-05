import { useState } from "react";
import { Search, FileText, Radio, Star } from "lucide-react";
import { EXTERNAL_ESSAYS } from "../data/essays";
import BOOKS from "../data/books";
import PODCASTS from "../data/podcasts";

const TABS = {
  BOOKS: "BOOKS",
  PODCASTS: "PODCASTS",
  ESSAYS: "ESSAYS",
};

const BookFlipCard = ({ book }: { book: (typeof BOOKS)[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const hasMustReadTag = book.tags.includes("Must-Read");

  return (
    <div
      className="group cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative aspect-[2/3] mb-4 transition-all duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card - Book cover */}
        <div
          className="absolute inset-0 rounded-2xl border-4 border-charcoal shadow-nouns overflow-hidden backface-hidden group-hover:shadow-nouns-lg transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover"
          />
          {hasMustReadTag && (
            <div className="absolute top-2 right-2">
              <div className="bg-nouns-yellow p-1.5 rounded-lg border-2 border-charcoal shadow-nouns-sm">
                <Star size={14} fill="currentColor" />
              </div>
            </div>
          )}
        </div>

        {/* Back of card - Description */}
        <div
          className="absolute inset-0 rounded-2xl border-4 border-charcoal shadow-nouns bg-white dark:bg-zinc-800 p-4 flex flex-col justify-center items-center backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="font-mono text-xs leading-relaxed text-center">
            {book.description || "No description available."}
          </p>
        </div>
      </div>
      <h4 className="font-heading text-lg line-clamp-1">{book.title}</h4>
      <p className="text-xs font-mono opacity-50 mt-1">{book.author}</p>
    </div>
  );
};

const ShelfPage = () => {
  const [shelfTab, setShelfTab] = useState(TABS.BOOKS);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = BOOKS.filter((b) => {
    const hasImage = b.image && b.image.trim() !== "";
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase());
    return hasImage && matchesSearch;
  });

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-wrap items-center gap-4 mb-16">
        {Object.values(TABS).map((tab) => (
          <button
            key={tab}
            onClick={() => setShelfTab(tab)}
            className={`px-8 py-3 font-heading text-2xl rounded-2xl border-4 border-charcoal transition-all shadow-nouns-sm ${
              shelfTab === tab
                ? "bg-nouns-blue text-white translate-y-1 shadow-none"
                : "bg-white dark:bg-zinc-800 hover:bg-nouns-blue/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {shelfTab === TABS.BOOKS && (
        <div>
          <div className="flex gap-4 mb-12">
            <div className="relative flex-1">
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
            <button className="px-8 font-heading text-xl rounded-2xl border-4 border-charcoal bg-nouns-red text-white shadow-nouns-sm whitespace-nowrap">
              ALL
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {filteredBooks.map((book) => (
              <BookFlipCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}

      {shelfTab === TABS.ESSAYS && (
        <div className="max-w-3xl space-y-10">
          {EXTERNAL_ESSAYS.map((essay, idx) => (
            <a
              key={idx}
              href={essay.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-8 p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border-4 border-charcoal shadow-nouns hover:translate-x-2 transition-transform"
            >
              <div className="p-4 rounded-2xl border-4 border-charcoal shadow-nouns-sm h-fit bg-nouns-blue">
                <FileText size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-heading text-2xl group-hover:text-nouns-red transition-colors mb-2">
                  {essay.title}
                </h4>
                <p className="font-mono text-sm font-bold text-nouns-blue uppercase tracking-tighter">
                  — {essay.author}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}

      {shelfTab === TABS.PODCASTS && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PODCASTS.map((podcast) => (
            <a
              key={podcast.id}
              href={podcast.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className="aspect-square mb-4 rounded-2xl border-4 border-charcoal shadow-nouns overflow-hidden group-hover:shadow-nouns-lg transition-all bg-nouns-green flex items-center justify-center">
                <Radio size={48} className="text-white" />
              </div>
              <h4 className="font-heading text-lg line-clamp-2 group-hover:text-nouns-red transition-colors">
                {podcast.name}
              </h4>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShelfPage;
