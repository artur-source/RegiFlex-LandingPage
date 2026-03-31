

export default function Product() {
  return (
    <section id="product" className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary-blue mb-4">A Solução RegiFlex</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-primary-green mx-auto"></div>
        </div>

        {/* Descrição */}
        <div className="bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 rounded-2xl p-12 mb-16 border border-blue-100">
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            RegiFlex é uma plataforma digital que permite otimizar o cadastro de pacientes e organizar o fluxo de atendimento em clínicas, reduzindo filas e melhorando a gestão da recepção.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Público-Alvo */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-primary-blue mb-8 flex items-center gap-3">
              <span className="text-3xl">👥</span>
              Público-Alvo
            </h3>
            <ul className="space-y-5">
              {[
                { title: 'Clínicas Médicas', desc: 'De pequeno e médio porte' },
                { title: 'Consultórios', desc: 'Consultórios especializados' },
                { title: 'Centros de Saúde', desc: 'Centros de diagnóstico' },
                { title: 'Recepções Hospitalares', desc: 'Gestão de fluxo hospitalar' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-100">
                  <span className="text-primary-green text-2xl font-bold flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-gray-800">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Principais Funcionalidades */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-primary-blue mb-8 flex items-center gap-3">
              <span className="text-3xl">⚙️</span>
              Principais Funcionalidades
            </h3>
            <ul className="space-y-5">
              {[
                { title: 'Cadastro Digital de Pacientes', desc: 'Rápido e intuitivo' },
                { title: 'Geração de QR Code', desc: 'Para identificação de pacientes' },
                { title: 'Leitura Rápida de Cadastro', desc: 'Pela clínica via QR Code' },
                { title: 'Gestão de Fila', desc: 'Organização eficiente de atendimento' },
                { title: 'Painel Administrativo', desc: 'Controle total da clínica' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg border border-green-100">
                  <span className="text-primary-yellow text-2xl font-bold flex-shrink-0">•</span>
                  <div>
                    <p className="font-bold text-gray-800">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Plataformas */}
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-12 border border-gray-100">
          <h3 className="text-3xl font-bold text-primary-blue mb-4 text-center">
            Plataformas Disponíveis
          </h3>
          <p className="text-center text-gray-700 mb-12 text-lg">
            RegiFlex é uma solução web responsiva, podendo ser utilizada em:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '💻', title: 'Computadores', desc: 'Acesso via navegador em desktops' },
              { icon: '📱', title: 'Tablets', desc: 'Interface otimizada para tablets' },
              { icon: '📲', title: 'Smartphones', desc: 'Aplicação responsiva mobile' }
            ].map((platform, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-blue">
                <div className="text-6xl mb-4">{platform.icon}</div>
                <h4 className="text-xl font-bold text-primary-blue mb-2">{platform.title}</h4>
                <p className="text-gray-700">{platform.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 text-lg">
            Isso permite que clínicas utilizem o sistema em diferentes dispositivos.
          </p>
        </div>
      </div>
    </section>
  );
}
