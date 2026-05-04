import useSectionReveal from "../hooks/useSectionReveal";

type AboutProps = {
    active: boolean;
};

export default function About({ active }: AboutProps) {
    const { ref, visible } = useSectionReveal<HTMLDivElement>();

    return (
        <section id="about" className="section-shell relative overflow-hidden bg-slate-50/80 py-24">
            {/* background blur */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/60 blur-3xl"></div>
            <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl"></div>

            <div
                ref={ref}
                className={`section-focus reveal-block mx-auto max-w-6xl px-6 ${visible ? "is-visible" : ""} ${active ? "is-current" : ""}`}
            >
                <div className="grid gap-14 md:grid-cols-2 md:items-center">
                    {/* LEFT */}
                    <div>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                            About Me
                        </p>

                        <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                            Building systems that solve real-world problems.
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            Saya adalah Fullstack Engineer yang berfokus pada pengembangan
                            sistem informasi terintegrasi, khususnya untuk layanan kesehatan
                            dan administrasi publik.
                        </p>

                        <p className="mt-4 leading-8 text-slate-600">
                            Saya terbiasa membangun aplikasi end-to-end, termasuk dashboard,
                            manajemen data, REST API, database, dan integrasi sistem eksternal.
                        </p>

                        {/* highlight badge */}
                        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                            🚀 3+ Production Systems Built
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="group rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <h3 className="text-lg font-black text-slate-900">
                                What I Do
                            </h3>

                            <ul className="mt-6 space-y-4 text-sm text-slate-600">
                                {[
                                    "Web Application Development",
                                    "Backend & API Development",
                                    "Database Design & Optimization",
                                    "System Integration (Lab & External API)",
                                    "Dashboard & Real-time Systems",
                                ].map((item, index) => (
                                    <li
                                        key={item}
                                        className={`flex items-center gap-3 transition-all duration-700 ${visible
                                                ? "translate-x-0 opacity-100"
                                                : "translate-x-6 opacity-0"
                                            }`}
                                        style={{ transitionDelay: `${index * 120}ms` }}
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* floating accent */}
                        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue-100 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
