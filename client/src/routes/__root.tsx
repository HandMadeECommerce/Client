import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../components/NavBar";

export const Route = createRootRoute({
  notFoundComponent: () => {
    return <p>Not found (in _layout)</p>;
  },
  component: () => (
    <div className="font-roboto dark:bg-black dark:text-white">
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
