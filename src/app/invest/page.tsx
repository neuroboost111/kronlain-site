import Link from 'next/link';
import { Metadata } from 'next';
import Logo, { brandColors } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Кронлайн Инвест — Финансы и инвестиции',
  description: 'Привлечение инвестиций в девелопмент и AI. Управление активами, аудит, оценка и финансовый консалтинг.',
};

const services = [
  {
    title: 'Привлечение инвестиций',
    description: 'Поиск инвесторов для проектов в сфере девелопмента и AI-технологий',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Управление активами',
    description: 'Профессиональное управление инвестиционными портфелями и активами',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Финансовый аудит',
    description: 'Комплексная проверка финансовой отчётности и бизнес-процессов',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Оценка бизнеса',
    description: 'Оценка стоимости компаний, проектов и отдельных активов',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Венчурные проекты',
    description: 'Сопровождение стартапов и инновационных проектов',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Финансовый консалтинг',
    description: 'Стратегическое консультирование по финансовым вопросам',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const directions = [
  {
    title: 'Девелопмент',
    description: 'Инвестиции в строительство жилой и коммерческой недвижимости',
    returns: 'от 15% годовых',
  },
  {
    title: 'AI и технологии',
    description: 'Венчурные инвестиции в AI-стартапы и технологические проекты',
    returns: 'от 25% годовых',
  },
  {
    title: 'Инфраструктура',
    description: 'Инвестиции в инфраструктурные проекты и логистику',
    returns: 'от 12% годовых',
  },
];

const process = [
  { step: '01', title: 'Анализ', desc: 'Изучаем проект и оцениваем инвестиционный потенциал' },
  { step: '02', title: 'Структурирование', desc: 'Формируем оптимальную структуру сделки' },
  { step: '03', title: 'Привлечение', desc: 'Находим инвесторов и согласовываем условия' },
  { step: '04', title: 'Сопровождение', desc: 'Контролируем реализацию проекта и защищаем интересы' },
];

export default function InvestPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-[#0f0f0f] to-[#0f0f0f]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Logo color={brandColors.invest} size={40} />
              <span className="text-[#dc2626] font-medium">Кронлайн Инвест</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Финансы</span>{' '}
              <span className="text-white">и инвестиции</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Привлекаем инвестиции в девелопмент и AI-проекты. Управляем активами,
              проводим аудит и оценку бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacts" className="btn-gold">
                Обсудить инвестиции
              </Link>
              <a href="tel:+79313519651" className="btn-outline">
                +7 (931) 351-96-51
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Directions */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Направления</span>{' '}
            <span className="text-white">инвестиций</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {directions.map((direction, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-xl font-semibold text-white mb-3">{direction.title}</h3>
                <p className="text-gray-400 mb-4">{direction.description}</p>
                <div className="text-2xl font-bold text-[#c9a227]">{direction.returns}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Наши</span>{' '}
            <span className="text-white">услуги</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-600 to-rose-800 flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Как мы</span>{' '}
            <span className="text-white">работаем</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#c9a227]/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section className="section bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Для</span>{' '}
                <span className="text-white">инвесторов</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Мы предлагаем проверенные инвестиционные возможности с прозрачной
                структурой и контролем на каждом этапе.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Доступ к закрытым проектам группы компаний',
                  'Профессиональное управление инвестициями',
                  'Регулярная отчётность и контроль',
                  'Юридическое сопровождение сделок',
                  'Выход из проекта по согласованному графику',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#c9a227] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacts" className="btn-gold">
                Стать инвестором
              </Link>
            </div>
            <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Инвестиции"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Готовы</span>{' '}
            <span className="text-gradient-gold">инвестировать?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Свяжитесь с нами для обсуждения инвестиционных возможностей и получения презентации проектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-gold">
              Получить презентацию
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
