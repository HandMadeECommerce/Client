import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div className="">
      <nav className="border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center  whitespace-nowrap text-2xl font-semibold dark:text-white">
              Logo
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 hover:underline dark:text-white"
            >
              (555) 412-1234
            </a>
            <a
              href="#"
              className="text-sm  text-blue-600 hover:underline dark:text-blue-500"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="mx-auto max-w-screen-xl px-4 py-3">
          <div className="flex items-center">
            <ul className="mt-0 flex flex-row space-x-8 text-sm font-medium rtl:space-x-reverse">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 hover:underline dark:text-white [&.active]:font-bold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-900 hover:underline dark:text-white [&.active]:font-bold"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-900 hover:underline dark:text-white [&.active]:font-bold"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
