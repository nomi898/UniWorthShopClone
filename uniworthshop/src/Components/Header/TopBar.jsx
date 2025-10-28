import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link, Typography, Divider, Box, Grid } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const TopBar = () => {
  const [currency, setCurrency] = useState("PKR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#eceff2", px: { xs: 2, md: 5 }, py: 2 }}>
        <Grid container alignItems="center" spacing={2}>
          {/* Call Info (hidden on mobile) */}
          <Grid 
            item 
            xs={12} 
            md={4} 
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <CallIcon sx={{ fontSize: 21 }} />
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 16 }}>+92 42 111 789 456</Typography>
              </Grid>
              <Grid item>
                <WhatsAppIcon sx={{ fontSize: 21 }} />
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 16 }}>+92-345-4037778</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Shipping Info (only visible on mobile) */}
          <Grid 
            item 
            xs={12} 
            md={4} 
            textAlign="center"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
              Free Shipping Available Over Rs. 1500/- Order.
            </Typography>
          </Grid>

          {/* My Account (hidden on mobile) */}
          <Grid 
            item 
            xs={12} 
            md={4} 
            textAlign="right"
            sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}
          >
            <Link sx={{ display: "inline-flex", alignItems: "center", gap: 1, textDecoration: "none", color: "black" }}>
              <PersonOutlineIcon />
              <Typography sx={{ fontSize: 16 }}>My Account</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: "#e0e0e0" }} />
    </>
  );
};

export default TopBar;
