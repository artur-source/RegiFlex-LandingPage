

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">Sobre a Empresa</h2>

        {/* Quem Somos */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-primary-blue mb-4">Quem Somos</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            O RegiFlex é uma iniciativa desenvolvida para modernizar o processo de cadastro e atendimento em clínicas, utilizando tecnologia para reduzir filas, melhorar a organização da recepção e proporcionar uma experiência mais eficiente para pacientes e profissionais da saúde.
          </p>
        </div>

        {/* Identidade da Marca */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-primary-blue mb-6">Identidade da Marca</h3>
          
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <h4 className="text-xl font-bold text-primary-blue mb-3">O Nome RegiFlex</h4>
              <p className="text-gray-700 leading-relaxed">
                O nome RegiFlex combina os conceitos de <strong>registro</strong> e <strong>flexibilidade</strong>, representando um sistema capaz de tornar o processo de cadastro de pacientes mais ágil e adaptável às necessidades das clínicas.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary-blue mb-3">Cores da Marca</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg"></div>
                  <span className="text-gray-700">Azul Tecnológico (#1E40AF)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-green rounded-lg"></div>
                  <span className="text-gray-700">Verde Saúde (#00A651)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-yellow rounded-lg"></div>
                  <span className="text-gray-700">Amarelo Energia (#FFC107)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center">
              <img src="/Logo Simplificado.png" alt="Logo RegiFlex" className="h-32 w-32 mb-4" />
              <h5 className="text-lg font-bold text-primary-blue">Logo RegiFlex</h5>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img src="/Flux.jpg" alt="Mascote Flux" className="h-32 w-32 mb-4" />
              <h5 className="text-lg font-bold text-primary-blue">Mascote Flux</h5>
            </div>
          </div>
        </div>

        {/* Organograma */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">Organograma da Equipe</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 text-center border-l-4 border-primary-blue">
              <div className="text-3xl mb-3">👔</div>
              <h4 className="font-bold text-primary-blue mb-2">Líder de Projeto</h4>
              <p className="text-gray-700 text-sm">Artur Alves Santos</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 text-center border-l-4 border-primary-blue">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-bold text-primary-blue mb-2">Design e UX</h4>
              <p className="text-gray-700 text-sm">Guilherme Almeida</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 text-center border-l-4 border-primary-blue">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-primary-blue mb-2">Estratégia e Negócios</h4>
              <p className="text-gray-700 text-sm">Nicollas Andrey</p>
            </div>
          </div>
        </div>

        {/* MVV */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">Missão, Visão e Valores</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">M</span>
              </div>
              <h4 className="text-xl font-bold text-primary-blue mb-3">Missão</h4>
              <p className="text-gray-700">
                Simplificar e modernizar o atendimento em clínicas por meio de soluções tecnológicas eficientes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">V</span>
              </div>
              <h4 className="text-xl font-bold text-primary-green mb-3">Visão</h4>
              <p className="text-gray-700">
                Tornar-se uma plataforma reconhecida por melhorar a organização e eficiência no atendimento de clínicas e consultórios.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-yellow text-primary-gray rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">V</span>
              </div>
              <h4 className="text-xl font-bold text-primary-gray mb-3">Valores</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>✓ Inovação</li>
                <li>✓ Eficiência</li>
                <li>✓ Simplicidade</li>
                <li>✓ Tecnologia acessível</li>
                <li>✓ Foco no usuário</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
