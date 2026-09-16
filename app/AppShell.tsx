"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-nouns-beige dark:bg-charcoal text-charcoal dark:text-cream selection:bg-nouns-red selection:text-white transition-colors duration-300">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24 min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default AppShell;
