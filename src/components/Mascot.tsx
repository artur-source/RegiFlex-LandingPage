import React from 'react';

const Mascot: React.FC = () => {
  return (
    <section id="mascot" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 rounded-[3rem] p-12 lg:p-20 relative border border-primary-blue/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-blue/20 rounded-full blur-3xl group-hover:bg-primary-green/20 transition-colors duration-700" />
              <img 
                src="/Flux.jpg" 
                alt="Mascote Flux" 
                className="relative z-10 w-full max-w-md mx-auto transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl" 
              />
            </div>
            
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-primary-blue text-white text-sm font-bold uppercase tracking-widest">
                Conheça o Flux
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-gray leading-tight">
                O mascote oficial do <span className="text-primary-blue">RegiFlex</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Flux é o mascote oficial do RegiFlex. Ele representa o fluxo organizado de atendimento que a plataforma proporciona às clínicas.
                </p>
                <p>
                  Seu nome deriva da palavra "fluxo", simbolizando eficiência, movimento contínuo e organização no processo de cadastro e atendimento de pacientes.
                </p>
                <p className="font-semibold text-primary-green">
                  O Flux representa a missão do RegiFlex: transformar um processo burocrático em uma experiência simples e rápida.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-primary-blue mb-1">Agilidade</p>
                  <p className="text-sm text-gray-500">Movimento contínuo</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-primary-green mb-1">Simplicidade</p>
                  <p className="text-sm text-gray-500">Fácil entendimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mascot;
