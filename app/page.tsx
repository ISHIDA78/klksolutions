// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. SECTION HERO (La promesse forte) */}
    {/* 1. SECTION HERO (Style Tech / Agentiqua) */}
      <section className="relative bg-[#09090b] pt-32 pb-40 overflow-hidden border-b border-gray-800">
        
        {/* Le secret n°1 : La Grille d'arrière-plan (Grid) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Le secret n°2 : Le Halo lumineux bleu (Glow) */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-klk-blue/30 blur-[120px] rounded-[100%] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Un petit badge très "Startup" au-dessus du titre */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-klk-blue animate-pulse"></span>
            L'innovation au service de vos vitrines
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold !text-white tracking-tight mb-8">
            Protégez et Sublimez la vitrine <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-klk-blue">
              de votre commerce.
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl text-xl !text-slate-300 mx-auto mb-10 font-light">
            KLK Solutions gère votre devanture de A à Z en Île-de-France. 
            De la création graphique sur-mesure à la pose de films invisibles haute résistance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-black font-bold rounded-lg shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:bg-gray-200 transition duration-300"
            >
              Demander un devis gratuit
            </Link>
            <Link 
              href="#services" 
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-lg border border-white/10 hover:bg-white/10 transition duration-300 backdrop-blur-sm"
            >
              Découvrir nos solutions
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION SERVICES (Les 3 piliers) */}
      <section id="services" className="py-24 bg-klk-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-klk-dark sm:text-4xl">
              Une expertise à 360° pour votre façade
            </h2>
            <p className="mt-4 text-lg text-klk-slate">
              Ne laissez plus votre image au hasard (ni aux vandales).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-klk-blue rounded-lg flex items-center justify-center text-2xl mb-6">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-klk-dark mb-3">Bouclier Anti-Vandalisme</h3>
              <p className="text-klk-slate mb-6">
                Pose de films sacrificiels invisibles. Protégez vos vitrages contre les tags à l'acide, les rayures et retardez les effractions. Économisez sur vos franchises d'assurance.
              </p>
              <Link href="/anti-acide-securite" className="text-klk-blue font-semibold hover:underline">
                En savoir plus &rarr;
              </Link>
            </div>

            {/* Carte Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-klk-blue rounded-lg flex items-center justify-center text-2xl mb-6">
                🎨
              </div>
              <h3 className="text-xl font-bold text-klk-dark mb-3">Décoration & Vitrophanie</h3>
              <p className="text-klk-slate mb-6">
                Notre studio graphique partenaire crée votre identité visuelle. Lettrage, habillage de vitrine, films dépolis pour l'intimité. Attirez le regard depuis la rue.
              </p>
              <Link href="/decoration-vitrophanie" className="text-klk-blue font-semibold hover:underline">
                En savoir plus &rarr;
              </Link>
            </div>

            {/* Carte Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-klk-blue rounded-lg flex items-center justify-center text-2xl mb-6">
                ☀️
              </div>
              <h3 className="text-xl font-bold text-klk-dark mb-3">Confort Solaire & Thermique</h3>
              <p className="text-klk-slate mb-6">
                Films anti-chaleur et anti-UV. Réduisez la température de votre boutique en été, soulagez votre climatisation et protégez vos marchandises de la décoloration.
              </p>
              <Link href="/protection-solaire" className="text-klk-blue font-semibold hover:underline">
                En savoir plus &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION "LA DIFFÉRENCE KLK" (Ton pitch de restaurateur + Abonnement) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-klk-dark rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
            
            <div className="p-10 lg:p-16 lg:w-2/3 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                L'exigence du terrain, comprise par un ancien gérant.
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Ancien gérant de restaurant, je connais parfaitement vos impératifs : le manque de temps, le stress des imprévus, et le besoin de résultats rapides. KLK Solutions a été pensé pour vous : interventions discrètes (tôt le matin ou tard le soir), chantiers propres, et solutions durables.
              </p>
              
              {/* Le Teasing de l'abonnement */}
              <div className="mt-6 p-6 bg-slate-800 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔒</span>
                  <h4 className="text-white font-bold text-xl">Bientôt : Le Contrat Sérénité KLK</h4>
                </div>
                <p className="text-gray-400">
                  Ne payez plus vos vitres brisées au prix fort. Découvrez prochainement notre abonnement trimestriel incluant le remplacement express de vos films vandalisés.
                </p>
              </div>
            </div>

            {/* Un petit bloc d'appel à l'action visuel */}
            <div className="bg-klk-blue lg:w-1/3 p-10 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Prêt à sécuriser votre commerce ?</h3>
              <p className="text-blue-100 mb-8">Devis sur-mesure sous 48h sur Paris et toute l'Île-de-France.</p>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-klk-blue font-bold rounded-lg w-full hover:bg-gray-50 transition"
              >
                Contactez-nous
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}