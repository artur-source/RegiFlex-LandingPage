import React from 'react';

export default function Product() {
  return (
    <section id="product" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          O Produto RegiFlex
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary-blue mb-6">
              Sistema de Organização de Fluxo de Atendimento Clínico
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              RegiFlex é uma plataforma SaaS (Software as a Service) que digitaliza e organiza todo o fluxo de atendimento em clínicas e consultórios, desde a chegada do paciente até o fim do atendimento.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Com uma interface intuitiva e acessível, o sistema elimina processos manuais, reduz filas e melhora significativamente a experiência tanto do paciente quanto da equipe clínica.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desenvolvido com foco em clínicas e consultórios de pequeno e médio porte, RegiFlex oferece uma solução simples, escalável e de baixo custo operacional.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-blue to-primary-green rounded-lg p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Público-Alvo</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary-yellow text-2xl">✓</span>
                <div>
                  <p className="font-bold">Clínicas e Consultórios</p>
                  <p className="text-blue-100">De pequeno e médio porte</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-yellow text-2xl">✓</span>
                <div>
                  <p className="font-bold">Centros de Diagnóstico</p>
                  <p className="text-blue-100">Com alto fluxo de pacientes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-yellow text-2xl">✓</span>
                <div>
                  <p className="font-bold">Instituições de Saúde</p>
                  <p className="text-blue-100">Buscando modernização</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-yellow text-2xl">✓</span>
                <div>
                  <p className="font-bold">Profissionais de Saúde</p>
                  <p className="text-blue-100">Que precisam de eficiência</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Plataformas */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-8 text-center">
            Plataformas Disponíveis
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">🖥️</div>
              <h4 className="text-xl font-bold text-primary-blue mb-2">Web</h4>
              <p className="text-gray-700">
                Acesso via navegador em qualquer dispositivo com internet
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">📱</div>
              <h4 className="text-xl font-bold text-primary-blue mb-2">Mobile</h4>
              <p className="text-gray-700">
                Aplicativo responsivo para smartphones e tablets
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">📺</div>
              <h4 className="text-xl font-bold text-primary-blue mb-2">TV Painel</h4>
              <p className="text-gray-700">
                Exibição em telas para chamada de pacientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
