import { recipes } from "../data";
import { SectionHeading } from "./SectionHeading";

export function Recipes() {
  return (
    <section aria-labelledby="recipes" className="gutter flex w-full flex-col gap-7 bg-mint py-10 md:py-14">
      <SectionHeading
        id="recipes"
        title="A little inspiration. A delicious week."
        subtitle="Simple recipes, made with the best of the season."
        linkLabel="Explore recipes"
      />

      <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {recipes.map((r) => (
          <li key={r.name} className="sm:last:col-span-2 lg:last:col-span-1">
            <a href="#" className="group flex flex-col">
              <div className="h-[220px] w-full overflow-hidden rounded-[24px] sm:h-[240px]">
                <img
                  src={r.image}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-3 pt-5 pb-2">
                <p className="text-sm leading-[1.4] text-muted">{r.meta}</p>
                <h3 className="text-[21px] text-ink sm:text-[23px]">{r.name}</h3>
                <span className="text-[13px] text-brand group-hover:underline">
                  Shop the recipe<span aria-hidden="true">&nbsp;&nbsp;→</span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
