import React, { useState } from "react";
import products from "../../DummyData/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, IconButton } from "@mui/material";
import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import ProductQuickView from "../Sections/ProductQuickView";

const NewArrivalsGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewOnlyQuick, setViewOnlyQuick] = useState(false);

  // Filter products marked as "new arrival"
  const newArrivals = products.flatMap((category) =>
    category.subcategories.flatMap((sub) =>
      sub.products.filter((product) => product.isNewArrival)
    )
  );

  // Open Quick View modal
  const handleQuickView = (e, product) => {
    // prevent NavLink navigation when clicking icons
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedProduct(product);
    setViewOnlyQuick(false);
    setQuickViewOpen(true);
  };

  // Navigate to product detail (used by search icon)
  const handleSearchViewOnly = (e, product) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedProduct(product);
    setViewOnlyQuick(true);
    setQuickViewOpen(true);
  };

  // Wishlist (placeholder)
  const handleAddToWishlist = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add to wishlist:", productId);
  };

  const handleCloseQuickView = () => {
    setQuickViewOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
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
              {/* Keep NavLink around the card so clicking outside icons navigates to product */}
              <NavLink
                to={`/product/${product.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  {/* Image container */}
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

                    {/* Hover Overlay Icons */}
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
                        // overlay sits above link hit area
                        zIndex: 2,
                      }}
                    >
                      {/*  Cart icon — OPEN QUICK VIEW  */}
                      <IconButton
                        onClick={(e) => handleQuickView(e, product)}
                        sx={{
                          backgroundColor: "white",
                          "&:hover": { backgroundColor: "#f3f4f6" },
                          boxShadow: 3,
                          width: 40,
                          height: 40,
                        }}
                        aria-label="Quick view / add to cart"
                      >
                        <ShoppingCart sx={{ color: "#1f2937", fontSize: 20 }} />
                      </IconButton>

                      {/* Search — open view-only quick view */}
                      <IconButton
                        onClick={(e) => handleSearchViewOnly(e, product)}
                        sx={{
                          backgroundColor: "white",
                          "&:hover": { backgroundColor: "#f3f4f6" },
                          boxShadow: 3,
                          width: 40,
                          height: 40,
                        }}
                        aria-label="View product"
                      >
                        <Search sx={{ color: "#1f2937", fontSize: 20 }} />
                      </IconButton>

                      {/* Wishlist */}
                      <IconButton
                        component={NavLink}
                        to="/signin"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        sx={{
                          backgroundColor: "white",
                          "&:hover": { backgroundColor: "#f3f4f6" },
                          boxShadow: 3,
                          width: 40,
                          height: 40,
                        }}
                        aria-label="Add to wishlist"
                      >
                        <FavoriteBorder
                          sx={{ color: "#1f2937", fontSize: 20 }}
                        />
                      </IconButton>
                    </Box>
                  </Box>

                  <p style={{ margin: 0 }}>{product.name}</p>
                  <h5
                    style={{
                      margin: "6px 0 0",
                      color: "#111",
                      fontWeight: 500,
                    }}
                  >
                    PKR {product.price}
                  </h5>
                </Box>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Quick View Modal (Add to Cart happens inside modal) */}
      <ProductQuickView
        open={quickViewOpen}
        onClose={handleCloseQuickView}
        product={selectedProduct}
        viewOnly={viewOnlyQuick}
      />
    </>
  );
};

export default NewArrivalsGrid;
