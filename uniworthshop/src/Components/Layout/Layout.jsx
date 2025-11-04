import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Topbar from "./TopBar"

const Layout = () => {
  return (
    <>
      <Topbar/>
      <Header /> {/* Always visible on every page */}
      <Outlet /> {/* Dynamic area that changes based on route */}
      <Footer /> {/* Always visible on every page */}
    </>
  );
};

export default Layout;
