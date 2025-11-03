import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { NavLink } from "react-router";

const TopHeader = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#eceff2",
          px: { xs: 2, md: 5 },
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        {/* Left Section (Call info) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <CallIcon sx={{ fontSize: 20, color: "black" }} />
          <Typography sx={{ fontSize: 14 }}>+92 42 111 789 456</Typography>
          <WhatsAppIcon sx={{ fontSize: 20, color: "black" }} />
          <Typography sx={{ fontSize: 14 }}>+92-345-4037778</Typography>
        </Box>

        {/* Center Section (Free Shipping) */}
        <Box
          sx={{
            textAlign: "center",
            flex: 1, // makes it occupy the middle space
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "black" }}>
            Free Shipping Available Over Rs. 1500/- Order.
          </Typography>
        </Box>

        {/* Right Section (My Account) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <Link
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "black",
            }}
            href="#"
          >
            <PersonOutlineIcon />
            <NavLink
              to="/signin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography sx={{ fontSize: 14 }}>My Account</Typography>
            </NavLink>
          </Link>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#e0e0e0" }} />
    </>
  );
};

export default TopHeader;
