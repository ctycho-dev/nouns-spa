import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Noggles } from "../assets/Icons";

const NavItems = [
  { to: "/", name: "ABOUT" },
  { to: "/projects", name: "PROJECTS" },
  { to: "/shelf", name: "SHELF" },
  { to: "/writing", name: "WRITING" },
];

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const NavBar = ({ darkMode, setDarkMode }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItem = ({ to, name }: { to: string; name: string }) => (
    <NavLink
      to={to}
      onClick={() => {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
      }}
      className={({ isActive }) =>
        `font-mono text-sm tracking-widest uppercase transition-all flex items-center gap-2 group ${
          isActive ? "text-nouns-red" : "text-charcoal dark:text-cream/60"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`h-1 w-1 bg-nouns-red rounded-full transition-all ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          />
          {name}
        </>
      )}
    </NavLink>
  );

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-charcoal/80 backdrop-blur-md border-b-4 border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <NavLink
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Home"
            >
              <Noggles className="w-10 text-nouns-red group-hover:rotate-3 transition-transform" />
              <span className="font-heading text-3xl tracking-tight hidden sm:block">
                internoun<span className="text-nouns-red">.wtf</span>
              </span>
            </NavLink>
            <div className="hidden md:flex items-center gap-8">
              {NavItems.map((item) => (
                <NavItem key={item.to} to={item.to} name={item.name} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-white dark:bg-zinc-800 border-2 border-charcoal rounded-xl shadow-nouns-sm active:translate-y-1 active:shadow-none transition-all"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
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
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-nouns-beige dark:bg-charcoal pt-32 px-10 flex flex-col gap-8 md:hidden">
          {NavItems.map((item) => (
            <NavItem key={item.to} to={item.to} name={item.name} />
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
