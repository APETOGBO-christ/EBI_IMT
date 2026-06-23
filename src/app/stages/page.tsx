"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const opportunities = [
  {
    title: "Développement logiciel",
    desc: "Web, mobile, API. Vous coderez de vraies fonctionnalités — pas des POC qui ne servent à rien.",
    skills: ["React / Next.js", "Node.js / Python", "Base de données", "API & intégrations"],
    img: "/img/code.jpg",
    imgAlt: "Développement logiciel",
  },
  {
    title: "Systèmes & réseaux",
    desc: "Infrastructure réelle, équipements pros. Vous touchez à ce qui tourne en production — supervisé.",
    skills: ["Configuration réseau", "Virtualisation", "NAS Synology", "Supervision & NOC"],
    img: "/img/servers.jpg",
    imgAlt: "Systèmes et réseaux",
  },
  {
    title: "Sécurité & domotique",
    desc: "Biométrie, vidéosurveillance, contrôle d'accès. Des domaines que peu de stagiaires touchent.",
    skills: ["Contrôle d'accès biométrique", "Caméras IP MOBOTIX", "Câblage & installation", "Tests & audit"],
    img: "/img/cctv.jpg",
    imgAlt: "Sécurité et domotique",
  },
  {
    title: "Support & terrain",
    desc: "Interventions sur site, diagnostic, formation utilisateurs. L'IT vu de l'intérieur, sans filtre.",
    skills: ["Diagnostic & dépannage", "Formation utilisateurs", "Rédaction technique", "Relation client"],
    img: "/img/office.jpg",
    imgAlt: "Support et terrain",
  },
];

const steps = [
  {
    num: "01",
    title: "Envoyez votre dossier",
    desc: "CV + lettre de motivation à ebi-togo@hotmail.com. Simple, direct.",
    img: "/img/code.jpg",
    imgAlt: "Candidature en ligne",
  },
  {
    num: "02",
    title: "Entretien en 48h",
    desc: "Un échange pour comprendre vos objectifs et vous trouver la meilleure mission.",
    img: "/img/office.jpg",
    imgAlt: "Entretien avec l'équipe",
  },
  {
    num: "03",
    title: "Vous commencez",
    desc: "Intégration dans l'équipe. Vrai projet, vrai impact. Attestation en fin de stage.",
    img: "/Stage.jpg",
    imgAlt: "Équipe EBI-IMT Lomé",
  },
];

