import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartlist";
import { useNavigate } from "react-router";

const ProductQuickView = ({ open, onClose, product, viewOnly = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S","M", "L", "XL"];

  // single dispatch with quantity
  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      ...product,
      size: selectedSize,
      quantity,
    };

    dispatch(addToCart(cartItem));
    onClose();
  };

  const handleViewDetail = () => {
    navigate(`/product/${product.id}`);
    onClose();
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 0,
          maxWidth: "1000px",
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: "relative" }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            zIndex: 1,
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <Close />
        </IconButton>

        {/* Content */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
          {/* Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
            }}
          >
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Details */}
          <Box sx={{ width: { xs: "100%", md: "50%" }, p: 4, display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 400, fontSize: "24px" }}>
              {product.name}
            </Typography>

            <Typography variant="h6" sx={{ mb: 3, fontSize: "20px", fontWeight: 400 }}>
              Rs.{product.price?.toLocaleString()}.00
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, fontSize: "16px", fontWeight: 600 }}>
              Product Details
            </Typography>

            <Typography variant="body2" sx={{ mb: 3, color: "#666", lineHeight: 1.6, fontSize: "14px" }}>
              {product.description ||
                "This sophisticated rugby polo features a contemporary cut and sew construction with bold horizontal block stripes in black and charcoal grey. Unlike traditional rugby shirts, this cut and sew construction means each stripe panel is individually cut and sewn together. This creates cleaner lines, better fit, and enhanced durability while allowing for more precise color blocking. The relaxed fit and modern colorway offer a fresh take on classic rugby heritage."}
            </Typography>

            {/* Size Selection */}
            {!viewOnly && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 1.5, fontSize: "15px" }}>
                Select Size:
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {sizes.map((size) => (
                  <Button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    variant={selectedSize === size ? "contained" : "outlined"}
                    sx={{
                      minWidth: "60px",
                      height: "45px",
                      borderColor: "#ddd",
                      color: selectedSize === size ? "#fff" : "#333",
                      backgroundColor: selectedSize === size ? "#000" : "transparent",
                      "&:hover": {
                        backgroundColor: selectedSize === size ? "#333" : "#f5f5f5",
                        borderColor: "#ddd",
                      },
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    {size}
                  </Button>
                ))}
              </Box>
            </Box>
            )}

            {/* Quantity */}
            {!viewOnly && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 1.5, fontSize: "15px" }}>
                Quantity
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ddd", width: "fit-content" }}>
                <IconButton
                  onClick={handleDecrement}
                  sx={{ borderRadius: 0, width: "45px", height: "45px", borderRight: "1px solid #ddd" }}
                >
                  <Typography sx={{ fontSize: "20px", fontWeight: 300 }}>−</Typography>
                </IconButton>
                <Box
                  sx={{
                    width: "60px",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  {quantity}
                </Box>
                <IconButton
                  onClick={handleIncrement}
                  sx={{ borderRadius: 0, width: "45px", height: "45px", borderLeft: "1px solid #ddd" }}
                >
                  <Typography sx={{ fontSize: "20px", fontWeight: 300 }}>+</Typography>
                </IconButton>
              </Box>
            </Box>
            )}

            {/* Buttons */}
            {viewOnly ? (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleViewDetail}
                  sx={{
                    flex: 1,
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    py: 1.5,
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    "&:hover": { backgroundColor: "#c0392b" },
                  }}
                >
                  VIEW DETAIL
                </Button>
              </Box>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleAddToCart}
                  sx={{
                    flex: 1,
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    py: 1.5,
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    "&:hover": { backgroundColor: "#c0392b" },
                  }}
                >
                  ADD TO CART
                </Button>
                <Button
                  variant="contained"
                  onClick={handleViewDetail}
                  sx={{
                    flex: 1,
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    py: 1.5,
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    "&:hover": { backgroundColor: "#c0392b" },
                  }}
                >
                  VIEW DETAIL
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
