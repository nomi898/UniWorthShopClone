
import React, { useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router";
import ProductQuickView from "../Sections/ProductQuickView";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [quickOpen, setQuickOpen] = useState(false);

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
      <Box sx={{ position: "relative" }}>
        <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
        />
        <IconButton
          onClick={(e) => { e.stopPropagation(); setQuickOpen(true); }}
          sx={{ position: "absolute", bottom: 8, right: 8, bgcolor: "#fff", boxShadow: 2, width: 40, height: 40 }}
          aria-label="Quick view"
        >
          <ShoppingCart sx={{ color: "#1f2937", fontSize: 20 }} />
        </IconButton>
      </Box>

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

      {/* Quick View Modal */}
      <ProductQuickView open={quickOpen} onClose={() => setQuickOpen(false)} product={product} />
    </Card>
  );
};

export default ProductCard;
