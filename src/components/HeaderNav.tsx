import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';

const NAV_ITEMS = [
  { label: '셰프 철학', href: '#philosophy' },
  { label: '다이닝 브랜드', href: '#brands' },
  { label: '공간 & 연회', href: '#spaces' },
  { label: '비즈니스 문의', href: '#contact' },
];

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#hero"
          className="font-editorial text-lg font-bold tracking-tight text-zinc-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8232C]"
        >
          백아람 · THEGREEN
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav aria-label="주요 메뉴" className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-underline text-sm font-medium text-zinc-600 transition-colors duration-150 hover:text-zinc-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8232C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#C8232C] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#A61B23] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8232C]"
          >
            협업 · 예약 문의
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-zinc-800 transition-colors hover:bg-zinc-100 md:hidden focus-visible:outline-2 focus-visible:outline-[#C8232C]"
          >
            {mobileMenuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="모바일 메뉴"
          className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-[#C8232C]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center justify-center rounded-md bg-[#C8232C] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#A61B23]"
              >
                협업 · 예약 문의
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
