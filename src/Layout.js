import React from "react";
import { useRef } from "react";
import NavBar from "./components/NavBar";
import Cursor from "./components/cursor";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const stickyElement = useRef(null);
  return (
    <>
      <NavBar ref={stickyElement} />
      <Cursor stickyElement={stickyElement} />
      <Outlet />
    </>
  );
}
