import { useParams, useLocation, Link, NavLink } from "react-router";
import { useState } from "react";
import products from "../DummyData/Products";
import Header from "../Components/Layout/Header";
import { Box, Typography, IconButton } from "@mui/material";
import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const location = useLocation();

  const [showFilter, setShowFilter] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    discounts: [],
    colors: [],
    sizes: [],
    fits: [],
    price: 10000,
  });

  const searchParams = new URLSearchParams(location.search);
  const subcategoryName = searchParams.get("subcategory");

  const categoryData = products.find((cat) => cat.name === categoryName);
  const subcategoryData = categoryData?.subcategories.find(
    (sub) => sub.name === subcategoryName
  );
  const productsToDisplay = subcategoryData?.products || [];

  // Filter options
  const brands = ["Uniworth", "Uniworth Black"];
  const discounts = ["50%", "35%", "20%"];
  const colors = [
    "Moss", "British Green", "Oatmeal", "Heather Grey", "Black",
    "Grey", "Beige", "Brown", "Orange", "Green", "Off White",
    "Charcoal", "Olive", "Mustard", "Maroon", "Navy",
  ];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const fits = ["Relax Fit", "Regular Fit"];
  const maxPrice = 10000;

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updated };
    });
  };

  const handleClear = () => {
    setSelectedFilters({
      brands: [],
      discounts: [],
      colors: [],
      sizes: [],
      fits: [],
      price: maxPrice,
    });
  };

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
    <div>
      <Header />

      <div style={{ paddingTop: "120px", paddingLeft: "20px", paddingRight: "20px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "gray", fontSize: "14px" }}>
            Home
          </Link>
          <span style={{ margin: "0 8px", color: "gray" }}>|</span>
          <span style={{ color: "gray", fontSize: "14px" }}>{categoryName}</span>
          {subcategoryName && (
            <>
              <span style={{ margin: "0 8px", color: "gray" }}>|</span>
              <span style={{ fontWeight: "bold", fontSize: "14px" }}>{subcategoryName}</span>
            </>
          )}
        </div>

        {/* Subcategory Title */}
        <h3 style={{ marginBottom: "20px", fontWeight: "normal", textAlign: "center" }}>
          {subcategoryName}
        </h3>

        {/* Top Menu: Filter | Item Count | Sort */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0",
            padding: "10px 0",
            position: "relative",
          }}
        >
          {/* Filter button */}
          <span
            style={{ fontSize: "14px", color: "#333", cursor: "pointer" }}
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter ▼
          </span>

          {/* Item count */}
          <span style={{ fontSize: "14px", color: "#555" }}>{productsToDisplay.length} Items</span>

          {/* Sort */}
          <select
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "4px 8px",
              fontSize: "14px",
            }}
          >
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>

          {/* Filter Dropdown */}
          {showFilter && (
            <Box
              sx={{
                position: "absolute",
                top: "45px",
                left: 0,
                right: 0,
                bgcolor: "#fff",
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                p: 2,
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                zIndex: 10,
              }}
            >
              {/* Filters (Brand, Discount, Color, Size, Fit, Price) */}
              {[{title: "Brand", options: brands, key: "brands"},
                {title: "Discount %", options: discounts, key: "discounts"},
                {title: "Color", options: colors, key: "colors"},
                {title: "Size", options: sizes, key: "sizes"},
                {title: "Fit", options: fits, key: "fits"}].map((filterCat) => (
                <Box key={filterCat.key}>
                  <strong>{filterCat.title}:</strong>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 0.5 }}>
                    {filterCat.options.map((opt) => (
                      <label key={opt} style={{ fontSize: "14px" }}>
                        <input
                          type="checkbox"
                          style={{ marginRight: "4px" }}
                          checked={selectedFilters[filterCat.key].includes(opt)}
                          onChange={() => handleCheckboxChange(filterCat.key, opt)}
                        />
                        {opt}
                      </label>
                    ))}
                  </Box>
                </Box>
              ))}

              {/* Price Range */}
              <Box>
                <strong>Price:</strong>
                <Box sx={{ mt: 0.5 }}>
                  <input
                    type="range"
                    min="1000"
                    max={maxPrice}
                    step="500"
                    value={selectedFilters.price}
                    onChange={(e) =>
                      setSelectedFilters((prev) => ({ ...prev, price: parseInt(e.target.value) }))
                    }
                    style={{ width: "150px" }}
                  />
                  <span style={{ fontSize: "12px", marginLeft: "6px" }}>
                    PKR 1,000 - {selectedFilters.price.toLocaleString()}
                  </span>
                </Box>
              </Box>

              {/* Buttons */}
              <Box sx={{ width: "100%", display: "flex", gap: 1, mt: 2 }}>
                <button
                  style={{ flex: 1, padding: "8px 0", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "4px" }}
                  onClick={() => {
                    console.log("Filters applied", selectedFilters);
                    setShowFilter(false);
                  }}
                >
                  Apply Filter
                </button>
                <button
                  style={{ flex: 1, padding: "8px 0", backgroundColor: "#f2f2f2", border: "1px solid #ccc", borderRadius: "4px" }}
                  onClick={handleClear}
                >
                  Clear Filter
                </button>
                <button
                  style={{ flex: 1, padding: "8px 0", backgroundColor: "#e74c3c", color: "#fff", border: "none", borderRadius: "4px" }}
                  onClick={() => setShowFilter(false)}
                >
                  Close Filter
                </button>
              </Box>
            </Box>
          )}
        </div>

        {/* Product Grid */}
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
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((item) => (
              <NavLink
                key={item.id}
                to={`/product/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  flex: "1 1 calc(33.33% - 16px)",
                  maxWidth: "300px",
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
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                >
                  {/* Image Container with Hover Icons */}
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
                        onClick={(e) => handleAddToCart(e, item.id)}
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
                        onClick={(e) => handleQuickView(e, item.id)}
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
                        onClick={(e) => handleAddToWishlist(e, item.id)}
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

                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 500, mb: 1 }}>{item.name}</Typography>
                    <Typography color="text.secondary">PKR {item.price.toLocaleString()}</Typography>
                  </Box>
                </Box>
              </NavLink>
            ))
          ) : (
            <Typography sx={{ textAlign: "center", width: "100%", color: "gray", mt: 3 }}>
              No products available for this category.
            </Typography>
          )}
        </Box>
      </div>
    </div>
  );
};

export default CategoryPage;