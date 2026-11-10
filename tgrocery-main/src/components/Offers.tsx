import { offers } from "../data";
import { SectionHeading } from "./SectionHeading";

export function Offers() {
  return (
    <section aria-labelledby="offers" className="gutter flex w-full flex-col gap-7 bg-mint py-10 md:py-12">
      <SectionHeading
        id="offers"
        title="Good food. Even better prices."
        subtitle="This week’s offers · November 6–12"
        linkLabel="View all offers"
      />

      <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {offers.map((o) => (
          <li key={o.id} className="md:last:col-span-2 lg:last:col-span-1">
            <a
              href="#"
              className="flex h-full items-center gap-5 rounded-[24px] bg-white p-5 transition-shadow hover:shadow-[0_8px_24px_rgba(24,53,41,0.08)] sm:p-6"
            >
              <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
                <p className="text-xs tracking-[1px] text-brand uppercase">{o.label}</p>
                <p className="text-[32px] leading-none font-medium text-brand sm:text-[36px]">{o.price}</p>
                <s className="text-xs text-muted">
                  <span className="sr-only">Was </span>
                  {o.wasPrice}
                </s>
                <p className="text-[15px] text-ink">{o.name}</p>
                <p className="text-xs text-muted">{o.size}</p>
              </div>
              <div className="h-[128px] w-[120px] shrink-0 overflow-hidden rounded-[24px] sm:h-[154px] sm:w-[145px]">
                <img src={o.image} alt="" loading="lazy" className="size-full object-cover" />
              </div>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-[11px] text-muted">
        Prices valid November 6–12, while supplies last. No membership needed. Local availability may vary.
      </p>
    </section>
  );
}
