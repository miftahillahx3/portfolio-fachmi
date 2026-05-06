import profile from "../assets/profile-optimized.png";

export default function Hero() {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden">
                {/* background decoration */}
                <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl"></div>
                <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-cyan-200/50 blur-3xl"></div>
                <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2">
                    {/* Left */}
                    <div className="slide-up">
                        {/* <div className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                            Fullstack Engineer
                        </div> */}
                        <h2 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                            Fullstack Engineer.
                        </h2>
                        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                            Building scalable, integrated web platforms for labs & digital services. Specialized in frontend, backend, database, and API integration.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl active:scale-95"
                            >
                                Explore Projects
                            </a>

                            <a
                                href="#contact"
                                className="rounded-2xl border border-slate-950 bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200 active:scale-95"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative flex justify-center md:justify-end">
                        {/* background glow */}
                        <div className="absolute top-10 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl"></div>
                        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl"></div>
                        <div className="relative">
                            {/* main card */}
                            <div className="float relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4 shadow-2xl shadow-blue-200/60">
                                {/* decorative circle */}
                                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10"></div>
                                <div className="absolute -left-20 bottom-10 h-40 w-40 rounded-full bg-cyan-400/10"></div>

                                {/* top badge */}
                                <div className="absolute right-1 top-5 z-20 inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] ring-1 ring-white/10">
                                    <span className="inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.85)]"></span>
                                    <p className="leading-none italic">Open for remote &amp; opportunities</p>
                                </div>

                                {/* image frame */}
                                <div className="relative z-10 h-[380px] w-[300px] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-blue-100 to-white sm:h-[420px] sm:w-[320px]">
                                    <img
                                        src={profile}
                                        alt="Fachmi Miftahillah"
                                        className="h-full w-full object-[center_20%] object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="absolute bottom-0 h-10 w-40 rounded-full bg-black/10 blur-xl"></div>
                            </div>
                            {/* floating card */}
                            <div className="absolute -bottom-7 left-1/2 z-20 w-[85%] -translate-x-1/2 rounded-2xl border border-slate-100 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
                                    Focus Area
                                </p>
                                <p className="mt-1 text-sm font-black text-slate-900">
                                    React, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL & API Integration
                                </p>
                            </div>
                            {/* small floating stats */}
                            <div className="absolute -left-8 top-20 z-20 hidden rounded-2xl bg-white px-4 py-3 shadow-xl md:block">
                                <p className="text-2xl font-black text-blue-600">3+</p>
                                <p className="text-xs font-bold text-slate-500">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
