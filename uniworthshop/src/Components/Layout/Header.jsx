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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation, NavLink } from "react-router";
import logoColored from "../../assets/Images/logocolored.png";
import logoWhite from "../../assets/Images/logo.svg";
import Categories from "../../DummyData/Categories";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0 });
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll handler for homepage
  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    setHoveredCategory(null);
  };

  const handleMouseEnter = (event, category) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSubmenuPosition({ top: rect.top });
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          position: isHomePage ? "fixed" : "relative",
          top: isHomePage ? (scrolled ? "0px" : "50px") : "0px",
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
            boxShadow: scrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
          }}
        >
          {/* Menu icon & text */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon
              sx={{ fontSize: 30, color: scrolled ? "black" : "white" }}
            />
            <Typography
              sx={{ color: scrolled ? "black" : "white", fontWeight: 500 }}
            >
              Menu
            </Typography>
          </Box>

          {/* Logo */}
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

          {/* Search & Cart */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{
                color: scrolled ? "black" : "white",
                px: 2,
                py: 1,
                borderRadius: 1,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: scrolled
                    ? "#f2f2f2"
                    : "rgba(255,255,255,0.1)",
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
                  backgroundColor: scrolled
                    ? "#f2f2f2"
                    : "rgba(255,255,255,0.1)",
                },
              }}
              startIcon={<AddShoppingCartIcon />}
            >
              Bag
            </Button>
          </Box>
        </Box>
      </Box>

      {/* DRAWER (Left Sidebar) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            bgcolor: "#fff",
            p: 1,
            overflow: "visible",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            px: 2,
            py: 1,
            borderBottom: "1px solid #eee",
          }}
        >
          Categories
        </Typography>

        <List onMouseLeave={handleMouseLeave}>
          {Categories.map((category) => (
            <ListItemButton
              key={category.id}
              onMouseEnter={(e) => handleMouseEnter(e, category)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              <ListItemText
                primary={category.name}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  fontSize: "0.95rem",
                }}
              />
              {category.subcategories && category.subcategories.length > 0 && (
                <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#666" }} />
              )}
            </ListItemButton>
          ))}
        </List>

        {/* Footer Links */}
        <Box sx={{ mt: 4, pt: 2, borderTop: "1px solid #eee" }}>
          <ListItemButton>
            <ListItemText
              primary="Made To Measure"
              primaryTypographyProps={{ fontSize: "0.9rem" }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primary="Uniworth Black"
              primaryTypographyProps={{ fontSize: "0.9rem" }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primary="Order Tracking"
              primaryTypographyProps={{ fontSize: "0.9rem" }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primary="Shipping Policy"
              primaryTypographyProps={{ fontSize: "0.9rem" }}
            />
          </ListItemButton>
        </Box>

        {/* FLOATING SUBMENU - Appears on Hover */}
        {hoveredCategory && hoveredCategory.subcategories?.length > 0 && (
          <Paper
            elevation={6}
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={handleMouseLeave}
            sx={{
              position: "fixed",
              top: submenuPosition.top - 10,
              left: 280,
              minWidth: 500,
              bgcolor: "white",
              borderRadius: 1,
              p: 3,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1.5,
              boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
              zIndex: 1301,
            }}
          >
            {hoveredCategory.subcategories
              .filter((sub) => sub !== "nill")
              .map((sub, index) => (
                <Button
                  key={index}
                  component={NavLink}
                  to={`/category/${hoveredCategory.name
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
                    "&:hover": { color: "#b22222", bgcolor: "transparent" },
                  }}
                >
                  {sub}
                </Button>
              ))}
          </Paper>
        )}
      </Drawer>
    </>
  );
};

export default Header;