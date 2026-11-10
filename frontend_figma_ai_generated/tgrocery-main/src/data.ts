export const departments = [
  "All departments",
  "Produce",
  "Meat & seafood",
  "Dairy & eggs",
  "Bakery",
  "Pantry",
  "Frozen",
  "Weekly offers",
  "Recipes",
] as const;

export type Category = { name: string; image: string };

export const categories: Category[] = [
  { name: "Produce", image: "/images/category-produce.png" },
  { name: "Meat & seafood", image: "/images/category-meat-seafood.png" },
  { name: "Dairy & eggs", image: "/images/category-dairy-eggs.png" },
  { name: "Bakery", image: "/images/category-bakery.png" },
  { name: "Pantry", image: "/images/category-pantry.png" },
  { name: "Frozen", image: "/images/category-frozen.png" },
];

export type Product = {
  id: string;
  name: string;
  detail: string;
  badge: string;
  price: string;
  wasPrice?: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "honeycrisp-apples",
    name: "Honeycrisp apples",
    detail: "1 lb · Fresh produce",
    badge: "Save $1",
    price: "$2.49",
    wasPrice: "$3.49",
    image: "/images/product-honeycrisp-apples.png",
  },
  {
    id: "organic-bananas",
    name: "Organic bananas",
    detail: "1 bunch · Approx. 2 lb",
    badge: "Organic",
    price: "$1.49",
    image: "/images/product-organic-bananas.png",
  },
  {
    id: "whole-milk",
    name: "Whole milk",
    detail: "64 fl oz · Grade A",
    badge: "Save 80¢",
    price: "$3.49",
    wasPrice: "$4.29",
    image: "/images/product-whole-milk.png",
  },
  {
    id: "sourdough-loaf",
    name: "Sourdough loaf",
    detail: "16 oz · Baked fresh",
    badge: "Save $1",
    price: "$3.99",
    wasPrice: "$4.99",
    image: "/images/product-sourdough-loaf.png",
  },
  {
    id: "atlantic-salmon",
    name: "Atlantic salmon",
    detail: "1 lb · Fresh fillet",
    badge: "Fresh pick",
    price: "$10.99",
    image: "/images/product-atlantic-salmon.png",
  },
];

export type Offer = {
  id: string;
  label: string;
  price: string;
  wasPrice: string;
  name: string;
  size: string;
  image: string;
};

export const offers: Offer[] = [
  {
    id: "honeycrisp-apples",
    label: "Save $1",
    price: "$2.49",
    wasPrice: "$3.49",
    name: "Honeycrisp apples",
    size: "1 lb",
    image: "/images/offer-honeycrisp-apples.png",
  },
  {
    id: "whole-milk",
    label: "Save 80¢",
    price: "$3.49",
    wasPrice: "$4.29",
    name: "Whole milk",
    size: "64 fl oz",
    image: "/images/offer-whole-milk.png",
  },
  {
    id: "sourdough-loaf",
    label: "Save $1",
    price: "$3.99",
    wasPrice: "$4.99",
    name: "Sourdough loaf",
    size: "16 oz",
    image: "/images/offer-sourdough-loaf.png",
  },
];

export type Recipe = { name: string; meta: string; image: string };

export const recipes: Recipe[] = [
  {
    name: "Roasted squash & grain bowls",
    meta: "35 min · Vegetarian · Serves 4",
    image: "/images/recipe-squash-grain-bowls.png",
  },
  {
    name: "One-pan lemon herb salmon",
    meta: "25 min · High protein · Serves 4",
    image: "/images/recipe-lemon-herb-salmon.png",
  },
  {
    name: "Warm apple & oat crumble",
    meta: "45 min · Family favorite · Serves 6",
    image: "/images/recipe-apple-oat-crumble.png",
  },
];

export const benefits = [
  {
    icon: "/icons/sprout.svg",
    title: "Freshness, first.",
    body: "Picked with care. Quality you can taste in every aisle.",
  },
  {
    icon: "/icons/truck.svg",
    title: "Your groceries. Your way.",
    body: "Easy delivery or convenient pickup, on your schedule.",
  },
  {
    icon: "/icons/badge-check.svg",
    title: "Our good-food guarantee.",
    body: "Not delighted? We’ll make it right. It’s that simple.",
  },
];

export const footerLinks = [
  {
    heading: "Shop",
    links: ["All departments", "Weekly offers", "Seasonal recipes", "Gift cards"],
  },
  {
    heading: "About Thai’s",
    links: ["Our story", "Our standards", "Careers", "Find a store"],
  },
  {
    heading: "Here to help",
    links: ["Delivery & pickup", "Contact us", "Returns & refunds", "Accessibility"],
  },
];
