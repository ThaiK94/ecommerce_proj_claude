import { Icon } from "./Icon";

type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
  linkLabel: string;
  href?: string;
};

export function SectionHeading({ id, title, subtitle, linkLabel, href = "#" }: SectionHeadingProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:gap-8">
      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <h2
          id={id}
          className="text-[28px] leading-[1.08] font-semibold tracking-display text-ink md:text-[32px] lg:text-[36px]"
        >
          {title}
        </h2>
        {subtitle && <p className="text-[15px] leading-[1.5] text-muted">{subtitle}</p>}
      </div>
      <a
        href={href}
        className="group -my-2 inline-flex h-11 shrink-0 items-center gap-3 self-start rounded-full text-sm text-brand hover:underline sm:my-0 sm:self-auto"
      >
        {linkLabel}
        <Icon src="/icons/arrow-right.svg" size={18} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
