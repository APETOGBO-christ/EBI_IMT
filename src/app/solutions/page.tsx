"use client";

import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const solutions = [
  {
    tag: "PME & ETI",
    title: "Entreprises & PME",
    tagline: "Grandir sans se battre avec votre IT.",
    desc: "Infrastructure scalable, outils collaboratifs, sécurité adaptée à votre budget. L'IT d'une grande entreprise, à votre taille.",
    items: ["Réseau d'entreprise sécurisé","Serveur de fichiers & sauvegarde","Messagerie & outils collaboratifs","Logiciels de gestion (ERP, CRM)"],
    img: "/img/office.jpg",
    imgAlt: "Entreprises et PME connectées",
  },
  {
    tag: "Santé",
    title: "Cliniques & Hôpitaux",
    tagline: "La technologie au service du soin.",
    desc: "Systèmes d'information hospitaliers, imagerie médicale, accès sécurisé, disponibilité 24/7. L'IT qui ne peut pas tomber.",
    items: ["SIH & dossier patient informatisé","Imagerie médicale (PACS/DICOM)","Workstations médicalisées","Accès biométrique zones sensibles"],
    img: "/img/medical.jpg",
    imgAlt: "Infrastructure IT clinique et hôpital",
  },
  {
    tag: "Éducation",
    title: "Écoles & Universités",
    tagline: "Des campus connectés, des apprenants libres.",
    desc: "Salles informatiques, Wi-Fi campus, contrôle d'accès, outils pédagogiques numériques. L'école de demain.",
    items: ["Salles informatiques clé en main","Wi-Fi campus haute densité","Portail étudiant & ENT","Maintenance & support sur site"],
    img: "/img/building.jpg",
    imgAlt: "Campus scolaire numérique",
  },
  {
    tag: "Commerce & Retail",
    title: "Commerce & Distribution",
    tagline: "Des caisses qui ne tombent jamais.",
    desc: "Infrastructure magasin, caméras, caisses et paiement, Wi-Fi client, gestion des stocks. Le commerce moderne.",
    items: ["Systèmes de caisse & point de vente","Vidéosurveillance & anti-intrusion","Wi-Fi marchand & client","Interconnexion multi-sites"],
    img: "/img/retail.jpg",
    imgAlt: "Commerce et distribution IT",
  },
  {
    tag: "Sécurité",
    title: "Sécurité & Surveillance",
    tagline: "Voir tout. Contrôler l'accès. Partout.",
    desc: "Caméras IP intelligentes, contrôle d'accès biométrique, alarmes, vidéosurveillance centralisée multi-sites.",
    items: ["Vidéosurveillance IP MOBOTIX","Contrôle d'accès biométrique","Détection périmétrique intelligente","Supervision à distance 24/7"],
    img: "/img/cctv.jpg",
    imgAlt: "Sécurité et surveillance IP",
  },
  {
    tag: "Institutions",
    title: "Administrations & ONG",
    tagline: "La rigueur du public. L'efficacité du privé.",
    desc: "Infrastructure robuste, conformité, traçabilité, sécurité des données. Des systèmes qui durent.",
    items: ["Infrastructure datacenter sécurisée","Accès biométrique & badgeage","Système d'information interne","Formation des équipes IT internes"],
    img: "/img/datacenter.jpg",
    imgAlt: "Infrastructure IT institutionnelle",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <div className="label mb-6 flex items-center gap-3" style={{ color: "var(--signal-text)" }}>
                <span className="signal-dot" /> // Solutions sectorielles
              </div>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6" style={{ color: "var(--text-primary)" }}>
                Votre secteur. <span style={{ color: "var(--signal-text)" }}>Notre expertise.</span>
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Chaque secteur a ses contraintes. Chaque solution est dimensionnée selon votre réalité — pas un template copié.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid var(--border)" }}>
                <Image src="/img/cctv.jpg" alt="Sécurité et surveillance" fill sizes="50vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent 50%, var(--signal-soft))" }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solutions — sector image cards */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ tag, title, tagline, desc, items, img, imgAlt }, i) => (
              <AnimatedSection key={title} delay={i * 0.06}>
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
                >
                  {/* Sector image */}
                  <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                    <Image
                      src={img}
                      alt={imgAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(7,10,18,0.15) 0%, transparent 35%, rgba(7,10,18,0.5) 100%)" }} />
                    {/* Sector tag */}
                    <div
                      className="absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded"
                      style={{ background: "rgba(7,10,18,0.65)", color: "#ffb84d", backdropFilter: "blur(8px)", border: "1px solid rgba(255,184,77,0.3)" }}
                    >
                      {tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{title}</h3>
                    <p className="font-semibold text-sm mb-3" style={{ color: "var(--signal-text)" }}>{tagline}</p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--signal)" }} />{item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-secondary w-full justify-center text-sm py-2.5 mt-auto">
                      Discutons-en <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-bleed dark image */}
      <section className="relative py-32 overflow-hidden mt-8">
        <div className="absolute inset-0">
          <Image src="/img/office.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(7,10,18,0.94) 45%, rgba(7,10,18,0.72) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase flex items-center gap-3 mb-6" style={{ color: "var(--signal)" }}>
                <span className="signal-dot" /> Votre secteur
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.05]">
                On a déjà travaillé{" "}
                <span style={{ color: "var(--signal)" }}>dans votre domaine.</span>
              </h2>
              <p className="font-mono text-sm tracking-wide mb-9" style={{ color: "rgba(255,255,255,0.45)" }}>
                33 ans de terrain en Afrique de l&apos;Ouest · Aucun contexte ne nous surprend
              </p>
              <Link href="/contact" className="btn-primary px-7 py-3.5" style={{ background: "#ffffff", color: "#0b1220" }}>
                Parler de mon projet <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
