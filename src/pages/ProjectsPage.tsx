import { useState } from "react";
import { Noggles } from "../assets/Icons";
import PROJECTS from "../data/projects";

const ProjectsPage = () => {
  const [projectFilter, setProjectFilter] = useState("ALL");

  const filteredProjects = PROJECTS.filter(
    (p) => projectFilter === "ALL" || p.category === projectFilter
  );

  return (
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
  );
};

export default ProjectsPage;
