import React from "react";

type ProjectCardProps = {
  title: string;
  category?: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
};

function TechChip({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    React: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="1.9" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#111827" />
        <path d="M8 8v8l8-8v8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
        <path d="M7 8h8M11 8v8M15.5 10.5c.3-.6.9-1 1.7-1 1 0 1.8.6 1.8 1.5 0 2-3.5 1.2-3.5 3.3 0 1 .8 1.7 2.1 1.7 1 0 1.8-.4 2.4-1.1" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M7 9.5c1.3-1.8 2.7-2.5 4.2-2.2 1 .2 1.7.8 2.4 1.5.7.7 1.4 1.3 2.4 1.5 1.5.3 2.9-.4 4.2-2.2-1.3 1.8-2.7 2.5-4.2 2.2-1-.2-1.7-.8-2.4-1.5-.7-.7-1.4-1.3-2.4-1.5C9.7 7 8.3 7.7 7 9.5Zm-3 6c1.3-1.8 2.7-2.5 4.2-2.2 1 .2 1.7.8 2.4 1.5.7.7 1.4 1.3 2.4 1.5 1.5.3 2.9-.4 4.2-2.2-1.3 1.8-2.7 2.5-4.2 2.2-1-.2-1.7-.8-2.4-1.5-.7-.7-1.4-1.3-2.4-1.5-1.5-.3-2.9.4-4.2 2.2Z" fill="#06B6D4" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <ellipse cx="12" cy="6.5" rx="6.5" ry="3.5" fill="#336791" />
        <path d="M5.5 6.5v8c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5v-8" stroke="#336791" strokeWidth="1.5" />
        <path d="M5.5 10.5c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5" stroke="#336791" strokeWidth="1.5" />
      </svg>
    ),
    PHP: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <ellipse cx="12" cy="12" rx="8.5" ry="5.5" fill="#777BB4" />
        <path d="M8 12h2.2M10.2 12c.9 0 1.5-.5 1.5-1.3S11.1 9.4 10.2 9.4H8V14.6M13.1 9.4v5.2M13.1 12h2.2M15.3 12c.9 0 1.5-.5 1.5-1.3s-.6-1.3-1.5-1.3h-2.2V14.6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    MySQL: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M6 15c2-5.2 8.7-7.8 12-3.5-2.2 0-3.8 1.4-4 3.4-.1 1.6-1.4 2.8-3 2.8H8.5c-1.2 0-2.2-1.1-2.5-2.7Z" fill="#00758F" />
        <circle cx="15.2" cy="10.6" r="0.8" fill="#fff" />
      </svg>
    ),
    "REST API": (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M8 8h8M8 12h8M8 16h5" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="4" y="5" width="16" height="14" rx="3" stroke="#10B981" strokeWidth="1.5" />
      </svg>
    ),
    Websocket: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M5 12a7 7 0 0 1 14 0M8 12a4 4 0 0 1 8 0M12 12v7" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="19" r="1.5" fill="#7C3AED" />
      </svg>
    ),
    "Server-sent Events": (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M6 8h12M6 12h8M6 16h10" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18" cy="12" r="2" fill="#0EA5E9" />
      </svg>
    ),
    Geolocation: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z" fill="#F97316" />
        <circle cx="12" cy="11" r="2.2" fill="#fff" />
      </svg>
    ),
    "Role-based Access Control": (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M12 3 5 6v5c0 4.2 2.8 8.1 7 10 4.2-1.9 7-5.8 7-10V6l-7-3Z" fill="#1D4ED8" />
        <path d="M9.7 12.2 11.4 14l3.2-3.7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "Authentication System": (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect x="6" y="11" width="12" height="9" rx="2" fill="#334155" />
        <path d="M8.5 11V8.8A3.5 3.5 0 0 1 12 5.3a3.5 3.5 0 0 1 3.5 3.5V11" stroke="#334155" strokeWidth="1.5" />
        <circle cx="12" cy="15.5" r="1.3" fill="#fff" />
      </svg>
    ),
    CodeIgniter: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M14.8 4c1.1 2.2.8 4.1-.8 5.8 2.1-.2 3.8.4 5 1.9-1.3 5.5-5.4 8.6-12.2 9.3 1.5-2 2.2-3.7 2.1-5.1-1.9.6-3.4.4-4.7-.6C4.8 8.9 8.3 5.3 14.8 4Z" fill="#F97316" />
      </svg>
    ),
  };

  const icon = icons[name];
  const fallback = name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 shadow-sm">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200">
        {icon ?? <span className="text-[10px] font-black text-slate-600">{fallback}</span>}
      </span>
      <span className="leading-none">{name}</span>
    </div>
  );
}

