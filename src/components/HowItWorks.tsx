import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Chegada à clínica',
    description: 'O paciente chega à clínica e encontra o QR Code do RegiFlex disponível na recepção.'
  },
  {
    number: '02',
    title: 'Acesso ao cadastro',
    description: 'O paciente escaneia o QR Code com o celular e acessa o formulário digital.'
  },
  {
    number: '03',
    title: 'Preenchimento dos dados',
    description: 'O paciente preenche suas informações diretamente no sistema.'
  },
  {
    number: '04',
    title: 'Registro automático',
    description: 'O sistema envia os dados para a clínica e registra o paciente.'
  },
  {
    number: '05',
    title: 'Entrada na fila',
    description: 'O paciente é incluído na fila de atendimento e aguarda ser chamado.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-primary-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl font-bold">Como Funciona</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Fluxo do sistema simples e intuitivo para o paciente e para a clínica.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-primary-blue via-primary-green to-primary-blue opacity-20" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-primary-blue/20 border-2 border-primary-blue rounded-full flex items-center justify-center text-2xl font-bold text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                  {step.number}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
