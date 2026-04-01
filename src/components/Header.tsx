import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'O Problema', id: 'problem' },
    { name: 'Solução', id: 'solution' },
    { name: 'Como Funciona', id: 'how-it-works' },
    { name: 'Funcionalidades', id: 'features' },
    { name: 'Sobre Nós', id: 'about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-all">
            <img src="/Logo Simplificado.png" alt="RegiFlex Logo" className="h-8 w-8 object-contain" />
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-primary-gray' : 'text-primary-gray'}`}>
            RegiFlex
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)} 
              className="text-gray-600 hover:text-primary-blue transition-colors font-bold text-sm uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-primary-blue text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-bold text-sm uppercase tracking-widest"
          >
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-primary-gray hover:bg-gray-100 rounded-xl transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="px-4 py-8 space-y-4">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)} 
                className="block w-full text-left text-gray-600 hover:text-primary-blue hover:bg-gray-50 px-6 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full bg-primary-blue text-white px-6 py-5 rounded-2xl font-bold text-lg shadow-lg"
              >
                Solicitar Demonstração
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
