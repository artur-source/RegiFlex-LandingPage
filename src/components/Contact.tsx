import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
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
    // Aqui você poderia enviar os dados para um servidor
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        clinicName: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-16">
          Entre em Contato
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-blue mb-6">
              Envie uma Mensagem
            </h3>

            {submitted ? (
              <div className="bg-green-50 border-2 border-primary-green rounded-lg p-6 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h4 className="text-xl font-bold text-primary-green mb-2">
                  Mensagem Enviada com Sucesso!
                </h4>
                <p className="text-gray-700">
                  Obrigado por entrar em contato. Nossa equipe responderá em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="Seu nome"
                    aria-label="Nome Completo"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="seu.email@exemplo.com"
                    aria-label="Email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="(11) 99999-9999"
                    aria-label="Telefone"
                  />
                </div>

                <div>
                  <label htmlFor="clinicName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome da Clínica
                  </label>
                  <input
                    type="text"
                    id="clinicName"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="Sua clínica"
                    aria-label="Nome da Clínica"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue resize-none"
                    placeholder="Conte-nos como podemos ajudar..."
                    aria-label="Mensagem"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-blue text-white font-bold py-3 rounded-lg hover:bg-primary-green transition transform hover:scale-105"
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

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h4 className="font-bold text-primary-blue mb-2">Email</h4>
                  <a
                    href="mailto:regiflex.contato@gmail.com"
                    className="text-gray-700 hover:text-primary-blue transition"
                  >
                    regiflex.contato@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h4 className="font-bold text-primary-blue mb-2">Redes Sociais</h4>
                  <a
                    href="https://www.instagram.com/regiflex.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-blue transition block"
                  >
                    Instagram: @regiflex.app
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="text-3xl">🏢</div>
                <div>
                  <h4 className="font-bold text-primary-blue mb-2">Localização</h4>
                  <p className="text-gray-700">
                    Suzano – SP<br />
                    Brasil
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h4 className="font-bold text-primary-blue mb-2">Horário de Atendimento</h4>
                  <p className="text-gray-700">
                    Segunda a Sexta<br />
                    9h às 18h
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 bg-gradient-to-br from-primary-blue to-primary-green rounded-lg p-6 text-white">
              <h4 className="font-bold mb-3">Pronto para começar?</h4>
              <p className="mb-4 text-blue-100">
                Agende uma demonstração gratuita e veja como RegiFlex pode transformar sua clínica.
              </p>
              <button className="w-full bg-primary-yellow text-primary-blue font-bold py-2 rounded-lg hover:bg-yellow-400 transition">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
