import ProjectCard from "./ProjectCard";
import useSectionReveal from "../hooks/useSectionReveal";
import { projects } from "../data/projects";

type ProjectsProps = {
  active: boolean;
};

export default function Projects({ active }: ProjectsProps) {
  const { ref, visible } = useSectionReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-shell relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

      <div
        ref={ref}
        className={`section-focus reveal-block relative mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""} ${
          active ? "is-current" : ""
        }`}
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Projects
            </p>

            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
              Featured Systems
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base">
              Selected systems I built to support healthcare digitization, laboratory operations, and internal public-sector administration.
            </p>
          </div>

          <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600 sm:w-auto">
            <span className="font-black text-slate-900">3+</span> production systems developed
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal-card ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
