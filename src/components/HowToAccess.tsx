

export default function HowToAccess() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          Modernize o Atendimento da Sua Clínica
        </h2>

        <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
          Conheça como o RegiFlex pode tornar o processo de cadastro e atendimento mais rápido e organizado.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-primary-blue text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-green transition transform hover:scale-105">
            Solicitar demonstração
          </button>
          <button className="bg-white text-primary-blue font-bold px-8 py-4 rounded-lg border-2 border-primary-blue hover:bg-gray-50 transition transform hover:scale-105">
            Entrar em contato
          </button>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-primary-blue to-primary-green rounded-lg p-8 text-white">
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
                <li>✓ Redução significativa de tempo administrativo</li>
                <li>✓ Diminuição de abandono de pacientes</li>
                <li>✓ Aumento de satisfação e retenção</li>
                <li>✓ Melhor aproveitamento de recursos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary-yellow text-2xl">👥</span>
                Para Pacientes e Equipe
              </h4>
              <ul className="space-y-2 text-blue-100">
                <li>✓ Experiência mais organizada e confortável</li>
                <li>✓ Redução de tempo de espera</li>
                <li>✓ Transparência no processo</li>
                <li>✓ Maior segurança de dados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
