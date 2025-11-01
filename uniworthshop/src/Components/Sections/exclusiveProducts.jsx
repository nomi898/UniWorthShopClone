import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Divider } from "@mui/material";
import products from "../../DummyData/Products";
import { NavLink } from "react-router";

const ExclusiveProducts = () => {
  const [activeTab, setActiveTab] = useState("Shirts");

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const category = products.find(
    (cat) => cat.name.toLowerCase() === activeTab.toLowerCase()
  );
  const allProducts = category
    ? category.subcategories.flatMap((sub) => sub.products).slice(0, 6)
    : [];

  return (
    <>
      {/* Section Header */}
      <Box sx={{ textAlign: "center", mt: 10, mb: 4 }}>
        <Typography variant="h6" sx={{ color: "red", mb: 1 }}>
          Exclusive Products
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          BROWSE MORE
        </Typography>
        <Divider
          sx={{
            width: 70,
            height: 4,
            backgroundColor: "red",
            borderRadius: 2,
            mx: "auto",
            mb: 3,
          }}
        />

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={handleChange}
          centered
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            "& .MuiTab-root": { color: "black", fontWeight: 500 },
            "& .MuiTab-root.Mui-selected": { color: "red" },
            "& .MuiTabs-indicator": { backgroundColor: "red" },
          }}
        >
          <Tab label="Shirts" value="Shirts" />
          <Tab label="Accessories" value="Accessories" />
          <Tab label="Summer Collection" value="Summer Collection" />
        </Tabs>
      </Box>

      {/* Products Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          px: { xs: 2, sm: 4, md: 6 },
          py: 4,
        }}
      >
        {allProducts.length > 0 ? (
          allProducts.map((item) => (
            <NavLink
              key={item.id}
              to={`/product/${item.id}`}
              style={{ 
                textDecoration: "none", 
                color: "inherit",
                flex: "1 1 calc(33.33% - 16px)", // add this!
                maxWidth: "700px" // optional: match Box maxWidth
              }}
            >
              <Box
                key={item.id}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    aspectRatio: "4/5",
                    objectFit: "cover",
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography sx={{ fontWeight: 500, mb: 1 }}>
                    {item.name}
                  </Typography>
                  <Typography color="text.secondary">
                    Rs.{item.price.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </NavLink>
          ))
        ) : (
          <Typography
            sx={{
              textAlign: "center",
              width: "100%",
              color: "gray",
              mt: 3,
            }}
          >
            No products available for this category.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default ExclusiveProducts;
