import { Icon } from "./Icon";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="w-full px-3 pt-3 sm:px-5 sm:pt-5 lg:px-10 lg:pt-6">
      <div className="relative isolate flex min-h-[560px] w-full items-end overflow-hidden rounded-[20px] p-3 sm:min-h-[508px] sm:items-center sm:p-8 lg:rounded-[28px] lg:p-10">
        <img
          src="/images/seasonal-harvest.png"
          alt="An autumn harvest spread of apples, pears, squash, carrots and fresh-baked bread"
          className="absolute inset-0 -z-10 size-full object-cover object-[70%_center] sm:object-center"
          fetchPriority="high"
        />

        <div className="flex w-full flex-col items-start gap-5 rounded-[18px] bg-white p-6 sm:max-w-[520px] sm:gap-6 sm:rounded-[24px] sm:p-9">
          <p className="text-xs font-bold tracking-eyebrow text-brand uppercase">Fresh starts here</p>
          <h1
            id="hero-title"
            className="text-[34px] leading-[1.08] font-semibold tracking-display text-ink sm:text-[42px] lg:text-[49px]"
          >
            Fresh for the season. Good for every day.
          </h1>
          <p className="text-base leading-[1.5] text-muted">
            Peak-season produce, everyday favorites, and a little inspiration for your table.
          </p>
          <a
            href="#picks"
            className="group inline-flex h-12 items-center justify-center gap-4 rounded-full bg-brand px-6 text-sm text-white transition-colors hover:bg-brand-dark"
          >
            Shop the season
            <Icon src="/icons/arrow-right-white.svg" size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
