import { useState } from "react";
import { departments } from "../data";
import { Icon } from "./Icon";

type HeaderProps = { cartCount: number };

type Fulfillment = "delivery" | "pickup";

export function Header({ cartCount }: HeaderProps) {
  const [mode, setMode] = useState<Fulfillment>("delivery");
  const [query, setQuery] = useState("");

  return (
    <header className="w-full bg-white">
      {/* Service announcement */}
      <a
        href="#offers"
        className="gutter flex min-h-8 items-center justify-center bg-mint py-2 text-center text-xs font-medium text-ink hover:underline"
      >
        <span>
          Fresh finds, right to your door.{" "}
          <span className="whitespace-nowrap">Free delivery on your first $50+ order.</span>
          <span aria-hidden="true">&nbsp;&nbsp;→</span>
        </span>
      </a>

      {/* Search and account */}
      <div className="gutter flex flex-wrap items-center gap-x-4 gap-y-3 py-4 md:gap-x-7 lg:flex-nowrap lg:py-6">
        <a
          href="/"
          className="mr-auto shrink-0 text-[24px] font-bold tracking-[-1px] whitespace-nowrap text-ink md:text-[29px] lg:mr-0 lg:w-56"
        >
          Thai’s Grocery
        </a>

        <form
          role="search"
          className="order-last flex h-12 w-full min-w-0 items-center gap-3 rounded-full border border-line-input bg-white px-5 focus-within:border-brand lg:order-none lg:h-[52px] lg:w-auto lg:flex-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <Icon src="/icons/search.svg" size={20} />
          <label htmlFor="product-search" className="sr-only">
            Search groceries
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search groceries, everyday essentials & recipes"
            className="min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-placeholder [&::-webkit-search-cancel-button]:hidden"
          />
        </form>

        <a href="#" className="flex h-11 items-center gap-2 text-sm font-semibold whitespace-nowrap text-ink hover:underline">
          <Icon src="/icons/user-round.svg" size={20} />
          <span className="max-sm:sr-only">Sign in</span>
        </a>

        <a
          href="#"
          className="flex h-12 items-center gap-2.5 text-sm font-semibold whitespace-nowrap text-ink hover:underline"
          aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
        >
          <Icon src="/icons/shopping-cart.svg" size={20} />
          <span aria-hidden="true">Cart · {cartCount}</span>
        </a>
      </div>

      {/* Fulfillment controls */}
      <div className="gutter flex min-h-12 items-center justify-between gap-4 border-y border-line-nav text-[13px] text-ink">
        <button type="button" className="flex h-11 items-center gap-2.5 whitespace-nowrap hover:underline">
          <Icon src="/icons/map-pin.svg" size={18} />
          Deliver to 94107
          <Icon src="/icons/chevron-down.svg" size={14} />
        </button>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <div role="group" aria-label="Fulfillment method" className="flex items-center gap-2">
            <FulfillmentOption label="Delivery" active={mode === "delivery"} onClick={() => setMode("delivery")} />
            <span aria-hidden="true">/</span>
            <FulfillmentOption label="Pickup" active={mode === "pickup"} onClick={() => setMode("pickup")} />
          </div>
          <button type="button" className="flex h-11 items-center gap-2 hover:underline">
            <span className="hidden sm:inline">
              <span aria-hidden="true">&nbsp;·&nbsp;&nbsp;</span>Today, 4–6 pm
            </span>
            <span className="sr-only sm:hidden">Choose a time</span>
            <Icon src="/icons/chevron-down.svg" size={14} />
          </button>
        </div>
      </div>

      {/* Departments */}
      <nav aria-label="Departments" className="relative">
        <ul className="gutter no-scrollbar relative flex h-[54px] items-center gap-6 overflow-x-auto text-[13px] whitespace-nowrap text-ink lg:justify-between lg:gap-4">
          {departments.map((d) => (
            <li key={d} className="shrink-0">
              <a
                href={d === "Weekly offers" ? "#offers" : d === "Recipes" ? "#recipes" : "#categories"}
                className="inline-flex h-11 items-center hover:text-brand hover:underline"
              >
                {d}
              </a>
            </li>
          ))}
        </ul>
        {/* Fade hint that the row scrolls on small screens */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white lg:hidden"
        />
      </nav>
    </header>
  );
}

function FulfillmentOption({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`h-11 ${active ? "font-bold underline" : "hover:underline"}`}
    >
      {label}
    </button>
  );
}
