

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary-gray to-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/Logo Simplificado.png" alt="RegiFlex Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-yellow to-yellow-400 bg-clip-text text-transparent">RegiFlex</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando o fluxo de atendimento clínico através de tecnologia simples e acessível.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="#about" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  Produto
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Recursos</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="mailto:regiflex.contato@gmail.com" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  regiflex.contato@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/regiflex.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary-yellow transition-colors duration-300 font-medium">
                  @regiflex.app
                </a>
              </li>
              <li>
                <p className="text-gray-300">Suzano – SP, Brasil</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm mb-8">
          <p>
            © {currentYear} RegiFlex. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-yellow transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary-yellow transition-colors duration-300">
              Termos de Serviço
            </a>
            <a href="#" className="hover:text-primary-yellow transition-colors duration-300">
              LGPD
            </a>
          </div>
        </div>

        {/* Accessibility Note */}
        <div className="bg-gray-800 rounded-lg p-4 mb-8 text-xs text-gray-400 border border-gray-700">
          <p>
            ♿ RegiFlex é desenvolvido com foco em acessibilidade digital. Se encontrar dificuldades ao navegar, entre em contato conosco.
          </p>
        </div>

        {/* Credit */}
        <div className="text-center text-xs text-gray-600 border-t border-gray-700 pt-8">
          <p>
            Feito por{' '}
            <a
              href="https://core-patch-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-yellow hover:text-yellow-400 transition-colors duration-300 font-semibold"
            >
              Core & Patch
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
