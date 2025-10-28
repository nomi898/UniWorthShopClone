import React from "react";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
import { Box } from "@mui/material";
import HeroSectionImage from "../assets/Images/herosectionimage.jpg";
import hero2 from "../assets/Images/hero2.jpg";
import hero3 from "../assets/Images/hero3.jpg";
import hero4 from "../assets/Images/hero4.jpg";
import hero5 from "../assets/Images/hero5.jpg";
import hero6 from "../assets/Images/hero6.jpg";
import TopBar from "../Components/Header/TopBar";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const HomePage = () => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Top bar */}
      <TopBar />

      {/* Hero background image slider */}
      <Box>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {/* first Image */}
          <SwiperSlide>
            <Box
              component="img"
              src={HeroSectionImage}
              alt="Hero Background"
              sx={{
                width: "100%",
                height: { xs: "600px", sm: "700px", md: "800px", lg: "900px" },
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
          {/* second Image  */}
          <SwiperSlide>
            <Box
              component="img"
              src={hero2}
              alt="Hero Background 2"
              sx={{
                width: "100%",
                height: { xs: "600px", sm: "700px", md: "800px", lg: "900px" },
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
          {/* third image  */}
          <SwiperSlide>
            <Box
              component="img"
              src={hero3}
              alt="Hero Background 3"
              sx={{
                width: "100%",
                height: { xs: "600px", sm: "700px", md: "800px", lg: "900px" },
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
                    {/* fourth image  */}
                    <SwiperSlide>
            <Box
              component="img"
              src={hero4}
              alt="Hero Background 3"
              sx={{
                width: "100%",
                height: { xs: "600px", sm: "700px", md: "800px", lg: "900px" },
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
                    {/* fifth image  */}
                    <SwiperSlide>
            <Box
              component="img"
              src={hero5}
              alt="Hero Background 3"
              sx={{
                width: "100%",
                height: { xs: "600px", sm: "700px", md: "800px", lg: "900px" },
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
                    {/* sixth image  */}
                    <SwiperSlide>
            <Box
              component="img"
              src={hero6}
              alt="Hero Background 3"
              sx={{
                width: "100%",
                height: { xs: "600px", sm: "700px", md: "800px", lg: "900px" },
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* Header and HeroSection on top */}
      <Box
        sx={{
          position: "absolute",
          top: 60,
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
  );
};

export default HomePage;