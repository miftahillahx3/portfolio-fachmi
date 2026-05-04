import useSectionReveal from "../hooks/useSectionReveal";

type ContactProps = {
    active: boolean;
};

export default function Contact({ active }: ContactProps) {
    const { ref, visible } = useSectionReveal<HTMLDivElement>();

    return (
        <>
            <section
                id="contact"
                className="section-shell relative overflow-hidden bg-slate-950 py-20 text-white md:py-24"
            >
                <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
                <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl"></div>

                <div
                    ref={ref}
                    className={`section-focus reveal-block relative mx-auto max-w-6xl px-5 sm:px-6 ${visible ? "is-visible" : ""} ${active ? "is-current" : ""}`}
                >
                    <div className="grid gap-10 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                                Contact
                            </p>

                            <h2 className="max-w-[10ch] text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                                Let&apos;s build something impactful.
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                                Terbuka untuk kolaborasi, pengembangan sistem informasi, integrasi
                                aplikasi, dan peluang karier di bidang software engineering.
                            </p>
                        </div>

                        <div
                            className={`reveal-card rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur sm:p-8 ${visible ? "is-visible" : ""}`}
                            style={{ transitionDelay: "140ms" }}
                        >
                            <h3 className="text-2xl font-black">Get in touch</h3>

                            <div className="mt-6 space-y-4">
                                <a
                                    href="mailto:fachmimiftahillah11@gmail.com"
                                    className="flex flex-col items-start gap-2 rounded-2xl bg-white px-5 py-4 text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <span className="font-bold">Email</span>
                                    <span className="max-w-full break-all text-sm text-slate-600 sm:text-right">
                                        fachmimiftahillah11@gmail.com
                                    </span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800"
                                >
                                    <span className="font-bold">LinkedIn</span>
                                    <span className="shrink-0 text-sm text-slate-300">View Profile -&gt;</span>
                                </a>

                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800"
                                >
                                    <span className="font-bold">GitHub</span>
                                    <span className="shrink-0 text-sm text-slate-300">View Repository -&gt;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
