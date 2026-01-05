import { Noggles } from "../assets/Icons";
import { Link } from "react-router-dom";
import ARTICLES from "../data/articles";

const recentArticles = [...ARTICLES]
  .sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )
  .slice(0, 3);

const AboutPage = () => {
  return (
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

        <section className="space-y-8">
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border-4 border-charcoal shadow-nouns">
            <h2 className="font-heading text-3xl text-nouns-red mb-6 tracking-wide">
              // NOW //
            </h2>
            <div className="space-y-3 font-mono text-lg leading-relaxed">
              <p className="flex gap-4 items-start">
                <span>
                  I work on trustless narratives in production systems—currently
                  with <span className="underline text-nouns-red"> Curve</span>.
                  Verification infrastructure. Coordination that doesn't require
                  permission.
                </span>
              </p>
              <p className="flex gap-4 items-start">
                <span>
                  Shipped Governoun on Polkadot. Now building on Arbitrum.
                </span>
              </p>
              <p className="flex gap-4 items-start">
                <span>
                  Current focus areas include ENS adoption as identity
                  substrate, onboarding independent IP into Nounish ecosystems,
                  and shaping institutional language around legitimacy and
                  long-term coordination.
                </span>
              </p>
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border-4 border-charcoal shadow-nouns">
            <h2 className="font-heading text-3xl text-nouns-yellow mb-6 tracking-wide">
              // PREVIOUSLY //
            </h2>
            <p className="font-mono text-lg opacity-80 leading-relaxed mb-4">
              Licensed physician. I do not practice. The training informs how I
              approach failure analysis, uncertainty, and irreversible
              decisions.
            </p>
            <div className="space-y-2 font-mono text-lg">
              <p className="flex gap-4 items-start">
                <span className="text-nouns-orange shrink-0">⌐◨-◨</span>
                <span>CMO of an AI agent project</span>
              </p>
              <p className="flex gap-4 items-start">
                <span className="text-nouns-green shrink-0">⌐◨-◨</span>
                <span>CEO of a top-10 IP network in Web3.</span>
              </p>
              <p className="flex gap-4 items-start">
                <span className="text-nouns-blue shrink-0">⌐◨-◨</span>
                <span>Lead on a major L2</span>
              </p>
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border-4 border-charcoal shadow-nouns">
            <h2 className="font-heading text-3xl text-nouns-orange mb-6 tracking-wide">
              // CORE //
            </h2>
            <div className="font-mono text-lg opacity-80 leading-relaxed">
              <p>Present for more experiments than explanations.</p>
            </div>
          </div>
        </section>
      </div>

      <aside className="lg:col-span-4 space-y-10">
        <h3 className="font-heading text-3xl text-nouns-blue">
          Recent Writing
        </h3>
        <div className="space-y-8">
          {recentArticles.map((article) => (
            <Link
              key={article.id}
              to={`/writing/${article.id}`}
              className="group block p-6 bg-white dark:bg-zinc-900 rounded-2xl border-4 border-charcoal shadow-nouns-sm hover:translate-x-2 transition-transform"
            >
              <p className="text-[10px] font-mono font-bold text-nouns-red mb-2 uppercase tracking-tighter">
                InterNoun • {new Date(article.publishedDate).getFullYear()}
              </p>
              <h4 className="font-heading text-xl leading-tight group-hover:text-nouns-red transition-colors">
                {article.title}
              </h4>
              <p className="text-sm font-mono mt-3 opacity-60 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default AboutPage;
