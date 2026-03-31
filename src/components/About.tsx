

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">Quem Somos</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Nossa História</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              RegiFlex é um projeto desenvolvido por estudantes do curso de Análise e Desenvolvimento de Sistemas da UniPiaget, com o objetivo de solucionar problemas recorrentes no fluxo de atendimento em clínicas e consultórios.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A proposta do sistema é digitalizar e organizar processos como cadastro de pacientes, check-in, gerenciamento de filas e registro de atendimentos, reduzindo tempo administrativo e aumentando a eficiência operacional.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Nossa Proposta</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O RegiFlex foi concebido como uma plataforma tecnológica capaz de estruturar o fluxo de atendimento de forma simples, escalável e acessível.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Focamos em criar uma solução que conecta, em um único fluxo contínuo, o check-in do paciente, a organização da fila e o controle do atendimento, eliminando etapas manuais e reduzindo a dependência de múltiplos sistemas.
            </p>
          </div>
        </div>

        {/* MVV Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">Missão, Visão e Valores</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">M</span>
              </div>
              <h4 className="text-xl font-bold text-primary-blue mb-3">Missão</h4>
              <p className="text-gray-700">
                Organizar digitalmente o fluxo de atendimento em clínicas, reduzindo processos administrativos, melhorando a experiência do paciente e aumentando a eficiência operacional das instituições de saúde.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">V</span>
              </div>
              <h4 className="text-xl font-bold text-primary-green mb-3">Visão</h4>
              <p className="text-gray-700">
                Tornar-se uma infraestrutura digital amplamente adotada para gestão de recepção clínica, contribuindo para serviços de saúde mais organizados, eficientes e acessíveis.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-yellow text-primary-gray rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">V</span>
              </div>
              <h4 className="text-xl font-bold text-primary-gray mb-3">Valores</h4>
              <p className="text-gray-700">
                Eficiência, Confiabilidade, Segurança de dados, Acessibilidade tecnológica e Melhoria contínua.
              </p>
            </div>
          </div>
        </div>

        {/* Identity Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">Identidade da Marca</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center">
              <img src="/Logo Simplificado.png" alt="Logo RegiFlex" className="h-32 w-32 mb-4" />
              <h4 className="text-xl font-bold text-primary-blue mb-2">Logo RegiFlex</h4>
              <p className="text-gray-600 text-center">
                Representa a organização e a eficiência através de um símbolo de aprovação com elementos que remetem à tecnologia e ao movimento.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img src="/Flux.jpg" alt="Mascote Flux" className="h-32 w-32 mb-4" />
              <h4 className="text-xl font-bold text-primary-blue mb-2">Mascote Flux</h4>
              <p className="text-gray-600 text-center">
                Representa a organização do fluxo e a agilidade. Guia o usuário durante o onboarding e humaniza a experiência do sistema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
