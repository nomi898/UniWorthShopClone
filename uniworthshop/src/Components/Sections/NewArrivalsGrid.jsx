import React from "react";
import products from "../../DummyData/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, IconButton } from "@mui/material";
import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";
import { NavLink } from "react-router";
import ScrollToTop from "../Layout/ScrollToTop";

const NewArrivalsGrid = () => {
  const newArrivals = products.flatMap((category) =>
    category.subcategories.flatMap((sub) =>
      sub.products.filter((product) => product.isNewArrival)
    )
  );

  const handleAddToCart = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Add to cart:', productId);
    // Add your cart logic here
  };

  const handleQuickView = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Quick view:', productId);
    // Add your quick view logic here
  };

  const handleAddToWishlist = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Add to wishlist:', productId);
    // Add your wishlist logic here
  };

  return (
    <Box sx={{ marginInline: { xs: 2, sm: 4, md: 8, lg: 30 }, mb: 4 }}>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 8 },
          768: { slidesPerView: 2, spaceBetween: 12 },
          1280: { slidesPerView: 3, spaceBetween: 10 },
        }}
        className="mySwiper"
      >
        {newArrivals.map((product) => (
          <SwiperSlide key={product.id}>
            <NavLink
              to={`/product/${product.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Box sx={{ position: "relative" }}>
                {/* Image Container with Hover Overlay */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 1,
                    mb: 2,
                    "&:hover .hover-overlay": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "3/4",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />

                  {/* Hover Overlay with Icons - Vertical on Bottom Right */}
                  <Box
                    className="hover-overlay"
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      right: 0,
                      transform: "translateX(100%)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      opacity: 0,
                      transition: "all 0.3s ease",
                      paddingRight: 2,
                    }}
                  >
                    <IconButton
                      onClick={(e) => handleAddToCart(e, product.id)}
                      sx={{
                        backgroundColor: "white",
                        "&:hover": { backgroundColor: "#f3f4f6" },
                        boxShadow: 3,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <ShoppingCart sx={{ color: "#1f2937", fontSize: 20 }} />
                    </IconButton>

                    <IconButton
                      onClick={(e) => handleQuickView(e, product.id)}
                      sx={{
                        backgroundColor: "white",
                        "&:hover": { backgroundColor: "#f3f4f6" },
                        boxShadow: 3,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <Search sx={{ color: "#1f2937", fontSize: 20 }} />
                    </IconButton>

                    <IconButton
                      onClick={(e) => handleAddToWishlist(e, product.id)}
                      sx={{
                        backgroundColor: "white",
                        "&:hover": { backgroundColor: "#f3f4f6" },
                        boxShadow: 3,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <FavoriteBorder sx={{ color: "#1f2937", fontSize: 20 }} />
                    </IconButton>
                  </Box>
                </Box>

                <p>{product.name}</p>
                <h5 className="text-black-400">PKR {product.price}</h5>
              </Box>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default NewArrivalsGrid;