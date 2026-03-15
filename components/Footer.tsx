// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-klk-dark text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Colonne 1 : La Marque & Réassurance */}
          <div>
            <span className="text-2xl font-extrabold text-white tracking-tighter block mb-4">
              KLK <span className="text-klk-blue">Solutions</span>
            </span>
            <p className="text-sm mb-4 leading-relaxed text-slate-400">
              L'expert francilien de la protection et de la mise en valeur de vos vitrines commerciales. Sécurité, design et tranquillité d'esprit pour les professionnels.
            </p>
            <p className="text-xs text-slate-500 font-mono">SIREN : 941 365 397</p>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Nos Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/anti-acide-securite" className="hover:text-klk-blue transition flex items-center gap-2">
                  <span>🛡️</span> Films Anti-Vandalisme
                </Link>
              </li>
              <li>
                <Link href="/decoration-vitrophanie" className="hover:text-klk-blue transition flex items-center gap-2">
                  <span>🎨</span> Décoration & Vitrophanie
                </Link>
              </li>
              <li>
                <Link href="/protection-solaire" className="hover:text-klk-blue transition flex items-center gap-2">
                  <span>☀️</span> Films Solaires
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Adresse Prestige */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact & Siège</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-3 text-lg">📍</span>
                <span>60 Rue François 1er<br />75008 Paris<br />France</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-lg">✉️</span>
                <a href="mailto:contact@klk-solutions.fr" className="hover:text-white transition">
                  contact@klk-solutions.fr
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-lg">📞</span>
                <a href="/contact" className="hover:text-white transition">
                  Demander un rappel
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne du bas : Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} KLK Solutions. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Intervention rapide sur Paris et toute l'Île-de-France.</p>
        </div>
      </div>
    </footer>
  );
}