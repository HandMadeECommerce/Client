import { Outlet } from "react-router-dom";
import { Navbar } from ".";

export function NavBarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
