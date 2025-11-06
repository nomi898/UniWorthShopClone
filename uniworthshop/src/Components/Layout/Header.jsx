import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Divider,
  IconButton,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../store/slices/cartlist";
import { useLocation, NavLink, useNavigate } from "react-router";
import logoColored from "../../assets/Images/logocolored.png";
import logoWhite from "../../assets/Images/logo.svg";
import Categories from "../../DummyData/Categories";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0 });
  const [cartHover, setCartHover] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const isHomePage = location.pathname === "/";
  const dispatch = useDispatch();

  // ✅ Read cart items from the correct reducer key
  const cartItems = useSelector((state) => state?.cart?.items || []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const itemCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  //  Scroll effect for homepage
  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    setHoveredCategory(null);
  };

  const handleMouseEnter = (event, category) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSubmenuPosition({ top: rect.top });
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => setHoveredCategory(null);

  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          position: isHomePage ? "fixed" : "relative",
          top: isHomePage ? (scrolled ? "0px" : "50px") : "0px",
          left: 0,
          right: 0,
          zIndex: 1200,
          width: "100%",
          transition: "top 0.3s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: {
              xs: scrolled ? "8px 12px" : "12px",
              md: scrolled ? "10px 20px" : "20px",
            },
            backgroundColor: scrolled ? "white" : "transparent",
            transition: "all 0.3s ease",
            overflow: "visible",
            boxShadow: scrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
          }}
        >
          {/* Menu icon & text */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon
              sx={{ fontSize: { xs: 26, md: 30 }, color: scrolled ? "black" : "white" }}
            />
            <Typography
              sx={{ display: { xs: "none", md: "block" }, color: scrolled ? "black" : "white", fontWeight: 500 }}
            >
              Menu
            </Typography>
            {/* Compact search icon beside menu on mobile */}
            <IconButton
              onClick={(e) => { e.stopPropagation(); setShowSearch((s) => !s); }}
              sx={{ ml: 1, display: { xs: "inline-flex", md: "none" }, color: scrolled ? "black" : "white" }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          {/* Logo */}
          <Box>
            <NavLink to="/">
              <img
                src={scrolled ? logoColored : logoWhite}
                alt="Logo"
                style={{
                  width: scrolled ? 48 : 140,
                  height: "auto",
                  transition: "all 0.3s ease",
                }}
              />
            </NavLink>
          </Box>

          {/* Search & Cart */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* SEARCH */}
            {showSearch ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchText.trim()) {
                      navigate(
                        `/search?query=${encodeURIComponent(searchText.trim())}`
                      );
                      setShowSearch(false);
                      setSearchText("");
                    }
                  }}
                  placeholder="Search products"
                  style={{
                    padding: "8px 10px",
                    borderRadius: 6,
                    border: "1px solid #ddd",
                    width: 220,
                  }}
                />
                <Button
                  onClick={() => {
                    if (!searchText.trim()) return;
                    navigate(
                      `/search?query=${encodeURIComponent(searchText.trim())}`
                    );
                    setShowSearch(false);
                    setSearchText("");
                  }}
                  sx={{
                    color: "white",
                    backgroundColor: "#b22222",
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#911b1b" },
                  }}
                >
                  Go
                </Button>
                <Button
                  onClick={() => setShowSearch(false)}
                  sx={{
                    textTransform: "none",
                    color: scrolled ? "black" : "white",
                  }}
                >
                  Cancel
                </Button>
              </Box>
            ) : (
              <Button
                onClick={() => setShowSearch(true)}
                sx={{
                  color: scrolled ? "black" : "white",
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: scrolled
                      ? "#f2f2f2"
                      : "rgba(255,255,255,0.1)",
                  },
                  display: { xs: "none", md: "inline-flex" },
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            )}

            {/* BAG WITH DROPDOWN */}
            <Box
              sx={{ position: "relative" }}
              onMouseEnter={() => setCartHover(true)}
              onMouseLeave={() => setCartHover(false)}
            >
              <Button
                sx={{
                  color: scrolled ? "black" : "white",
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: scrolled
                      ? "#f2f2f2"
                      : "rgba(255,255,255,0.1)",
                  },
                }}
                startIcon={
                  <Badge
                    color="warning"
                    badgeContent={itemCount}
                    invisible={itemCount === 0}
                    overlap="circular"
                  >
                    <AddShoppingCartIcon />
                  </Badge>
                }
              >
                <Box sx={{ display: { xs: "none", md: "block" } }}>Bag</Box>
              </Button>

              {/* CART DROPDOWN */}
              {cartHover && (
                <Paper
                  elevation={6}
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: "100%",
                    mt: 1,
                    width: 340,
                    p: 2,
                    zIndex: 2000,
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  {cartItems.length === 0 ? (
                    <Typography sx={{ textAlign: "center", py: 3 }}>
                      Your bag is empty
                    </Typography>
                  ) : (
                    <>
                      {cartItems.map((item, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            mb: 1.5,
                          }}
                        >
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <Box
                              component="img"
                              src={item.image}
                              alt={item.name}
                              sx={{
                                width: 60,
                                height: 60,
                                borderRadius: 1,
                                objectFit: "cover",
                              }}
                            />
                            <Box>
                              <Typography
                                sx={{ fontSize: 14, fontWeight: 500 }}
                              >
                                {item.name}
                              </Typography>
                              <Typography sx={{ fontSize: 13, color: "#555" }}>
                                Size: {item.size || "-"}
                              </Typography>
                              <Typography sx={{ fontSize: 13, color: "#555" }}>
                                Qty: {item.quantity || 1}
                              </Typography>
                            </Box>
                          </Box>
                          <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                            Rs.{item.price * (item.quantity || 1)}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={() => dispatch(deleteFromCart(item))}
                          >
                            <CloseIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Box>
                      ))}

                      <Divider sx={{ my: 1 }} />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 14,
                        }}
                      >
                        <Typography>Shipping</Typography>
                        <Typography>Rs. 0.00</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 1,
                          fontWeight: 600,
                        }}
                      >
                        <Typography>Subtotal</Typography>
                        <Typography>Rs.{subtotal.toLocaleString()}</Typography>
                      </Box>
                      <Divider sx={{ my: 1 }} />

                      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                        <Button
                          fullWidth
                          component={NavLink}
                          to="/cart"
                          variant="outlined"
                          sx={{
                            borderColor: "black",
                            color: "black",
                            "&:hover": {
                              backgroundColor: "black",
                              color: "white",
                            },
                          }}
                        >
                          View Cart
                        </Button>
                        <Button
                          fullWidth
                          component={NavLink}
                          to="/checkout"
                          variant="contained"
                          sx={{
                            backgroundColor: "#b22222",
                            "&:hover": { backgroundColor: "#911b1b" },
                          }}
                        >
                          Checkout
                        </Button>
                      </Box>
                    </>
                  )}
                </Paper>
              )}
            </Box>

            {/* Account icon (signin) on mobile */}
            <IconButton
              component={NavLink}
              to="/signin"
              sx={{ color: scrolled ? "black" : "white", display: { xs: "inline-flex", md: "none" } }}
            >
              <PersonOutlineIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* LEFT DRAWER (MENU) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "#fff",
            p: 1,
            overflow: "visible",
            zIndex: 1301,
          },
        }}
        ModalProps={{ keepMounted: true }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            px: 2,
            py: 1,
            borderBottom: "1px solid #eee",
          }}
        >
          Categories
        </Typography>

        <List onMouseLeave={handleMouseLeave}>
          {Categories.map((category) => (
            <ListItemButton
              key={category.id}
              onMouseEnter={(e) => handleMouseEnter(e, category)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              <ListItemText
                primary={
                  <Typography fontWeight="bold" fontSize="0.95rem">
                    {category.name}
                  </Typography>
                }
              />
              {category.subcategories?.length > 0 && (
                <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#666" }} />
              )}
            </ListItemButton>
          ))}
        </List>

        {/* Drawer Footer */}
        <Box sx={{ mt: 4, pt: 2, borderTop: "1px solid #eee" }}>
          {[
            "Made To Measure",
            "Uniworth Black",
            "Order Tracking",
            "Shipping Policy",
          ].map((text, i) => (
            <ListItemButton key={i}>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </Box>

        {/* FLOATING SUBMENU */}
        {hoveredCategory?.subcategories?.length > 0 && (
          <Paper
            elevation={6}
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={handleMouseLeave}
            sx={{
              position: "fixed",
              top: submenuPosition.top - 10,
              left: 280,
              minWidth: 500,
              bgcolor: "white",
              borderRadius: 2,
              p: 3,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1.5,
              boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
              zIndex: 1400,
            }}
          >
            {hoveredCategory.subcategories
              .filter((sub) => sub !== "null")
              .map((sub, index) => (
                <Button
                  key={index}
                  component={NavLink}
                  to={`/category/${hoveredCategory.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${sub
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  onClick={handleDrawerToggle}
                  sx={{
                    justifyContent: "flex-start",
                    color: "black",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": { color: "#b22222", bgcolor: "transparent" },
                  }}
                >
                  {sub}
                </Button>
              ))}
          </Paper>
        )}
      </Drawer>
    </>
  );
};

export default Header;
