

export default function Product() {
  return (
    <section id="product" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          A Solução RegiFlex
        </h2>

        {/* Descrição */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            RegiFlex é uma plataforma digital que permite otimizar o cadastro de pacientes e organizar o fluxo de atendimento em clínicas, reduzindo filas e melhorando a gestão da recepção.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Público-Alvo */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-blue mb-6">Público-Alvo</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary-green text-2xl">✓</span>
                <div>
                  <p className="font-bold text-gray-800">Clínicas Médicas</p>
                  <p className="text-gray-600 text-sm">De pequeno e médio porte</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-green text-2xl">✓</span>
                <div>
                  <p className="font-bold text-gray-800">Consultórios</p>
                  <p className="text-gray-600 text-sm">Consultórios especializados</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-green text-2xl">✓</span>
                <div>
                  <p className="font-bold text-gray-800">Centros de Saúde</p>
                  <p className="text-gray-600 text-sm">Centros de diagnóstico</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-green text-2xl">✓</span>
                <div>
                  <p className="font-bold text-gray-800">Recepções Hospitalares</p>
                  <p className="text-gray-600 text-sm">Gestão de fluxo hospitalar</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Principais Funcionalidades */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-blue mb-6">Principais Funcionalidades</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary-yellow text-2xl">•</span>
                <div>
                  <p className="font-bold text-gray-800">Cadastro Digital de Pacientes</p>
                  <p className="text-gray-600 text-sm">Rápido e intuitivo</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-yellow text-2xl">•</span>
                <div>
                  <p className="font-bold text-gray-800">Geração de QR Code</p>
                  <p className="text-gray-600 text-sm">Para identificação de pacientes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-yellow text-2xl">•</span>
                <div>
                  <p className="font-bold text-gray-800">Leitura Rápida de Cadastro</p>
                  <p className="text-gray-600 text-sm">Pela clínica via QR Code</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-yellow text-2xl">•</span>
                <div>
                  <p className="font-bold text-gray-800">Gestão de Fila</p>
                  <p className="text-gray-600 text-sm">Organização eficiente de atendimento</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-yellow text-2xl">•</span>
                <div>
                  <p className="font-bold text-gray-800">Painel Administrativo</p>
                  <p className="text-gray-600 text-sm">Controle total da clínica</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Plataformas */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">
            Plataformas Disponíveis
          </h3>
          <p className="text-center text-gray-700 mb-8 text-lg">
            RegiFlex é uma solução web responsiva, podendo ser utilizada em:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">💻</div>
              <h4 className="text-xl font-bold text-primary-blue mb-2">Computadores</h4>
              <p className="text-gray-700">
                Acesso via navegador em desktops
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">📱</div>
              <h4 className="text-xl font-bold text-primary-blue mb-2">Tablets</h4>
              <p className="text-gray-700">
                Interface otimizada para tablets
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">📲</div>
              <h4 className="text-xl font-bold text-primary-blue mb-2">Smartphones</h4>
              <p className="text-gray-700">
                Aplicação responsiva mobile
              </p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Isso permite que clínicas utilizem o sistema em diferentes dispositivos.
          </p>
        </div>
      </div>
    </section>
  );
}
