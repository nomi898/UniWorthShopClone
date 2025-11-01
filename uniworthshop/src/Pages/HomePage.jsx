import React from "react";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TopBar from "../Components/Header/TopBar";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CategoryGrid from "../Components/HeroSection/HeroGrid";
import ExclusiveProducts from "../Components/Sections/exclusiveProducts";
import "../App.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

// Desktop & Mobile hero images
import HeroSectionImage from "../assets/Images/herosectionimage.jpg";
import HeroSectionImagemobile from "../assets/Images/HeroSectionImagemobile.jpg";
import hero2 from "../assets/Images/hero2.jpg";
import hero2mobile from "../assets/Images/hero2mobile.jpg";
import hero3 from "../assets/Images/hero3.jpg";
import hero3mobile from "../assets/Images/hero3mobile.jpg";
import hero4 from "../assets/Images/hero4.jpg";
import hero4mobile from "../assets/Images/hero4mobile.jpg";
import hero5 from "../assets/Images/hero5.jpg";
import hero5mobile from "../assets/Images/hero5mobile.jpg";
import hero6 from "../assets/Images/hero6.jpg";
import hero6mobile from "../assets/Images/hero6mobile.jpg";
import NewArrivalsGrid from "../Components/Sections/NewArrivalsGrid";
import AccessoriesSection from "../Components/Sections/AccessoriesSection";
import RatioPotrait from "../Components/Sections/RatioPotrait";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Hero images array: choose mobile or desktop
  const heroImages = [
    isMobile ? HeroSectionImagemobile : HeroSectionImage,
    isMobile ? hero2mobile : hero2,
    isMobile ? hero3mobile : hero3,
    isMobile ? hero4mobile : hero4,
    isMobile ? hero5mobile : hero5,
    isMobile ? hero6mobile : hero6,
  ];

  return (
    <Box sx={{ overflowX: "hidden", width: "100%" }}> {/* Added overflow fix */}
      {/* Hero section */}
      <Box sx={{ position: "relative", width: "100%", overflowX: "hidden" }}> {/* Added overflow fix */}
        {/* Top bar above Swiper */}
        <Box sx={{ position: "relative", zIndex: 20 }}>
          <TopBar />
        </Box>

        {/* Hero slider */}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={img}
                alt={`Hero Background ${index + 1}`}
                sx={{
                  width: "100%",
                  height: {
                    xs: "800px", // Mobile
                    sm: "500px", // Small tablets
                    md: "700px", // Desktop
                    lg: "900px", // Large screens
                  },
                  objectFit: "cover",
                  display: "block", // Prevents inline image spacing issues
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Header + HeroSection overlay above Swiper */}
        <Box
          sx={{
            position: "absolute",
            top: 30,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            zIndex: 10, // above Swiper
          }}
        >
          <Box>
            <Header />
          </Box>
          <Box>
            <HeroSection />
          </Box>
        </Box>
      </Box>

      {/* Category Grid */}
      <Box sx={{ width: "100%", overflowX: "hidden" }}> {/* Added overflow fix */}
        <CategoryGrid />
      </Box>
      
      {/* NewArrivalsGrid  */}
      <Box sx={{ width: "100%", overflowX: "hidden" }}> {/* Added overflow fix */}
        <Typography
          sx={{
            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "24px",
              lg: "28px",
              xl: "32px",
            },
          }}
        >
          <h2 style={{ textAlign: "center", margin: "0", fontWeight: "normal" }}>
            New Arrivals
          </h2>
          <Divider
            sx={{
              width: 70,
              height: 4,
              backgroundColor: "red",
              borderRadius: 2,
              mx: "auto",
            }}
          />
        </Typography>
        <NewArrivalsGrid />
        <AccessoriesSection />
        <ExclusiveProducts />
        
        {/* SHIPPING PAYMENT QUALITY */}
        <Box
          sx={{
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0",
            py: 4,
            px: { xs: 2, sm: 3, md: 6 }, // Changed xs from 1 to 2 for better mobile spacing
            width: "100%",
            boxSizing: "border-box", // Ensures padding is included in width
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", sm: "nowrap" }, // Allow wrap on mobile
              justifyContent: "space-between",
            }}
          >
            {[
              {
                icon: (
                  <LocalShippingOutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 48 }, color: "#D4A574" }}
                  />
                ),
                text: "Free Shipping",
              },
              {
                icon: (
                  <VerifiedUserOutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 48 }, color: "#D4A574" }}
                  />
                ),
                text: "Secure Payments",
              },
              {
                icon: (
                  <EmojiEventsOutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 48 }, color: "#D4A574" }}
                  />
                ),
                text: "Premium Quality",
              },
            ].map((item, index) => (
              <Grid
                item
                key={index}
                sx={{
                  width: { xs: "100%", sm: "33.33%" }, // Full width on mobile
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: { xs: "row", sm: "column" }, // Row on mobile, column on desktop
                  textAlign: "center",
                  gap: 1.5,
                  mb: { xs: 2, sm: 0 }, // Add margin bottom on mobile
                }}
              >
                {item.icon}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    color: "#333",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {item.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* categories at the end  */}
        <Box sx={{ width: "100%", overflowX: "hidden" }}> {/* Added overflow fix */}
          <RatioPotrait />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;