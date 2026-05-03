import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/#about", label: "About" },
  { to: "/#work", label: "What I Do" },
  { to: "/#speaking", label: "Speaking" },
  { to: "/#timeline", label: "Career" },
  { to: "/videos", label: "Videos" },
  { to: "/articles", label: "Articles" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "glass-nav" : ""}`}
      data-testid="site-header"
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="flex items-baseline gap-2 font-display text-xl tracking-tight"
          data-testid="logo-link"
        >
          <span className="text-white">Prashant</span>
          <span className="text-[color:var(--accent)]">.</span>
          <span className="text-[color:var(--text-2)] text-sm font-mono ml-2 hidden md:inline">
            dutyee
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.to.startsWith("/#") ? (
              <a
                key={l.to}
                href={l.to}
                className="text-sm text-[color:var(--text-2)] hover:text-white transition-colors"
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? "text-white" : "text-[color:var(--text-2)] hover:text-white"}`
                }
                data-testid={`nav-${l.label.toLowerCase()}`}
              >
                {l.label}
              </NavLink>
            ),
          )}
          <a
            href="/#contact"
            className="btn-primary text-sm"
            data-testid="nav-contact-cta"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--bg)]"
          data-testid="mobile-menu"
        >
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-[color:var(--text-1)] py-2 border-b border-[color:var(--border)]"
                data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center mt-2"
              data-testid="mobile-nav-contact-cta"
            >
              Let's Talk <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
