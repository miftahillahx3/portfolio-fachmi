import ProjectCard from "./ProjectCard";
import useSectionReveal from "../hooks/useSectionReveal";

type ProjectsProps = {
    active: boolean;
};

export default function Projects({ active }: ProjectsProps) {
    const { ref, visible } = useSectionReveal<HTMLDivElement>();
    const projects = [
        {
            title: "SIRENE Jabar",
            description:
                "Neonatal Referral & Evaluation Information System (SIRENE Jabar), an integrated neonatal screening information system used across healthcare facilities in West Java, featuring real-time data processing and direct integration with laboratory devices to automate result reporting and improve accuracy.",
            tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API", "PostgreSQL", "Websocket", "CI/CD"],
            link: "https://sirene.labkesjabar.com/",
        },
        {
            title: "LIS Real-time Patient Dashboard",
            description:
                "Dashboard display informasi layanan laboratorium secara real-time, menampilkan data pasien, daftar pemeriksaan, biaya, QR survei, tarif, dan hotline.",
            tech: ["Dashboard", "Real-time Data", "QR Integration", "Responsive UI"],
            link: "https://displayinfo.labkesjabar.com/?draft_key=1",
        },
        {
            title: "SIMPEG Labkes Jabar",
            description:
                "Sistem informasi manajemen kepegawaian untuk mengelola data pegawai, pendidikan, pekerjaan, sertifikasi, dan administrasi SDM secara digital.",
            tech: ["Web App", "Database", "Authentication", "Employee Management"],
            link: "https://simpeglabkes-jabar.com/",
        },
    ];


    return (
        <section id="projects" className="section-shell relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24">
            <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl"></div>
            <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl"></div>

            <div
                ref={ref}
                className={`section-focus reveal-block relative mx-auto max-w-6xl px-6 ${visible ? "is-visible" : ""} ${active ? "is-current" : ""}`}
            >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                            Projects
                        </p>

                        <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
                            Featured Systems
                        </h2>

                        <p className="mt-5 leading-7 text-slate-600">
                            Beberapa sistem yang saya kembangkan untuk mendukung digitalisasi
                            layanan kesehatan, operasional laboratorium, dan administrasi publik.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
                        <span className="font-black text-slate-900">3+</span> production
                        systems developed
                    </div>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`reveal-card ${visible ? "is-visible" : ""}`}
                            style={{ transitionDelay: `${index * 140}ms` }}
                        >
                            <ProjectCard index={index + 1} {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
