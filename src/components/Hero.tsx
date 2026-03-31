

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-blue via-blue-600 to-primary-green text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Organização Inteligente de Fluxo Clínico
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Transforme o atendimento da sua clínica com RegiFlex. Reduza filas, melhore a experiência do paciente e aumente a eficiência operacional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-primary-yellow text-primary-blue font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition transform hover:scale-105"
          >
            Teste Agora
          </button>
          <button
            onClick={() => scrollToSection('product')}
            className="bg-white text-primary-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Saiba Mais
          </button>
        </div>
        <div className="mt-16 flex justify-center">
          <img src="/Flux.jpg" alt="Mascote Flux" className="h-48 w-48 object-contain" />
        </div>
      </div>
    </section>
  );
}
