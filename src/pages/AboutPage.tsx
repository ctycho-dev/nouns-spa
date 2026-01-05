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

        <section className="space-y-16">
          <div>
            <h2 className="font-heading text-4xl text-nouns-red mb-8 tracking-wide">
              // NOW //
            </h2>
            <div className="space-y-6 text-xl font-mono leading-relaxed">
              <p className="flex gap-4 items-start">
                <span className="text-nouns-blue shrink-0">⌐◨-◨</span>
                <span>
                  Building{" "}
                  <span className="text-nouns-blue font-bold">AthenaX</span>:
                  AI-powered governance infrastructure.
                </span>
              </p>
              <p className="flex gap-4 items-start">
                <span className="text-nouns-green">⌐◨-◨</span>
                <span>Active NounsDAO contributor & Noun 450 holder.</span>
              </p>
              <p className="flex gap-4 items-start">
                <span className="text-nouns-orange">⌐◨-◨</span>
                <span>
                  Shipping <span className="italic">Governoun</span> on
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
              Governance Lead at a top-tier L2 scaling solution. Independent
              security researcher specializing in smart contract logic. Early
              contributor to modular blockchain infrastructure.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-4xl text-nouns-orange mb-8 tracking-wide">
              // LORE //
            </h2>
            <div className="font-mono text-lg space-y-4 italic opacity-70">
              <p>
                Once accidentally burnt a Noun (worth 80 ETH at the time). Spoke
                at ETHDenver while dressed as a literal coffee bean. Passionate
                about high-fantasy literature.
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
