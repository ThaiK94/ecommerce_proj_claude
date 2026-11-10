import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { Products } from "./components/Products";
import { Offers } from "./components/Offers";
import { Recipes } from "./components/Recipes";
import { QualityPromise } from "./components/QualityPromise";
import { Footer } from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState<string[]>([]);
  const [announcement, setAnnouncement] = useState("");

  const addToCart = (id: string) => {
    const count = cart.length + 1;
    setCart((items) => [...items, id]);
    setAnnouncement(`Added to cart. ${count} ${count === 1 ? "item" : "items"} in cart.`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header cartCount={cart.length} />
      <main id="main" className="flex w-full flex-col">
        <Hero />
        <Categories />
        <Products onAdd={addToCart} />
        <Offers />
        <Recipes />
        <QualityPromise />
      </main>
      <Footer />
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}
