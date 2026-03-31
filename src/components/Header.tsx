import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/Logo Simplificado.png" alt="RegiFlex Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-primary-blue">RegiFlex</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection('about')} className="text-primary-gray hover:text-primary-blue transition">
            Quem Somos
          </button>
          <button onClick={() => scrollToSection('product')} className="text-primary-gray hover:text-primary-blue transition">
            Produto
          </button>
          <button onClick={() => scrollToSection('features')} className="text-primary-gray hover:text-primary-blue transition">
            Funcionalidades
          </button>
          <button onClick={() => scrollToSection('contact')} className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-primary-green transition">
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-primary-gray hover:text-primary-blue transition">
              Quem Somos
            </button>
            <button onClick={() => scrollToSection('product')} className="block w-full text-left text-primary-gray hover:text-primary-blue transition">
              Produto
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left text-primary-gray hover:text-primary-blue transition">
              Funcionalidades
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-center bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-primary-green transition">
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
