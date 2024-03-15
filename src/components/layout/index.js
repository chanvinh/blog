import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav";
import './layout.scss'

const Layout = () => {
  return (
    <div className="layout">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
