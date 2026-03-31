

export default function Team() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          Sobre o Projeto
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Projeto de Startup</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              RegiFlex é um projeto desenvolvido por estudantes do curso de Análise e Desenvolvimento de Sistemas da UniPiaget como parte da disciplina de Projeto de Startups.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O projeto combina conhecimentos técnicos, design de experiência do usuário e estratégia de negócios para criar uma solução inovadora para o mercado de saúde.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Instituição</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Instituição:</strong> UniPiaget – Centro Universitário</li>
              <li><strong>Curso:</strong> Análise e Desenvolvimento de Sistemas</li>
              <li><strong>Disciplina:</strong> Projeto de Startups</li>
              <li><strong>Local:</strong> Suzano – SP</li>
              <li><strong>Ano:</strong> 2026</li>
            </ul>
          </div>
        </div>

        {/* Equipe */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">
            Equipe
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-l-4 border-primary-blue">
              <div className="text-4xl mb-3">👔</div>
              <h4 className="text-lg font-bold text-primary-blue mb-2">Artur Alves Santos</h4>
              <p className="text-primary-green font-semibold mb-2">Liderança Técnica</p>
              <p className="text-sm text-gray-600">RGM: 2417606</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-l-4 border-primary-blue">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="text-lg font-bold text-primary-blue mb-2">Guilherme Almeida</h4>
              <p className="text-primary-green font-semibold mb-2">Desenvolvimento de Produto</p>
              <p className="text-sm text-gray-600">RGM: 2417704</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-l-4 border-primary-blue">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="text-lg font-bold text-primary-blue mb-2">Nicollas Andrey</h4>
              <p className="text-primary-green font-semibold mb-2">Estratégia e Mercado</p>
              <p className="text-sm text-gray-600">RGM: 2417423</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
