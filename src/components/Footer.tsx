import { IconBrandDiscord, IconBrandX } from "@tabler/icons-react";
import { Noggles } from "../assets/Icons";
import { Link } from "react-router-dom";

const SocialLink = {
  x: "https://x.com/Internoun",
  discord: "https://discord.com/users/1146519299628998726 ",
};

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-16 border-t-4 border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-10">
      <Link to="/" className="flex items-center gap-3 font-heading text-2xl">
        <Noggles className="w-12 text-nouns-red" />
        internoun.wtf
      </Link>
      <div className="flex items-center gap-8">
        <a
          href={SocialLink.x}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white dark:bg-zinc-800 border-2 border-charcoal dark:border-zinc-800 rounded-xl shadow-nouns-sm active:translate-y-1 active:shadow-none transition-all text-nouns-blue dark:text-white"
          aria-label="Follow on X (Twitter)"
        >
          <IconBrandX />
        </a>
        <a
          href={SocialLink.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white dark:bg-zinc-800 border-2 border-charcoal dark:border-zinc-800 rounded-xl shadow-nouns-sm active:translate-y-1 active:shadow-none transition-all text-charcoal dark:text-cream"
          aria-label="Connect on Discord"
        >
          <IconBrandDiscord />
        </a>
      </div>
      <div className="font-mono text-[10px] font-bold opacity-30 uppercase tracking-widest">
        CC0 — No Rights Reserved — 2020
      </div>
    </footer>
  );
};

export default Footer;
