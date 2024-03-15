import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/cart")({
  component: Cart,
});

function Cart() {
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}
