import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import NavLinkBar from "./navlink";

/**
 * I've used Outlet component as I wanted to have specific navbar which I've implemented below in each component page.
 */

export default function SharedLayout() {
  return (
    <>
      <NavLinkBar />
      <Outlet />
    </>
  );
}
