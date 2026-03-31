

export default function Differentials() {
  const differentials = [
    {
      title: 'Solução Integrada',
      description: 'Diferente de outras soluções, RegiFlex une check-in, fila e registro de atendimentos em uma única plataforma'
    },
    {
      title: 'Fácil Implementação',
      description: 'Sem necessidade de infraestrutura complexa. Acesso imediato via navegador, sem instalações'
    },
    {
      title: 'Baixo Custo',
      description: 'Modelo SaaS acessível para clínicas de pequeno e médio porte, com opção freemium'
    },
    {
      title: 'Interface Intuitiva',
      description: 'Design centrado no usuário com foco em usabilidade e acessibilidade digital'
    },
    {
      title: 'Escalabilidade',
      description: 'Arquitetura preparada para crescer com sua clínica, de 1 a milhões de atendimentos'
    },
    {
      title: 'Suporte Especializado',
      description: 'Equipe dedicada para implementação, treinamento e suporte contínuo'
    }
  ];

  const comparativeAdvantages = [
    {
      competitor: 'SmartCheck-In',
      advantage: 'RegiFlex integra check-in com fila e registro, não apenas check-in isolado'
    },
    {
      competitor: 'QLESS',
      advantage: 'RegiFlex automatiza cadastro de pacientes, não requer dados manuais repetidos'
    },
    {
      competitor: 'NextQS',
      advantage: 'RegiFlex oferece gestão completa de fluxo, não apenas gestão de filas'
    },
    {
      competitor: 'Medicalsys',
      advantage: 'RegiFlex é simples e acessível, sem complexidade desnecessária de gestão clínica completa'
    },
    {
      competitor: 'GNU Health',
      advantage: 'RegiFlex possui interface moderna e intuitiva, otimizada para recepção clínica'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          Diferenciais Competitivos
        </h2>

        {/* Diferenciais Principais */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">
            Por que escolher RegiFlex?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((diff, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border-l-4 border-primary-blue hover:shadow-lg transition"
              >
                <h4 className="text-lg font-bold text-primary-blue mb-3">
                  {diff.title}
                </h4>
                <p className="text-gray-700">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparativo com Concorrentes */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">
            Como RegiFlex se diferencia
          </h3>
          <div className="space-y-4">
            {comparativeAdvantages.map((comp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-start gap-4 border-l-4 border-primary-green"
              >
                <div className="text-primary-green text-2xl font-bold">✓</div>
                <div>
                  <p className="font-bold text-primary-blue mb-1">
                    vs {comp.competitor}
                  </p>
                  <p className="text-gray-700">
                    {comp.advantage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div className="mt-16 bg-gradient-to-r from-primary-blue to-primary-green rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Benefícios para sua Clínica
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary-yellow text-2xl">📊</span>
                Para o Negócio
              </h4>
              <ul className="space-y-2 text-blue-100">
                <li>✓ Redução de 40% no tempo administrativo</li>
                <li>✓ Diminuição de abandono de pacientes</li>
                <li>✓ Aumento de satisfação e retenção</li>
                <li>✓ Melhor aproveitamento de recursos</li>
                <li>✓ Dados para decisões estratégicas</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary-yellow text-2xl">👥</span>
                Para Pacientes e Equipe
              </h4>
              <ul className="space-y-2 text-blue-100">
                <li>✓ Experiência mais organizada e confortável</li>
                <li>✓ Redução significativa de tempo de espera</li>
                <li>✓ Transparência no processo de atendimento</li>
                <li>✓ Menos erros administrativos</li>
                <li>✓ Maior segurança de dados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
