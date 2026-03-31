

export default function Team() {
  const teamMembers = [
    {
      name: 'Artur Alves Santos',
      role: 'Liderança Técnica',
      rgm: 'RGM: 2417606',
      description: 'Arquitetura e desenvolvimento do sistema, infraestrutura da aplicação',
      icon: '🔧'
    },
    {
      name: 'Guilherme Almeida',
      role: 'Desenvolvimento de Produto',
      rgm: 'RGM: 2417704',
      description: 'Design do produto, experiência do usuário e construção das interfaces',
      icon: '🎨'
    },
    {
      name: 'Nicollas Andrey',
      role: 'Estratégia e Mercado',
      rgm: 'RGM: 2417423',
      description: 'Estratégia de negócios, análise de mercado e posicionamento do produto',
      icon: '📊'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-4">
          Organograma da Equipe
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Conheça os profissionais por trás do RegiFlex
        </p>

        {/* Estrutura Organizacional */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="bg-primary-blue text-white rounded-lg p-6 inline-block">
              <p className="text-sm font-semibold text-blue-100">Projeto de Startup</p>
              <p className="text-2xl font-bold">RegiFlex</p>
              <p className="text-sm text-blue-100 mt-2">UniPiaget - Centro Universitário</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 text-center border-2 border-primary-blue hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">
                  {member.name}
                </h3>
                <p className="text-lg font-semibold text-primary-green mb-1">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.rgm}
                </p>
                <p className="text-gray-700">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Estrutura de Frentes */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">
            Três Frentes Estratégicas
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-primary-blue mb-3 flex items-center gap-2">
                <span className="text-2xl">🔧</span>
                Tecnologia
              </h4>
              <p className="text-gray-700 mb-4">
                Arquitetura robusta e escalável do sistema
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Desenvolvimento Core</li>
                <li>✓ Infraestrutura</li>
                <li>✓ Segurança</li>
                <li>✓ Performance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-primary-blue mb-3 flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Produto & UX
              </h4>
              <p className="text-gray-700 mb-4">
                Experiência intuitiva e acessível para usuários
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Design de Interface</li>
                <li>✓ Experiência do Usuário</li>
                <li>✓ Acessibilidade</li>
                <li>✓ Usabilidade</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-primary-blue mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Negócio
              </h4>
              <p className="text-gray-700 mb-4">
                Estratégia de mercado e posicionamento
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Análise de Mercado</li>
                <li>✓ Estratégia Comercial</li>
                <li>✓ Marketing</li>
                <li>✓ Parcerias</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instituição */}
        <div className="mt-12 bg-gradient-to-r from-primary-blue to-primary-green rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Instituição Responsável</h3>
          <p className="text-lg mb-2">UniPiaget – Centro Universitário</p>
          <p className="text-blue-100 mb-4">Curso: Análise e Desenvolvimento de Sistemas</p>
          <p className="text-blue-100 mb-4">Disciplina: Projeto de Startups</p>
          <p className="text-blue-100">Local: Suzano – SP | Ano: 2026</p>
        </div>
      </div>
    </section>
  );
}
