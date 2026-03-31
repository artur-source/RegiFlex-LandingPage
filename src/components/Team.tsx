

export default function Team() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary-blue mb-4">Sobre o Projeto</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-primary-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-transparent rounded-2xl p-10 border border-blue-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-primary-blue mb-4 flex items-center gap-2">
              <span className="text-3xl">🚀</span>
              Projeto de Startup
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              RegiFlex é um projeto desenvolvido por estudantes do curso de Análise e Desenvolvimento de Sistemas da UniPiaget como parte da disciplina de Projeto de Startups.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              O projeto combina conhecimentos técnicos, design de experiência do usuário e estratégia de negócios para criar uma solução inovadora para o mercado de saúde.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-transparent rounded-2xl p-10 border border-green-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-primary-blue mb-6 flex items-center gap-2">
              <span className="text-3xl">🎓</span>
              Instituição
            </h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary-green font-bold">•</span>
                <div>
                  <p className="font-semibold">UniPiaget</p>
                  <p className="text-sm text-gray-600">Centro Universitário</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-green font-bold">•</span>
                <div>
                  <p className="font-semibold">Análise e Desenvolvimento de Sistemas</p>
                  <p className="text-sm text-gray-600">Curso</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-green font-bold">•</span>
                <div>
                  <p className="font-semibold">Projeto de Startups</p>
                  <p className="text-sm text-gray-600">Disciplina</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-green font-bold">•</span>
                <div>
                  <p className="font-semibold">Suzano – SP</p>
                  <p className="text-sm text-gray-600">Localização</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Equipe */}
        <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
          <h3 className="text-3xl font-bold text-primary-blue mb-12 text-center">
            Equipe Responsável
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Artur Alves Santos', role: 'Liderança Técnica', icon: '👔', rgm: '2417606', desc: 'Responsável pela arquitetura e desenvolvimento técnico' },
              { name: 'Guilherme Almeida', role: 'Desenvolvimento de Produto', icon: '🎨', rgm: '2417704', desc: 'Design, UX/UI e experiência do usuário' },
              { name: 'Nicollas Andrey', role: 'Estratégia e Mercado', icon: '📊', rgm: '2417423', desc: 'Análise de mercado e estratégia comercial' }
            ].map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 text-center border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h4 className="font-bold text-primary-blue mb-2 text-lg">{member.name}</h4>
                <p className="text-primary-green font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.desc}</p>
                <p className="text-xs text-gray-600 bg-white rounded-lg py-2 px-3">RGM: {member.rgm}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
