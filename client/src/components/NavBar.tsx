import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div className="mx-16 my-4 flex justify-between text-xl">
      <div>Logo</div>
      <div className="flex gap-6 p-2 text-black">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/products" className="[&.active]:font-bold">
          Products
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
    </div>
  );
}
