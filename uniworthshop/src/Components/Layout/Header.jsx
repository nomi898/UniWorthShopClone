import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useLocation, NavLink } from "react-router";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import logoColored from "../../assets/Images/logocolored.png";
import logoWhite from "../../assets/Images/logo.svg";
import Categories from "../../DummyData/Categories"; // import your categories file

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null); 
  const location = useLocation();

  const isHomePage = location.pathname === "/";
// for scrolling header 
  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
// for calling handle scroll 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCategoryClick = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <>
      {/* HEADER */}
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
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: 30, color: scrolled ? "black" : "white" }} />
            <Typography sx={{ color: scrolled ? "black" : "white", fontWeight: 500 }}>
              Menu
            </Typography>
          </Box>

          {/* logo */}
          <Box>
            <NavLink to="/">
              <img
                src={scrolled ? logoColored : logoWhite}
                alt="Logo"
                style={{
                  width: scrolled ? 50 : 150,
                  height: "auto",
                  transition: "all 0.3s ease",
                }}
              />
            </NavLink>
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

      {/* DRAWER MENU */}
      
      <Drawer
  anchor="left"
  open={drawerOpen}
  onClose={handleDrawerToggle}
  sx={{
    '& .MuiDrawer-paper': {
      width: 650,
      display: "flex",
      flexDirection: "row",
      overflow: "hidden",
    },
  }}
>
  {/* LEFT PANE — Categories */}
  <Box
    sx={{
      width: 300,
      borderRight: "1px solid #eee",
      p: 2,
      bgcolor: "#fff",
    }}
  >
    <Typography
      variant="h6"
      sx={{ mb: 2, fontWeight: "bold", textAlign: "left" }}
    >
      <Button onClick={() => setOpenCategory(null)} sx={{ fontWeight: "bold" }}>
        ← Back
      </Button>
    </Typography>

    <List>
      {Categories.map((category) => (
        <ListItemButton
          key={category.id}
          onClick={() => setOpenCategory(category.id)}
        >
          <ListItemText
            primary={category.name}
            primaryTypographyProps={{
              fontWeight: "bold",
              fontSize: "0.95rem",
              color:
                openCategory === category.id ? "#b22222" : "rgba(0,0,0,0.8)",
            }}
          />
          <Typography sx={{ ml: "auto" }}>›</Typography>
        </ListItemButton>
      ))}
    </List>

    {/* Footer Links */}
    <Box sx={{ mt: 4 }}>
      <ListItemButton>Made To Measure</ListItemButton>
      <ListItemButton>Uniworth Black</ListItemButton>
      <ListItemButton>Order Tracking</ListItemButton>
      <ListItemButton>Shipping Policy</ListItemButton>
    </Box>
  </Box>

  {/* RIGHT PANE — Subcategories */}
  <Box
    sx={{
      flex: 1,
      bgcolor: "#fff",
      p: 3,
      position: "relative",
      transition: "all 0.3s ease",
    }}
  >
    {openCategory ? (
      <>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: "bold", textTransform: "uppercase" }}
        >
          {
            Categories.find((cat) => cat.id === openCategory)
              ?.name
          }
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1.5,
          }}
        >
          {Categories.find((cat) => cat.id === openCategory)
            ?.subcategories
            ?.filter((sub) => sub !== "nill")
            .map((sub, index) => (
              <Button
                key={index}
                component={NavLink}
                to={`/category/${Categories.find((cat) => cat.id === openCategory)
                  ?.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}/${sub
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                onClick={handleDrawerToggle}
                sx={{
                  justifyContent: "flex-start",
                  color: "black",
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                {sub}
              </Button>
            ))}
        </Box>
      </>
    ) : (
      <Typography sx={{ color: "#999", mt: 5, textAlign: "center" }}>
        Select a category to view items
      </Typography>
    )}
  </Box>
</Drawer>

    </>
  );
};

export default Header;
