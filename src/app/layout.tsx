import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EBI-IMT — L'infrastructure qui ne dort jamais | Afrique de l'Ouest",
  description:
    "Depuis 1993, EBI-IMT supervise, maintient et garantit l'infrastructure IT des entreprises au Togo, Bénin, Burkina Faso, Niger, Mali et Tchad. Intégration, support 24/7, SLA contractuel.",
  keywords: "EBI-IMT, informatique Togo, intégrateur IT, Fujitsu, Synology, MOBOTIX, réseau, Lomé, Afrique, SLA, support 24/7",
  authors: [{ name: "EBI-IMT" }],
  openGraph: {
    title: "EBI-IMT — L'infrastructure qui ne dort jamais",
    description: "30+ ans d'expertise IT, 6 pays, supervision 24/7. Le partenaire infrastructure de l'Afrique de l'Ouest.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
