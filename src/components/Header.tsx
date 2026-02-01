'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Девелопмент', href: '/development' },
  { name: 'Интеллект', href: '/intellect' },
  { name: 'Техно', href: '/techno' },
  { name: 'Лэнд', href: '/land' },
  { name: 'Лигал', href: '/legal' },
  { name: 'Инвест', href: '/invest' },
  { name: 'Контакты', href: '/contacts' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-[#2a2a2a]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Logo size={32} />
            <div>
              <span className="text-xl font-bold tracking-wider text-white">КРОНЛАЙН</span>
              <span className="block text-[10px] tracking-[0.3em] text-[#c9a227]">СИЛА РЕШЕНИЙ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-[#c9a227] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link href="/contacts" className="hidden lg:block btn-gold text-sm">
            Связаться
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#2a2a2a]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-[#c9a227] hover:bg-[#1a1a1a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contacts"
              className="block mx-4 mt-4 btn-gold text-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Связаться
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
