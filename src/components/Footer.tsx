import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navServices = [
  { label: "Intégration systèmes & réseaux", href: "/services#integration" },
  { label: "Sécurité & surveillance",         href: "/services#securite" },
  { label: "Développement sur mesure",        href: "/services#developpement" },
  { label: "Domotique & bâtiments",           href: "/services#domotique" },
  { label: "Support & maintenance",           href: "/services#support" },
  { label: "Fourniture de matériel",          href: "/services#materiel" },
];

const navPages = [
  { label: "Accueil",   href: "/" },
  { label: "Produits",  href: "/produits" },
  { label: "Solutions", href: "/solutions" },
  { label: "Stages",    href: "/stages" },
  { label: "Contact",   href: "/contact" },
];

export default function Footer() {
  return (
    <footer>
      {/* Amber accent hairline */}
      <div style={{ height: "2px", background: "linear-gradient(to right, var(--signal), transparent 60%)" }} />

      <div className="relative" style={{ background: "var(--bg-surface)" }}>
        <div className="absolute inset-0 grid-noise opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

          {/* ── Grid principal ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pt-14 pb-12">

            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-7 w-fit">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--text-primary)" }}>
                  <span className="font-mono font-bold text-[10px] tracking-tighter" style={{ color: "var(--bg-base)" }}>EBI</span>
                </div>
                <span className="font-display font-bold text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>
                  EBI<span style={{ color: "var(--signal-text)" }}>-IMT</span>
                </span>
              </Link>

              <h3 className="font-display text-2xl font-bold tracking-tight leading-[1.15] mb-5" style={{ color: "var(--text-primary)" }}>
                Votre infrastructure.<br /><span style={{ color: "var(--signal-text)" }}>Notre obsession.</span>
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                Depuis 1993, EBI-IMT construit et maintient l&apos;infrastructure IT des entreprises en Afrique de l&apos;Ouest.
              </p>

              {/* Social */}
              <div className="flex items-center gap-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn EBI-IMT"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:text-[color:var(--signal-text)]"
                  style={{ background: "var(--bg-inset)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook EBI-IMT"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:text-[color:var(--signal-text)]"
                  style={{ background: "var(--bg-inset)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact — texte propre, sans cadres */}
            <div>
              <p className="label mb-6">// Contact</p>
              <ul>
                {[
                  { content: <div className="space-y-1"><a href="tel:+22870013069" className="block transition-colors hover:text-[color:var(--signal-text)]">+228 70 01 30 69</a><a href="tel:+22870454381" className="block transition-colors hover:text-[color:var(--signal-text)]">+228 70 45 43 81</a></div> },
                  { content: <a href="mailto:ebi-togo@hotmail.com" className="block transition-colors hover:text-[color:var(--signal-text)]">ebi-togo@hotmail.com</a> },
                  { content: <div><p>Lomé, Togo</p><p style={{ color: "var(--text-muted)" }}>Afrique de l&apos;Ouest</p></div> },
                  { content: <p style={{ color: "var(--text-muted)" }}>Togo · Bénin · Burkina Faso<br />Niger · Mali · Tchad</p> },
                ].map(({ content }, i) => (
                  <li key={i} className="py-2.5 text-sm" style={{ borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                    {content}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services — liens avec animation flèche */}
            <div>
              <p className="label mb-6">// Services</p>
              <ul>
                {navServices.map(({ label, href }) => (
                  <li key={label} style={{ borderBottom: "1px solid var(--border)" }}>
                    <Link
                      href={href}
                      className="group flex items-center justify-between py-2.5 text-sm transition-colors hover:text-[color:var(--signal-text)]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">{label}</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 flex-shrink-0 transition-all duration-200 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        style={{ color: "var(--signal)" }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation + Partenaires */}
            <div>
              <p className="label mb-6">// Navigation</p>
              <ul className="mb-10">
                {navPages.map(({ label, href }) => (
                  <li key={label} style={{ borderBottom: "1px solid var(--border)" }}>
                    <Link
                      href={href}
                      className="group flex items-center justify-between py-2.5 text-sm transition-colors hover:text-[color:var(--signal-text)]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">{label}</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 flex-shrink-0 transition-all duration-200 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        style={{ color: "var(--signal)" }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-1">
                <p className="label mb-3">// Partenaires</p>
                <p className="text-xs leading-[2]" style={{ color: "var(--text-muted)" }}>
                  Fujitsu · Synology · MOBOTIX<br />
                  Dell · Cisco · Fortinet<br />
                  HP Enterprise · Veeam · Ricoh
                </p>
              </div>
            </div>
          </div>

          {/* ── Barre de statut ── */}
          <div
            className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-2.5">
              <span className="signal-dot" />
              <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                Opérationnel · 6 pays · 33 ans d&apos;expertise
              </span>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                © {new Date().getFullYear()} EBI-IMT SARL
              </p>
              {["Mentions légales", "Confidentialité"].map((item) => (
                <a key={item} href="#"
                  className="text-xs transition-colors hover:text-[color:var(--signal-text)]"
                  style={{ color: "var(--text-muted)" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
