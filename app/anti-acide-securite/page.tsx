import Link from 'next/link';

export default function AntiAcideSecurite() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HEADER DE LA PAGE (Hero Style Tech) */}
      <section className="relative bg-[#09090b] py-24 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-klk-blue/30 blur-[100px] rounded-[100%] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold !text-white mb-6 tracking-tight">
            Films <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-klk-blue">Anti-Vandalisme</span> & Anti-Acide
          </h1>
          <p className="text-xl !text-slate-300 max-w-3xl mx-auto font-light">
            Ne remplacez plus vos vitrines à prix d'or. Protégez-les avec un bouclier invisible, résistant aux rayures, aux tags à l'acide et aux tentatives d'effraction.
          </p>
        </div>
      </section>

      {/* 2. LE PROBLÈME VS LA SOLUTION */}
      <section className="py-20 bg-klk-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Bloc Problème (La douleur du client) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Le Cauchemar du Commerçant</h3>
              <ul className="space-y-4 text-klk-slate">
                <li className="flex items-start">
                  <span className="mr-3 text-red-500 font-bold">✗</span>
                  L'acide fluorhydrique ronge le verre en profondeur, impossible à nettoyer.
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-red-500 font-bold">✗</span>
                  Le remplacement d'une grande vitrine coûte entre 1500€ et 3000€.
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-red-500 font-bold">✗</span>
                  Les assurances augmentent vos franchises après chaque sinistre.
                </li>
              </ul>
            </div>

            {/* Bloc Solution (Ce que tu vends) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-klk-blue">
              <h3 className="text-2xl font-bold text-klk-blue mb-4">La Solution KLK</h3>
              <ul className="space-y-4 text-klk-slate">
                <li className="flex items-start">
                  <span className="mr-3 text-green-500 font-bold">✓</span>
                  <strong className="text-klk-dark mr-1">Film Sacrificiel :</strong> C'est le film qui fond ou se raye, pas votre verre.
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-500 font-bold">✓</span>
                  <strong className="text-klk-dark mr-1">Remplacement express :</strong> En cas de tag, nous retirons le film abîmé et en posons un neuf à moindre coût.
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-500 font-bold">✓</span>
                  <strong className="text-klk-dark mr-1">100% Invisible :</strong> Transparence optique totale, vos clients ne verront aucune différence.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LES CARACTÉRISTIQUES TECHNIQUES (Pour faire Pro) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-klk-dark">Une technologie de pointe sur votre façade</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-klk-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4">💎</div>
              <h4 className="text-xl font-bold text-klk-dark mb-2">Traitement Hard-Coat</h4>
              <p className="text-klk-slate text-sm">Couche externe anti-rayures pour résister aux lavages quotidiens (raclette) sans s'opacifier.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-klk-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🛡️</div>
              <h4 className="text-xl font-bold text-klk-dark mb-2">Épaisseur Sécurité</h4>
              <p className="text-klk-slate text-sm">Films de 100 à 150 microns qui maintiennent le verre en place en cas de tentative de bris de glace.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-klk-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-4">☀️</div>
              <h4 className="text-xl font-bold text-klk-dark mb-2">Filtre UV Intégré</h4>
              <p className="text-klk-slate text-sm">Rejette jusqu'à 99% des UV nocifs, protégeant vos articles en vitrine de la décoloration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION (L'appel à l'action final) */}
      <section className="bg-klk-light py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-klk-dark mb-6">
            Arrêtez de payer pour les dégradations des autres.
          </h2>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-klk-dark text-white font-bold rounded-lg shadow-md hover:bg-klk-blue transition duration-300"
          >
            Obtenir un devis gratuit pour ma vitrine
          </Link>
          <p className="mt-4 text-sm text-klk-slate">Intervention sur Paris et région parisienne (78, 92, etc.)</p>
        </div>
      </section>

    </main>
  );
}