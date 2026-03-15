import Link from 'next/link';

export default function DecorationVitrophanie() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HEADER DE LA PAGE (Hero) */}
{/* 1. HEADER DE LA PAGE (Hero Style Tech) */}
      <section className="relative bg-[#09090b] py-24 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-klk-blue/30 blur-[100px] rounded-[100%] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold !text-white mb-6 tracking-tight">
            Studio Graphique & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-klk-blue">Vitrophanie</span>
          </h1>
          <p className="text-xl !text-slate-300 max-w-3xl mx-auto font-light">
            Transformez votre vitrine en votre meilleur outil de vente. De la création visuelle par notre graphiste jusqu'à la pose, nous habillons votre façade sur-mesure.
          </p>
        </div>
      </section>

      {/* 2. LES 3 OFFRES DESIGN */}
      <section className="py-20 bg-klk-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-klk-dark">Nos solutions d'habillage</h2>
            <p className="mt-4 text-klk-slate">À chaque commerce son identité visuelle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Offre 1 : Le Lettrage */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-klk-blue transition duration-300">
              <div className="text-4xl mb-6">✍️</div>
              <h3 className="text-2xl font-bold text-klk-dark mb-4">Lettrage & Logos</h3>
              <p className="text-klk-slate mb-4">
                Découpe de vinyle haute qualité pour afficher votre nom, vos horaires, et vos services de manière claire et élégante.
              </p>
              <ul className="text-sm text-klk-slate space-y-2">
                <li>• Large choix de couleurs</li>
                <li>• Finition mate ou brillante</li>
                <li>• Résistant aux UV et lavages</li>
              </ul>
            </div>

            {/* Offre 2 : Le Dépoli (Intimité) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-klk-blue transition duration-300">
              <div className="text-4xl mb-6">🌫️</div>
              <h3 className="text-2xl font-bold text-klk-dark mb-4">Films Dépolis (Givrés)</h3>
              <p className="text-klk-slate mb-4">
                L'effet "verre sablé" idéal pour les cabinets médicaux, agences et bureaux. Laisse passer la lumière tout en bloquant les regards.
              </p>
              <ul className="text-sm text-klk-slate space-y-2">
                <li>• Intimité totale ou partielle</li>
                <li>• Découpe de motifs personnalisés</li>
                <li>• Rendu très haut de gamme</li>
              </ul>
            </div>

            {/* Offre 3 : Le Total Covering */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-klk-blue transition duration-300">
              <div className="text-4xl mb-6">🖼️</div>
              <h3 className="text-2xl font-bold text-klk-dark mb-4">Impression Numérique</h3>
              <p className="text-klk-slate mb-4">
                Films micro-perforés ou opaques imprimés avec vos visuels promotionnels. Voyez depuis l'intérieur, affichez en grand à l'extérieur.
              </p>
              <ul className="text-sm text-klk-slate space-y-2">
                <li>• Campagnes promotionnelles</li>
                <li>• Qualité photo haute résolution</li>
                <li>• Micro-perforé (ne bloque pas la vue)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LA MÉTHODE KLK (Le partenariat Graphiste) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-klk-dark rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Un accompagnement de A à Z</h2>
              <p className="text-slate-300 mb-6">
                Vous n'avez pas de fichier visuel ? Aucun problème. Notre <strong className="text-white">studio graphique partenaire</strong> s'occupe de tout.
              </p>
              <ol className="space-y-4 text-slate-300">
                <li className="flex gap-4">
                  <span className="font-bold text-klk-blue">1.</span>
                  <span>Maquette et propositions design sur photo de votre vitrine.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-klk-blue">2.</span>
                  <span>Impression grand format par nos laboratoires pro.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-klk-blue">3.</span>
                  <span>Pose chirurgicale et sans bulles par nos techniciens.</span>
                </li>
              </ol>
            </div>
            <div className="bg-klk-blue md:w-1/2 p-10 flex flex-col justify-center items-center text-center">
              <div className="text-6xl mb-6">💡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Le Combo Ultime KLK</h3>
              <p className="text-blue-100 mb-0">
                Protégez votre nouvel investissement marketing ! Nous pouvons recouvrir votre décoration fraîchement posée avec notre film anti-acide et anti-rayure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-klk-light py-16 border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-klk-dark mb-6">
            Donnez une nouvelle dimension à votre devanture.
          </h2>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-klk-dark text-white font-bold rounded-lg shadow-md hover:bg-klk-blue transition duration-300"
          >
            Discuter de mon projet avec la graphiste
          </Link>
        </div>
      </section>

    </main>
  );
}