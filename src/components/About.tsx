import useSectionReveal from "../hooks/useSectionReveal";

type AboutProps = {
  active: boolean;
};

export default function About({ active }: AboutProps) {
  const { ref, visible } = useSectionReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-shell relative overflow-hidden bg-slate-50/80 py-12 sm:py-16">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl" />

      <div
        ref={ref}
        className={`section-focus reveal-block mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""} ${
          active ? "is-current" : ""
        }`}
      >
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.78fr)] md:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              About Me
            </p>
            <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Building systems that solve real-world problems.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              I am a Fullstack Engineer specializing in integrated information systems for healthcare and public services.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              I build end-to-end applications, including dashboards, data management systems, REST APIs, databases, and external system integrations.
            </p>
            {/* <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              3+ Production Systems Built
            </div> */}
          </div>

          <div className="relative md:flex md:justify-end">
            <div className="group w-full max-w-[31rem] rounded-3xl border border-slate-200/80 bg-white/85 p-5 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-6">
              <h3 className="text-lg font-black text-slate-900">What I Do</h3>
              <ul className="mt-5 space-y-3.5 text-sm text-slate-600">
                {[
                  "Web Application Development",
                  "Backend and API Development",
                  "Database Design and Optimization",
                  "System Integration for Labs and External APIs",
                  "Dashboard and Real-time Systems",
                ].map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 transition-all duration-700 ${
                      visible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 12.5 10 16l7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-blue-100 blur-2xl sm:-bottom-6 sm:-right-6 sm:h-24 sm:w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
