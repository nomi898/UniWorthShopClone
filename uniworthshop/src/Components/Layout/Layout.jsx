import React from "react";
import Header from "./header";
import { Outlet } from "react-router";
import image from '../../assets/Images/MustardPlainHalfZipperSweater.webp';

const Layout = () => {
  return (
    <>
      <Header />   {/* Always visible on every page */}
      <Outlet />   {/* Dynamic area that changes based on route */}
    </>
  );
};

export default Layout;
