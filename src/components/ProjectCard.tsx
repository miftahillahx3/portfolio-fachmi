type ProjectCardProps = {
  index: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({
  index,
  title,
  description,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-100"></div>

      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-2xl bg-slate-950 px-4 py-2 text-xs font-black text-white">
            0{index}
          </span>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
            Web System
          </span>
        </div>

        <h3 className="text-2xl font-black leading-tight text-slate-900 transition group-hover:text-blue-600">
          {title}
        </h3>

        <p className="mt-4 min-h-[120px] text-sm leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-blue-600 transition group-hover:bg-blue-50"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-black text-blue-600 transition-all duration-300 group-hover:translate-x-1 hover:text-blue-800"
        >
          View Project
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}