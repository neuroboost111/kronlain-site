'use client';

import { useState } from 'react';
import { Metadata } from 'next';

const contactInfo = [
  {
    title: 'Телефон',
    value: '+7 (931) 351-96-51',
    href: 'tel:+79313519651',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'kronlain@mail.ru',
    href: 'mailto:kronlain@mail.ru',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Адрес',
    value: 'г. Тосно, ул. Промышленная 5 А',
    href: 'https://yandex.ru/maps/-/CDaHzJwl',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const services = [
  'Строительство (Девелопмент)',
  'AI и автоматизация (Интеллект)',
  'Аренда техники (Техно)',
  'Ландшафт (Лэнд)',
  'Юридические услуги (Лигал)',
  'Инвестиции (Инвест)',
  'Другое',
];

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 via-[#0f0f0f] to-[#0f0f0f]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Свяжитесь</span>{' '}
              <span className="text-white">с нами</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Готовы обсудить ваш проект? Оставьте заявку или свяжитесь с нами любым удобным способом.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Контактная информация</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.title === 'Адрес' ? '_blank' : undefined}
                    rel={item.title === 'Адрес' ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] group-hover:bg-[#c9a227] group-hover:text-black transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">{item.title}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="mt-8 p-6 bg-[#2a2a2a] rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">Режим работы</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Понедельник — Пятница</span>
                    <span className="text-white">9:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Суббота</span>
                    <span className="text-white">10:00 — 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Воскресенье</span>
                    <span className="text-white">Выходной</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 border-l-4 border-[#c9a227] bg-[#2a2a2a] rounded-r-lg">
                <p className="text-gray-300 italic">
                  «Партнёрство с нами — это доступ к силе, скорости и системности на грани будущего.»
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Оставить заявку</h2>

              {isSubmitted ? (
                <div className="p-8 bg-[#2a2a2a] rounded-lg text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Заявка отправлена!</h3>
                  <p className="text-gray-400 mb-6">Мы свяжемся с вами в ближайшее время.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline"
                  >
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Телефон *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Интересующая услуга</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                    >
                      <option value="">Выберите услугу</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Сообщение</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors resize-none"
                      placeholder="Расскажите о вашем проекте или задаче..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </button>

                  <p className="text-gray-500 text-sm text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-[#2a2a2a] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-[#c9a227] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-white font-medium">г. Тосно, ул. Промышленная 5 А</p>
            <a
              href="https://yandex.ru/maps/-/CDaHzJwl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#c9a227] hover:underline"
            >
              Открыть на карте
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
