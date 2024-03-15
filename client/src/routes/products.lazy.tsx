import { createLazyFileRoute } from "@tanstack/react-router";
import Card from "../components/Card";

export const Route = createLazyFileRoute("/products")({
  component: Product,
});

function Product() {
  return (
    <div className="p-2">
      <Card
        photo="https://picsum.photos/200"
        name="Product Name"
        price="$99.99"
      />
    </div>
  );
}
