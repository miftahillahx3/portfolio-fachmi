import { useState } from "react";

type NavbarProps = {
    activeSection: string;
    scrolled: boolean;
};

const menus = ["about", "skills", "projects", "contact"];

export default function Navbar({ activeSection, scrolled }: NavbarProps) {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className={`sticky top-0 z-50 border-b border-slate-200 transition-all duration-300 ${scrolled
                    ? "bg-white/90 shadow-md backdrop-blur-md"
                    : "bg-white/80 backdrop-blur-md"
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <a href="#" className="text-xl font-black tracking-tight text-slate-950">
                    Fachmi<span className="text-blue-600">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
                    {menus.map((item) => {
                        const isActive = activeSection === item;

                        return (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={`group relative transition ${isActive
                                        ? "font-bold text-blue-600"
                                        : "text-slate-500 hover:text-blue-600"
                                    }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}

                                <span
                                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm md:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="space-y-2 px-5 py-4">
                    {menus.map((item) => {
                        const isActive = activeSection === item;

                        return (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={() => setOpen(false)}
                                className={`block rounded-xl px-4 py-3 text-sm font-bold transition ${isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-slate-600 hover:bg-slate-50"
                                    }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}