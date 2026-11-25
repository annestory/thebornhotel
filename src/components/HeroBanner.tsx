import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { HERO_SLIDES, IMPACT_METRICS } from '../data/culinaryData';
import SafeImage from './SafeImage';

export default function HeroBanner() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="hero" aria-label="메인 비주얼 배너" className="relative bg-zinc-950 text-white">
      <div className="relative h-[540px] sm:h-[620px] lg:h-[680px] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={750}
          loop
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="hero-swiper"
        >
          {HERO_SLIDES.map((slide, idx) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full overflow-hidden">
                <SafeImage
                  src={slide.image}
                  alt={slide.alt}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  fallbackTitle={slide.title}
                  className="hero-slide-img h-full w-full object-cover object-center"
                />
                {/* Measured dark contrast scrim for WCAG AA+ readability */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                      <p className="mb-3 text-xs sm:text-sm font-medium tracking-wide text-zinc-300">
                        {slide.kicker}
                      </p>
                      <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-white"
                        style={{ textWrap: 'balance' }}
                      >
                        {slide.title}
                      </h1>
                      <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-200">
                        {slide.subtitle}
                      </p>
                      <div className="mt-7 flex items-center gap-4">
                        <a
                          href={slide.ctaHref}
                          className="inline-flex items-center gap-2 rounded-md bg-[#15803D] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#166534] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          <span>{slide.ctaText}</span>
                          <ArrowRight size={16} weight="bold" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Slider Controls & Counter */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 sm:bottom-10 z-20 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="이전 배너 보기"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-black/65 focus-visible:outline-2 focus-visible:outline-white"
            >
              <CaretLeft size={18} weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="다음 배너 보기"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-black/65 focus-visible:outline-2 focus-visible:outline-white"
            >
              <CaretRight size={18} weight="bold" />
            </button>
            <span className="ml-2 text-xs font-medium text-zinc-200 tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Quantitative Impact Strip */}
      <div className="border-t border-zinc-800 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 divide-y divide-zinc-800 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {IMPACT_METRICS.map((item) => (
              <div key={item.label} className="py-6 sm:px-6 first:sm:pl-0 last:lg:pr-0">
                <p className="font-editorial text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {item.value}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-zinc-100">{item.label}</p>
                <p className="mt-1 text-xs text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
