import Link from 'next/link';
import { Metadata } from 'next';
import Logo, { brandColors } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Кронлайн Лэнд — Ландшафтный дизайн и благоустройство',
  description: 'Ландшафтный дизайн и благоустройство территорий. Мощение, озеленение, дренаж, газоны, водоёмы.',
};

const services = [
  {
    title: 'Подготовка территории',
    description: 'Копка, отсыпка, планировка участка и устройство дренажных систем',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Мощение',
    description: 'Укладка брусчатки, тротуарной плитки, установка бордюров',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: 'Озеленение',
    description: 'Посадка деревьев, кустарников, цветов и создание газонов',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Устройство газонов',
    description: 'Рулонные и посевные газоны, системы автополива',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Водоёмы',
    description: 'Создание прудов, фонтанов и декоративных водных объектов',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    title: 'Ландшафтный дизайн',
    description: 'Разработка проекта благоустройства и авторский надзор',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
];

const portfolio = [
  {
    title: 'Благоустройство загородного участка',
    area: '15 соток',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80',
  },
  {
    title: 'Ландшафт коттеджного посёлка',
    area: '2 га',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
  },
  {
    title: 'Озеленение офисной территории',
    area: '500 м²',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80',
  },
];

const advantages = [
  'Творческий подход + рабочая мощность',
  'Опытные бригады',
  'Сезонные акции и гарантия',
  'Работа под ключ',
  'Индивидуальный дизайн-проект',
  'Качественные материалы',
];

export default function LandPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-[#0f0f0f] to-[#0f0f0f]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Logo color={brandColors.land} size={40} />
              <span className="text-[#059669] font-medium">Кронлайн Лэнд</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Ландшафт</span>{' '}
              <span className="text-white">и благоустройство</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Создаём красивые и функциональные пространства. Ландшафтный дизайн,
              мощение, озеленение, водоёмы — всё под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacts" className="btn-gold">
                Заказать проект
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
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Наши</span>{' '}
            <span className="text-white">работы</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div key={index} className="card overflow-hidden p-0">
                <div className="aspect-video bg-[#2a2a2a]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[#c9a227] text-sm">{item.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Почему</span>{' '}
                <span className="text-white">выбирают нас</span>
              </h2>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#c9a227] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{advantage}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contacts" className="btn-gold">
                  Заказать расчёт
                </Link>
              </div>
            </div>
            <div className="aspect-square bg-[#2a2a2a] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
                alt="Ландшафтный дизайн"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0f0f0f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Создадим</span>{' '}
            <span className="text-gradient-gold">ваш идеальный участок</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Закажите бесплатный выезд специалиста для оценки участка и расчёта стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-gold">
              Заказать выезд
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
