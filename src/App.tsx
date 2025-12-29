import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ShelfPage from "./pages/ShelfPage";
import WritingPage from "./pages/WritingPage";
import "./App.css";

const App = () => {
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
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/shelf" element={<ShelfPage />} />
            <Route path="/writing" element={<WritingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
};

export default App;
