import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { NavLink, useParams } from "react-router";
import products from "../DummyData/Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartlist";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showProductDetail, setShowProductDetail] = useState(true);
  const [showShipping, setShowShipping] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Find product, subcategory, and category dynamically by productId
  let product, subcategoryData, categoryData;

  for (const cat of products) {
    for (const sub of cat.subcategories) {
      const p = sub.products.find((prod) => prod.id.toString() === productId);
      if (p) {
        product = p;
        subcategoryData = sub;
        categoryData = cat;
        break;
      }
    }
    if (product) break;
  }

  const categoryLabel = categoryData?.name;
  const subcategoryLabel = subcategoryData?.name;
  const productLabel = product?.name;

  const handleQuantityDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    if (!product) return;
    const cartItem = {
      ...product,
      size: selectedSize,
      quantity,
    };
    dispatch(addToCart(cartItem));
  };

  const icons = [FacebookIcon, TwitterIcon, PinterestIcon, EmailIcon];

  return (
    <Box sx={{ pt: "20px", pb: "50px", px: { xs: 2, md: 4 } }}>
      {/* Breadcrumb */}
      <Box
        sx={{
          mb: 3,
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "gray", fontSize: "14px" }}
        >
          Home
        </NavLink>

        {categoryLabel && (
          <>
            <Typography sx={{ color: "gray", fontSize: "14px" }}>|</Typography>
            <NavLink
              to={`/category/${categoryLabel}`}
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: "14px",
              }}
            >
              {categoryLabel}
            </NavLink>
          </>
        )}

        {subcategoryLabel && (
          <>
            <Typography sx={{ color: "gray", fontSize: "14px" }}>|</Typography>
            <NavLink
              to={`/category/${categoryLabel}?subcategory=${subcategoryLabel}`}
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: "14px",
              }}
            >
              {subcategoryLabel}
            </NavLink>
          </>
        )}

        {productLabel && (
          <>
            <Typography sx={{ color: "gray", fontSize: "14px" }}>|</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
              {productLabel}
            </Typography>
          </>
        )}
      </Box>

      {/* 3 Column Horizontal Layout */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        {/* Column 1: Product Image with Swiper Gallery */}
        <Box sx={{ flex: { xs: "1", md: "0 0 30%" }, minWidth: 0 }}>
          {/* Main image swiper */}
          <Swiper
            modules={[FreeMode, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            style={{ width: "100%", borderRadius: 8 }}
            spaceBetween={10}
          >
            {([product?.image] || []).filter(Boolean).map((src, idx) => (
              <SwiperSlide key={idx}>
                <Box
                  component="img"
                  src={src}
                  alt={productLabel || "Product"}
                  sx={{ width: "100%", display: "block" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails swiper */}
          <Box sx={{ mt: 1 }}>
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[FreeMode, Thumbs]}
              spaceBetween={8}
              slidesPerView={5}
              freeMode
              watchSlidesProgress
            >
              {([product?.image] || []).filter(Boolean).map((src, idx) => (
                <SwiperSlide key={idx} style={{ width: 60, height: 60 }}>
                  <Box
                    component="img"
                    src={src}
                    alt={`thumb-${idx}`}
                    sx={{
                      width: "100%",
                      height: 60,
                      objectFit: "cover",
                      border: "1px solid #eee",
                      borderRadius: 2,
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>

        {/* Column 2: Product Details */}
        <Box sx={{ flex: { xs: "1", md: "0 0 38%" }, minWidth: 0 }}>
          {/* Product Detail Tab */}
          <Box sx={{ border: "1px solid #ddd", borderRadius: "4px", mb: 2 }}>
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                p: 1.5,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
              }}
              onClick={() => setShowProductDetail(!showProductDetail)}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                PRODUCT DETAIL
              </Typography>
              <Typography>{showProductDetail ? "−" : "+"}</Typography>
            </Box>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {productLabel || "Beige Color Block Zipper Hoodie"}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            SKU: {product?.sku || "TH2508"}
          </Typography>
          {/* Social Share Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {icons.map((Icon, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": { borderColor: "#D4A574" },
                }}
              >
                <Icon sx={{ fontSize: 16, color: "#555" }} />
              </Box>
            ))}
          </Box>
          {/* Product Description */}
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              lineHeight: 1.6,
              fontSize: "13px",
              color: "text.secondary",
            }}
          >
            {product?.description ||
              "Designed for both comfort and practicality, this full-zip beige hoodie is a versatile addition to your smart casual wardrobe. Featuring a soft and durable cotton polyester blend with a regular fit, it offers warmth and flexibility for any occasion. The adjustable drawstring hood and ribbed cuffs ensure a snug fit, while the full zip allows for easy layering. This zipper hoodie is perfect for casual wear or outdoor activities."}
          </Typography>
          {/* Product Specifications */}
          <Box sx={{ mb: 3 }}>
            {[
              {
                label: "Collar Style",
                value: product?.collarStyle || "Hoodie",
              },
              { label: "Color", value: product?.color || "Beige" },
              { label: "Cuff Style", value: product?.cuffStyle || "Rib" },
              {
                label: "Fabric",
                value: product?.fabric || "80% Cotton 20% Polyester",
              },
              { label: "Fit", value: product?.fit || "Regular Fit" },
              { label: "Pattern", value: product?.pattern || "Plain" },
              { label: "Sleeve", value: product?.sleeve || "Full Sleeves" },
              { label: "Style", value: product?.style || "Full Zipper" },
            ].map((spec, idx) => (
              <Box key={idx} sx={{ display: "flex", mb: 0.5 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, fontSize: "13px", minWidth: "120px" }}
                >
                  {spec.label} :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "13px", color: "text.secondary" }}
                >
                  {spec.value}
                </Typography>
              </Box>
            ))}
          </Box>
          {/* Shipping & Returns Tab */}
          <Box sx={{ border: "1px solid #ddd", borderRadius: "4px" }}>
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                p: 1.5,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
              }}
              onClick={() => setShowShipping(!showShipping)}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                SHIPPING & RETURNS
              </Typography>
              <Typography>{showShipping ? "−" : "+"}</Typography>
            </Box>
            {showShipping && (
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.6,
                    fontSize: "13px",
                    color: "text.secondary",
                  }}
                >
                  Free shipping on orders over Rs. 5,000. Standard delivery
                  takes 3-5 business days. Returns accepted within 14 days of
                  delivery. Items must be unworn and in original packaging.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Column 3: Price & Purchase Options */}
        <Box sx={{ flex: { xs: "1", md: "0 0 28%" }, minWidth: 0 }}>
          {/* Price */}
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 3, color: "text.primary" }}
          >
            Rs.{product?.price?.toLocaleString() || "6,495.00"}
          </Typography>

          {/* Size Chart Link */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Button
              size="small"
              sx={{
                textTransform: "none",
                color: "text.secondary",
                fontSize: "12px",
                p: 0,
              }}
            >
              📏 Size Chart
            </Button>
          </Box>

          {/* Size Selection */}
          <Typography
            variant="body2"
            sx={{ mb: 1, fontWeight: 600, fontSize: "13px" }}
          >
            Select Size:
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <Button
                key={size}
                variant="outlined"
                onClick={() => setSelectedSize(size)}
                sx={{
                  minWidth: "45px",
                  height: "40px",
                  borderColor: selectedSize === size ? "#D4A574" : "#ddd",
                  backgroundColor:
                    selectedSize === size ? "#f5f0e8" : "transparent",
                  color: "text.primary",
                  fontSize: "14px",
                  "&:hover": {
                    borderColor: "#D4A574",
                    backgroundColor: "#f5f0e8",
                  },
                }}
              >
                {size}
              </Button>
            ))}
          </Box>

          {/* Quantity */}
          <Typography
            variant="body2"
            sx={{ mb: 1, fontWeight: 600, fontSize: "13px" }}
          >
            Quantity
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleQuantityDecrease}
              sx={{
                minWidth: "35px",
                height: "35px",
                borderColor: "#ddd",
                color: "text.primary",
                p: 0,
              }}
            >
              −
            </Button>
            <Typography
              sx={{ minWidth: "40px", textAlign: "center", fontWeight: 500 }}
            >
              {quantity}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={handleQuantityIncrease}
              sx={{
                minWidth: "35px",
                height: "35px",
                borderColor: "#ddd",
                color: "text.primary",
                p: 0,
              }}
            >
              +
            </Button>
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            fullWidth
            onClick={handleAddToCart}
            sx={{
              backgroundColor: "#D4A574",
              color: "white",
              py: 1.5,
              mb: 3,
              textTransform: "none",
              fontSize: "15px",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#C89563" },
            }}
          >
            ADD TO CART
          </Button>

          {/* Need Help */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "13px" }}>
              📞 Need Help?
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, fontSize: "13px" }}
            >
              +92 42 111 789 456
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "text.secondary",
              fontSize: "12px",
              mt: 0.5,
            }}
          >
            Mon-Sat: (10:00 AM to 06:00 PM)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