export default function StagesPage() {
  return (
    <>
      {/* Hero avec photo */}
      <section className="relative min-h-[68vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/Stage.jpg" alt="Équipe EBI-IMT" fill className="object-cover object-top" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,10,18,0.95) 0%, rgba(7,10,18,0.55) 55%, rgba(7,10,18,0.25) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pb-20 pt-40 w-full">
          <AnimatedSection>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase flex items-center gap-3 mb-6" style={{ color: "#ffb84d" }}>
              <span className="signal-dot" /> Stages disponibles
            </div>
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[0.95] mb-5">
              Apprenez sur <span style={{ color: "#ffb84d" }}>de vrais projets.</span>
            </h1>
            <p className="text-lg text-white/75 max-w-xl mb-8">
              EBI-IMT forme les talents de demain. Ici, vous ne faites pas du café — vous construisez, déployez, et livrez.
            </p>
            <a href="mailto:ebi-togo@hotmail.com" className="btn-primary px-7 py-3.5" style={{ background: "#ffffff", color: "#0b1220" }}>
              Postuler maintenant <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Opportunités — image cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection className="mb-12">
            <div className="label mb-5" style={{ color: "var(--signal-text)" }}>// Domaines d&apos;accueil</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]" style={{ color: "var(--text-primary)" }}>
              Choisissez <span style={{ color: "var(--signal-text)" }}>votre terrain.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {opportunities.map(({ title, desc, skills, img, imgAlt }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={img} alt={imgAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(7,10,18,0.6))" }} />
                    <div
                      className="absolute bottom-4 left-4 font-mono text-[11px] tracking-widest uppercase px-3 py-1.5 rounded"
                      style={{ background: "rgba(7,10,18,0.7)", color: "#ffb84d", backdropFilter: "blur(8px)", border: "1px solid rgba(255,184,77,0.3)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>{title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[11px] px-2.5 py-1 rounded"
                          style={{ background: "var(--bg-inset)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que vous gagnez — dark split */}
      <section className="relative overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — dark image panel */}
            <div className="relative py-20 lg:pr-16 min-h-[440px] flex flex-col justify-center">
              <div className="absolute inset-0 -left-5 sm:-left-8 rounded-r-3xl overflow-hidden hidden lg:block">
                <Image src="/Stage.jpg" alt="Équipe EBI-IMT" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "rgba(7,10,18,0.78)" }} />
              </div>
              <div className="relative z-10">
                <div className="label mb-5" style={{ color: "#ffb84d" }}>// Ce que vous gagnez</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4 leading-[1.05] text-white lg:text-white" style={{ color: "var(--text-primary)" }}>
                  Un stage qui <span style={{ color: "#ffb84d" }}>compte vraiment.</span>
                </h2>
                <p className="text-white/60 text-sm max-w-sm hidden lg:block">
                  Encadrement expert, projets réels, matériel haut de gamme. Pas un stage de photocopies.
                </p>
              </div>
            </div>

            {/* Right — checklist + profile */}
            <div className="py-20 lg:pl-16" style={{ borderLeft: "1px solid var(--border)" }}>
              <ul className="space-y-3 mb-10">
                {[
                  "Encadrement par des experts certifiés Fujitsu & Synology",
                  "Projets en conditions réelles (pas de simulation)",
                  "Accès à du matériel professionnel haut de gamme",
                  "Attestation de stage + lettre de recommandation",
                  "Possibilité d'embauche en fin de formation",
                  "Réseau professionnel en Afrique de l'Ouest",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--signal)" }} />{item}
                  </li>
                ))}
              </ul>

              <div className="panel rounded-2xl p-6">
                <p className="label mb-5">Profils recherchés</p>
                <div className="space-y-3.5">
                  {[
                    { label: "Niveau",   value: "Licence, Master, BTS / DUT" },
                    { label: "Filières", value: "Informatique, Réseaux, Télécoms" },
                    { label: "Durée",    value: "1 à 6 mois (selon convention)" },
                    { label: "Lieu",     value: "Lomé, Togo (+ missions terrain)" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between border-b pb-3 last:border-0" style={{ borderColor: "var(--border)" }}>
                      <span className="label">{label}</span>
                      <span className="text-sm font-medium text-right" style={{ color: "var(--text-primary)" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus — image step-cards */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection className="mb-12">
            <div className="label mb-5" style={{ color: "var(--signal-text)" }}>// Candidature</div>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.05]" style={{ color: "var(--text-primary)" }}>
              Postuler en <span style={{ color: "var(--signal-text)" }}>3 étapes.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {steps.map(({ num, title, desc, img, imgAlt }, i) => (
              <AnimatedSection key={num} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden h-full flex flex-col" style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                    <Image src={img} alt={imgAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(7,10,18,0.6))" }} />
                    {/* Étape badge */}
                    <div
                      className="absolute bottom-4 left-4 font-mono text-[11px] tracking-widest uppercase px-3 py-1.5 rounded"
                      style={{ background: "rgba(7,10,18,0.72)", color: "#ffb84d", backdropFilter: "blur(8px)", border: "1px solid rgba(255,184,77,0.3)" }}
                    >
                      Étape {num}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1">
                    <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <a href="mailto:ebi-togo@hotmail.com" className="btn-primary px-7 py-3.5 inline-flex">
              <Mail className="w-5 h-5" /> ebi-togo@hotmail.com
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
