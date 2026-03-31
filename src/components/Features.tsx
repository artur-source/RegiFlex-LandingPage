

export default function Features() {
  const features = [
    { icon: '📋', title: 'Cadastro Digital de Pacientes', description: 'Rápido e intuitivo' },
    { icon: '📱', title: 'Geração de QR Code', description: 'Para identificação de pacientes' },
    { icon: '⚡', title: 'Leitura Rápida de Cadastro', description: 'Pela clínica via QR Code' },
    { icon: '📊', title: 'Gestão de Fila', description: 'Organização eficiente de atendimento' },
    { icon: '🎛️', title: 'Painel Administrativo', description: 'Controle total da clínica' }
  ];

  return (
    <section id="features" className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary-blue mb-4">Funcionalidades</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-primary-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-blue hover:scale-105 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-lg font-bold text-primary-blue mb-2 group-hover:text-primary-green transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Como Funciona */}
        <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-primary-blue mb-8">
                Como Funciona
              </h3>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Paciente realiza cadastro digital', desc: 'O paciente inicia o processo de cadastro através da plataforma digital' },
                  { num: '2', title: 'Sistema gera QR Code', desc: 'O sistema gera automaticamente um QR Code com as informações do paciente' },
                  { num: '3', title: 'Clínica lê o QR Code', desc: 'A clínica lê o QR Code e registra rapidamente o paciente no sistema' },
                  { num: '4', title: 'Paciente entra na fila', desc: 'O paciente é automaticamente adicionado à fila de atendimento' },
                  { num: '5', title: 'Profissional realiza atendimento', desc: 'O profissional de saúde realiza o atendimento do paciente' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="bg-gradient-to-br from-primary-blue to-primary-green text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary-blue mb-1">{step.title}</h4>
                      <p className="text-gray-700">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-green rounded-2xl blur-2xl opacity-20"></div>
                <img src="/Flux.jpg" alt="Mascote Flux" className="h-80 w-80 object-contain relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
