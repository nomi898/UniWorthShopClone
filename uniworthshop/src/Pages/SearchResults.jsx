import React, { useMemo, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router";
import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";
import products from "../DummyData/Products";
import ProductQuickView from "../Components/Sections/ProductQuickView";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchResults() {
  const query = useQuery();
  const navigate = useNavigate();
  const [quickOpen, setQuickOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewOnlyQuick, setViewOnlyQuick] = useState(false);

  const q = (query.get("query") || "").trim();

  const allProducts = useMemo(() => {
    return products.flatMap((cat) =>
      cat.subcategories.flatMap((sub) => sub.products)
    );
  }, []);

  const results = useMemo(() => {
    if (!q) return [];
    const lc = q.toLowerCase();
    return allProducts.filter((p) => p.name.toLowerCase().includes(lc));
  }, [q, allProducts]);

  const openQuickView = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
    setViewOnlyQuick(false);
    setQuickOpen(true);
  };

  return (
    <Box sx={{ pt: "120px", pb: 6, px: { xs: 2, sm: 4, md: 6 } }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Search results for: {q || ""}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "flex-start",
        }}
      >
        {results.length ? (
          results.map((item) => (
            <NavLink
              key={item.id}
              to={`/product/${item.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                flex: "1 1 calc(25% - 16px)",
                minWidth: 240,
                maxWidth: 320,
              }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    "&:hover .hover-overlay": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }}
                  />
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
                      paddingRight: 2,
                      opacity: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <IconButton
                      onClick={(e) => openQuickView(e, item)}
                      sx={{ bgcolor: "white", "&:hover": { bgcolor: "#f3f4f6" }, boxShadow: 3, width: 40, height: 40 }}
                    >
                      <ShoppingCart sx={{ color: "#1f2937", fontSize: 20 }} />
                    </IconButton>
                    <IconButton
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedProduct(item); setViewOnlyQuick(true); setQuickOpen(true); }}
                      sx={{ bgcolor: "white", "&:hover": { bgcolor: "#f3f4f6" }, boxShadow: 3, width: 40, height: 40 }}
                    >
                      <Search sx={{ color: "#1f2937", fontSize: 20 }} />
                    </IconButton>
                    <IconButton
                      component={NavLink}
                      to="/signin"
                      onClick={(e) => { e.stopPropagation(); }}
                      sx={{ bgcolor: "white", "&:hover": { bgcolor: "#f3f4f6" }, boxShadow: 3, width: 40, height: 40 }}
                    >
                      <FavoriteBorder sx={{ color: "#1f2937", fontSize: 20 }} />
                    </IconButton>
                  </Box>
                </Box>

                <Box sx={{ p: 2 }}>
                  <Typography sx={{ fontWeight: 500, mb: 1 }}>{item.name}</Typography>
                  <Typography color="text.secondary">Rs.{item.price.toLocaleString()}</Typography>
                </Box>
              </Box>
            </NavLink>
          ))
        ) : (
          <Typography sx={{ color: "gray", mt: 3 }}>No products found.</Typography>
        )}
      </Box>

      <ProductQuickView open={quickOpen} onClose={() => setQuickOpen(false)} product={selectedProduct} viewOnly={viewOnlyQuick} />
    </Box>
  );
}


