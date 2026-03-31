

export default function HowToAccess() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary-blue mb-4">
            Modernize o Atendimento da Sua Clínica
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-primary-green mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conheça como o RegiFlex pode tornar o processo de cadastro e atendimento mais rápido e organizado.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button className="bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold px-10 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg">
            Solicitar demonstração
          </button>
          <button className="bg-white text-primary-blue font-bold px-10 py-4 rounded-lg border-2 border-primary-blue hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-lg">
            Entrar em contato
          </button>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-primary-blue to-blue-600 rounded-2xl p-12 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">📊</span>
              Para o Negócio
            </h3>
            <ul className="space-y-4">
              {[
                'Redução significativa de tempo administrativo',
                'Diminuição de abandono de pacientes',
                'Aumento de satisfação e retenção',
                'Melhor aproveitamento de recursos',
                'Análise de dados em tempo real'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary-yellow text-2xl flex-shrink-0">✓</span>
                  <span className="text-blue-100">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary-green to-green-600 rounded-2xl p-12 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">👥</span>
              Para Pacientes e Equipe
            </h3>
            <ul className="space-y-4">
              {[
                'Experiência mais organizada e confortável',
                'Redução de tempo de espera',
                'Transparência no processo',
                'Maior segurança de dados',
                'Interface amigável e intuitiva'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary-yellow text-2xl flex-shrink-0">✓</span>
                  <span className="text-green-100">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mascote Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-primary-blue mb-6">
                Conheça Flux, seu guia na jornada!
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Flux é o mascote do RegiFlex, criado para tornar sua experiência mais amigável e intuitiva. Com Flux ao seu lado, cada etapa do processo de cadastro e atendimento fica mais clara e agradável.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary-green text-xl flex-shrink-0">✓</span>
                  <span>Guia interativo em cada seção</span>
                </p>
                <p className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary-green text-xl flex-shrink-0">✓</span>
                  <span>Dicas e sugestões personalizadas</span>
                </p>
                <p className="text-gray-700 flex items-start gap-3">
                  <span className="text-primary-green text-xl flex-shrink-0">✓</span>
                  <span>Torna o aprendizado mais divertido</span>
                </p>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-green rounded-2xl blur-3xl opacity-20"></div>
                <img src="/Flux.jpg" alt="Mascote Flux" className="h-96 w-96 object-contain relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
