import useSectionReveal from "../hooks/useSectionReveal";

type SkillsProps = {
  active: boolean;
};

export default function Skills({ active }: SkillsProps) {
  const { ref, visible } = useSectionReveal<HTMLDivElement>();
  const skillGroups = [
    {
      title: "Frontend",
      icon: "UI",
      skills: [
        { name: "React / TypeScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: "API",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "REST API Design", level: 92 },
        { name: "Authentication", level: 88 },
      ],
    },
    {
      title: "Database & DevOps",
      icon: "DB",
      skills: [
        { name: "PostgreSQL / MySQL", level: 88 },
        { name: "Docker", level: 80 },
        { name: "Git & CI/CD", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-shell relative bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div
        ref={ref}
        className={`section-focus reveal-block relative mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""} ${
          active ? "is-current" : ""
        }`}
      >
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Skills
          </p>

          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
            Technologies & Expertise
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            A focused set of technologies and engineering capabilities I use to build modern web applications, integrated systems, and digital workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`reveal-card group rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl sm:p-6 ${
                visible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-sm font-black text-blue-600 transition group-hover:scale-110 sm:h-12 sm:w-12">
                  {group.icon}
                </div>

                <h3 className="text-lg font-black text-slate-900 sm:text-xl">
                  {group.title}
                </h3>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-xs font-bold text-blue-600">{skill.level}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-400 transition-all duration-700 group-hover:brightness-110"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
