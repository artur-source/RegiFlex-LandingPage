import React from 'react';

const values = [
  { title: 'Inovação', icon: '💡' },
  { title: 'Eficiência', icon: '⚡' },
  { title: 'Simplicidade', icon: '✨' },
  { title: 'Tecnologia acessível', icon: '📱' },
  { title: 'Experiência do usuário', icon: '👤' }
];

const Company: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary-gray">Quem somos</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                O RegiFlex é um projeto desenvolvido com o objetivo de aplicar tecnologia na melhoria do atendimento em clínicas. A iniciativa busca modernizar processos administrativos e tornar o cadastro de pacientes mais eficiente.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-primary-blue mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-gray mb-4">Missão</h3>
                <p className="text-gray-600">Simplificar e modernizar o processo de atendimento em clínicas por meio da tecnologia.</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-green/10 rounded-2xl flex items-center justify-center text-primary-green mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-gray mb-4">Visão</h3>
                <p className="text-gray-600">Ser uma plataforma reconhecida por melhorar a organização e eficiência no atendimento de clínicas.</p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-primary-gray">Nossos Valores</h3>
            <div className="grid gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-3xl">{value.icon}</span>
                  <span className="text-lg font-bold text-primary-gray">{value.title}</span>
                </div>
              ))}
            </div>
            
            <div className="p-8 bg-primary-blue text-white rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <p className="text-lg font-medium leading-relaxed">
                "O RegiFlex nasceu da necessidade de transformar a experiência do paciente e otimizar o tempo das equipes de saúde."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
