"use client";

import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    id: "integration",
    num: "01",
    tag: "Infrastructure",
    title: "Intégration systèmes & réseaux",
    tagline: "Une infrastructure qui ne cède pas.",
    desc: "Réseaux, serveurs, datacenter, cloud hybride — on conçoit, déploie et supervise des architectures taillées pour durer. Sans compromis sur la disponibilité.",
    items: ["Déploiement de réseaux LAN/WAN/Wi-Fi","Architecture serveur & virtualisation","Solutions cloud hybride","Sauvegarde & reprise d'activité","Supervision réseau (NOC)","Câblage structuré & fibre optique"],
    img: "/img/datacenter.jpg",
    imgAlt: "Infrastructure datacenter supervisée",
  },
  {
    id: "support",
    num: "02",
    tag: "Support",
    title: "Support & maintenance",
    tagline: "On est là avant que ça tombe.",
    desc: "Contrats de maintenance préventive, interventions correctives sous SLA, support helpdesk. Votre IT tourne — point.",
    items: ["Maintenance préventive planifiée","Helpdesk téléphone, ticket, remote","Intervention sur site sous SLA","Contrats all-inclusive (pièces + main d'œuvre)","Supervision proactive 24/7","Remplacement d'équipement en urgence"],
    img: "/img/servers.jpg",
    imgAlt: "Serveurs en maintenance",
  },
  {
    id: "securite",
    num: "03",
    tag: "Sécurité",
    title: "Sécurité & surveillance",
    tagline: "Voir tout. Manquer rien.",
    desc: "Vidéosurveillance IP, contrôle d'accès biométrique, alarmes et supervision centralisée multi-sites. La sécurité physique de votre infrastructure.",
    items: ["Vidéosurveillance IP MOBOTIX","Contrôle d'accès biométrique PalmSecure","Détection périmétrique intelligente","Centrales d'alarme intégrées","Supervision à distance 24/7","Audit de sécurité physique"],
    img: "/img/cctv.jpg",
    imgAlt: "Caméra de surveillance IP",
  },
  {
    id: "developpement",
    num: "04",
    tag: "Logiciel",
    title: "Développement sur mesure",
    tagline: "Votre métier mérite sa propre solution.",
    desc: "ERP, portails intranet, applications mobiles, automatisation de processus. On code ce que les logiciels du marché ne font pas.",
    items: ["Sites web & portails métier","Applications mobiles iOS & Android","ERP & logiciels de gestion","Intégrations API & automatisations","Bases de données & reporting","Maintenance & évolutions"],
    img: "/img/code.jpg",
    imgAlt: "Développement logiciel sur mesure",
  },
  {
    id: "domotique",
    num: "05",
    tag: "Smart building",
    title: "Domotique & bâtiments intelligents",
    tagline: "Chaque bâtiment devient une forteresse connectée.",
    desc: "Contrôle d'accès, automatisation des équipements, gestion centralisée. On transforme vos espaces en environnements sécurisés et efficaces.",
    items: ["Automatisation bâtimentaire","Gestion centralisée multi-sites","Interphonie & télésurveillance","Éclairage & climatisation pilotés","Supervision énergétique","Intégration biométrie & accès"],
    img: "/img/building.jpg",
    imgAlt: "Bâtiment intelligent connecté",
  },
  {
    id: "materiel",
    num: "06",
    tag: "Matériel",
    title: "Fourniture de matériel premium",
    tagline: "Le bon équipement, bien installé.",
    desc: "Revendeur agréé Fujitsu, Synology, MOBOTIX, PalmSecure et plus. On ne vend pas un catalogue — on vous conseille ce qui correspond à votre usage réel.",
    items: ["Serveurs & workstations Fujitsu","NAS & stockage Synology","Caméras & systèmes MOBOTIX","Scanners biométriques PalmSecure","Onduleurs & alimentation","Équipements médicaux informatisés"],
    img: "/img/biometric.jpg",
    imgAlt: "Équipements biométriques premium",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <div className="label mb-6 flex items-center gap-3" style={{ color: "var(--signal-text)" }}>
                <span className="signal-dot" /> // Expertises
              </div>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6" style={{ color: "var(--text-primary)" }}>
                Six métiers. <span style={{ color: "var(--signal-text)" }}>Un seul cap.</span>
              </h1>
              <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
                De l&apos;infrastructure réseau à la domotique, du code sur mesure au support — EBI-IMT couvre l&apos;intégralité de votre IT.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid var(--border)" }}>
                <Image src="/img/datacenter.jpg" alt="Infrastructure supervisée par EBI-IMT" fill sizes="50vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent 50%, var(--signal-soft))" }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services — alternating cinematic rows */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Editorial header */}
          <div className="flex items-center justify-between py-7 mb-2 border-b" style={{ borderColor: "var(--border)" }}>
            <span className="label" style={{ color: "var(--text-muted)" }}>// Six expertises · Un seul partenaire</span>
            <span className="font-mono text-[10px] tracking-widest hidden sm:block" style={{ color: "var(--text-muted)" }}>EBI-IMT · Depuis 1993</span>
          </div>

          {services.map(({ id, num, tag, title, tagline, desc, items, img, imgAlt }, i) => (
            <AnimatedSection key={id} delay={0.04}>
              <div
                id={id}
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 border-b last:border-0"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden aspect-[16/10]${i % 2 === 1 ? " lg:order-2" : ""}`}>
                  <Image
                    src={img}
                    alt={imgAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(7,10,18,0.45))" }} />
                  <div
                    className="absolute top-4 left-4 font-mono text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(7,10,18,0.65)", color: "var(--signal)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,176,32,0.3)" }}
                  >
                    {num}
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded inline-block mb-4"
                    style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
                  >
                    {tag}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
                    {title}
                  </h2>
                  <p className="font-semibold text-base mb-5" style={{ color: "var(--signal-text)" }}>{tagline}</p>
                  <p className="text-sm leading-relaxed mb-7" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--signal)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                    En savoir plus <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA — full-bleed dark image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/img/servers.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(7,10,18,0.94) 45%, rgba(7,10,18,0.72) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase flex items-center gap-3 mb-6" style={{ color: "var(--signal)" }}>
                <span className="signal-dot" /> Prêt ?
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.05]">
                Quel service vous manque ?{" "}
                <span style={{ color: "var(--signal)" }}>On va le trouver.</span>
              </h2>
              <p className="font-mono text-sm tracking-wide mb-9" style={{ color: "rgba(255,255,255,0.45)" }}>
                Audit gratuit · Proposition sous 48h · Sans engagement
              </p>
              <Link href="/contact" className="btn-primary px-7 py-3.5" style={{ background: "#ffffff", color: "#0b1220" }}>
                Demander un audit gratuit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
