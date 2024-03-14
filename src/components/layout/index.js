import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav";
import './layout.scss'
import Information from "../information";

const Layout = () => {
  return (
    <div className="layout">
      <Nav></Nav>
      <Outlet></Outlet>
      <Information></Information>
    </div>
  );
};

export default Layout;
