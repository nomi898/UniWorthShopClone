import React from "react";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TopBar from "../Components/Header/TopBar";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CategoryGrid from "../Components/HeroSection/HeroGrid";

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

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // true on mobile

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
        {/* Top bar */}
        <TopBar />

        {/* Hero slider */}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Box
                component="img"
                src={img}
                alt={`Hero Background ${idx + 1}`}
                sx={{
                  width: "100%",
                  height: {
                    xs: "700px", // Mobile
                    sm: "700px", // Small tablets
                    md: "900px", // Desktop
                    lg: "900px", // Large screens
                  },
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Header + HeroSection overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "none",
          }}
        >
          <Box sx={{ pointerEvents: "auto" }}>
            <Header />
          </Box>
          <Box sx={{ pointerEvents: "auto" }}>
            <HeroSection />
          </Box>
        </Box>
      </Box>

      {/* Category Grid */}
      <Box sx={{ mt: 4 }}>
        <CategoryGrid />
      </Box>
    </Box>
  );
};

export default HomePage;
