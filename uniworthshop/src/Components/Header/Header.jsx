import React from "react";
import TopBar from "./TopBar";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/Images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* menu icon & text */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MenuIcon sx={{ fontSize: 30, color: "white" }} />
          <Typography sx={{ color: "white", fontWeight: 500 }}>Menu</Typography>
        </Box>

        {/* logo in middle  */}
        <Box>
          <img src={logo} alt="" style={{ width: 150, height: "auto" }} />
        </Box>
        {/* search & Cart  */}
        <Box sx={{ display: 'flex', gap: 2 }}>
  {/* Search button */}
  <Button
    sx={{
      color: 'white',
      px: 2,
      py: 1,
      borderRadius: 1,
      textTransform: 'none', 
      '&:hover': {
        backgroundColor: 'darkred', 
      },
    }}
    startIcon={<SearchIcon />}
  >
    Search
  </Button>

  {/* Cart button */}
  <Button
    sx={{
      color: 'white',
      px: 2,
      py: 1,
      borderRadius: 1,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'darkred',
      },
    }}
    startIcon={<AddShoppingCartIcon />}
  >
    Bag
  </Button>
</Box>

      </Box>
    </>
  );
};

export default Header;
