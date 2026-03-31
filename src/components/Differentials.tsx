

export default function Differentials() {
  const differentials = [
    { title: 'Redução do tempo de cadastro de pacientes', icon: '⚡' },
    { title: 'Organização eficiente da fila de atendimento', icon: '📊' },
    { title: 'Interface simples e intuitiva', icon: '🎨' },
    { title: 'Sistema preparado para múltiplas clínicas', icon: '🏥' },
    { title: 'Arquitetura moderna baseada em tecnologia web', icon: '💻' }
  ];

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary-blue mb-4">Diferenciais da Solução</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-primary-green mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conheça o que torna o RegiFlex a melhor solução para sua clínica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{diff.icon}</div>
              <h3 className="text-lg font-bold text-primary-blue group-hover:text-primary-green transition-colors">
                {diff.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Comparativo */}
        <div className="bg-gradient-to-r from-primary-blue to-primary-green rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Por que escolher RegiFlex?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">✨</span>
                Vantagens RegiFlex
              </h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">✓</span>
                  <span>Implementação rápida e sem complicações</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">✓</span>
                  <span>Suporte dedicado e atualizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">✓</span>
                  <span>Tecnologia escalável e segura</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">✓</span>
                  <span>Integração com sistemas existentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">✓</span>
                  <span>ROI comprovado em 3 meses</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                Foco no Seu Negócio
              </h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">→</span>
                  <span>Redução de 70% no tempo de cadastro</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">→</span>
                  <span>Diminuição de filas e esperas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">→</span>
                  <span>Aumento da satisfação do paciente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">→</span>
                  <span>Melhor organização administrativa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-yellow text-xl">→</span>
                  <span>Dados seguros e em conformidade com LGPD</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
