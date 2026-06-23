"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Server, Code2, Home, Wrench, Package, Shield,
  Plus, Minus, CheckCircle2, AlertTriangle, TrendingDown, Eye, Clock,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import { useState } from "react";

const certifiedPartners = [
  { name: "FUJITSU",       domain: "Serveurs & Workstations",  badge: "CERTIFIÉ" },
  { name: "SYNOLOGY",      domain: "Stockage réseau NAS",      badge: "CERTIFIÉ" },
  { name: "MOBOTIX",       domain: "Vidéosurveillance IP",     badge: "AGRÉÉ" },
  { name: "CISCO",         domain: "Réseaux & Sécurité",       badge: "PARTENAIRE" },
  { name: "HP ENTERPRISE", domain: "Infrastructure serveurs",  badge: "PARTENAIRE" },
  { name: "RICOH",         domain: "Solutions d'impression",   badge: "PARTENAIRE" },
];

const coverage = [
  { code: "TG", city: "LOMÉ" },
  { code: "BJ", city: "COTONOU" },
  { code: "BF", city: "OUAGADOUGOU" },
  { code: "NE", city: "NIAMEY" },
  { code: "ML", city: "BAMAKO" },
  { code: "TD", city: "N'DJAMENA" },
];

const services = [
  { icon: Server,  title: "Intégration systèmes & réseaux", desc: "Réseaux, serveurs, datacenter, cloud hybride — conçus pour ne jamais tomber.", href: "/services#integration" },
  { icon: Wrench,  title: "Support & maintenance",          desc: "Panne à 3h du matin ? On est là. SLA contractuel, sans exception.",            href: "/services#support" },
  { icon: Shield,  title: "Sécurité & surveillance",        desc: "Vidéosurveillance IP, contrôle d'accès biométrique, supervision permanente.",  href: "/solutions" },
  { icon: Code2,   title: "Développement sur mesure",       desc: "Vos processus méritent mieux qu'un tableur. On code ce qui manque.",            href: "/services#developpement" },
  { icon: Home,    title: "Domotique & bâtiments",          desc: "Accès biométrique, automatisation, gestion centralisée multi-sites.",          href: "/services#domotique" },
  { icon: Package, title: "Matériel premium",               desc: "Fujitsu, Synology, MOBOTIX, PalmSecure — livré, installé, maintenu.",           href: "/produits" },
];

const proofCells = [
  { value: 72,  suffix: "h",  label: "Déploiement express" },
  { value: 6,   suffix: "",   label: "Pays couverts" },
  { value: 500, suffix: "+",  label: "Clients sous contrat" },
  { value: 24,  suffix: "/7", label: "Support garanti" },
];

const steps3 = [
  { num: "01", title: "Audit gratuit",   desc: "On analyse votre SI en 24h. Failles, opportunités, plan d'action. Sans engagement.", img: "/img/code.jpg" },
  { num: "02", title: "Proposition 48h", desc: "Une offre taillée pour vous. Pas un catalogue, pas de jargon. Juste l'essentiel.",    img: "/img/servers.jpg" },
  { num: "03", title: "Déploiement",     desc: "On installe, on forme, on reste. Votre IT ne redevient plus jamais votre problème.",    img: "/img/datacenter.jpg" },
];

const problems = [
  { icon: AlertTriangle, idx: "ERR_01", title: "La panne vous surprend toujours.",    desc: "Un serveur tombe, la production s'arrête. Chaque heure sans partenaire coûte en silence." },
  { icon: TrendingDown,  idx: "ERR_02", title: "Votre matériel freine votre équipe.", desc: "Équipements sous-dimensionnés, mal configurés. Votre infra bloque votre croissance." },
  { icon: Eye,           idx: "ERR_03", title: "Vous pilotez à l'aveugle.",           desc: "Vous ignorez ce qui tourne, ce qui est à risque. Sans visibilité, tout peut tomber." },
  { icon: Clock,         idx: "ERR_04", title: "Votre support répond en jours.",      desc: "Un ticket lundi, une réponse jeudi. Ce n'est pas du support — c'est de l'abandon." },
];

