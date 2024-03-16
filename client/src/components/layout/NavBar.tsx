import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { queryClient } from "../../main";

export default function Navbar() {
  //Todo
  const cartProducts = useQuery({
    queryKey: ["productInTheCart"],
    queryFn: () => localStorage.getItem("counter"),
  });

  const data = queryClient.getQueryData(["productInTheCart"]);

  const [counter, setCounter] = useState(Number(data) || 0);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      cartProducts;
      if (e.key === "counter") {
        setCounter(Number(e.newValue) || 0);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="flex items-center justify-between px-6">
      <nav>
        <div>Logo</div>
      </nav>
      <nav className="">
        <div className="mx-auto max-w-screen-xl px-4 py-3">
          <div className="flex items-center">
            <ul className="mt-0 flex flex-row space-x-8 text-lg font-medium rtl:space-x-reverse">
              <li className="transform cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125">
                <Link
                  to="/"
                  className="text-gray-900 [&.active]:font-bold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="transform cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125">
                <Link
                  to="/products"
                  className="text-gray-900 [&.active]:font-bold"
                >
                  Products
                </Link>
              </li>
              <li className="transform cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125">
                <Link
                  to="/about"
                  className="text-gray-900 [&.active]:font-bold"
                >
                  About
                </Link>
              </li>
              <li className="transform cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125">
                <Link to="/cart" className="text-gray-900 [&.active]:font-bold">
                  Cart
                  <span className="rounded-full border border-black px-1 text-sm">
                    {counter}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
