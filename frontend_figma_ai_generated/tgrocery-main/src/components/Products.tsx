import { useState } from "react";
import { products, type Product } from "../data";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

type ProductsProps = { onAdd: (id: string) => void };

export function Products({ onAdd }: ProductsProps) {
  return (
    <section aria-labelledby="picks" className="flex w-full flex-col gap-7 bg-white py-10 md:py-14">
      <div className="gutter">
        <SectionHeading
          id="picks"
          title="Fresh picks for your week."
          subtitle="The everyday favorites that make a great basket."
          linkLabel="Shop all groceries"
        />
      </div>

      {/* Mobile & tablet: swipeable rail · Desktop: 5-up grid */}
      <ul className="gutter no-scrollbar relative flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto pb-1 md:scroll-px-8 lg:grid lg:grid-cols-5 lg:overflow-visible">
        {products.map((p) => (
          <li key={p.id} className="flex w-[72%] shrink-0 snap-start sm:w-[44%] md:w-[31%] lg:w-auto">
            <ProductCard product={p} onAdd={onAdd} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: (id: string) => void }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="flex w-full flex-col items-start gap-3.5 rounded-[24px] border border-line bg-white p-4">
      <span className="inline-flex h-6 items-center rounded-[4px] bg-mint px-2 text-[11px] whitespace-nowrap text-brand">
        {product.badge}
      </span>

      <div className="h-[156px] w-full">
        <img src={product.image} alt={product.name} loading="lazy" className="size-full object-cover" />
      </div>

      <div className="flex min-h-16 w-full flex-col gap-1.5">
        <h3 className="text-[15px] text-ink">{product.name}</h3>
        <p className="text-sm leading-[1.4] text-muted">{product.detail}</p>
      </div>

      <p className="flex items-baseline gap-2.5 whitespace-nowrap">
        <span className="text-[23px] font-bold text-ink">
          <span className="sr-only">{product.wasPrice ? "Now " : "Price "}</span>
          {product.price}
        </span>
        {product.wasPrice && (
          <s className="text-xs text-muted">
            <span className="sr-only">Was </span>
            {product.wasPrice}
          </s>
        )}
      </p>

      <button
        type="button"
        onClick={handleAdd}
        className="mt-auto flex h-11 w-full items-center justify-center gap-2.5 rounded-full bg-brand text-[13px] whitespace-nowrap text-white transition-colors hover:bg-brand-dark active:scale-[0.98]"
      >
        {added ? (
          <span>Added ✓</span>
        ) : (
          <>
            <Icon src="/icons/plus.svg" size={16} />
            <span>
              Add to cart<span className="sr-only">: {product.name}</span>
            </span>
          </>
        )}
      </button>
    </article>
  );
}
