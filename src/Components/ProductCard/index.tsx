import { Product } from "../Products";
interface CardProps {
  data: Product;
}

export default function ProductCard({ data }: CardProps) {
  return (
    <section className="card">
      {/* <img src={data.images[0]} alt="image" /> */}
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <h3>{data.price}</h3>
      <h3>{data.category}</h3>
    </section>
  );
}
