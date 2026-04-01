import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary-gray">
            A solução <span className="text-primary-blue">RegiFlex</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            RegiFlex é uma plataforma digital criada para otimizar o cadastro de pacientes e organizar o fluxo de atendimento em clínicas. A solução permite que pacientes realizem seu cadastro de forma rápida e que a clínica gerencie a fila de atendimento de maneira eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          <div className="bg-primary-blue/5 p-8 rounded-3xl border border-primary-blue/10 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary-blue rounded-2xl flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-gray mb-4">Cadastro Digital</h3>
            <p className="text-gray-600">Elimine papéis e automatize a entrada de dados dos pacientes de forma segura.</p>
          </div>

          <div className="bg-primary-green/5 p-8 rounded-3xl border border-primary-green/10 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary-green rounded-2xl flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-gray mb-4">Fila Inteligente</h3>
            <p className="text-gray-600">Visualize e gerencie a ordem de atendimento em tempo real com precisão.</p>
          </div>

          <div className="bg-primary-yellow/5 p-8 rounded-3xl border border-primary-yellow/10 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary-yellow rounded-2xl flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-gray mb-4">Eficiência Total</h3>
            <p className="text-gray-600">Reduza o tempo de espera e melhore a experiência do paciente na sua clínica.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
