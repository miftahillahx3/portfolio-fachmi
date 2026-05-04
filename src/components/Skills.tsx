export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React / TypeScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "REST API Design", level: 92 },
        { name: "Authentication", level: 88 },
      ],
    },
    {
      title: "Database & DevOps",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL / MySQL", level: 88 },
        { name: "Docker", level: 80 },
        { name: "Git & CI/CD", level: 85 },
      ],
    },
  ];

return (
    <>
        {/* Skills */}
        <section id="skills" className="relative bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl"></div>
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                    Skills
                </p>

                <h2 className="text-4xl font-black text-slate-900">
                    Technologies & Expertise
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                    Kumpulan teknologi dan kemampuan engineering yang saya gunakan untuk
                    membangun aplikasi web modern, sistem terintegrasi, dan workflow digital.
                </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition group-hover:scale-110">
                                {group.icon}
                            </div>

                            <h3 className="text-xl font-black text-slate-900">
                                {group.title}
                            </h3>
                        </div>

                        <div className="space-y-5">
                            {group.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="mb-2 flex items-center justify-between text-sm">
                                        <span className="font-semibold text-slate-700">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs font-bold text-blue-600">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-400 transition-all duration-700 group-hover:brightness-110"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    </>
);
}