import React, { useState, useEffect } from "react";
import TopBar from "../HeroSection/TopBar";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Typography } from "@mui/material";
import logoColored from "../../assets/Images/logocolored.png"; // colored logo
import logoWhite from "../../assets/Images/logo.svg"; // white logo
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: scrolled ? "0px" : "50px",
        left: 0,
        right: 0,
        zIndex: 1000,
        width: "100%",
        transition: "top 0.3s ease",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: scrolled ? "10px 20px" : "20px",
          backgroundColor: scrolled ? "white" : "transparent",
          transition: "all 0.3s ease",
          overflowX: "hidden",
        }}
      >
        {/* menu icon & text */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MenuIcon
            sx={{ fontSize: 30, color: scrolled ? "black" : "white" }}
          />
          <Typography
            sx={{ color: scrolled ? "black" : "white", fontWeight: 500 }}
          >
            Menu
          </Typography>
        </Box>

        {/* logo */}
        <Box>
          <img
            src={scrolled ? logoColored : logoWhite} // switch based on scroll
            alt="Logo"
            style={{
              width: scrolled ? 50 : 150, // smaller on scroll
              height: "auto",
              transition: "all 0.3s ease",
            }}
          />
        </Box>

        {/* search & cart */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            sx={{
              color: scrolled ? "black" : "white",
              px: 2,
              py: 1,
              borderRadius: 1,
              textTransform: "none",
              "&:hover": {
                backgroundColor: scrolled ? "#f2f2f2" : "rgba(255,255,255,0.1)",
              },
            }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>

          <Button
            sx={{
              color: scrolled ? "black" : "white",
              px: 2,
              py: 1,
              borderRadius: 1,
              textTransform: "none",
              "&:hover": {
                backgroundColor: scrolled ? "#f2f2f2" : "rgba(255,255,255,0.1)",
              },
            }}
            startIcon={<AddShoppingCartIcon />}
          >
            Bag
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
