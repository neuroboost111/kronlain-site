import Link from 'next/link';
import Logo from '@/components/Logo';

const directions = [
  {
    name: 'Девелопмент',
    description: 'Строительство под ключ: от проектирования до сдачи объекта',
    href: '/development',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-amber-600 to-amber-800',
  },
  {
    name: 'Интеллект',
    description: 'AI-решения и автоматизация бизнес-процессов',
    href: '/intellect',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Техно',
    description: 'Аренда спецтехники и логистика на стройплощадках',
    href: '/techno',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    color: 'from-green-600 to-green-800',
  },
  {
    name: 'Лэнд',
    description: 'Ландшафтный дизайн и благоустройство территорий',
    href: '/land',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    name: 'Лигал',
    description: 'Юридическое сопровождение и консалтинг',
    href: '/legal',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    color: 'from-purple-600 to-purple-800',
  },
  {
    name: 'Инвест',
    description: 'Финансы, инвестиционные проекты и венчур',
    href: '/invest',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'from-rose-600 to-rose-800',
  },
];

const values = [
  { title: 'Ответственность за результат', description: 'Берём на себя полную ответственность за каждый проект' },
  { title: 'Честность в партнёрстве', description: 'Прозрачные условия и открытая коммуникация' },
  { title: 'Эффективность решений', description: 'Оптимальные решения для достижения целей' },
  { title: 'Инновации и технологии', description: 'Внедряем передовые технологии во все процессы' },
  { title: 'Уважение к команде и клиенту', description: 'Строим долгосрочные партнёрские отношения' },
];

const stats = [
  { number: '6', label: 'направлений бизнеса' },
  { number: '50+', label: 'реализованных проектов' },
  { number: '10+', label: 'лет опыта в отрасли' },
  { number: '100%', label: 'выполненных обязательств' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227] rounded-full filter blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a227] rounded-full filter blur-[128px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size={80} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient-gold">Группа компаний</span>
            <br />
            <span className="text-white">«Кронлайн»</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            Экосистема устойчивых решений для бизнеса, общества и государства —
            на стыке строительства, технологий и капитала
          </p>

          <p className="text-[#c9a227] text-lg tracking-widest mb-12">
            СИЛА РЕШЕНИЙ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-gold text-lg">
              Начать сотрудничество
            </Link>
            <Link href="#directions" className="btn-outline text-lg">
              Наши направления
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#c9a227] mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="section bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-gold">Структура</span>{' '}
              <span className="text-white">группы компаний</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Шесть специализированных направлений, объединённых общей миссией и ценностями
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((direction) => (
              <Link
                key={direction.name}
                href={direction.href}
                className="card group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${direction.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {direction.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c9a227] transition-colors">
                  Кронлайн {direction.name}
                </h3>
                <p className="text-gray-400">{direction.description}</p>
                <div className="mt-4 flex items-center text-[#c9a227] text-sm font-medium">
                  Подробнее
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-gold">Миссия</span>{' '}
                <span className="text-white">и ценности</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Мы создаём экосистему устойчивых решений для бизнеса, общества и государства —
                на стыке строительства, технологий и капитала.
              </p>
              <p className="text-lg text-[#c9a227] italic">
                Надёжно. Масштабно. Стратегически.
              </p>
            </div>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="card">
                  <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227] rounded-full filter blur-[128px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Готовы к</span>{' '}
            <span className="text-gradient-gold">сотрудничеству?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Партнёрство с нами — это доступ к силе, скорости и системности на грани будущего
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-gold text-lg">
              Связаться с нами
            </Link>
            <a href="tel:+79313519651" className="btn-outline text-lg">
              +7 (931) 351-96-51
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
