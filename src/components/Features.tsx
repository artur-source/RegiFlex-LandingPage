import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '✓',
      title: 'Check-in Digital',
      description: 'Pacientes realizam check-in via QR Code ou dispositivo, eliminando filas na recepção'
    },
    {
      icon: '📋',
      title: 'Fila Virtual',
      description: 'Organização automática de filas com visualização em tempo real para pacientes e profissionais'
    },
    {
      icon: '👥',
      title: 'Cadastro de Pacientes',
      description: 'Registro rápido e intuitivo com reutilização de dados para pacientes recorrentes'
    },
    {
      icon: '📊',
      title: 'Dashboard em Tempo Real',
      description: 'Visualização de métricas operacionais: pacientes em espera, em atendimento e tempo médio'
    },
    {
      icon: '🏥',
      title: 'Integração com Profissionais',
      description: 'Sincronização entre recepção e consultórios, com alertas para chamada de pacientes'
    },
    {
      icon: '📈',
      title: 'Relatórios e Analytics',
      description: 'Geração de relatórios de eficiência, produtividade e análise de padrões de atendimento'
    },
    {
      icon: '🔒',
      title: 'Segurança de Dados',
      description: 'Criptografia SSL/TLS e conformidade com LGPD para proteção de dados sensíveis'
    },
    {
      icon: '📱',
      title: 'Responsividade Total',
      description: 'Interface adaptável para desktop, tablet e smartphone com experiência otimizada'
    },
    {
      icon: '⚡',
      title: 'Atualizações em Tempo Real',
      description: 'Sincronização instantânea via WebSocket para informações sempre atualizadas'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-4">
          Principais Funcionalidades
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          RegiFlex oferece um conjunto completo de ferramentas para otimizar o fluxo de atendimento clínico
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fluxo de Uso */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">
            Fluxo de Uso
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-3">
                1
              </div>
              <p className="text-center font-semibold text-gray-700">Paciente chega</p>
            </div>
            <div className="hidden md:block text-primary-blue text-2xl">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-3">
                2
              </div>
              <p className="text-center font-semibold text-gray-700">Check-in digital</p>
            </div>
            <div className="hidden md:block text-primary-blue text-2xl">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-3">
                3
              </div>
              <p className="text-center font-semibold text-gray-700">Entra na fila</p>
            </div>
            <div className="hidden md:block text-primary-blue text-2xl">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-3">
                4
              </div>
              <p className="text-center font-semibold text-gray-700">É chamado</p>
            </div>
            <div className="hidden md:block text-primary-blue text-2xl">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-3">
                5
              </div>
              <p className="text-center font-semibold text-gray-700">Atendimento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
