import { useState } from 'react';
import { HOSPITALITY_SPACES, SpaceTab } from '../data/culinaryData';
import SafeImage from './SafeImage';

export default function SpacesSection() {
  const [activeTab, setActiveTab] = useState<SpaceTab>('rooms');

  const visibleSpaces = HOSPITALITY_SPACES.filter((space) => space.tab === activeTab);

  return (
    <section
      id="spaces"
      aria-labelledby="spaces-heading"
      className="bg-zinc-950 py-16 sm:py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#4ADE80]">03. HOSPITALITY &amp; SPACE</p>
            <h2
              id="spaces-heading"
              className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              음식에서 머무름까지 확장된 미식 공간
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-300">
              요리 사업가로서 맛있는 식사를 넘어 편안한 휴식과 격조 있는 연회·비즈니스 모임까지
              하나의 동선으로 연결했습니다.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="공간 유형 선택"
            className="flex items-center gap-1 rounded-lg bg-zinc-900 p-1.5 border border-zinc-800 w-fit"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'rooms'}
              onClick={() => setActiveTab('rooms')}
              className={`min-h-[38px] rounded-md px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'rooms'
                  ? 'bg-[#15803D] text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              객실 &amp; 스테이
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'banquet'}
              onClick={() => setActiveTab('banquet')}
              className={`min-h-[38px] rounded-md px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'banquet'
                  ? 'bg-[#15803D] text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              연회 &amp; 컨퍼런스
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {visibleSpaces.map((space) => (
            <article
              key={space.id}
              className="culinary-card flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-800">
                <SafeImage
                  src={space.image}
                  alt={space.alt}
                  fallbackTitle={space.title}
                  className="culinary-card-media h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-medium tracking-wide text-zinc-400">
                    {space.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">{space.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                    {space.description}
                  </p>
                </div>

                <p className="mt-5 border-t border-zinc-800 pt-3.5 text-xs font-medium text-zinc-400 tabular-nums">
                  {space.capacityOrSize}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