export default function ProjectCard({
  title,
  category,
  description,
  tech,
  link,
  image,
}: ProjectCardProps) {
  const [imageError, setImageError] = React.useState(false);
  const [mobileOverlayVisible, setMobileOverlayVisible] = React.useState(false);

  const categoryMap: Record<string, string> = {
    React: "Frontend",
    "Next.js": "Frontend",
    TypeScript: "Frontend",
    "Tailwind CSS": "Frontend",
    PHP: "Backend",
    CodeIgniter: "Backend",
    MySQL: "Backend",
    PostgreSQL: "Backend",
    "Node.js": "Backend",
    "REST API": "Backend",
    "API Integration": "Backend",
    Websocket: "Features",
    Geolocation: "Features",
    "Server-sent Events": "Features",
    "Role-based Access Control": "Features",
    "Authentication System": "Features",
    "Real-time Data": "Features",
  };

  const frontend = tech.filter((item) => categoryMap[item] === "Frontend");
  const backend = tech.filter((item) => categoryMap[item] === "Backend");
  const features = tech.filter((item) => categoryMap[item] === "Features");
  const other = tech.filter((item) => !categoryMap[item]);

  function StackGroup({ title, items }: { title: string; items: string[] }) {
    if (!items.length) return null;

    return (
      <div className="space-y-2.5">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{title}</p>
        <div className="flex flex-wrap gap-2">
          {items.map((name) => (
            <TechChip key={name} name={name} />
          ))}
        </div>
      </div>
    );
  }

  function PreviewFallback() {
    return (
      <div className="relative flex h-full min-h-[260px] overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.36),_transparent_42%),linear-gradient(145deg,_#020617,_#0f172a_35%,_#1d4ed8_78%,_#67e8f9)] p-6 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="relative z-10 mt-auto max-w-[15rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/80">Preview</p>
          <h3 className="mt-2 text-2xl font-black leading-tight">{title}</h3>
        </div>
      </div>
    );
  }

  const handleMediaToggle = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setMobileOverlayVisible((current) => !current);
    }
  };

  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-transparent shadow-none">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.78fr)_minmax(380px,1.12fr)]">
        <div className="flex flex-col justify-between rounded-t-[2rem] border border-slate-200/80 bg-white/88 p-6 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7 lg:rounded-l-[2rem] lg:rounded-tr-none lg:border-r-0 lg:p-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600">Featured Project</p>
            <h3 className="mt-3 max-w-[18ch] text-[2.15rem] font-black leading-tight text-slate-950 sm:max-w-[14ch] sm:text-[2.1rem] lg:max-w-[12ch] lg:text-[2.35rem]">{title}</h3>
            {category ? (
              <span className="mt-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700">
                {category}
              </span>
            ) : null}
            <p className="mt-5 max-w-[34rem] text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p>
          </div>

          <div className="mt-6 flex items-center gap-3 lg:mt-8">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.65)]" />
            <p className="text-sm font-semibold text-slate-500">
              Tap or hover the preview to open the live demo.
            </p>
          </div>
        </div>

        <div className="rounded-b-[2rem] border border-slate-200/80 border-t-0 bg-white/82 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-5 lg:rounded-r-[2rem] lg:rounded-bl-none lg:border-l-0 lg:border-t lg:p-6">
          <div className="grid gap-4 lg:grid-rows-[minmax(300px,1fr)_auto]">
            <div
              className="group/media relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/20 shadow-[0_18px_50px_rgba(15,23,42,0.22)]"
              onClick={handleMediaToggle}
            >
              {image && !imageError ? (
                <>
                  <img
                    src={image}
                    alt={title}
                    className="h-full min-h-[240px] w-full object-cover object-top transition-transform duration-700 group-hover/media:scale-[1.04] lg:min-h-[300px]"
                    onError={() => setImageError(true)}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-white/10 opacity-80 transition duration-500 group-hover/media:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_26%)] opacity-0 transition duration-500 group-hover/media:opacity-100" />
                </>
              ) : (
                <PreviewFallback />
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <div className="max-w-[15rem] rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-white backdrop-blur-md">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200/85">Project Preview</p>
                  <p className="mt-1 text-sm font-semibold text-white/90">{title}</p>
                </div>
              </div>

              <div
                className={`absolute inset-0 flex items-center justify-center bg-slate-950/30 backdrop-blur-[2px] transition duration-300 ${
                  mobileOverlayVisible ? "opacity-100" : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-0 md:group-hover/media:opacity-100"
                }`}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Live Demo
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Tech Stack</p>
              <div className="mt-4 grid gap-4">
                <StackGroup title="Frontend" items={frontend} />
                <StackGroup title="Backend" items={backend} />
                <StackGroup title="Features" items={features.concat(other)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
