import product1 from "../assets/products/product-1.webp";
import product2 from "../assets/products/product-2.webp";
import product3 from "../assets/products/product-3.webp";
import product4 from "../assets/products/product-4.webp";
import product5 from "../assets/products/product-5.webp";
import product6 from "../assets/products/product-6.webp";
import product7 from "../assets/products/product-7.webp";
import product8 from "../assets/products/product-8.webp";
import product9 from "../assets/products/product-9.webp";
import product10 from "../assets/products/product-10.webp";
import product11 from "../assets/products/product-11.webp";
import product12 from "../assets/products/product-12.webp";

export const products = [
  {
    id: 1,
    name: "Sauvage Eau de Parfum",
    brand: "Dior",
    gender: "Hombre",
    price: 89990,
    oldPrice: 119990,
    badge: "Oferta",
    image: product1,
  },
  {
    id: 2,
    name: "Good Girl",
    brand: "Carolina Herrera",
    gender: "Mujer",
    price: 94990,
    badge: "Nuevo",
    image: product2,
  },
  {
    id: 3,
    name: "Acqua di Giò Profumo",
    brand: "Armani",
    gender: "Hombre",
    price: 82990,
    oldPrice: 99990,
    image: product3,
  },
  {
    id: 4,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    gender: "Mujer",
    price: 88990,
    image: product4,
  },
  {
    id: 5,
    name: "Bleu de Chanel",
    brand: "Chanel",
    gender: "Hombre",
    price: 109990,
    badge: "Best Seller",
    image: product5,
  },
  {
    id: 6,
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    gender: "Mujer",
    price: 92990,
    oldPrice: 114990,
    badge: "Oferta",
    image: product6,
  },
  {
    id: 7,
    name: "1 Million",
    brand: "Paco Rabanne",
    gender: "Hombre",
    price: 74990,
    image: product7,
  },
  {
    id: 8,
    name: "Si Eau de Parfum",
    brand: "Armani",
    gender: "Mujer",
    price: 86990,
    image: product8,
  },
  {
    id: 9,
    name: "Eros Eau de Toilette",
    brand: "Versace",
    gender: "Hombre",
    price: 69990,
    oldPrice: 84990,
    badge: "Oferta",
    image: product9,
  },
  {
    id: 10,
    name: "Coco Mademoiselle",
    brand: "Chanel",
    gender: "Mujer",
    price: 119990,
    badge: "Nuevo",
    image: product10,
  },
  {
    id: 11,
    name: "Invictus",
    brand: "Paco Rabanne",
    gender: "Hombre",
    price: 71990,
    image: product11,
  },
  {
    id: 12,
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    gender: "Unisex",
    price: 77990,
    image: product12,
  },
];

export const formatCLP = (value) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);

export default products;
