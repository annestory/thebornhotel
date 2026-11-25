export default function FooterSection() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/aistudio/logo_02786b99.png"
                alt="HOTEL THEBORN 로고"
                referrerPolicy="no-referrer"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              요리 사업가 · 대중음식 셰프 백종원 다이닝 포트폴리오 · 제주특별자치도 서귀포시 색달로 18
            </p>
          </div>

          <nav aria-label="하단 바로가기" className="flex flex-wrap gap-6 text-xs font-medium text-zinc-300">
            <a href="#hero" className="hover:text-white transition-colors">
              홈
            </a>
            <a href="#philosophy" className="hover:text-white transition-colors">
              셰프 철학
            </a>
            <a href="#brands" className="hover:text-white transition-colors">
              다이닝 브랜드
            </a>
            <a href="#spaces" className="hover:text-white transition-colors">
              공간 &amp; 연회
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              비즈니스 문의
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-500">
          <p>© 2026 백종원 · THEBORN Culinary Archive. All rights reserved.</p>
          <p className="tabular-nums">Daily Dining Hours 07:00 – 22:00</p>
        </div>
      </div>
    </footer>
  );
}
