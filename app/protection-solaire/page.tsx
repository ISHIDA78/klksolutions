import Link from 'next/link';

export default function ProtectionSolaire() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HEADER DE LA PAGE (Hero) */}
      {/* 1. HEADER DE LA PAGE (Hero Style Tech) */}
      <section className="relative bg-[#09090b] py-24 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-klk-blue/30 blur-[100px] rounded-[100%] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold !text-white mb-6 tracking-tight">
            Confort <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-klk-blue">Solaire & Thermique</span>
          </h1>
          <p className="text-xl !text-slate-300 max-w-3xl mx-auto font-light">
            Transformez vos vitrages en boucliers thermiques. Baissez la température de votre boutique, réduisez vos factures de climatisation et protégez vos articles des UV.
          </p>
        </div>
      </section>

      {/* 2. LES 3 GRANDS BÉNÉFICES (Pourquoi le client doit acheter) */}
      <section className="py-20 bg-klk-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-klk-dark">Pourquoi équiper vos vitrines ?</h2>
            <p className="mt-4 text-klk-slate">Un investissement qui s'autofinance par les économies d'énergie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-50 text-klk-blue rounded-full flex items-center justify-center text-2xl mb-6">❄️</div>
              <h3 className="text-xl font-bold text-klk-dark mb-3">Rejet de Chaleur</h3>
              <p className="text-klk-slate">
                Nos films rejettent jusqu'à 80% de l'énergie solaire. Fini l'effet de serre intenable pour vos clients et vos employés pendant la canicule.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-50 text-klk-blue rounded-full flex items-center justify-center text-2xl mb-6">📉</div>
              <h3 className="text-xl font-bold text-klk-dark mb-3">Économies de Climatisation</h3>
              <p className="text-klk-slate">
                En bloquant la chaleur à l'extérieur, vous soulagez votre système de climatisation. Réduisez considérablement votre facture d'électricité estivale.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-50 text-klk-blue rounded-full flex items-center justify-center text-2xl mb-6">👕</div>
              <h3 className="text-xl font-bold text-klk-dark mb-3">Protection Anti-Décoloration</h3>
              <p className="text-klk-slate">
                Le filtre anti-UV (99%) bloque les rayons responsables du jaunissement des emballages et de la décoloration des vêtements et du mobilier en vitrine.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. NOS SOLUTIONS TECHNIQUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-klk-dark mb-6">La technologie adaptée à vos besoins</h2>
            <div className="space-y-6">
              
              <div className="border-l-4 border-klk-blue pl-4">
                <h4 className="text-lg font-bold text-klk-dark">Le Film Effet Miroir (Miroir Sans Tain)</h4>
                <p className="text-klk-slate text-sm mt-1">
                  Le champion du rejet de chaleur. Il offre une intimité totale de jour (on ne voit pas l'intérieur depuis la rue) tout en vous laissant une vue parfaite sur l'extérieur. Idéal pour les bureaux en rez-de-chaussée.
                </p>
              </div>

              <div className="border-l-4 border-klk-dark pl-4">
                <h4 className="text-lg font-bold text-klk-dark">Le Film Solaire Neutre (Transparent)</h4>
                <p className="text-klk-slate text-sm mt-1">
                  Une technologie nano-céramique qui bloque les infrarouges (la chaleur) sans modifier l'aspect visuel de votre verre. Vos clients continuent de voir parfaitement votre vitrine de l'extérieur.
                </p>
              </div>

            </div>
          </div>

          <div className="md:w-1/2 bg-klk-dark p-10 rounded-3xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Diagnostic Thermique KLK</h3>
            <p className="text-slate-300 mb-6">
              Chaque exposition est différente (Plein Sud, Est, Ouest). Nous nous déplaçons dans votre commerce pour évaluer votre vitrage et vous conseiller le film offrant le meilleur ratio luminosité/rejet de chaleur.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3"><span className="text-klk-blue">✓</span> Devis gratuit sur place</li>
              <li className="flex items-center gap-3"><span className="text-klk-blue">✓</span> Échantillons de démonstration</li>
              <li className="flex items-center gap-3"><span className="text-klk-blue">✓</span> Pose garantie sans bulles</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-klk-light py-16 border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-klk-dark mb-6">
            Préparez votre commerce pour le prochain été.
          </h2>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-klk-dark text-white font-bold rounded-lg shadow-md hover:bg-klk-blue transition duration-300"
          >
            Demander mon étude solaire gratuite
          </Link>
        </div>
      </section>

    </main>
  );
}