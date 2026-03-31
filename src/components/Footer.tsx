

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-gray text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/Logo Simplificado.png" alt="RegiFlex Logo" className="h-8 w-8" />
              <span className="font-bold text-lg">RegiFlex</span>
            </div>
            <p className="text-gray-300 text-sm">
              Transformando o fluxo de atendimento clínico através de tecnologia simples e acessível.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#about" className="hover:text-primary-yellow transition">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-primary-yellow transition">
                  Produto
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary-yellow transition">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-yellow transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-primary-yellow transition">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-yellow transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-yellow transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-yellow transition">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="mailto:regiflex.contato@gmail.com" className="hover:text-primary-yellow transition">
                  regiflex.contato@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/regiflex.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary-yellow transition">
                  @regiflex.app
                </a>
              </li>
              <li>
                <p>Suzano – SP, Brasil</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {currentYear} RegiFlex. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-yellow transition">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary-yellow transition">
              Termos de Serviço
            </a>
            <a href="#" className="hover:text-primary-yellow transition">
              LGPD
            </a>
          </div>
        </div>

        {/* Accessibility Note */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-xs text-gray-500">
          <p>
            ♿ RegiFlex é desenvolvido com foco em acessibilidade digital. Se encontrar dificuldades ao navegar, entre em contato conosco.
          </p>
        </div>
      </div>
    </footer>
  );
}
