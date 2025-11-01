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
    <Box>
      {/* Hero section */}
      <Box sx={{ position: "relative", width: "100%" }}>
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
      <Box>
        <CategoryGrid />
      </Box>
      {/* NewArrivalsGrid  */}
      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: "18px", // for small screens (mobile)
              sm: "20px", // for slightly larger (small tablets)
              md: "24px", // for medium (tablets)
              lg: "28px", // for large (desktop)
              xl: "32px", // for extra large screens
            },
          }}
        >
          <h2 style={{ textAlign: "center", margin: "", fontWeight: "normal" }}>
            New Arrivals
          </h2>
          <Divider
            sx={{
              width: 70, // short red line
              height: 4, // thickness
              backgroundColor: "red",
              borderRadius: 2, // rounded edges
              mx: "auto", // center horizontally
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
            px: { xs: 1, sm: 3, md: 6 },
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
            }}
          >
            {[
              {
                icon: (
                  <LocalShippingOutlinedIcon
                    sx={{ fontSize: 48, color: "#D4A574" }}
                  />
                ),
                text: "Free Shipping",
              },
              {
                icon: (
                  <VerifiedUserOutlinedIcon
                    sx={{ fontSize: 48, color: "#D4A574" }}
                  />
                ),
                text: "Secure Payments",
              },
              {
                icon: (
                  <EmojiEventsOutlinedIcon
                    sx={{ fontSize: 48, color: "#D4A574" }}
                  />
                ),
                text: "Premium Quality",
              },
            ].map((item, index) => (
              <Grid
                item
                key={index}
                sx={{
                  width: "33.33%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  gap: 1.5,
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
        <Box>
          <RatioPotrait/>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
