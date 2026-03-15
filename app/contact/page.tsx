// app/contact/page.tsx
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HEADER DE LA PAGE (Hero Style Tech) */}
      <section className="relative bg-[#09090b] py-24 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-klk-blue/30 blur-[100px] rounded-[100%] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold !text-white mb-6 tracking-tight">
            Demander un <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-klk-blue">Devis Gratuit</span>
          </h1>
          <p className="text-xl !text-slate-300 max-w-2xl mx-auto font-light">
            Décrivez-nous votre projet ou votre problématique. Nous vous recontactons sous 24 à 48h pour une étude sur-mesure de votre devanture.
          </p>
        </div>
      </section>

      {/* 2. CONTENU PRINCIPAL (Infos + Formulaire) */}
      <section className="py-20 bg-klk-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Colonne de Gauche : Infos & Réassurance */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-klk-dark mb-6">Contactez-nous</h2>
              <p className="text-klk-slate mb-10">
                Une urgence suite à un acte de vandalisme ? Un projet de rénovation esthétique ? Notre équipe intervient sur tout Paris et l'Île-de-France.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-xl shadow-sm mr-4 shrink-0">📍</div>
                  <div>
                    <h4 className="font-bold text-klk-dark">Siège Social</h4>
                    <p className="text-klk-slate text-sm">60 Rue François 1er<br />75008 Paris</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-xl shadow-sm mr-4 shrink-0">✉️</div>
                  <div>
                    <h4 className="font-bold text-klk-dark">Email</h4>
                    <a href="mailto:contact@klk-solutions.fr" className="text-klk-blue text-sm hover:underline">contact@klk-solutions.fr</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-xl shadow-sm mr-4 shrink-0">🕒</div>
                  <div>
                    <h4 className="font-bold text-klk-dark">Horaires (Bureaux)</h4>
                    <p className="text-klk-slate text-sm">Lundi - Vendredi : 9h00 - 18h00<br/><span className="italic text-xs">*Interventions possibles en horaires décalés</span></p>
                  </div>
                </div>
              </div>

              {/* Teasing Abonnement */}
              <div className="mt-12 p-6 bg-klk-dark rounded-xl text-white shadow-lg border-t-4 border-klk-blue">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔒</span>
                  <h4 className="font-bold text-lg">Contrat Sérénité KLK</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  Découvrez prochainement notre abonnement trimestriel pour un remplacement express et sans frais supplémentaires de vos films vandalisés. Parlez-en dans votre message !
                </p>
              </div>
            </div>

            {/* Colonne de Droite : Le Formulaire */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                <form className="space-y-6">
                  
                  {/* Ligne 1 : Nom et Société */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-klk-dark mb-2">Nom / Prénom *</label>
                      <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-klk-blue focus:border-klk-blue outline-none transition bg-slate-50 text-slate-900" placeholder="Jean Dupont" required />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-klk-dark mb-2">Nom du Commerce / Société</label>
                      <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-klk-blue focus:border-klk-blue outline-none transition bg-slate-50 text-slate-900" placeholder="Pharmacie de la Place" />
                    </div>
                  </div>

                  {/* Ligne 2 : Email et Téléphone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-klk-dark mb-2">Email *</label>
                      <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-klk-blue focus:border-klk-blue outline-none transition bg-slate-50 text-slate-900" placeholder="jean@exemple.com" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-klk-dark mb-2">Téléphone *</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-klk-blue focus:border-klk-blue outline-none transition bg-slate-50 text-slate-900" placeholder="06 12 34 56 78" required />
                    </div>
                  </div>

                  {/* Ligne 3 : Sélection du besoin */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-klk-dark mb-2">Votre besoin principal *</label>
                    <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-klk-blue focus:border-klk-blue outline-none transition bg-slate-50 text-slate-900" required>
                      <option value="">Sélectionnez une option...</option>
                      <option value="anti-vandalisme">Bouclier Anti-Vandalisme (Acide / Rayure)</option>
                      <option value="decoration">Décoration / Vitrophanie / Design</option>
                      <option value="solaire">Protection Solaire / Anti-UV</option>
                      <option value="multiple">Projet Complet (Plusieurs besoins)</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  {/* Ligne 4 : Le Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-klk-dark mb-2">Détails de votre projet *</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-klk-blue focus:border-klk-blue outline-none transition bg-slate-50 text-slate-900 resize-none" placeholder="Décrivez la taille de votre vitrine, l'urgence de la situation, etc." required></textarea>
                  </div>

                  {/* Bouton de soumission */}
                  <div>
                    <button type="submit" className="w-full py-4 bg-klk-blue text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                      Envoyer ma demande
                    </button>
                    <p className="text-xs text-center text-klk-slate mt-4">
                      Vos données sont sécurisées et ne seront jamais revendues à des tiers.
                    </p>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}