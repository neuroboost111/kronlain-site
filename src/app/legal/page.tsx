import Link from 'next/link';
import { Metadata } from 'next';
import Logo, { brandColors } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Кронлайн Лигал — Юридические услуги и консалтинг',
  description: 'Юридическое сопровождение бизнеса. Регистрация компаний, договорная работа, сопровождение сделок.',
};

const services = [
  {
    title: 'Регистрация бизнеса',
    description: 'Регистрация ООО, ИП, внесение изменений в учредительные документы',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Сопровождение бизнеса',
    description: 'Юридическое обслуживание на постоянной основе, консультации по текущим вопросам',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Договорная работа',
    description: 'Составление, анализ и экспертиза договоров любой сложности',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Корпоративное право',
    description: 'Структурирование сделок, M&A, корпоративные споры',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Представительство в судах',
    description: 'Защита интересов в арбитражных судах и судах общей юрисдикции',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Консалтинг',
    description: 'Стратегические консультации по развитию бизнеса и минимизации рисков',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const practices = [
  'Строительство и недвижимость',
  'Корпоративное право',
  'Договорное право',
  'Интеллектуальная собственность',
  'Трудовое право',
  'Налоговое право',
];

const principles = [
  {
    title: 'Работа в интересах владельца',
    description: 'Мы защищаем интересы собственника бизнеса, а не формально следуем процедурам',
  },
  {
    title: 'Сильные практики',
    description: 'Наши юристы имеют успешный опыт в ключевых отраслях права',
  },
  {
    title: 'Комплексный подход',
    description: 'Решаем задачу целиком, привлекая экспертов из разных областей',
  },
  {
    title: 'Конфиденциальность',
    description: 'Строгое соблюдение адвокатской тайны и защита информации клиентов',
  },
];

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0f0f0f] to-[#0f0f0f]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Logo color={brandColors.legal} size={40} />
              <span className="text-[#7c3aed] font-medium">Кронлайн Лигал</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Юридические услуги</span>{' '}
              <span className="text-white">и консалтинг</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Полное юридическое сопровождение бизнеса. Работаем в интересах владельца,
              решаем сложные задачи комплексно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacts" className="btn-gold">
                Получить консультацию
              </Link>
              <a href="tel:+79313519651" className="btn-outline">
                +7 (931) 351-96-51
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Наши</span>{' '}
            <span className="text-white">услуги</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="section bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Отраслевые</span>{' '}
                <span className="text-white">практики</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Мы специализируемся на ключевых отраслях права, которые наиболее востребованы
                в строительном и инвестиционном бизнесе.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {practices.map((practice, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#c9a227] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white text-sm">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                alt="Юридические услуги"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Принципы</span>{' '}
            <span className="text-white">работы</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a227]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#c9a227]">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-400 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0f0f0f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Нужна</span>{' '}
            <span className="text-gradient-gold">юридическая помощь?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Запишитесь на бесплатную консультацию для оценки вашей ситуации и подбора решения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-gold">
              Записаться на консультацию
            </Link>
            <a href="tel:+79313519651" className="btn-outline">
              Позвонить
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
