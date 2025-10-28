import React from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const TopHeader = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#eceff2",
          px: { xs: 2, md: 5 },
          py: 1,
        }}
      >
        <Grid container alignItems="center">
          {/* Left Section (Call info) - Hidden on Mobile */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <CallIcon sx={{ fontSize: 20, color: "black" }} />
            <Typography sx={{ fontSize: 14 }}>+92 42 111 789 456</Typography>
            <WhatsAppIcon sx={{ fontSize: 20, color: "black" }} />
            <Typography sx={{ fontSize: 14 }}>+92-345-4037778</Typography>
          </Grid>

          {/* Center Section (Free Shipping) - Always visible */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "black",
                display: { xs: "flex", md: "flex" },
                justifyContent: "center",
              }}
            >
              Free Shipping Available Over Rs. 1500/- Order.
            </Typography>
          </Grid>

          {/* Right Section (My Account) - Hidden on Mobile */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
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
              <Typography sx={{ fontSize: 14 }}>My Account</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: "#e0e0e0" }} />
    </>
  );
};

export default TopHeader;
