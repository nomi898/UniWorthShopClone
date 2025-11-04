import React, { useState } from "react";
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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router";
import Categories from "../../DummyData/Categories";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0 });

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
      {/* Menu Button */}
      <Box sx={{ p: 2 }}>
        <Button
          onClick={handleDrawerToggle}
          startIcon={<MenuIcon />}
          sx={{ color: "black" }}
        >
          Menu
        </Button>
      </Box>

      {/* Drawer (Left Sidebar) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            bgcolor: "#fff",
            p: 1,
            overflow: "visible", // allows submenu to overflow outside
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", px: 2, py: 1, borderBottom: "1px solid #eee" }}
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

        {/* Floating Submenu */}
        {hoveredCategory && hoveredCategory.subcategories?.length > 0 && (
          <Paper
            elevation={6}
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={handleMouseLeave}
            sx={{
              position: "fixed",
              top: submenuPosition.top - 10,
              left: 280, // right beside the drawer
              minWidth: 500,
              bgcolor: "white",
              borderRadius: 1,
              p: 3,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1.5,
              boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
              zIndex: 1301, // above drawer
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
