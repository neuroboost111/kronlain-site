import Link from 'next/link';
import { Metadata } from 'next';
import Logo, { brandColors } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Кронлайн Техно — Аренда спецтехники и логистика',
  description: 'Аренда спецтехники: экскаваторы, погрузчики, самосвалы. Логистика на стройплощадках, складские услуги.',
};

const equipment = [
  {
    title: 'Экскаваторы',
    description: 'Гусеничные и колёсные экскаваторы различной мощности',
    image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=600&q=80',
  },
  {
    title: 'Погрузчики',
    description: 'Фронтальные и телескопические погрузчики',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    title: 'Самосвалы',
    description: 'Самосвалы различной грузоподъёмности для перевозки материалов',
    image: 'https://images.unsplash.com/photo-1586191582066-8f36e8e8b9a9?w=600&q=80',
  },
  {
    title: 'Бульдозеры',
    description: 'Техника для планировки и перемещения грунта',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
];

const services = [
  {
    title: 'Аренда спецтехники',
    description: 'Широкий парк строительной техники с операторами или без',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Логистика на стройплощадках',
    description: 'Организация движения техники и материалов на объекте',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Услуги операторов',
    description: 'Квалифицированные операторы с опытом работы на различной технике',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Складские услуги',
    description: 'Хранение материалов и оборудования на охраняемых складах',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Доставка материалов',
    description: 'Перевозка строительных материалов на объект',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: 'Техобслуживание',
    description: 'Сервисное обслуживание и ремонт строительной техники',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const advantages = [
  'Своя техника на базе в Ленобласти',
  'Оперативное закрытие задач',
  'Прозрачные договоры, учёт и контроль',
  'Конкурентные цены',
  'Техника в исправном состоянии',
  'Опытные операторы',
];

export default function TechnoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-[#0f0f0f] to-[#0f0f0f]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Logo color={brandColors.techno} size={40} />
              <span className="text-[#16a34a] font-medium">Кронлайн Техно</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Аренда техники</span>{' '}
              <span className="text-white">и логистика</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Аренда спецтехники с операторами. Логистика на стройплощадках,
              складские услуги и доставка материалов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacts" className="btn-gold">
                Заказать технику
              </Link>
              <a href="tel:+79313519651" className="btn-outline">
                +7 (931) 351-96-51
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Парк</span>{' '}
            <span className="text-white">техники</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
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
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
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
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80"
                alt="Техника"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Преимущества</span>{' '}
                <span className="text-white">работы с нами</span>
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
                  Получить прайс
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0f0f0f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Нужна</span>{' '}
            <span className="text-gradient-gold">спецтехника?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Свяжитесь с нами для расчёта стоимости аренды и уточнения наличия техники
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-gold">
              Оставить заявку
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
