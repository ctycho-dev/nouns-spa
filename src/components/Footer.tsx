import { IconBrandDiscord, IconBrandX } from "@tabler/icons-react";
import { Noggles } from "../assets/Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-16 border-t-4 border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-10">
      <Link to="/" className="flex items-center gap-3 font-heading text-2xl">
        <Noggles className="w-12 text-nouns-red" />
        internoun.wtf
      </Link>
      <div className="flex items-center gap-8">
        <a
          href="https://x.com"
          className="p-3 bg-white border-2 border-charcoal rounded-xl shadow-nouns-sm hover:bg-nouns-blue/10 transition-colors text-nouns-blue"
        >
          <IconBrandX />
        </a>
        <a
          href="https://discord.gg"
          className="p-3 bg-white border-2 border-charcoal rounded-xl shadow-nouns-sm hover:bg-nouns-red/10 transition-colors text-charcoal"
        >
          <IconBrandDiscord />
        </a>
      </div>
      <div className="font-mono text-[10px] font-bold opacity-30 uppercase tracking-widest">
        CC0 — No Rights Reserved — {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
