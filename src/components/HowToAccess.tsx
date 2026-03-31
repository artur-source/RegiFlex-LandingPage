import React from 'react';

export default function HowToAccess() {
  const steps = [
    {
      number: 1,
      title: 'Cadastro Simples',
      description: 'Crie uma conta em minutos com informações básicas da sua clínica'
    },
    {
      number: 2,
      title: 'Configuração Rápida',
      description: 'Configure profissionais, horários e preferências em poucos cliques'
    },
    {
      number: 3,
      title: 'Treinamento',
      description: 'Receba suporte e treinamento da nossa equipe para sua equipe'
    },
    {
      number: 4,
      title: 'Ativação',
      description: 'Comece a usar RegiFlex imediatamente com seus pacientes'
    }
  ];

  const plans = [
    {
      name: 'Gratuito',
      price: 'R$ 0',
      period: 'por mês',
      description: 'Ideal para microclínicas',
      features: [
        'Até 10 atendimentos/dia',
        'Check-in digital básico',
        'Fila virtual',
        'Dashboard simples',
        'Suporte por email'
      ],
      cta: 'Começar Grátis',
      highlighted: false
    },
    {
      name: 'Profissional',
      price: 'R$ 199',
      period: 'por mês',
      description: 'Mais popular',
      features: [
        'Até 100 atendimentos/dia',
        'Check-in avançado com QR Code',
        'Fila virtual com geofencing',
        'Dashboard completo',
        'Relatórios e analytics',
        'Integração com profissionais',
        'Suporte prioritário',
        'Até 3 usuários'
      ],
      cta: 'Teste Agora',
      highlighted: true
    },
    {
      name: 'Empresarial',
      price: 'Customizado',
      period: 'sob consulta',
      description: 'Para grandes operações',
      features: [
        'Atendimentos ilimitados',
        'Todas as funcionalidades',
        'Multi-unidade',
        'API customizada',
        'Integração com sistemas legados',
        'Suporte 24/7',
        'Usuários ilimitados',
        'SLA garantido'
      ],
      cta: 'Solicitar Demonstração',
      highlighted: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          Como Contratar ou Utilizar
        </h2>

        {/* Passos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary-blue mb-12 text-center">
            Processo de Onboarding
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-lg p-6 text-center shadow-md h-full">
                  <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-bold text-primary-blue mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
                {step.number < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary-blue text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Planos */}
        <div>
          <h3 className="text-2xl font-bold text-primary-blue mb-12 text-center">
            Planos e Preços
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary-blue to-primary-green text-white ring-2 ring-primary-yellow'
                    : 'bg-white'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-primary-yellow text-primary-blue text-center py-2 font-bold">
                    MAIS POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h4 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-primary-blue'}`}>
                    {plan.name}
                  </h4>
                  <p className={`mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-primary-blue'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                      {' '}{plan.period}
                    </span>
                  </div>
                  <button
                    className={`w-full py-3 rounded-lg font-bold mb-6 transition ${
                      plan.highlighted
                        ? 'bg-primary-yellow text-primary-blue hover:bg-yellow-400'
                        : 'bg-primary-blue text-white hover:bg-primary-green'
                    }`}
                  >
                    {plan.cta}
                  </button>
                  <ul className={`space-y-3 ${plan.highlighted ? 'text-blue-100' : 'text-gray-700'}`}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={plan.highlighted ? 'text-primary-yellow' : 'text-primary-green'}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-blue to-primary-green rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para transformar sua clínica?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Comece com uma demonstração gratuita ou teste o plano gratuito agora mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-yellow text-primary-blue font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition">
              Teste Grátis por 14 Dias
            </button>
            <button className="bg-white text-primary-blue font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Agendar Demonstração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
