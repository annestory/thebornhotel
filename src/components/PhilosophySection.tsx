import { CHEF_PHILOSOPHY } from '../data/culinaryData';
import SafeImage from './SafeImage';

export default function PhilosophySection() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-heading" className="bg-[#F7F7F5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Chef Editorial Portrait & Signature */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 sm:p-8">
            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-500">
                Chef &amp; Founder Profile · 백아람
              </p>
              <div className="mt-4 overflow-hidden rounded-lg bg-[#F5F5F3]">
                <SafeImage
                  src="/assets/aistudio/Gemini_Generated_Image_hchk56hchk56hchk_425da11f.png"
                  alt="활기찬 주방에서 불꽃 위로 웍을 돌리며 환하게 미소 짓는 셰프"
                  fallbackTitle="주방에서 요리하는 셰프"
                  className="h-[340px] sm:h-[400px] w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4 border-t border-zinc-100 pt-5">
              <div>
                <p className="text-base font-bold text-zinc-900">백아람</p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  요리 사업가 · 대중음식 셰프 · 더본코리아 대표
                </p>
              </div>
              <img
                src="/assets/aistudio/ceo_sign_7cf6fe2b.jpg"
                alt="백아람 셰프 자필 서명"
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain mix-blend-multiply opacity-85"
              />
            </div>
          </div>

          {/* Right: Culinary Entrepreneur & Popular-Dining Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-semibold text-[#C8232C]">01. CULINARY PHILOSOPHY</p>
              <h2
                id="philosophy-heading"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-zinc-900"
                style={{ textWrap: 'balance' }}
              >
                &ldquo;장사의 본질은 특별한 기교가 아니라, 손님이 매일 찾아와도 편안한 정직한 맛에 있습니다.&rdquo;
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                대중음식 셰프로서 불판 앞의 한 그릇을 고민하고, 요리 사업가로서 그 맛이 전국과 세계의
                주방에서 흔들리지 않도록 시스템을 설계합니다.
              </p>
            </div>

            <div className="mt-10 divide-y divide-zinc-200 border-t border-b border-zinc-200">
              {CHEF_PHILOSOPHY.map((item) => (
                <article key={item.number} className="py-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="font-editorial text-xl font-bold text-[#C8232C] tabular-nums shrink-0">
                      {item.number}.
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {item.description}
                      </p>
                      <p className="mt-2.5 text-xs font-medium text-zinc-500">
                        {item.metric}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
