import { FormEvent, useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Clock, MagnifyingGlass, MapPin, X } from '@phosphor-icons/react';
import {
  BrandCategory,
  CULINARY_BRANDS,
  CulinaryBrand,
  KITCHEN_DIRECTORY,
} from '../data/culinaryData';
import SafeImage from './SafeImage';

const FILTER_TABS: { id: BrandCategory; label: string }[] = [
  { id: 'all', label: '전체 브랜드' },
  { id: 'korean', label: '한식 · 구이' },
  { id: 'chinese', label: '중식 · 누들' },
  { id: 'bakery', label: '베이커리 · 조식' },
];

export default function BrandsShowcase() {
  const [activeCategory, setActiveCategory] = useState<BrandCategory>('all');
  const [searchInput, setSearchInput] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<CulinaryBrand | null>(null);

  const filteredBrands = useMemo(() => {
    const query = submittedQuery.trim().toLowerCase();
    return CULINARY_BRANDS.filter((brand) => {
      const matchesCategory = activeCategory === 'all' || brand.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        brand.name.toLowerCase().includes(query) ||
        brand.englishName.toLowerCase().includes(query) ||
        brand.tagline.toLowerCase().includes(query) ||
        brand.signatureDishes.some((dish) => dish.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, submittedQuery]);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedQuery(searchInput);
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setSubmittedQuery('');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedBrand(null);
      }
    };
    if (selectedBrand) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedBrand]);

  return (
    <section id="brands" aria-labelledby="brands-heading" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#15803D]">02. SIGNATURE DINING ARCHIVE</p>
            <h2
              id="brands-heading"
              className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: 'balance' }}
            >
              대중의 식탁을 채우는 시그니처 브랜드와 요리
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              한식 구이부터 제주 로컬 중식, 아침 조식 뷔페와 베이커리까지—직접 개발하고 운영하는
              대표 다이닝 포트폴리오를 탐색해 보세요.
            </p>
          </div>

          {/* Search Form (<form> requirement) */}
          <form
            onSubmit={handleSearchSubmit}
            role="search"
            aria-label="브랜드 및 대표 메뉴 검색"
            className="flex w-full max-w-md items-center gap-2"
          >
            <div className="relative flex-1">
              <MagnifyingGlass
                size={18}
                weight="bold"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setSubmittedQuery(e.target.value);
                }}
                placeholder="브랜드 또는 메뉴 검색 (예: 우삼겹, 짬뽕)"
                aria-label="브랜드 또는 대표 메뉴 검색어"
                className="h-11 w-full rounded-md border border-zinc-300 bg-white pl-10 pr-9 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#15803D] focus:outline-none"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  aria-label="검색어 지우기"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-zinc-400 hover:text-zinc-700"
                >
                  <X size={15} weight="bold" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="h-11 rounded-md bg-zinc-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              검색
            </button>
          </form>
        </div>

        {/* Interactive Category Filter Buttons */}
        <div
          role="tablist"
          aria-label="음식 카테고리 필터"
          className="mt-8 flex flex-wrap items-center gap-1.5 rounded-lg bg-zinc-100 p-1.5 w-fit"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(tab.id)}
                className={`min-h-[38px] rounded-md px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Brand Showcase Grid */}
        {filteredBrands.length === 0 ? (
          <div className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-14 text-center">
            <p className="text-base font-semibold text-zinc-900">
              검색 조건과 일치하는 다이닝 브랜드가 없습니다.
            </p>
            <p className="mt-1.5 text-sm text-zinc-500">
              다른 키워드(우삼겹, 탕수육, 탐모라, 카이막 등)로 검색하거나 필터를 초기화해 주세요.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                handleClearSearch();
              }}
              className="mt-5 inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 hover:bg-zinc-100"
            >
              전체 브랜드 보기
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBrands.map((brand) => (
              <article
                key={brand.id}
                className="culinary-card group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors duration-200 hover:border-zinc-300"
              >
                <button
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  className="flex flex-1 flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <SafeImage
                      src={brand.image}
                      alt={brand.alt}
                      fallbackTitle={brand.name}
                      className="culinary-card-media h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      {/* Zero-Pill Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 tabular-nums">
                        <span className="text-[#15803D]">{brand.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{brand.hours}</span>
                      </div>

                      <h3 className="mt-2.5 flex items-center justify-between gap-2 text-lg font-bold text-zinc-900 group-hover:text-[#15803D] transition-colors">
                        <span>{brand.name}</span>
                        <ArrowUpRight
                          size={18}
                          weight="bold"
                          className="shrink-0 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#15803D]"
                          aria-hidden="true"
                        />
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 line-clamp-2">
                        {brand.tagline}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-zinc-100 pt-3.5 text-xs text-zinc-500">
                      대표 메뉴: {brand.signatureDishes.slice(0, 3).join(' · ')}
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}

        {/* Structured HTML Dining Map Directory (Replaces static capture infographic) */}
        <div className="mt-16 rounded-xl border border-zinc-200 bg-[#F7F7F5] p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-zinc-200 pb-5">
            <div>
              <p className="text-xs font-semibold text-zinc-500">THEBORN JEJU CULINARY DIRECTORY</p>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-zinc-900">
                호텔더본 미식 스트리트 운영 안내
              </h3>
            </div>
            <p className="text-xs text-zinc-500">
              서귀포 중문 한 곳에서 즐기는 6개 직영 식음업장 가이드
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {KITCHEN_DIRECTORY.map((item) => (
              <div
                key={item.code}
                className="flex items-start justify-between gap-4 rounded-lg border border-zinc-200 bg-white p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-900 text-xs font-bold text-white tabular-nums">
                    {item.code}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">{item.name}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">{item.specialty}</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-zinc-700 tabular-nums whitespace-nowrap shrink-0">
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Brand Detail Lightbox Modal */}
      {selectedBrand && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-brand-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
          onClick={() => setSelectedBrand(null)}
        >
          <div
            className="animate-modal-reveal relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-sm">
              <div>
                <p className="text-xs font-medium text-[#15803D]">{selectedBrand.englishName}</p>
                <h3 id="modal-brand-title" className="text-lg sm:text-xl font-bold text-zinc-900">
                  {selectedBrand.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBrand(null)}
                aria-label="상세 창 닫기"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-zinc-100">
                <SafeImage
                  src={selectedBrand.image}
                  alt={selectedBrand.alt}
                  fallbackTitle={selectedBrand.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-zinc-200 pb-4 text-xs sm:text-sm text-zinc-600 tabular-nums">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={16} weight="bold" className="text-[#15803D]" aria-hidden="true" />
                  <span>{selectedBrand.hours}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={16} weight="bold" className="text-[#15803D]" aria-hidden="true" />
                  <span>{selectedBrand.location}</span>
                </span>
                {selectedBrand.breakTime && (
                  <span className="text-zinc-500">{selectedBrand.breakTime}</span>
                )}
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-700">
                {selectedBrand.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-semibold tracking-wide text-zinc-500">
                  대표 시그니처 메뉴
                </h4>
                <p className="mt-2 text-sm font-medium text-zinc-900">
                  {selectedBrand.signatureDishes.join('  ·  ')}
                </p>
              </div>

              {selectedBrand.secondaryImages.length > 0 && (
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {selectedBrand.secondaryImages.map((extra) => (
                    <figure
                      key={extra.src}
                      className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50"
                    >
                      <SafeImage
                        src={extra.src}
                        alt={extra.caption}
                        fallbackTitle={selectedBrand.name}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <figcaption className="px-3.5 py-2.5 text-xs text-zinc-600">
                        {extra.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
