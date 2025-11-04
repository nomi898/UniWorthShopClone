import React, { useState, useEffect } from "react";
import Header from "./Header";

const StickyHeaderWrapper = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        boxSizing: "border-box", //  include padding in width
        backgroundColor: scrolled ? "#ffffff" : "transparent",
        transition: "background-color 0.3s ease, padding 0.3s ease",
        padding: scrolled ? "10px 20px" : "20px 20px",
        boxShadow: scrolled ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
        overflowX: "hidden", // prevents horizontal scroll
      }}
    >
      <Header scrolled={scrolled} />
    </div>
  );
};

export default StickyHeaderWrapper;
