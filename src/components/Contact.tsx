import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary-blue mb-4">Contato</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-blue to-primary-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-primary-blue mb-8">
              Envie uma Mensagem
            </h3>

            {submitted ? (
              <div className="bg-gradient-to-br from-green-50 to-transparent border-2 border-primary-green rounded-xl p-8 text-center">
                <div className="text-6xl mb-4 animate-bounce">✓</div>
                <h4 className="text-2xl font-bold text-primary-green mb-2">
                  Mensagem Enviada com Sucesso!
                </h4>
                <p className="text-gray-700">
                  Obrigado por entrar em contato. Nossa equipe responderá em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                    aria-label="Nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                    placeholder="seu.email@exemplo.com"
                    aria-label="Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Conte-nos como podemos ajudar sua clínica..."
                    aria-label="Mensagem"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold py-3 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-primary-blue mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6 mb-12">
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary-blue">
                <h4 className="font-bold text-primary-blue mb-3 flex items-center gap-2 text-lg">
                  <span className="text-3xl">📧</span>
                  Email
                </h4>
                <a
                  href="mailto:regiflex.contato@gmail.com"
                  className="text-gray-700 hover:text-primary-blue transition-colors font-semibold"
                >
                  regiflex.contato@gmail.com
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary-blue">
                <h4 className="font-bold text-primary-blue mb-3 flex items-center gap-2 text-lg">
                  <span className="text-3xl">📱</span>
                  Redes Sociais
                </h4>
                <a
                  href="https://www.instagram.com/regiflex.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-blue transition-colors font-semibold block"
                >
                  Instagram: @regiflex.app
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary-blue">
                <h4 className="font-bold text-primary-blue mb-3 flex items-center gap-2 text-lg">
                  <span className="text-3xl">📍</span>
                  Localização
                </h4>
                <p className="text-gray-700 font-semibold">Suzano – SP, Brasil</p>
              </div>
            </div>

            {/* Mascote */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border border-blue-100 text-center">
              <img src="/Flux.jpg" alt="Mascote Flux" className="h-40 w-40 mx-auto mb-4 object-contain" />
              <p className="text-gray-700 font-semibold">
                Estamos aqui para ajudar! 😊
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