const faqs = [
  { q: "Dans quels pays intervenez-vous ?",          a: "Togo, Bénin, Burkina Faso, Niger, Mali et Tchad. Sur site ou à distance selon vos besoins." },
  { q: "Proposez-vous des contrats de maintenance ?", a: "Oui — du support basique aux contrats totaux (pièces + main d'œuvre inclus). Tout sous SLA contractuel." },
  { q: "Quel délai pour un déploiement ?",            a: "72h pour un déploiement standard. Quelques semaines pour des projets d'infrastructure complexes." },
  { q: "Vendez-vous matériel et services ?",          a: "Oui. EBI-IMT est un intégrateur complet : on vend, installe, configure et maintient. Un seul interlocuteur." },
  { q: "Comment démarrer ?",                          a: "Contactez-nous. Audit gratuit sous 24h, proposition sous 48h. Aucun engagement avant votre accord." },
  { q: "Travaillez-vous avec les PME ?",              a: "Avec tout le monde — TPE, PME, ETI, hôpitaux, institutions. Chaque solution est dimensionnée à votre réalité." },
];

const partners = ["Fujitsu", "Synology", "Dell", "Cisco", "Fortinet", "HP Enterprise", "MOBOTIX", "Veeam", "Ricoh", "Konica Minolta"];

