import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";

interface ProductsProps {
  selectedCategory: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function Products({ selectedCategory }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (selectedCategory === "all") {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducts(data.products);
        });
    } else {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducts(data.products);
        });
    }
  }, [selectedCategory]);

  if (products.length === 0) {
    return <section className="dishes">Loading...</section>;
  }
  console.log(products);
  return (
    <section className="dishes">
      <h2>Products</h2>
      <section className="grid">
        {products.map((product: Product, ind: number) => (
          <ProductCard key={ind} data={product} />
        ))}
      </section>
    </section>
  );
}
