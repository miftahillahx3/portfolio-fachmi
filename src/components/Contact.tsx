export default function Contact() {
    return (
        <>
            {/* Contact */}
            <section id="contact" className="relative overflow-hidden bg-slate-950 py-24 text-white">
                <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
                <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl"></div>

                <div className="relative mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 md:grid-cols-2 md:items-center">
                        {/* Left */}
                        <div>
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                                Contact
                            </p>

                            <h2 className="text-4xl font-black md:text-5xl">
                                Let’s build something impactful.
                            </h2>

                            <p className="mt-6 max-w-xl leading-8 text-slate-300">
                                Terbuka untuk kolaborasi, pengembangan sistem informasi, integrasi
                                aplikasi, dan peluang karier di bidang software engineering.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
                            <h3 className="text-2xl font-black">Get in touch</h3>

                            <div className="mt-6 space-y-4">
                                <a
                                    href="mailto:fachmimiftahillah11@gmail.com"
                                    className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
                                >
                                    <span className="font-bold">Email</span>
                                    <span className="text-sm text-slate-600">fachmimiftahillah11@gmail.com</span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800"
                                >
                                    <span className="font-bold">LinkedIn</span>
                                    <span className="text-sm text-slate-300">View Profile →</span>
                                </a>

                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800"
                                >
                                    <span className="font-bold">GitHub</span>
                                    <span className="text-sm text-slate-300">View Repository →</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}