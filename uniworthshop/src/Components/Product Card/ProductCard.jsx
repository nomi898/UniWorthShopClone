
import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        cursor: "pointer",
        borderRadius: 2,
        boxShadow: 2,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": { transform: "scale(1.03)", boxShadow: 4 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />

      {/* Product Info */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 500, mb: 1, color: "#333" }}
        >
          {product.name}
        </Typography>
        <Typography variant="body1" sx={{ color: "#009f7f", fontWeight: 600 }}>
          ${product.price}
        </Typography>
      </CardContent>

      {/* Optional: Add to Cart Button */}
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            // Add to cart logic here
            console.log("Added to cart:", product.name);
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
