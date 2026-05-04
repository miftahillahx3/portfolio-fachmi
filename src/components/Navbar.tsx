import { useEffect, useLayoutEffect, useRef, useState } from "react";

type NavbarProps = {
    activeSection: string;
    scrolled: boolean;
};

const menus = ["about", "skills", "projects", "contact"];

export default function Navbar({ activeSection, scrolled }: NavbarProps) {
    const [open, setOpen] = useState(false);
    const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });
    const [pressedItem, setPressedItem] = useState<string | null>(null);
    const desktopMenuRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

    useLayoutEffect(() => {
        const container = desktopMenuRef.current;
        const activeItem = itemRefs.current[activeSection];

        if (!container || !activeItem) return;

        const containerRect = container.getBoundingClientRect();
        const activeRect = activeItem.getBoundingClientRect();

        setIndicator({
            left: activeRect.left - containerRect.left,
            width: activeRect.width,
            ready: true,
        });
    }, [activeSection]);

    useEffect(() => {
        const handleResize = () => {
            const container = desktopMenuRef.current;
            const activeItem = itemRefs.current[activeSection];

            if (!container || !activeItem) return;

            const containerRect = container.getBoundingClientRect();
            const activeRect = activeItem.getBoundingClientRect();

            setIndicator({
                left: activeRect.left - containerRect.left,
                width: activeRect.width,
                ready: true,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activeSection]);

    const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, item: string) => {
        event.preventDefault();

        const target = document.getElementById(item);

        if (!target) return;

        setPressedItem(item);
        setActiveAfterDelay(item);
        setOpen(false);

        const navbarHeight = 92;
        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    const setActiveAfterDelay = (item: string) => {
        window.setTimeout(() => {
            setPressedItem((current) => (current === item ? null : current));
        }, 420);
    };

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

                <div
                    ref={desktopMenuRef}
                    className="relative hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 p-2 text-sm font-semibold shadow-sm md:flex"
                >
                    <span
                        className={`pointer-events-none absolute inset-y-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-200/70 transition-all duration-500 ease-out ${indicator.ready ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            left: `${indicator.left}px`,
                            width: `${indicator.width}px`,
                        }}
                    />

                    {menus.map((item) => {
                        const isActive = activeSection === item;
                        const isPressed = pressedItem === item;

                        return (
                            <a
                                key={item}
                                ref={(element) => {
                                    itemRefs.current[item] = element;
                                }}
                                href={`#${item}`}
                                onClick={(event) => handleNavigate(event, item)}
                                className={`relative z-10 rounded-full px-5 py-2.5 transition-all duration-300 ${isActive
                                        ? "text-white"
                                        : "text-slate-500 hover:text-blue-600"
                                    } ${isPressed ? "scale-95" : "scale-100"}`}
                            >
                                <span className="relative">
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </span>
                            </a>
                        );
                    })}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-transform duration-300 hover:scale-105 md:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? "x" : "="}
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="space-y-2 px-5 py-4">
                    {menus.map((item, index) => {
                        const isActive = activeSection === item;
                        const isPressed = pressedItem === item;

                        return (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={(event) => handleNavigate(event, item)}
                                className={`block rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-300 ${isActive
                                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200/70"
                                        : "text-slate-600 hover:bg-slate-50"
                                    } ${isPressed ? "scale-[0.98]" : "scale-100"}`}
                                style={{ transitionDelay: `${index * 40}ms` }}
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
