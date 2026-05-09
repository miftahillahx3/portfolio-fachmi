import { useEffect, useState } from "react";
import profile from "../assets/profile-optimized.png";

export default function Hero() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`;

  useEffect(() => {
    if (!isCvOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCvOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCvOpen]);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -right-32 top-20 h-64 w-64 rounded-full bg-blue-200/60 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -left-32 bottom-10 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-8 sm:px-6 sm:py-11 md:min-h-[calc(100vh-240px)] md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] md:gap-10 md:pt-12">
          <div className="slide-up">
            <h2 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Fullstack Engineer.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Building modern information systems, API integrations, and scalable web applications focused on real operational impact.
            </p>

            <div className="mt-6 grid gap-3 sm:mt-7 sm:flex sm:flex-row sm:flex-wrap sm:gap-4 md:grid-cols-[repeat(3,max-content)]">
              <a
                href="#projects"
                className="rounded-2xl bg-blue-600 px-4 py-3.5 text-center text-sm font-bold text-white shadow-[0_16px_35px_rgba(59,130,246,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_22px_40px_rgba(37,99,235,0.32)] active:scale-95 sm:px-7 sm:py-4"
              >
                Explore Projects
              </a>

              <button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className="rounded-2xl border border-slate-300 bg-white/80 px-4 py-3.5 text-center text-sm font-bold text-slate-900 shadow-[0_14px_32px_rgba(148,163,184,0.22)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 hover:shadow-[0_18px_34px_rgba(251,191,36,0.22)] active:scale-95 sm:px-7 sm:py-4"
              >
                View CV
              </button>

              <a
                href="#contact"
                className="rounded-2xl border border-slate-950 bg-slate-950 px-4 py-3.5 text-center text-sm font-bold text-white shadow-[0_16px_32px_rgba(15,23,42,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-950 hover:shadow-[0_20px_36px_rgba(74,222,128,0.28)] active:scale-95 sm:px-7 sm:py-4"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mt-1 flex justify-center md:mt-0 md:justify-end">
            <div className="absolute top-10 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl sm:h-80 sm:w-80" />
            <div className="absolute bottom-0 right-10 h-52 w-52 rounded-full bg-cyan-300/30 blur-3xl sm:h-64 sm:w-64" />

            <div className="relative w-full max-w-[20rem] sm:max-w-[22rem] md:w-[22rem] md:max-w-[22rem]">
              <div className="float relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4 shadow-2xl shadow-blue-200/60">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10" />
                <div className="absolute -left-20 bottom-10 h-40 w-40 rounded-full bg-cyan-400/10" />

                <div className="absolute right-3 top-4 z-20 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-slate-950/95 px-3 py-2 text-[10px] font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] ring-1 ring-white/10 sm:right-1 sm:top-5 sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
                  <span className="inline-flex h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.85)] sm:h-3.5 sm:w-3.5" />
                  <p className="leading-none italic">Open for remote &amp; opportunities</p>
                </div>

                <div className="relative z-10 h-[340px] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-blue-100 to-white sm:h-[390px]">
                  <img
                    src={profile}
                    alt="Fachmi Miftahillah"
                    className="h-full w-full object-[center_20%] object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-0 h-10 w-40 rounded-full bg-black/10 blur-xl" />
              </div>

              <div className="absolute -bottom-3 left-1/2 z-20 w-[88%] -translate-x-1/2 rounded-2xl border border-slate-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:-bottom-5 sm:w-[85%] sm:px-5 sm:py-4">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
                  Focus Area
                </p>
                <p className="mt-1 text-xs font-black leading-6 text-slate-900 sm:text-sm">
                  React, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL and API Integration
                </p>
              </div>

              <div className="absolute -left-8 top-20 z-20 hidden rounded-2xl bg-white px-4 py-3 shadow-xl md:block">
                <p className="text-2xl font-black text-blue-600">3+</p>
                <p className="text-xs font-bold text-slate-500">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isCvOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-3 py-4 backdrop-blur-sm sm:px-6">
          <div className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/50 bg-white shadow-2xl shadow-slate-950/20">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-6 sm:py-4">
              <div>
                <p className="text-sm font-black text-slate-950 sm:text-base">Curriculum Vitae</p>
                {/* <p className="text-xs text-slate-500 sm:text-sm">Viewer mengambil file dari `public/cv.pdf`.</p> */}
              </div>
              <button
                type="button"
                onClick={() => setIsCvOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-lg font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950"
                aria-label="Close CV viewer"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 bg-slate-100 p-2 sm:p-4">
              <iframe
                src={`${cvUrl}#view=FitH`}
                title="CV PDF Viewer"
                className="h-full w-full rounded-2xl border border-slate-200 bg-white"
              />
            </div>

            {/* <div className="border-t border-slate-200 px-4 py-3 sm:px-6 sm:py-4">
              <p className="text-xs text-slate-500 sm:text-sm">
                Kalau PDF belum muncul, tambahkan file CV ke `public/cv.pdf`.
              </p>
            </div> */}
          </div>
        </div>
      ) : null}
    </>
  );
}
