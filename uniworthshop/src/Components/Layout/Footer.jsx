import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ColoredLogo from "../../assets/Images/logocolored.png";
import GoogleApp from "../../assets/Images/GoogleApp.webp";
import cards from "../../assets/Images/cards.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  // for console
  const handleSubscribe = () => {
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <Box>
      {/* Newsletter Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          py: 4,
          px: { xs: 2, sm: 4, md: 6 },
          display: "flex",
          alignItems: "center", // vertical alignment
          justifyContent: "space-between", // horizontal spacing
          flexWrap: "wrap", // wrap on small screens: next line
          gap: 2, // spacing when wrapped
        }}
      >
        {/* Left Text */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 auto" }, minWidth: 200 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            KNOW IT ALL FIRST!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Never Miss Anything From Uniworth By Signing Up To Our Newsletter.
          </Typography>
        </Box>

        {/* Right Input + Button */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flex: { xs: "1 1 100%", md: "0 1 400px" },
          }}
        >
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: "white" }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              px: 4,
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={handleSubscribe}
          >
            SUBSCRIBE
          </Button>
        </Box>
      </Box>

      {/* Main Footer */}
      <Box
        sx={{
          backgroundColor: "white",
          py: 6,
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ mb: 2 }}>
              <img src={ColoredLogo} alt="" />
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                UNIWORTH
              </Typography>
              <Typography variant="caption" color="red">
                EST. 1975
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, lineHeight: 1.8 }}
            >
              Uniworth is a menswear brand, designed entirely in-house,
              stand-alone Pakistan's no. 1 Shirt Brand. From timeless tailoring
              to premium formal shirts, we present a considered edit of quality,
              wearable clothes, and accessories bearing the Uniworth name.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton size="small" sx={{ color: "#E1306C" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "#1877F2" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "#FF0000" }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Informations */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Informations
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                About us
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Contact Us
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                How to order
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Size Guide
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Returns & Exchange Policy
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Careers
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Blog
              </Link>
            </Box>
          </Grid>

          {/* Customer Services */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Customer Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Shipping Policy
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Payment Options
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                FAQs
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Made To Measure
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Made To Measure Stores
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Track Your Order
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Loyalty Card
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                sx={{ "&:hover": { color: "red" } }}
              >
                Feedback
              </Link>
            </Box>
          </Grid>

          {/* Store Information */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Store Information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+92 42 111 789 456</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <WhatsAppIcon fontSize="small" />
                <Typography variant="body2">+92 345 4037778</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">askus@uniworthshop.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2">
                  Mon-Sat: (10:00AM To 06:00PM)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">Find our Stores</Typography>
              </Box>
              <Box
                component="img"
                src={GoogleApp}
                alt="Get it on Google Play"
                sx={{ width: 150, mt: 1, cursor: "pointer" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Footer */}
      <Box
        sx={{
          backgroundColor: "#1a1a1a",
          color: "white",
          py: 2,
          px: { xs: 2, sm: 4, md: 6 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="body2">
          © UNIWORTH DRESS CO. All Rights Reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            ml: { xs: 10, sm: 10, md: 0 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
            }}
          >
            100% Safe Checkout
          </Typography>

          <Box
            component="img"
            src={cards}
            alt="cards image"
            sx={{
              height: { xs: "20px", md: "25px" },
              width: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;