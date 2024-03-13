import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav";

const Layout = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
