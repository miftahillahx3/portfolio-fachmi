import sireneImage from "../assets/projects/sirene.png";
import displayLisImage from "../assets/projects/displaylis.png";
import simpegImage from "../assets/projects/simpeg.png";

export const projects = [
  {
    title: "SIRENE Jabar",
    category: "Healthcare Platform",
    description:
      "An integrated neonatal screening platform used across healthcare facilities in West Java, combining real-time processing and direct laboratory device connectivity for faster, more reliable reporting.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST API",
      "PostgreSQL",
      "Websocket",
      "Role-based Access Control",
    ],
    link: "https://sirene.labkesjabar.com/",
    image: sireneImage,
  },
  {
    title: "Real-time Patient Dashboard",
    category: "LIS Dashboard",
    description:
      "A live operations dashboard for a Laboratory Information System, designed to surface patient queues and examination registrations in real time for lab teams.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Node.js",
      "PostgreSQL",
      "Server-sent Events",
      "Geolocation",
    ],
    link: "https://displayinfo.labkesjabar.com/?draft_key=1",
    image: displayLisImage,
  },
  {
    title: "SIMPEG Labkes Jabar",
    category: "HR Information System",
    description:
      "A web-based employee management system for Labkes Jabar that centralizes personnel records, education history, certifications, and internal administrative workflows.",
    tech: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Authentication System",
      "Role-based Access Control",
    ],
    link: "https://simpeg.labkesjabar.com/",
    image: simpegImage,
  },
];
