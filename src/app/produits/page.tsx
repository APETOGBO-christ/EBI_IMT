"use client";

import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const products = [
  {
    brand: "Fujitsu",
    category: "Serveurs & Workstations",
    tagline: "La puissance sans le bruit.",
    desc: "Serveurs rack, tour, workstations et portables professionnels. Certifié et supporté directement par EBI-IMT.",
    items: ["Serveurs rack & tour PRIMERGY","Workstations CELSIUS","Portables & tablettes pro","Stockage et NAS intégrés","Garanties étendues"],
    img: "/img/servers.jpg",
    imgAlt: "Serveurs Fujitsu PRIMERGY",
  },
  {
    brand: "Synology",
    category: "NAS & Stockage",
    tagline: "Vos données. Votre cloud.",
    desc: "Solutions NAS pour la sauvegarde, le partage de fichiers et le cloud privé. De 2 à 60+ baies selon votre volume.",
    items: ["NAS bureau & rack","Sauvegarde & réplication","Cloud privé & synchronisation","Surveillance vidéo intégrée","Haute disponibilité & clustering"],
    img: "/img/datacenter.jpg",
    imgAlt: "Stockage NAS Synology",
  },
  {
    brand: "MOBOTIX",
    category: "Vidéosurveillance IP",
    tagline: "Voir tout. Manquer rien.",
    desc: "Caméras IP haut de gamme avec intelligence embarquée. Résistantes, fiables, sans serveur central requis.",
    items: ["Caméras dôme & fixe IP","Analyse vidéo intelligente","Thermographie & détection","Intégration contrôle d'accès","Systèmes multi-sites centralisés"],
    img: "/img/cctv.jpg",
    imgAlt: "Caméra MOBOTIX IP",
  },
  {
    brand: "PalmSecure",
    category: "Biométrie veineuse",
    tagline: "L'accès le plus sûr qui soit.",
    desc: "Authentification par réseau veineux palmaire — hygiénique, infalsifiable, sans contact. Le summum de la biométrie.",
    items: ["Lecteurs biométriques palmaires","Contrôle d'accès physique","Authentification informatique","Pointage & présence","Intégration ERP & SIRH"],
    img: "/img/biometric.jpg",
    imgAlt: "Scanner biométrique PalmSecure",
  },
  {
    brand: "Médical IT",
    category: "Équipements de santé",
    tagline: "L'informatique au service du soin.",
    desc: "Postes médicalisés, imagerie numérique, PACS, dossiers patients. Solutions certifiées pour les environnements hospitaliers.",
    items: ["Workstations médicales certifiées","Imagerie (PACS/RIS)","Chariots médicaux informatisés","Interopérabilité DICOM & HL7","Contrats SLA hospitaliers"],
    img: "/img/medical.jpg",
    imgAlt: "Équipements médicaux informatisés",
  },
  {
    brand: "Énergie & UPS",
    category: "Alimentation & Climatisation",
    tagline: "Votre infra ne s'éteint plus.",
    desc: "Onduleurs, groupes électrogènes, climatiseurs salle serveur. L'alimentation fiable est la base de tout le reste.",
    items: ["Onduleurs (UPS) mono & triphasés","Groupes électrogènes industriels","Climatisation précision salle serveur","Monitoring énergie","Maintenance préventive & curative"],
    img: "/img/servers.jpg",
    imgAlt: "Infrastructure alimentation salle serveur",
  },
];

const brandStrip = ["Fujitsu", "Synology", "MOBOTIX", "Dell", "Cisco", "Fortinet", "HP Enterprise", "Veeam", "Ricoh", "Effekta"];

export default function ProduitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <div className="label mb-6 flex items-center gap-3" style={{ color: "var(--signal-text)" }}>
                <span className="signal-dot" /> // Catalogue
              </div>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6" style={{ color: "var(--text-primary)" }}>
                Le meilleur matériel. <span style={{ color: "var(--signal-text)" }}>Bien installé.</span>
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Revendeur agréé des meilleures marques mondiales. On ne vous vend pas un catalogue — on vous conseille ce qui correspond à votre usage.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid var(--border)" }}>
                <Image src="/img/servers.jpg" alt="Matériel serveur premium" fill sizes="50vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent 50%, var(--signal-soft))" }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Brand strip */}
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 py-6 mb-8 border-y" style={{ borderColor: "var(--border)" }}>
              <span className="label mr-2">Marques agréées</span>
              {brandStrip.map((b) => (
                <span key={b} className="font-mono text-[11px] font-semibold tracking-wider" style={{ color: "var(--text-muted)" }}>{b}</span>
              ))}
            </div>
          </AnimatedSection>

          {/* Image step-cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map(({ brand, category, tagline, desc, items, img, imgAlt }, i) => (
              <AnimatedSection key={brand} delay={i * 0.06}>
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                    <Image
                      src={img}
                      alt={imgAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(7,10,18,0.65))" }} />
                    {/* Brand badge */}
                    <div
                      className="absolute bottom-4 left-4 font-mono text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded"
                      style={{ background: "rgba(7,10,18,0.72)", color: "#ffb84d", backdropFilter: "blur(8px)", border: "1px solid rgba(255,184,77,0.3)" }}
                    >
                      {brand}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="font-mono text-[10px] tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)" }}>{category}</p>
                    <h3 className="font-display text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{tagline}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--signal)" }} />{item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-secondary w-full justify-center text-sm py-2.5 mt-auto">
                      Demander un devis <ArrowUpRight className="w-4 h-4" />
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
          <Image src="/img/datacenter.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(7,10,18,0.94) 45%, rgba(7,10,18,0.72) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase flex items-center gap-3 mb-6" style={{ color: "var(--signal)" }}>
                <span className="signal-dot" /> Besoin d&apos;un conseil ?
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.05]">
                On vous guide.{" "}
                <span style={{ color: "var(--signal)" }}>Pas de catalogue à parcourir.</span>
              </h2>
              <p className="font-mono text-sm tracking-wide mb-9" style={{ color: "rgba(255,255,255,0.45)" }}>
                Décrivez votre besoin · On revient avec la solution exacte
              </p>
              <Link href="/contact" className="btn-primary px-7 py-3.5" style={{ background: "#ffffff", color: "#0b1220" }}>
                Parler à un expert <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
