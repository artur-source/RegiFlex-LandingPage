

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-blue via-blue-600 to-primary-green text-white py-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-yellow rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
            ✨ Solução Inovadora para Clínicas
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          RegiFlex — Tecnologia para otimizar o atendimento em clínicas.
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Simplifique o cadastro de pacientes e organize o fluxo de atendimento com uma plataforma digital moderna.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <button
            onClick={() => scrollToSection('product')}
            className="bg-white text-primary-blue font-bold px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Saiba mais
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-primary-yellow text-primary-blue font-bold px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Solicitar demonstração
          </button>
        </div>

        <div className="mt-20 flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow to-primary-green rounded-full blur-2xl opacity-30"></div>
            <img src="/Flux.jpg" alt="Mascote Flux" className="h-56 w-56 object-contain relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
