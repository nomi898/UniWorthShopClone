import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import image from '../../assets/Images/MustardPlainHalfZipperSweater.webp';
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />   {/* Always visible on every page */}
      <Outlet /> {/* Dynamic area that changes based on route */}
      <Footer />  {/* Always visible on every page */}
    </>
  );
};

export default Layout;
