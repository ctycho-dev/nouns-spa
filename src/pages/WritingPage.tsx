import { WRITING } from "../data";

const WritingPage = () => {
  return (
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
  );
};

export default WritingPage;
