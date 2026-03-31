

export default function About() {
  return (
    <section id="about" className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary-blue mb-4">Sobre a Empresa</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-primary-green mx-auto"></div>
        </div>

        {/* Quem Somos */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-12 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold text-primary-blue mb-6">Quem Somos</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            O RegiFlex é uma iniciativa desenvolvida para modernizar o processo de cadastro e atendimento em clínicas, utilizando tecnologia para reduzir filas, melhorar a organização da recepção e proporcionar uma experiência mais eficiente para pacientes e profissionais da saúde.
          </p>
        </div>

        {/* Identidade da Marca */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-12 border border-gray-100">
          <h3 className="text-3xl font-bold text-primary-blue mb-8">Identidade da Marca</h3>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-transparent rounded-xl p-8 border border-blue-100">
              <h4 className="text-2xl font-bold text-primary-blue mb-4">O Nome RegiFlex</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                O nome RegiFlex combina os conceitos de <strong>registro</strong> e <strong>flexibilidade</strong>, representando um sistema capaz de tornar o processo de cadastro de pacientes mais ágil e adaptável às necessidades das clínicas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-transparent rounded-xl p-8 border border-green-100">
              <h4 className="text-2xl font-bold text-primary-blue mb-6">Cores da Marca</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-blue rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Azul Tecnológico</p>
                    <p className="text-sm text-gray-600">#1E40AF</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-green rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Verde Saúde</p>
                    <p className="text-sm text-gray-600">#00A651</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-yellow rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Amarelo Energia</p>
                    <p className="text-sm text-gray-600">#FFC107</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-transparent rounded-xl p-8 border border-blue-100">
              <img src="/Logo Simplificado.png" alt="Logo RegiFlex" className="h-40 w-40 mb-6 object-contain" />
              <h5 className="text-xl font-bold text-primary-blue text-center">Logo RegiFlex</h5>
              <p className="text-sm text-gray-600 text-center mt-2">Símbolo de eficiência e tecnologia</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-transparent rounded-xl p-8 border border-green-100">
              <img src="/Flux.jpg" alt="Mascote Flux" className="h-40 w-40 mb-6 object-contain" />
              <h5 className="text-xl font-bold text-primary-blue text-center">Mascote Flux</h5>
              <p className="text-sm text-gray-600 text-center mt-2">Guia amigável da experiência</p>
            </div>
          </div>
        </div>

        {/* Organograma */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-12 border border-gray-100">
          <h3 className="text-3xl font-bold text-primary-blue mb-10 text-center">Organograma da Equipe</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Artur Alves Santos', role: 'Líder de Projeto', icon: '👔', rgm: '2417606' },
              { name: 'Guilherme Almeida', role: 'Design e UX', icon: '🎨', rgm: '2417704' },
              { name: 'Nicollas Andrey', role: 'Estratégia e Negócios', icon: '📊', rgm: '2417423' }
            ].map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 text-center border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl mb-4">{member.icon}</div>
                <h4 className="font-bold text-primary-blue mb-2 text-lg">{member.name}</h4>
                <p className="text-primary-green font-semibold mb-2">{member.role}</p>
                <p className="text-xs text-gray-600">RGM: {member.rgm}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MVV */}
        <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
          <h3 className="text-3xl font-bold text-primary-blue mb-10 text-center">Missão, Visão e Valores</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-transparent rounded-xl border border-blue-100">
              <div className="bg-gradient-to-br from-primary-blue to-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold">M</span>
              </div>
              <h4 className="text-xl font-bold text-primary-blue mb-4">Missão</h4>
              <p className="text-gray-700 leading-relaxed">
                Simplificar e modernizar o atendimento em clínicas por meio de soluções tecnológicas eficientes.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-transparent rounded-xl border border-green-100">
              <div className="bg-gradient-to-br from-primary-green to-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold">V</span>
              </div>
              <h4 className="text-xl font-bold text-primary-green mb-4">Visão</h4>
              <p className="text-gray-700 leading-relaxed">
                Tornar-se uma plataforma reconhecida por melhorar a organização e eficiência no atendimento.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-transparent rounded-xl border border-yellow-100">
              <div className="bg-gradient-to-br from-primary-yellow to-yellow-400 text-primary-gray rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold">V</span>
              </div>
              <h4 className="text-xl font-bold text-primary-gray mb-4">Valores</h4>
              <ul className="text-gray-700 text-sm space-y-2">
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
