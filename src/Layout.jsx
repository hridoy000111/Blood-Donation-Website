import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
