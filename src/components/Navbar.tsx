import { useEffect, useLayoutEffect, useRef, useState } from "react";

type NavbarProps = {
  activeSection: string;
  scrolled: boolean;
};

const menus = ["about", "skills", "projects", "contact"];
const menuLabels: Record<string, string> = {
  about: "About",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact Me",
};

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
    setOpen(false);

    window.setTimeout(() => {
      setPressedItem((current) => (current === item ? null : current));
    }, 420);

    const navbarHeight = 82;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-slate-200 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3">
        <a href="#" className="text-lg font-black tracking-tight text-slate-950 sm:text-xl">
          Fachmi<span className="text-blue-600">.</span>
        </a>

        <div
          ref={desktopMenuRef}
          className="relative hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 p-2 text-sm font-semibold shadow-sm md:flex"
        >
          <span
            className={`pointer-events-none absolute inset-y-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-200/70 transition-all duration-500 ease-out ${
              indicator.ready ? "opacity-100" : "opacity-0"
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
                className={`relative z-10 rounded-full px-5 py-2.5 transition-all duration-300 ${
                  isActive ? "text-white" : "text-slate-500 hover:text-blue-600"
                } ${isPressed ? "scale-95" : "scale-100"}`}
              >
                <span className="relative">{menuLabels[item] ?? item}</span>
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-900 shadow-sm transition-transform duration-300 hover:scale-105 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2 px-4 py-4 sm:px-5">
          {menus.map((item, index) => {
            const isActive = activeSection === item;
            const isPressed = pressedItem === item;

            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(event) => handleNavigate(event, item)}
                className={`block rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200/70"
                    : "text-slate-600 hover:bg-slate-50"
                } ${isPressed ? "scale-[0.98]" : "scale-100"}`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {menuLabels[item] ?? item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
