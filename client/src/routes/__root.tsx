import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../components/layout/NavBar";

export const Route = createRootRoute({
  notFoundComponent: () => {
    return <p>Not found (in _layout)</p>;
  },
  component: () => (
    <div className="font-roboto ">
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
