"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/produits", label: "Produits" },
  { href: "/solutions", label: "Solutions" },
  { href: "/stages", label: "Stages" },
  { href: "/contact", label: "Contact" },
];

function ThemeToggle({ onDark }: { onDark: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
      style={{
        border: `1px solid ${onDark ? "rgba(255,255,255,0.25)" : "var(--border-strong)"}`,
        color: onDark ? "rgba(255,255,255,0.85)" : "var(--text-secondary)",
      }}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

function Logo({ onDark }: { onDark: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: onDark ? "#ffffff" : "var(--text-primary)" }}>
        <span className="font-mono font-bold text-[11px] tracking-tighter" style={{ color: onDark ? "#0b1220" : "var(--bg-base)" }}>EBI</span>
      </div>
      <span className="font-display font-bold text-lg tracking-tight" style={{ color: onDark ? "#ffffff" : "var(--text-primary)" }}>
        EBI<span style={{ color: onDark ? "#ffb84d" : "var(--signal-text)" }}>-IMT</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the homepage's dark cinematic hero, the navbar floats transparent with light text.
  const onDark = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-blur" : ""}`}
      style={!scrolled ? { background: onDark ? "transparent" : "var(--bg-base)" } : undefined}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">
        <Logo onDark={onDark} />

        {/* Desktop links — mono */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            const color = onDark
              ? active ? "#ffffff" : "rgba(255,255,255,0.6)"
              : active ? "var(--text-primary)" : "var(--text-muted)";
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative px-3.5 py-2 font-mono text-[12px] tracking-[0.08em] uppercase transition-colors"
                  style={{ color }}
                >
                  {active && <span className="absolute left-3.5 right-3.5 -bottom-px h-px" style={{ background: onDark ? "#ffb84d" : "var(--signal)" }} />}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle onDark={onDark} />
          <Link
            href="/contact"
            className="btn-primary text-sm py-2.5 px-5"
            style={onDark ? { background: "#ffffff", color: "#0b1220" } : undefined}
          >
            Audit gratuit
          </Link>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle onDark={onDark} />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg transition-colors"
            style={{ color: onDark ? "#ffffff" : "var(--text-primary)", border: `1px solid ${onDark ? "rgba(255,255,255,0.25)" : "var(--border-strong)"}` }}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t px-5 pt-4 pb-6" style={{ background: "var(--bg-base)", borderColor: "var(--border)" }}>
          <ul className="space-y-1 mb-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-3 rounded-lg font-mono text-[13px] tracking-[0.06em] uppercase transition-colors"
                  style={{
                    color: pathname === href ? "var(--signal-text)" : "var(--text-secondary)",
                    background: pathname === href ? "var(--signal-soft)" : "transparent",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
            Demander un audit gratuit
          </Link>
        </div>
      )}
    </header>
  );
}
