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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/Logo Simplificado.png" alt="RegiFlex Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">RegiFlex</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 hover:text-primary-blue transition-colors duration-300 font-medium text-sm"
          >
            Quem Somos
          </button>
          <button 
            onClick={() => scrollToSection('product')} 
            className="text-gray-700 hover:text-primary-blue transition-colors duration-300 font-medium text-sm"
          >
            Produto
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 hover:text-primary-blue transition-colors duration-300 font-medium text-sm"
          >
            Funcionalidades
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-gradient-to-r from-primary-blue to-primary-green text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-sm"
          >
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-gray-700 hover:text-primary-blue transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 font-medium"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('product')} 
              className="block w-full text-left text-gray-700 hover:text-primary-blue transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 font-medium"
            >
              Produto
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="block w-full text-left text-gray-700 hover:text-primary-blue transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 font-medium"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-center bg-gradient-to-r from-primary-blue to-primary-green text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all font-medium"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
