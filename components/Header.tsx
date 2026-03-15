// src/components/Header.tsx (ou components/Header.tsx selon ton arbo)
import Link from 'next/link';
import Image from 'next/image'; 
// On supprime la ligne "import logoImg..." !

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> 
          
          {/* Logo cliquable */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logoklk.png" /* Le chemin absolu magique vers le dossier public ! */
                alt="KLK Solutions Logo" 
                width={200} 
                height={60}
                className="h-16 w-auto" 
                priority 
              />
            </Link>
          </div>

          {/* ... le reste du code (les menus et le bouton) ne change pas ! ... */}
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/anti-acide-securite" className="text-klk-slate hover:text-klk-blue font-medium transition">
              Anti-Vandalisme
            </Link>
            <Link href="/decoration-vitrophanie" className="text-klk-slate hover:text-klk-blue font-medium transition">
              Décoration & Design
            </Link>
            <Link href="/protection-solaire" className="text-klk-slate hover:text-klk-blue font-medium transition">
              Protection Solaire
            </Link>
          </nav>

          <div className="flex items-center">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-klk-dark text-white font-semibold rounded-md hover:bg-klk-blue transition duration-300 shadow-sm text-sm"
            >
              Demander un devis gratuit
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}