import { categories } from "../data";
import { SectionHeading } from "./SectionHeading";

export function Categories() {
  return (
    <section aria-labelledby="categories" className="flex w-full flex-col gap-7 py-10 md:py-14">
      <div className="gutter">
        <SectionHeading id="categories" title="Your market, aisle by aisle." linkLabel="Shop all departments" />
      </div>

      {/* Mobile: swipeable rail · Tablet: 3 columns · Desktop: one row of 6 */}
      <ul className="gutter no-scrollbar relative flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible md:grid-cols-6">
        {categories.map((c) => (
          <li key={c.name} className="w-[132px] shrink-0 snap-start sm:w-auto">
            <a href="#" className="group flex flex-col items-center gap-3.5">
              <div className="h-[100px] w-full overflow-hidden rounded-[100px] sm:h-[130px] md:h-[100px] lg:h-[152px]">
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-sm font-semibold whitespace-nowrap text-ink group-hover:underline">{c.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
