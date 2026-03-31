

export default function Features() {
  const features = [
    {
      icon: '📋',
      title: 'Cadastro Digital de Pacientes',
      description: 'Rápido e intuitivo'
    },
    {
      icon: '📱',
      title: 'Geração de QR Code',
      description: 'Para identificação de pacientes'
    },
    {
      icon: '⚡',
      title: 'Leitura Rápida de Cadastro',
      description: 'Pela clínica via QR Code'
    },
    {
      icon: '📊',
      title: 'Gestão de Fila',
      description: 'Organização eficiente de atendimento'
    },
    {
      icon: '🎛️',
      title: 'Painel Administrativo',
      description: 'Controle total da clínica'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          Funcionalidades
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-primary-blue mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Como Funciona */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">
            Como Funciona
          </h3>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-blue mb-2">Etapa 1: Paciente realiza cadastro digital</h4>
                <p className="text-gray-700">O paciente inicia o processo de cadastro através da plataforma digital</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-blue mb-2">Etapa 2: Sistema gera QR Code</h4>
                <p className="text-gray-700">O sistema gera automaticamente um QR Code com as informações do paciente</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-blue mb-2">Etapa 3: Clínica lê o QR Code</h4>
                <p className="text-gray-700">A clínica lê o QR Code e registra rapidamente o paciente no sistema</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-blue mb-2">Etapa 4: Paciente entra na fila</h4>
                <p className="text-gray-700">O paciente é automaticamente adicionado à fila de atendimento</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-blue mb-2">Etapa 5: Profissional realiza atendimento</h4>
                <p className="text-gray-700">O profissional de saúde realiza o atendimento do paciente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
