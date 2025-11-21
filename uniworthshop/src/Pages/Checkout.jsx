import React, { useMemo, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  RadioGroup,
  Radio,
  Paper,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { clearCart } from "../store/slices/cartlist";

const currency = (n) => `Rs.${Number(n).toLocaleString()}.00`;

export default function Checkout() {
  const cartItems = useSelector((state) => state?.cart?.items || []);
  const dispatch = useDispatch();
  const [checkoutType, setCheckoutType] = useState("login"); // 'login' | 'guest'
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [lastOrderTotal, setLastOrderTotal] = useState(null);
  const navigate = useNavigate();

  const subtotal = useMemo(
    () => cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0),
    [cartItems]
  );

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", px: { xs: 2, md: 6 }, py: 4 }}>
      <Grid container spacing={4}>
        {/* Shipping Details */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, border: "1px solid #eee" }}>
            <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
              Shipping Details
            </Typography>

            <Box sx={{ display: "flex", gap: 3, mb: 2, alignItems: "center" }}>
              <RadioGroup
                row
                value={checkoutType}
                onChange={(e) => setCheckoutType(e.target.value)}
              >
                <FormControlLabel value="login" control={<Radio />} label="Login" />
                <FormControlLabel value="guest" control={<Radio />} label="Guest" />
              </RadioGroup>
            </Box>

            {checkoutType === "login" && (
              <Box sx={{ p: 2, mb: 3, border: "1px solid #fdecea", bgcolor: "#fff6f5", borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
                <Typography sx={{ color: "#b22222", fontWeight: 500 }}>
                  Please login to continue checkout.
                </Typography>
                <Button variant="contained" color="error" onClick={() => navigate("/signin")}>
                  Go to Login
                </Button>
              </Box>
            )}

            {checkoutType === "guest" && (
              <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Full Name" size="small" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Email Address" size="small" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Phone" size="small" />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small">
                  <InputLabel id="country">Country</InputLabel>
                  <Select labelId="country" label="Country" defaultValue={"Pakistan"}>
                    <MenuItem value="Pakistan">Pakistan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small">
                  <InputLabel id="state">State / County</InputLabel>
                  <Select labelId="state" label="State / County" defaultValue="">
                    <MenuItem value="">Select State</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small">
                  <InputLabel id="city">Town/City</InputLabel>
                  <Select labelId="city" label="Town/City" defaultValue="">
                    <MenuItem value="">Select City</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Postal Code" size="small" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label="Address Line 1" size="small" placeholder="For example: House #123, Street #123," />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Address Line 2" size="small" placeholder="Abc Road" />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox />} label="Ship to same Address" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline minRows={3} label="Order Notes" placeholder="Notes about your order, eg special notes for delivery" />
              </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, border: "1px solid #eee" }}>
            <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
              Order Summary
            </Typography>

            {orderPlaced && (
              <Box sx={{ p: 2, mb: 2, border: "1px solid #e0f2e9", bgcolor: "#f3fcf8", borderRadius: 1 }}>
                <Typography sx={{ color: "#148f55", fontWeight: 600, mb: 0.5 }}>
                  Order placed successfully
                </Typography>
                <Typography sx={{ color: "#148f55" }}>
                  Total charged: {currency(lastOrderTotal ?? subtotal)}
                </Typography>
              </Box>
            )}

            {/* Items */}
            <Box>
              {cartItems.map((item, idx) => (
                <Box key={idx} sx={{ display: "flex", gap: 2, py: 2, alignItems: "center", borderBottom: "1px solid #f0f0f0" }}>
                  <Box component="img" src={item.image} alt={item.name} sx={{ width: 58, height: 58, objectFit: "cover", border: "1px solid #eee" }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{item.name}</Typography>
                    <Typography sx={{ fontSize: 12, color: "#666" }}>{item.size || "-"}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: 14 }}>{currency(item.price)}</Typography>
                  <Typography sx={{ fontSize: 14, width: 24, textAlign: "center" }}>{item.quantity || 1}</Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{currency((item.price || 0) * (item.quantity || 1))}</Typography>
                </Box>
              ))}
            </Box>

            {/* Totals */}
            <Box sx={{ mt: 2 }}>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", py: 0.5 }}>
                <Typography>Subtotal</Typography>
                <Typography>{currency(subtotal)}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", py: 0.5 }}>
                <Typography>Shipping</Typography>
                <Typography>Rs.0.00</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", py: 0.5, fontWeight: 600 }}>
                <Typography sx={{ fontWeight: 600 }}>Grand Total</Typography>
                <Typography sx={{ fontWeight: 600 }}>{currency(subtotal)}</Typography>
              </Box>
            </Box>

            {/* Payment Methods */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                Payment Method
              </Typography>
              <RadioGroup defaultValue="cod">
                <FormControlLabel value="cod" control={<Radio />} label="Cash On Delivery (COD)" />
                <FormControlLabel value="payfast" control={<Radio />} label="PayFast (Debit Or Credit Card)" />
                <FormControlLabel value="wallet" control={<Radio />} label="Wallet" />
                <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
                <FormControlLabel value="bank" control={<Radio />} label="Bank Transfer Payment" />
              </RadioGroup>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
              <Button component={NavLink} to="/cart" variant="outlined" fullWidth>
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={() => {
                  if (checkoutType === "login") {
                    navigate("/signin");
                  } else {
                    setOrderPlaced(true);
                    setLastOrderTotal(subtotal);
                    dispatch(clearCart());
                  }
                }}
              >
                Place Order
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}


