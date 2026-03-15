import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; 
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Configuration de la police de corps de texte (Inter)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

// Configuration de la police de titres (Poppins - Bold)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '800'], 
  variable: '--font-poppins',
});

// Métadonnées du site (SEO)
export const metadata: Metadata = {
  title: "KLK Solutions | Protection et Décoration de Vitrines",
  description: "Pose de films anti-acide, anti-rayures, et création graphique sur-mesure pour les commerces en Île-de-France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen bg-klk-light text-klk-slate font-sans antialiased">
        <Header />
        
        <div className="flex-grow">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}