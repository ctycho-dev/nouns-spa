import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Search,
  FileText,
  Menu,
  X,
  Star,
  Heart, Github, Twitter,
} from "lucide-react";
import { PROJECTS, BOOKS, WRITING, EXTERNAL_ESSAYS } from "./data";
import "./App.css";
import { Noggles } from "./assets/Icons";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("ABOUT");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shelfTab, setShelfTab] = useState("BOOKSHELF");
  const [searchQuery, setSearchQuery] = useState("");
  const [projectFilter, setProjectFilter] = useState("ALL");
  const [bookFilter, setBookFilter] = useState("ALL");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const filteredProjects = PROJECTS.filter(
    (p) => projectFilter === "ALL" || p.category === projectFilter
  );
  const filteredBooks = BOOKS.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = bookFilter === "ALL" || b.rating === bookFilter;
    return matchesSearch && matchesFilter;
  });

  const NavLink = ({ name }: { name: string }) => (
    <button
      onClick={() => {
        setCurrentPage(name);
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
      }}
      className={`font-mono text-sm tracking-widest uppercase transition-all flex items-center gap-2 group ${
        currentPage === name
          ? "text-nouns-red"
          : "text-charcoal dark:text-cream/60"
      }`}
    >
      <span
        className={`h-1 w-1 bg-nouns-red rounded-full transition-all ${
          currentPage === name
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      />
      {name}
    </button>
  );

  return (
    <div className="min-h-screen bg-nouns-beige dark:bg-charcoal text-charcoal dark:text-cream selection:bg-nouns-red selection:text-white transition-colors duration-300">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-charcoal/80 backdrop-blur-md border-b-4 border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <button
              onClick={() => setCurrentPage("ABOUT")}
              className="flex items-center gap-3 group"
            >
              <Noggles className="w-10 text-nouns-red group-hover:rotate-3 transition-transform" />
              <span className="font-heading text-3xl tracking-tight hidden sm:block">
                internoun<span className="text-nouns-red">.wtf</span>
              </span>
            </button>
            <div className="hidden md:flex items-center gap-8">
              <NavLink name="ABOUT" />
              <NavLink name="PROJECTS" />
              <NavLink name="SHELF" />
              <NavLink name="WRITING" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-white dark:bg-zinc-800 border-2 border-charcoal rounded-xl shadow-nouns-sm active:translate-y-1 active:shadow-none transition-all"
            >
              {darkMode ? (
                <Sun size={20} className="text-nouns-yellow" />
              ) : (
                <Moon size={20} className="text-nouns-blue" />
              )}
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-nouns-beige dark:bg-charcoal pt-32 px-10 flex flex-col gap-8 md:hidden">
          <NavLink name="ABOUT" />
          <NavLink name="PROJECTS" />
          <NavLink name="SHELF" />
          <NavLink name="WRITING" />
        </div>
      )}

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24 min-h-screen">
        {/* --- PAGE: ABOUT --- */}
        {currentPage === "ABOUT" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in slide-in-from-bottom-4 duration-500">
            <div className="lg:col-span-8">
              <div className="relative w-full aspect-[21/9] bg-white dark:bg-stone-900 rounded-3xl overflow-hidden mb-12 border-4 border-charcoal shadow-nouns">
                <img
                  src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?auto=format&fit=crop&q=80&w=1200"
                  alt="Portfolio Hero"
                  className="w-full h-full object-cover grayscale opacity-90"
                />
                <div className="absolute top-4 left-4 bg-nouns-red p-2 rounded-lg border-2 border-charcoal shadow-nouns-sm">
                  <Noggles className="w-8 text-white" />
                </div>
              </div>

              <section className="space-y-16">
                <div>
                  <h2 className="font-heading text-4xl text-nouns-red mb-8 tracking-wide">
                    // NOW //
                  </h2>
                  <div className="space-y-6 text-xl font-mono leading-relaxed">
                    <p className="flex gap-4 items-start">
                      <span className="text-nouns-blue">⌐◨-◨</span>
                      <span>
                        Building{" "}
                        <span className="text-nouns-blue font-bold">
                          AthenaX
                        </span>{" "}
                        — AI-powered governance infrastructure.
                      </span>
                    </p>
                    <p className="flex gap-4 items-start">
                      <span className="text-nouns-green">⌐◨-◨</span>
                      <span>
                        Active NounsDAO contributor & Noun 450 holder.
                      </span>
                    </p>
                    <p className="flex gap-4 items-start">
                      <span className="text-nouns-orange">⌐◨-◨</span>
                      <span>
                        Shipping <span className="italic">Governonu</span> on
                        Polkadot.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border-4 border-charcoal shadow-nouns">
                  <h2 className="font-heading text-3xl text-nouns-yellow mb-6 tracking-wide">
                    // PREVIOUSLY //
                  </h2>
                  <p className="font-mono text-lg opacity-80 leading-relaxed">
                    Governance Lead at a top-tier L2 scaling solution.
                    Independent security researcher specializing in smart
                    contract logic. Early contributor to modular blockchain
                    infrastructure.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-4xl text-nouns-orange mb-8 tracking-wide">
                    // LORE //
                  </h2>
                  <div className="font-mono text-lg space-y-4 italic opacity-70">
                    <p>
                      Once accidentally burnt a Noun (worth 80 ETH at the time).
                      Spoke at ETHDenver while dressed as a literal coffee bean.
                      Passionate about high-fantasy literature.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-4 space-y-10">
              <h3 className="font-heading text-3xl text-nouns-blue">
                Recent Writing
              </h3>
              <div className="space-y-8">
                {WRITING.map((post, idx) => (
                  <div
                    key={idx}
                    className="group p-6 bg-white dark:bg-zinc-900 rounded-2xl border-4 border-charcoal shadow-nouns-sm hover:translate-x-2 transition-transform"
                  >
                    <p className="text-[10px] font-mono font-bold text-nouns-red mb-2 uppercase tracking-tighter">
                      {post.platform} • {post.year}
                    </p>
                    <h4 className="font-heading text-xl leading-tight group-hover:text-nouns-red transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm font-mono mt-3 opacity-60 leading-relaxed">
                      {post.desc}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        )}

        {/* --- PAGE: PROJECTS --- */}
        {currentPage === "PROJECTS" && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h1 className="font-heading text-6xl tracking-tight mb-4">
                  Projects ⌐◨-◨
                </h1>
                <p className="font-mono text-lg opacity-60">
                  Stuff I've built, broken, or birthed into the void.
                </p>
              </div>
              <div className="flex gap-2 bg-charcoal/5 dark:bg-white/5 p-2 rounded-2xl border-2 border-charcoal">
                {["ALL", "ACTIVE", "SHIPPED"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setProjectFilter(filter)}
                    className={`px-6 py-2 rounded-xl font-heading text-xl transition-all ${
                      projectFilter === filter
                        ? "bg-nouns-red text-white shadow-nouns-sm"
                        : "hover:bg-nouns-red/10"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <a
                  href={project.link}
                  key={project.id}
                  style={{ borderColor: project.accent }}
                  className="group block p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border-4 shadow-nouns hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border-4 border-charcoal shadow-nouns-sm"
                      style={{ backgroundColor: project.accent }}
                    >
                      <Noggles className="w-8 text-white" />
                    </div>
                    <span
                      className={`text-xs font-mono font-bold uppercase px-3 py-1 rounded-full border-2 border-charcoal ${
                        project.status === "Building"
                          ? "bg-nouns-yellow text-charcoal"
                          : "bg-nouns-green text-white"
                      }`}
                    >
                      {project.status === "Active"
                        ? "🟢 "
                        : project.status === "Building"
                        ? "🟡 "
                        : "⚪ "}
                      {project.status}
                    </span>
                  </div>

                  <span
                    className={`inline-block mb-3 px-3 py-1 rounded-lg font-mono text-[10px] font-bold text-white border-2 border-charcoal shadow-nouns-sm ${
                      project.roleType === "Founder"
                        ? "bg-nouns-red"
                        : project.roleType === "Contributor"
                        ? "bg-nouns-blue"
                        : "bg-nouns-yellow text-charcoal"
                    }`}
                  >
                    {project.roleType}
                  </span>

                  <h3 className="font-heading text-3xl mb-3">{project.name}</h3>
                  <p className="font-mono text-sm opacity-70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <div className="p-4 bg-charcoal/5 dark:bg-white/5 rounded-2xl font-mono text-xs italic border-2 border-dashed border-charcoal/20">
                      "{project.highlight}"
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* --- PAGE: SHELF --- */}
        {currentPage === "SHELF" && (
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
        )}

        {/* --- PAGE: WRITING --- */}
        {currentPage === "WRITING" && (
          <div className="max-w-3xl animate-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-heading text-6xl mb-16">Writing</h1>
            <div className="space-y-12">
              {[...WRITING].reverse().map((post, idx) => (
                <article key={idx} className="group">
                  <div className="flex items-center gap-4 mb-4 font-mono text-xs font-bold text-nouns-blue uppercase tracking-widest">
                    <span>{post.year}</span>
                    <span className="w-12 h-1 bg-nouns-red rounded-full" />
                    <span>{post.platform}</span>
                  </div>
                  <h2 className="font-heading text-4xl mb-4 group-hover:text-nouns-red transition-colors cursor-pointer leading-tight">
                    {post.title}
                  </h2>
                  <p className="font-mono text-lg opacity-70 leading-relaxed mb-6">
                    {post.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-heading text-xl text-nouns-red hover:translate-x-2 transition-transform"
                  >
                    Read Article ⌐◨-◨
                  </a>
                  <div className="h-1 w-full bg-charcoal/5 dark:bg-white/5 mt-12 rounded-full" />
                </article>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* --- FOOTER --- */}
      <footer className="max-w-6xl mx-auto px-6 py-16 border-t-4 border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3 font-heading text-2xl">
          <Noggles className="w-12 text-nouns-red" />
          internoun.wtf
        </div>
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="p-3 bg-white border-2 border-charcoal rounded-xl shadow-nouns-sm hover:bg-nouns-blue/10 transition-colors text-nouns-blue"
          >
            <Twitter />
          </a>
          <a
            href="#"
            className="p-3 bg-white border-2 border-charcoal rounded-xl shadow-nouns-sm hover:bg-nouns-red/10 transition-colors text-charcoal"
          >
            <Github />
          </a>
          <a
            href="#"
            className="font-heading text-2xl hover:text-nouns-red transition-colors"
          >
            Farcaster
          </a>
        </div>
        <div className="font-mono text-[10px] font-bold opacity-30 uppercase tracking-widest">
          CC0 — No Rights Reserved — {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default App;
