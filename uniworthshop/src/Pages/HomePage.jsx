import React from "react";
import Header from "../Components/Layout/Header";
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TopBar from "../Components/Layout/TopBar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CategoryGrid from "../Components/Sections/CategoryGrid";
import ExclusiveProducts from "../Components/Sections/exclusiveProducts";
import "../App.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { NavLink } from "react-router";
import NewArrivalsGrid from "../Components/Sections/NewArrivalsGrid";
import AccessoriesSection from "../Components/Sections/AccessoriesSection";
import RatioPotrait from "../Components/Sections/RatioPotrait";
import Footer from "../Components/Layout/Footer";

// Desktop & Mobile hero images
import HeroSectionImage from "../assets/Images/herosectionimage.jpg";
import HeroSectionImagemobile from "../assets/Images/herosectionimagemobile.jpg";
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
  // hero section category links
  const heroLinks = [
    { category: "WINTER COLLECTION", subcategory: "Hoodies" },
    { category: "SHIRTS", subcategory: "Formal Shirts" },
    { category: "TROUSERS", subcategory: "Formal" },
    { category: "SUITING", subcategory: "Two Piece Suits" },
    { category: "ETHNIC WEAR", subcategory: "Kurta Pajama" },
    { category: "ACTIVE WEAR", subcategory: "Tracksuits" },
  ];
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
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Hero section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Hero slider */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            overflow: "hidden",
            margin: 0,
            padding: 0,
            "& .swiper": {
              width: "100%",
              maxWidth: "100%",
              margin: 0,
              padding: 0,
            },
            "& .swiper-wrapper": {
              width: "100%",
              maxWidth: "100%",
            },
            "& .swiper-slide": {
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
            },
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            simulateTouch={true}
            grabCursor={true}
            centeredSlides={true}
            style={{
              width: "100%",
              maxWidth: "100%",
              margin: 0,
              padding: 0,
              overflow: "hidden",
            }}
          >
            {heroImages.map((img, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  margin: 0,
                  padding: 0,
                }}
              >
                <NavLink
                  to={`/category/${encodeURIComponent(
                    heroLinks[index].category
                  )}?subcategory=${encodeURIComponent(
                    heroLinks[index].subcategory
                  )}`}
                  style={{
                    display: "block",
                    width: "100%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`Hero Background ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                        flexShrink: 1, //  shrink naturally with flex
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {/* Header overlay above Swiper */}
        <Box
          sx={{
            position: "absolute",
            top: 30,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            zIndex: 10,
            pointerEvents: "none",
          }}
        ></Box>
      </Box>

      {/* Category Grid */}
      <Box
        sx={{ width: "100%", maxWidth: "100%", overflow: "hidden", margin: 0 }}
      >
        <CategoryGrid />
      </Box>

      {/* NewArrivalsGrid  */}
      <Box
        sx={{ width: "100%", maxWidth: "100%", overflow: "hidden", margin: 0 }}
      >
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: {
                xs: "18px",
                sm: "20px",
                md: "24px",
                lg: "28px",
                xl: "32px",
              },
              fontWeight: "normal",
              margin: 0,
              mb: 2,
            }}
          >
            New Arrivals
          </Typography>
          <Divider
            sx={{
              width: 70,
              height: 4,
              backgroundColor: "red",
              borderRadius: 2,
              mx: "auto",
            }}
          />
        </Box>
        <NewArrivalsGrid />
      </Box>

      <AccessoriesSection />
      <ExclusiveProducts />

      {/* SHIPPING PAYMENT QUALITY */}
      <Box
        sx={{
          borderTop: "1px solid #e0e0e0",
          borderBottom: "1px solid #e0e0e0",
          py: 4,
          px: { xs: 2, sm: 3, md: 6 },
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
          margin: 0,
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", sm: "nowrap" },
            justifyContent: "space-between",
            maxWidth: "100%",
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
              key={index}
              sx={{
                width: { xs: "100%", sm: "33.33%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "row", sm: "column" },
                textAlign: "center",
                gap: 1.5,
                mb: { xs: 2, sm: 0 },
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
      <Box
        sx={{ width: "100%", maxWidth: "100%", overflow: "hidden", margin: 0 }}
      >
        <RatioPotrait />
      </Box>
    </Box>
  );
};

export default HomePage;
