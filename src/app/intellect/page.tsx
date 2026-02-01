import Link from 'next/link';
import { Metadata } from 'next';
import Logo, { brandColors } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Кронлайн Интеллект — AI и автоматизация бизнеса',
  description: 'Внедрение нейросетей в бизнес-процессы. AI-продавцы, чат-боты, голосовые ассистенты, автоматизация через Make/N8N.',
};

const services = [
  {
    title: 'Внедрение нейросетей',
    description: 'Интеграция AI-решений в существующие бизнес-процессы для повышения эффективности',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'AI-продавцы',
    description: 'Умные ассистенты для продаж, которые работают 24/7 и увеличивают конверсию',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: 'Чат-боты',
    description: 'Разработка интеллектуальных чат-ботов для поддержки клиентов и автоматизации коммуникаций',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Голосовые ассистенты',
    description: 'Создание голосовых помощников для обработки звонков и голосовых команд',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Автоматизация Make/N8N',
    description: 'Настройка автоматических сценариев и интеграций между сервисами',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'GPT-сотрудники',
    description: 'Разработка кастомных AI-ассистентов под специфические задачи вашего бизнеса',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const stats = [
  { number: '40%', label: 'Рост конверсии продаж', description: 'Увеличение на 25–40% благодаря AI-решениям' },
  { number: '60%', label: 'Снижение затрат', description: 'Снижение затрат на рутину и коммуникации' },
  { number: '5x', label: 'Ускорение обработки', description: 'Ускорение обработки заявок в 3–5 раз' },
];

const useCases = [
  {
    title: 'Для отдела продаж',
    items: ['Автоматическая квалификация лидов', 'AI-помощник для менеджеров', 'Умные скрипты продаж'],
  },
  {
    title: 'Для поддержки клиентов',
    items: ['Чат-бот первой линии', 'Автоответы на частые вопросы', 'Маршрутизация обращений'],
  },
  {
    title: 'Для маркетинга',
    items: ['Генерация контента', 'Персонализация рассылок', 'Анализ данных клиентов'],
  },
  {
    title: 'Для HR',
    items: ['Первичный скрининг резюме', 'Чат-бот для кандидатов', 'Автоматизация онбординга'],
  },
];

export default function IntellectPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#0f0f0f] to-[#0f0f0f]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Logo color={brandColors.intellect} size={40} />
              <span className="text-[#2563eb] font-medium">Кронлайн Интеллект</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">AI и автоматизация</span>{' '}
              <span className="text-white">бизнеса</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Внедряем нейросети в бизнес-процессы. AI-продавцы, чат-боты, голосовые ассистенты
              и полная автоматизация рутинных задач.
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

      {/* Stats */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#c9a227] mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
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
            <span className="text-white">решения</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Применение</span>{' '}
            <span className="text-white">в бизнесе</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-[#c9a227] mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Как мы</span>{' '}
            <span className="text-white">работаем</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Аудит', desc: 'Анализируем текущие процессы и выявляем точки роста' },
              { step: '02', title: 'Стратегия', desc: 'Разрабатываем план внедрения AI-решений' },
              { step: '03', title: 'Внедрение', desc: 'Настраиваем и интегрируем решения в вашу инфраструктуру' },
              { step: '04', title: 'Поддержка', desc: 'Обучаем команду и обеспечиваем техподдержку' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#c9a227]/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Готовы</span>{' '}
            <span className="text-gradient-gold">автоматизировать бизнес?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Получите бесплатную консультацию и узнайте, как AI может увеличить эффективность вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-gold">
              Получить консультацию
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
