import { FormEvent, useState } from 'react';
import { CheckCircle, PaperPlaneTilt, WarningCircle } from '@phosphor-icons/react';
import SafeImage from './SafeImage';

interface FormState {
  inquiryType: string;
  name: string;
  contact: string;
  brandInterest: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  inquiryType: '외식 브랜드 협업',
  name: '',
  contact: '',
  brandInterest: '본가 Premium',
  message: '',
};

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<FormState | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = formData.name.trim();
    const trimmedContact = formData.contact.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      setErrorMsg('성함 또는 담당자명을 2자 이상 입력해 주세요.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s]{8,20}$/;
    if (!emailRegex.test(trimmedContact) && !phoneRegex.test(trimmedContact)) {
      setErrorMsg('올바른 이메일 주소 또는 연락처(전화번호)를 입력해 주세요.');
      return;
    }

    if (trimmedMessage.length < 10) {
      setErrorMsg('문의 내용을 10자 이상 구체적으로 작성해 주세요.');
      return;
    }

    setSubmittedSummary({
      ...formData,
      name: trimmedName,
      contact: trimmedContact,
      message: trimmedMessage,
    });
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setSubmittedSummary(null);
    setErrorMsg(null);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-[#F7F7F5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Hospitality Visual & Direct Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold text-[#C8232C]">04. COLLABORATION &amp; BOOKING</p>
              <h2
                id="contact-heading"
                className="mt-2.5 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900"
                style={{ textWrap: 'balance' }}
              >
                비즈니스 협업 및 다이닝 예약 문의
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                외식 브랜드 제휴, 지역 특산물 레시피 개발 자문, 호텔더본 제주 연회 및 단체 다이닝
                예약 문의를 남겨 주시면 담당 팀이 빠르게 회신드립니다.
              </p>

              <div className="mt-6 overflow-hidden rounded-lg bg-zinc-100">
                <SafeImage
                  src="/assets/aistudio/bg_row5_26b6978c.jpg"
                  alt="호텔더본 제주 라운지 테이블과 모닝 커피 머그"
                  fallbackTitle="호텔더본 제주 라운지"
                  className="h-52 w-full object-cover"
                />
              </div>
            </div>

            <dl className="mt-6 divide-y divide-zinc-100 border-t border-zinc-100 text-sm">
              <div className="flex items-center justify-between py-3">
                <dt className="font-medium text-zinc-500">주요 거점</dt>
                <dd className="font-semibold text-zinc-900">제주 서귀포시 중문 · 서울 본사</dd>
              </div>
              <div className="flex items-center justify-between py-3">
                <dt className="font-medium text-zinc-500">대표 다이닝 운영</dt>
                <dd className="font-semibold text-zinc-900 tabular-nums">07:00 – 22:00 (연중무휴)</dd>
              </div>
              <div className="flex items-center justify-between py-3">
                <dt className="font-medium text-zinc-500">회신 소요 시간</dt>
                <dd className="font-semibold text-zinc-900">영업일 기준 24시간 이내</dd>
              </div>
            </dl>
          </div>

          {/* Right: Validated Interactive Form */}
          <div className="lg:col-span-7 rounded-xl border border-zinc-200 bg-white p-6 sm:p-8">
            {submittedSummary ? (
              <div
                role="status"
                aria-live="polite"
                className="flex h-full flex-col items-start justify-center py-8"
              >
                <div className="flex items-center gap-2.5 text-emerald-700">
                  <CheckCircle size={26} weight="fill" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-zinc-900">문의가 정상적으로 접수되었습니다.</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {submittedSummary.name}님, 남겨주신 <strong className="text-zinc-900">{submittedSummary.inquiryType}</strong>{' '}
                  ({submittedSummary.brandInterest}) 관련 내용을 확인 후{' '}
                  <span className="font-medium text-zinc-900">{submittedSummary.contact}</span>로
                  연락드리겠습니다.
                </p>

                <div className="mt-6 w-full rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-xs sm:text-sm text-zinc-700">
                  <p className="font-semibold text-zinc-900">접수 요약</p>
                  <p className="mt-1.5 whitespace-pre-line">{submittedSummary.message}</p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
                >
                  새 문의 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col justify-between gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="inquiryType" className="block text-xs font-semibold text-zinc-700">
                      문의 분야
                    </label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="mt-1.5 h-11 w-full rounded-md border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 focus:border-[#C8232C] focus:outline-none"
                    >
                      <option value="외식 브랜드 협업">외식 브랜드 협업</option>
                      <option value="단체 연회 · 다이닝 예약">단체 연회 · 다이닝 예약</option>
                      <option value="메뉴 · 레시피 자문">메뉴 · 레시피 자문</option>
                      <option value="미디어 · 강연 요청">미디어 · 강연 요청</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="brandInterest" className="block text-xs font-semibold text-zinc-700">
                      관심 브랜드 / 공간
                    </label>
                    <select
                      id="brandInterest"
                      value={formData.brandInterest}
                      onChange={(e) => setFormData({ ...formData, brandInterest: e.target.value })}
                      className="mt-1.5 h-11 w-full rounded-md border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 focus:border-[#C8232C] focus:outline-none"
                    >
                      <option value="본가 Premium">본가 Premium</option>
                      <option value="도두반점">도두반점</option>
                      <option value="조식당 탐모라">조식당 탐모라</option>
                      <option value="빽다방 빵연구소">빽다방 빵연구소</option>
                      <option value="호텔더본 연회 · 컨퍼런스">호텔더본 연회 · 컨퍼런스</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-zinc-700">
                      성함 / 담당자명 <span className="text-[#C8232C]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="예: 홍길동"
                      className="mt-1.5 h-11 w-full rounded-md border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#C8232C] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-input" className="block text-xs font-semibold text-zinc-700">
                      이메일 또는 연락처 <span className="text-[#C8232C]">*</span>
                    </label>
                    <input
                      id="contact-input"
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="예: chef@theborn.co.kr 또는 010-1234-5678"
                      className="mt-1.5 h-11 w-full rounded-md border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#C8232C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-zinc-700">
                    상세 문의 내용 <span className="text-[#C8232C]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="희망 일정, 인원, 또는 협업 제안 내용을 자유롭게 작성해 주세요."
                    className="mt-1.5 w-full rounded-md border border-zinc-300 bg-white p-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#C8232C] focus:outline-none"
                  />
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="flex items-center gap-2 rounded-md border border-red-300 bg-red-50 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-red-800"
                  >
                    <WarningCircle size={18} weight="fill" className="shrink-0" aria-hidden="true" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <p className="text-xs text-zinc-500">
                    입력하신 정보는 문의 회신 목적으로만 사용됩니다.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#C8232C] px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#A61B23] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8232C]"
                  >
                    <span>문의 접수하기</span>
                    <PaperPlaneTilt size={16} weight="bold" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
