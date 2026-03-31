

export default function Differentials() {
  const differentials = [
    {
      title: 'Redução do tempo de cadastro de pacientes',
      icon: '⚡'
    },
    {
      title: 'Organização eficiente da fila de atendimento',
      icon: '📊'
    },
    {
      title: 'Interface simples e intuitiva',
      icon: '🎨'
    },
    {
      title: 'Sistema preparado para múltiplas clínicas',
      icon: '🏥'
    },
    {
      title: 'Arquitetura moderna baseada em tecnologia web',
      icon: '💻'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          Diferenciais da Solução
        </h2>

        <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
          Conheça o que torna o RegiFlex a melhor solução para sua clínica
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border-l-4 border-primary-blue hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{diff.icon}</div>
              <h3 className="text-lg font-bold text-primary-blue">
                {diff.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
