import { benefits } from "../data";
import { Icon } from "./Icon";

export function QualityPromise() {
  return (
    <section aria-labelledby="promise" className="gutter flex w-full flex-col gap-9 py-10 md:py-14">
      <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-12">
        <p className="text-xs font-bold tracking-eyebrow whitespace-nowrap text-brand uppercase">The Thai’s promise</p>
        <h2
          id="promise"
          className="min-w-0 flex-1 text-[28px] leading-[1.08] font-semibold tracking-display text-ink md:text-[32px]"
        >
          Good food. Close to home.
        </h2>
      </div>

      <ul className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:gap-12">
        {benefits.map((b) => (
          <li key={b.title} className="flex items-start gap-[18px]">
            <Icon src={b.icon} size={30} />
            <div className="flex min-w-0 flex-1 flex-col gap-2 leading-[1.5]">
              <h3 className="text-base font-semibold text-ink">{b.title}</h3>
              <p className="text-sm text-muted">{b.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
