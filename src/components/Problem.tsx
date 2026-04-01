import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary-blue/5 rounded-3xl transform -rotate-3 scale-105" />
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-900">Processos Manuais</h4>
                    <p className="text-sm text-red-700">Papéis e planilhas lentas que geram erros de cadastro.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-900">Filas Extensas</h4>
                    <p className="text-sm text-orange-700">Pacientes aguardando tempo excessivo na recepção.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="p-2 bg-gray-200 rounded-lg text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Retrabalho</h4>
                    <p className="text-sm text-gray-700">Recepção sobrecarregada com tarefas repetitivas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-bold text-primary-gray leading-tight">
              O desafio do <span className="text-primary-blue underline decoration-primary-green/30">atendimento em clínicas</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Muitas clínicas ainda utilizam processos manuais para cadastrar pacientes e organizar atendimentos. Isso gera filas, retrabalho para a recepção e atrasos no fluxo de consultas.
              </p>
              <p className="font-semibold text-primary-blue">
                O RegiFlex foi desenvolvido para transformar esse processo.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-4 text-primary-green font-bold">
                <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Chegou a hora de modernizar sua recepção.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