/* ═══ Hero glass console (over image) ═══ */
function HeroConsole() {
  return (
    <div className="rounded-2xl overflow-hidden font-mono select-none shadow-2xl"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
        <div className="flex items-center gap-2.5">
          <span className="signal-dot" />
          <span className="text-[11px] tracking-[0.16em] uppercase text-white">Partenaires certifiés</span>
        </div>
        <span className="text-[10px] tracking-[0.16em] text-white/45">Depuis 1993</span>
      </div>
      {/* Rows */}
      <div>
        {certifiedPartners.map(({ name, domain, badge }, i) => (
          <div key={name} className="flex items-center gap-3 px-4 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <span className="signal-dot" style={{ animationDelay: `${i * 0.4}s` }} />
            <span className="text-[11px] font-bold w-24 text-white flex-shrink-0">{name}</span>
            <span className="text-[10px] flex-1 text-white/50 truncate">{domain}</span>
            <span
              className="text-[9px] tracking-widest px-2 py-0.5 rounded flex-shrink-0"
              style={{ background: "rgba(255,184,77,0.12)", color: "#ffb84d", border: "1px solid rgba(255,184,77,0.25)" }}
            >
              {badge}
            </span>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3" style={{ background: "rgba(255,255,255,0.03)" }}>
        <span className="text-[10px] tracking-[0.14em] uppercase text-white/45">Intégrateur agréé</span>
        <span className="flex items-center gap-2 text-[10px] tracking-[0.14em] uppercase" style={{ color: "#ffb84d" }}>
          6 pays · 33 ans<span className="blink">_</span>
        </span>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {faqs.map(({ q, a }, i) => (
        <div key={i} className="border-t" style={{ borderColor: "var(--border)" }}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
            <span className="flex items-center gap-4">
              <span className="font-mono text-[11px] tabular-nums" style={{ color: "var(--text-muted)" }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[15px] font-medium group-hover:text-[color:var(--signal-text)] transition-colors" style={{ color: "var(--text-primary)" }}>{q}</span>
            </span>
            <span className="flex-shrink-0" style={{ color: "var(--text-muted)" }}>
              {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                <p className="pb-5 pl-9 pr-8 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ══ HERO — cinématique plein écran ══ */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden" style={{ background: "#070a12" }}>
        <div className="absolute inset-0">
          <Image src="/img/datacenter.jpg" alt="Datacenter supervisé par EBI-IMT" fill priority sizes="100vw" className="object-cover kenburns" />
        </div>
        {/* scrims */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,10,18,0.94) 0%, rgba(7,10,18,0.80) 42%, rgba(7,10,18,0.40) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,18,0.95) 0%, transparent 32%)" }} />
        <div className="absolute inset-x-0 top-0 h-24" style={{ background: "linear-gradient(to bottom, rgba(7,10,18,0.85), transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-[11px] tracking-[0.18em] uppercase flex items-center gap-3 mb-7" style={{ color: "#ffb84d" }}>
                <span className="signal-dot" /> Intégrateur IT · Depuis 1993
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-white text-6xl sm:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-tight mb-6"
              >
                Votre infrastructure.<br /><span style={{ color: "#ffb84d" }}>Notre obsession.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-lg text-white/70 max-w-md mb-9 leading-relaxed">
                On conçoit, déploie et maintient votre infrastructure IT. Dans six pays. Depuis 1993.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }} className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="btn-primary text-[0.95rem] px-7 py-3.5" style={{ background: "#ffffff", color: "#0b1220" }}>
                  Demander un audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="text-[0.95rem] px-7 py-3.5 rounded-[10px] font-medium inline-flex items-center gap-2 text-white transition-colors" style={{ border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.04)" }}>
                  Nos services
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="flex flex-wrap gap-x-6 gap-y-2">
                {["Certifié Fujitsu", "SLA contractuel", "Support 24/7", "6 pays"].map((t) => (
                  <span key={t} className="font-mono text-[11px] tracking-wider uppercase flex items-center gap-2 text-white/50">
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#ffb84d" }} />{t}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5">
              <HeroConsole />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PREUVE — bento ══ */}
      <section className="py-20" style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection className="mb-10">
            <div className="label mb-4" style={{ color: "var(--signal-text)" }}>// La preuve en chiffres</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Trente ans. <span style={{ color: "var(--signal-text)" }}>Zéro raccourci.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:auto-rows-[164px]">
            {/* featured */}
            <AnimatedSection className="col-span-2 lg:row-span-2">
              <div className="panel rounded-2xl h-full p-8 flex flex-col justify-between relative overflow-hidden" style={{ borderColor: "var(--signal-line)" }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, var(--signal-soft), transparent 55%)" }} />
                <div className="relative flex items-center gap-2.5">
                  <span className="signal-dot" />
                  <span className="label">à vos côtés depuis 1993</span>
                </div>
                <div className="relative">
                  <div className="font-display font-extrabold leading-none mb-3" style={{ fontSize: "clamp(3.5rem,8vw,6rem)", color: "var(--text-primary)" }}>
                    <CountUp end={33} /> <span style={{ color: "var(--signal-text)" }}>ans</span>
                  </div>
                  <p className="font-mono text-[11px] tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>33 ans de terrain · SLA contractuel · 6 pays</p>
                </div>
              </div>
            </AnimatedSection>

            {/* singles */}
            {proofCells.map(({ value, suffix, label }, i) => (
              <AnimatedSection key={label} delay={i * 0.06}>
                <div className="panel rounded-2xl h-full p-6 flex flex-col justify-between">
                  <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
                    <CountUp end={value} suffix={suffix} />
                  </div>
                  <p className="label">{label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LE PROBLÈME ══ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <div className="label mb-5" style={{ color: "var(--signal-text)" }}>// Diagnostic</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]" style={{ color: "var(--text-primary)" }}>
              Votre IT souffre. <span style={{ color: "var(--signal-text)" }}>En silence.</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {problems.map(({ icon: Icon, idx, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="p-7 h-full border-t md:border-l first:border-l-0 lg:border-l" style={{ borderColor: "var(--border)" }}>
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-5 h-5" style={{ color: "var(--signal-text)" }} />
                    <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--text-muted)" }}>{idx}</span>
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2 leading-snug" style={{ color: "var(--text-primary)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12">
            <Link href="/contact" className="btn-primary">Je veux une solution <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ COUVERTURE — image plein écran (la Terre) ══ */}
      <section className="relative overflow-hidden" style={{ background: "#070a12" }}>
        <div className="absolute inset-0">
          <Image src="/img/network.jpg" alt="Réseau régional EBI-IMT vu de l'espace" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(7,10,18,0.92) 0%, rgba(7,10,18,0.6) 60%, rgba(7,10,18,0.3) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-28 lg:py-36">
          <AnimatedSection className="max-w-xl">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase flex items-center gap-3 mb-6" style={{ color: "#ffb84d" }}>
              <span className="signal-dot" /> // Couverture régionale
            </div>
            <h2 className="font-display text-white text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.0] mb-6">
              Six pays. <span style={{ color: "#ffb84d" }}>Une seule équipe.</span>
            </h2>
            <p className="text-white/70 text-lg mb-9 leading-relaxed">
              De Lomé à N&apos;Djamena, nos équipes interviennent sur site ou à distance. Là où vous êtes, nous y sommes déjà.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
              {coverage.map(({ code, city }) => (
                <div key={code} className="flex items-center gap-2.5 px-4 py-3" style={{ background: "rgba(7,10,18,0.55)", backdropFilter: "blur(8px)" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ffb020" }} />
                  <span className="font-mono text-[12px] font-semibold text-white">{code}</span>
                  <span className="font-mono text-[10px] text-white/55 truncate">{city}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ SANS / AVEC ══ */}
      <section className="py-24" style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection className="mb-14">
            <div className="label mb-5" style={{ color: "var(--signal-text)" }}>// La différence</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]" style={{ color: "var(--text-primary)" }}>
              Un partenaire. <span style={{ color: "var(--signal-text)" }}>Pas un prestataire.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="panel rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "var(--border)" }}>
                  <p className="label mb-6">Sans EBI-IMT</p>
                  <ul className="space-y-3.5">
                    {["Plusieurs prestataires à gérer","Pannes sans engagement de délai","Matériel inadapté à votre usage","Support qui répond en jours","Aucune vision sur votre SI","Coûts cachés et mauvaises surprises"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <span className="font-mono text-xs w-4" style={{ color: "var(--text-muted)" }}>×</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8">
                  <p className="label mb-6" style={{ color: "var(--signal-text)" }}>Avec EBI-IMT</p>
                  <ul className="space-y-3.5">
                    {["Un seul interlocuteur pour tout","SLA contractuel sur chaque intervention","Équipements certifiés & dimensionnés","Réponse en heures, sur site si besoin","Supervision et reporting réguliers","Tarification transparente, sans surprise"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "var(--signal)" }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ SERVICES — liste indexée ══ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="label mb-5" style={{ color: "var(--signal-text)" }}>// Expertises</div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]" style={{ color: "var(--text-primary)" }}>
                Six métiers. <span style={{ color: "var(--signal-text)" }}>Un seul interlocuteur.</span>
              </h2>
            </div>
            <Link href="/services" className="btn-secondary text-sm">Tout voir <ArrowUpRight className="w-4 h-4" /></Link>
          </AnimatedSection>
          <div className="border-b" style={{ borderColor: "var(--border)" }}>
            {services.map(({ icon: Icon, title, desc, href }, i) => (
              <AnimatedSection key={title} delay={i * 0.05}>
                <Link href={href} className="service-card group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[3rem_2.5rem_1fr_auto] items-center gap-4 sm:gap-6 py-7 border-t" style={{ borderColor: "var(--border)" }}>
                  <span className="font-mono text-sm tabular-nums" style={{ color: "var(--text-muted)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="hidden sm:flex w-10 h-10 rounded-lg items-center justify-center" style={{ background: "var(--bg-inset)", border: "1px solid var(--border)" }}>
                    <Icon className="w-4 h-4" style={{ color: "var(--signal-text)" }} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-lg sm:text-xl leading-tight group-hover:text-[color:var(--signal-text)] transition-colors" style={{ color: "var(--text-primary)" }}>{title}</h3>
                    <p className="text-sm mt-1 truncate" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "var(--text-muted)" }} />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS — cartes-étapes image ══ */}
      <section className="py-24" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection className="mb-12 text-center max-w-2xl mx-auto">
            <div className="label mb-5 flex justify-center" style={{ color: "var(--signal-text)" }}>// Le processus</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]" style={{ color: "var(--text-primary)" }}>
              De vulnérable à protégé. <span style={{ color: "var(--signal-text)" }}>En 72h.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps3.map(({ num, title, desc, img }, i) => (
              <AnimatedSection key={num} delay={i * 0.1}>
                <div className="panel rounded-2xl overflow-hidden h-full group">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={img} alt={title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,18,0.6), transparent 55%)" }} />
                    <span className="absolute top-3 right-3 font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md text-white" style={{ background: "rgba(7,10,18,0.5)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(6px)" }}>Étape {num}</span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-display text-3xl font-bold" style={{ color: "var(--signal-text)" }}>{num}</span>
                      <h3 className="font-display font-semibold text-lg" style={{ color: "var(--text-primary)" }}>{title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">Démarrer maintenant <ArrowRight className="w-4 h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ ÉQUIPE — vraie photo EBI-IMT ══ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="grid grid-cols-5 gap-3" style={{ minHeight: "360px" }}>
                {/* Portrait DG */}
                <div className="col-span-2 relative rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                  <Image src="/img/portrait_dg.png" alt="Hugues Folly ASSION — Directeur Général EBI-IMT" fill className="object-cover object-top" sizes="20vw" />
                  <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: "linear-gradient(to top, rgba(7,10,18,0.96) 50%, transparent)" }}>
                    <p className="font-display font-bold text-white text-sm leading-tight">Hugues Folly ASSION</p>
                    <p className="font-mono text-[10px] tracking-wider mt-0.5" style={{ color: "#ffb84d" }}>Directeur Général</p>
                  </div>
                </div>
                {/* Équipe team photo */}
                <div className="col-span-3 relative rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                  <Image src="/Stage.jpg" alt="L'équipe EBI-IMT à Lomé, Togo" fill className="object-cover" sizes="35vw" />
                  <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md text-white flex items-center gap-2" style={{ background: "rgba(7,10,18,0.55)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ffb020" }} /> Lomé · Togo
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="label mb-5" style={{ color: "var(--signal-text)" }}>// L&apos;équipe</div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] mb-5" style={{ color: "var(--text-primary)" }}>
                Derrière chaque système, <span style={{ color: "var(--signal-text)" }}>une équipe.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                Des ingénieurs, techniciens et développeurs togolais qui connaissent le terrain. Pas un call-center à l&apos;autre bout du monde — des gens qui se déplacent, qui décrochent, qui réparent.
              </p>
              <div className="flex items-center gap-3 mb-7 p-3 rounded-xl" style={{ background: "var(--bg-inset)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0" style={{ border: "1px solid var(--border)" }}>
                  <Image src="/img/portrait_dg.png" alt="" width={40} height={40} className="object-cover object-top w-full h-full" />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Hugues Folly ASSION</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--signal-text)" }}>Directeur Général · Fondateur 1993</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/stages" className="btn-primary">Rejoindre l&apos;équipe <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-secondary">Nous rencontrer</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ PARTENAIRES ══ */}
      <section className="py-16" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6 justify-between">
            <p className="label">Partenaires certifiés</p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              {partners.map((name) => (
                <span key={name} className="font-display font-semibold text-xl tracking-tight transition-colors hover:text-[color:var(--signal-text)] cursor-default" style={{ color: "var(--text-secondary)" }}>{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ RICOH BRUSSELS — Présence internationale (bento panel, pas full-bleed) ══ */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection className="mb-8">
            <div className="label mb-5" style={{ color: "var(--signal-text)" }}>// Reconnaissance</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]" style={{ color: "var(--text-primary)" }}>
              Présence <span style={{ color: "var(--signal-text)" }}>internationale.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto h-full min-h-[300px]" style={{ border: "1px solid var(--border)" }}>
                <Image src="/img/ricoh_brussels.jpg" alt="EBI-IMT au RICOH Business Partner Conference, Bruxelles 2025" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,18,0.5), transparent 45%)" }} />
                <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded text-white flex items-center gap-2" style={{ background: "rgba(7,10,18,0.6)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--signal)" }} /> Bruxelles · Avril 2025
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:col-span-3">
              <div className="panel rounded-2xl p-8 lg:p-10 h-full flex flex-col justify-center">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="signal-dot" />
                  <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--signal-text)" }}>RICOH Business Partner Conference</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
                  Reconnu par <span style={{ color: "var(--signal-text)" }}>RICOH World.</span>
                </h3>
                <p className="text-sm leading-relaxed mb-7" style={{ color: "var(--text-secondary)" }}>
                  En avril 2025, EBI-IMT était présent à la RICOH Business Partner Conference à Bruxelles — aux côtés des partenaires stratégiques mondiaux RICOH. Une reconnaissance internationale pour une expertise enracinée en Afrique de l&apos;Ouest.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                  {[
                    { label: "Événement", value: "Partner Conference" },
                    { label: "Lieu", value: "Bruxelles, Belgique" },
                    { label: "Statut", value: "Partenaire agréé" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="font-mono text-[10px] tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>{label}</p>
                      <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <AnimatedSection className="lg:col-span-4" direction="left">
              <div className="label mb-5" style={{ color: "var(--signal-text)" }}>// FAQ</div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] mb-5" style={{ color: "var(--text-primary)" }}>
                Vos questions. <span style={{ color: "var(--signal-text)" }}>Nos réponses.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-7" style={{ color: "var(--text-secondary)" }}>Pas de jargon. Pas de détour.</p>
              <a href="mailto:ebi-togo@hotmail.com" className="btn-secondary text-sm">Autre question ?</a>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-8" direction="right">
              <FAQ />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL — image ══ */}
      <section className="relative overflow-hidden" style={{ background: "#070a12" }}>
        <div className="absolute inset-0">
          <Image src="/img/servers.jpg" alt="Infrastructure serveur EBI-IMT" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,18,0.96) 0%, rgba(7,10,18,0.82) 50%, rgba(7,10,18,0.7) 100%)" }} />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-32 text-center">
          <AnimatedSection>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase flex items-center justify-center gap-3 mb-7" style={{ color: "#ffb84d" }}>
              <span className="signal-dot" /> Prêt quand vous l&apos;êtes
            </div>
            <h2 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
              Votre prochain IT<br /><span style={{ color: "#ffb84d" }}>commence ici.</span>
            </h2>
            <p className="font-mono text-sm tracking-wide text-white/55 mb-10">
              Audit gratuit · Devis sous 48h · Déploiement sous 72h
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary px-7 py-3.5" style={{ background: "#ffffff", color: "#0b1220" }}>Démarrer avec EBI-IMT <ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:+22870013069" className="px-7 py-3.5 rounded-[10px] font-medium inline-flex items-center gap-2 text-white" style={{ border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.04)" }}>+228 70 01 30 69</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
