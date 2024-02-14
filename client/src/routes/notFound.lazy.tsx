import { NotFoundRoute } from "@tanstack/react-router";
import { Route } from "./__root.tsx";

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => Route,
  component: () => "404 Not Found",
});
