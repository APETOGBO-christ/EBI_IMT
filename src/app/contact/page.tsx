"use client";

import { useState } from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedSection>
              <div className="label mb-6 flex items-center gap-3" style={{ color: "var(--signal-text)" }}>
                <span className="signal-dot" /> // Contact
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.95] mb-6" style={{ color: "var(--text-primary)" }}>
                On vous répond <span style={{ color: "var(--signal-text)" }}>en moins de 24h.</span>
              </h1>
              <p className="text-lg max-w-lg" style={{ color: "var(--text-secondary)" }}>
                Audit gratuit. Devis sous 48h. Aucun engagement avant votre accord.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid var(--border)" }}>
                <Image src="/img/network.jpg" alt="Couverture régionale EBI-IMT" fill sizes="50vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent 50%, var(--signal-soft))" }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Split contact section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <div
              className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Left — dark image info panel */}
              <div className="relative lg:col-span-2 p-8 lg:p-10 min-h-[520px] flex flex-col justify-between">
                <div className="absolute inset-0">
                  <Image src="/img/network.jpg" alt="" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "rgba(7,10,18,0.88)" }} />
                </div>
                <div className="relative z-10">
                  <p className="font-mono text-[11px] tracking-widest uppercase mb-8" style={{ color: "rgba(255,184,77,0.6)" }}>// Contact direct</p>

                  {/* Contact info */}
                  <div className="space-y-7 mb-10">
                    <div>
                      <p className="font-mono text-[10px] tracking-widest uppercase mb-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>Téléphone</p>
                      <div className="space-y-1">
                        <a href="tel:+22870013069" className="block text-white font-semibold text-lg hover:text-amber-400 transition-colors">
                          +228 70 01 30 69
                        </a>
                        <a href="tel:+22870454381" className="block text-white font-semibold text-lg hover:text-amber-400 transition-colors">
                          +228 70 45 43 81
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-widest uppercase mb-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>Email</p>
                      <a href="mailto:ebi-togo@hotmail.com" className="text-white font-semibold hover:text-amber-400 transition-colors">
                        ebi-togo@hotmail.com
                      </a>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-widest uppercase mb-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>Siège</p>
                      <p className="text-white font-medium">Lomé, Togo</p>
                      <p className="text-white/50 text-sm">Afrique de l&apos;Ouest</p>
                    </div>
                  </div>

                  {/* Zones */}
                  <div className="mb-8">
                    <p className="font-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Zones d&apos;intervention</p>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {[["TG","Togo"],["BJ","Bénin"],["BF","Burkina Faso"],["NE","Niger"],["ML","Mali"],["TD","Tchad"]].map(([code, pays]) => (
                        <div key={pays} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                          <span className="font-mono text-[11px] font-bold" style={{ color: "#ffb84d" }}>{code}</span>{pays}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Horaires</p>
                    <div className="space-y-2 text-sm">
                      {[
                        { j: "Lundi – Vendredi", h: "08h00 – 18h00" },
                        { j: "Samedi",            h: "09h00 – 13h00" },
                        { j: "Support urgence",   h: "24h / 7j" },
                      ].map(({ j, h }) => (
                        <div key={j} className="flex justify-between" style={{ color: "rgba(255,255,255,0.55)" }}>
                          <span>{j}</span>
                          <span className="font-mono font-semibold" style={{ color: "#ffb84d" }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status dot */}
                <div className="relative z-10 flex items-center gap-2.5 mt-8">
                  <span className="signal-dot" />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>Réponse garantie en &lt; 24h ouvrées</span>
                </div>
              </div>

              {/* Right — form */}
              <div className="lg:col-span-3 p-8 lg:p-10" style={{ background: "var(--bg-card)" }}>
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                    <CheckCircle2 className="w-14 h-14 mx-auto mb-5" style={{ color: "var(--signal)" }} />
                    <h2 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Message envoyé.</h2>
                    <p style={{ color: "var(--text-secondary)" }}>Notre équipe vous contacte dans les 24h ouvrées.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>Votre demande</h2>
                    <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Audit gratuit · Sans engagement</p>

                    {status === "error" && (
                      <div className="mb-6 p-3 rounded-lg text-sm" style={{ background: "rgba(220,38,38,0.12)", border: "1px solid rgba(220,38,38,0.3)", color: "#ef4444" }}>
                        Une erreur s&apos;est produite. Veuillez réessayer ou nous écrire directement à <a href="mailto:ebi-togo@hotmail.com" style={{ textDecoration: "underline" }}>ebi-togo@hotmail.com</a>.
                    </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="label block mb-1.5">Prénom & Nom *</label>
                          <input id="name" required className="input-field" placeholder="Jean Dupont" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </div>
                        <div>
                          <label htmlFor="company" className="label block mb-1.5">Entreprise</label>
                          <input id="company" className="input-field" placeholder="Mon Entreprise" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="label block mb-1.5">Email *</label>
                          <input id="email" required type="email" className="input-field" placeholder="vous@entreprise.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </div>
                        <div>
                          <label htmlFor="phone" className="label block mb-1.5">Téléphone</label>
                          <input id="phone" type="tel" className="input-field" placeholder="+228 XX XX XX XX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="service" className="label block mb-1.5">Service souhaité</label>
                        <select id="service" className="input-field" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                          <option value="">Choisir un service</option>
                          <option>Intégration systèmes & réseaux</option>
                          <option>Support & maintenance</option>
                          <option>Sécurité & surveillance</option>
                          <option>Développement sur mesure</option>
                          <option>Domotique & bâtiments</option>
                          <option>Fourniture de matériel</option>
                          <option>Audit gratuit</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="label block mb-1.5">Votre besoin *</label>
                        <textarea id="message" required rows={5} className="input-field resize-none" placeholder="Décrivez votre projet ou problème en quelques lignes..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                      </div>
                      <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center py-3.5" style={status === "loading" ? { opacity: 0.6, pointerEvents: "none" } : undefined}>
                        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"} <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick action bar */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/Stage.jpg" alt="" fill className="object-cover object-top" />
          <div className="absolute inset-0" style={{ background: "rgba(7,10,18,0.85)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <AnimatedSection>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase flex items-center justify-center gap-3 mb-5" style={{ color: "var(--signal)" }}>
              <span className="signal-dot" /> Audit gratuit en 24h
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.05]">
              Appelez-nous. On intervient <span style={{ color: "var(--signal)" }}>dès demain.</span>
            </h2>
            <a href="tel:+22870013069" className="btn-primary px-7 py-3.5 inline-flex" style={{ background: "#ffffff", color: "#0b1220" }}>
              <Phone className="w-5 h-5" /> +228 70 01 30 69
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
