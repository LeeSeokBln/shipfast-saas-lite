export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm">
            <span className="size-1.5 rounded-full bg-indigo-500" />
            모던 SaaS 스타터
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            빠르게 출시하고, 꾸준히 성장하는
            <span className="block text-indigo-600">SaaS를 위한 기본기</span>
          </h1>
          <p className="mt-5 text-base text-neutral-600 sm:text-lg">
            인증, 결제, 대시보드까지 핵심 구조를 담은 라이트 템플릿. 프로덕트를 더 빠르게
            검증하고 업데이트하세요.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
              href="/pricing"
            >
              요금제 보기
            </a>
            <a
              className="rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900"
              href="/dashboard"
            >
              데모 대시보드
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ["24h", "초기 설정"],
              ["3x", "출시 속도"],
              ["99.9%", "가용성 목표"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-neutral-200 bg-white p-4">
                <p className="text-xl font-semibold text-neutral-900">{value}</p>
                <p className="mt-1 text-xs text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-neutral-200/70 bg-white/80 p-6 shadow-lg shadow-indigo-100">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-neutral-900">이번 주 활성 사용자</p>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                +18.4%
              </span>
            </div>
            <p className="mt-6 text-3xl font-semibold text-neutral-950">12,430</p>
            <div className="mt-6 h-24 rounded-xl bg-gradient-to-r from-indigo-500/10 via-indigo-500/30 to-indigo-500/10" />
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-neutral-500">
              <div className="rounded-lg border border-neutral-200 px-3 py-2">
                <p className="text-neutral-900">3.2%</p>
                전환율
              </div>
              <div className="rounded-lg border border-neutral-200 px-3 py-2">
                <p className="text-neutral-900">4.7k</p>
                신규 가입
              </div>
              <div className="rounded-lg border border-neutral-200 px-3 py-2">
                <p className="text-neutral-900">87%</p>
                유지율
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "모듈형 아키텍처",
            desc: "핵심 기능을 분리해 실험과 확장에 유연합니다.",
          },
          {
            title: "친숙한 디자인 시스템",
            desc: "모던한 토큰 기반 스타일로 일관된 UI를 유지합니다.",
          },
          {
            title: "운영 지표 기본 제공",
            desc: "대시보드 기반 지표를 빠르게 확인할 수 있습니다.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-semibold text-neutral-900">{card.title}</p>
            <p className="mt-3 text-sm text-neutral-600">{card.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
