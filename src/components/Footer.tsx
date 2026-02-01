import Link from 'next/link';
import Logo from './Logo';

const services = [
  { name: 'Девелопмент', href: '/development' },
  { name: 'Интеллект', href: '/intellect' },
  { name: 'Техно', href: '/techno' },
  { name: 'Лэнд', href: '/land' },
  { name: 'Лигал', href: '/legal' },
  { name: 'Инвест', href: '/invest' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Logo size={32} />
              <div>
                <span className="text-xl font-bold tracking-wider text-white">КРОНЛАЙН</span>
                <span className="block text-[10px] tracking-[0.3em] text-[#c9a227]">СИЛА РЕШЕНИЙ</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Многоотраслевая группа компаний, объединяющая экспертные решения в сфере строительства,
              автоматизации, логистики и инвестиций.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#c9a227] font-semibold mb-6">Направления</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[#c9a227] font-semibold mb-6">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#c9a227] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+79313519651" className="hover:text-white transition-colors">
                  +7 (931) 351-96-51
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#c9a227] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:kronlain@mail.ru" className="hover:text-white transition-colors">
                  kronlain@mail.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#c9a227] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>г. Тосно, ул. Промышленная 5 А</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-[#c9a227] font-semibold mb-6">Режим работы</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Пн-Пт: 9:00 - 18:00</li>
              <li>Сб: 10:00 - 15:00</li>
              <li>Вс: выходной</li>
            </ul>
            <Link href="/contacts" className="inline-block mt-6 btn-outline text-sm">
              Написать нам
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Группа компаний «Кронлайн». Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
