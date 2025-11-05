import { createSlice } from "@reduxjs/toolkit";
import products from "../../DummyData/Products";

const initialState = {
  products: products, // optional, if you need product list access
  items: [], // ✅ holds all cart items
};

export const cartlistSlice = createSlice({
  name: "cartlist",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      
      // ✅ FIXED: Check both id AND size to handle different sizes separately
      const existingItem = state.items.find(
        (prod) => prod.id === item.id && prod.size === item.size
      );

      if (existingItem) {
        // If item already exists with same size, increase quantity
        existingItem.quantity += item.quantity || 1;
      } else {
        // Otherwise, add new item with size
        state.items.push({ ...item, quantity: item.quantity || 1 });
      }
    },

    removeFromCart: (state, action) => {
      const item = action.payload;
      
      // ✅ FIXED: Check both id AND size
      const existingItem = state.items.find(
        (prod) => prod.id === item.id && prod.size === item.size
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove item if quantity becomes 0
          state.items = state.items.filter(
            (prod) => !(prod.id === item.id && prod.size === item.size)
          );
        }
      }
    },

    deleteFromCart: (state, action) => {
      const item = action.payload;
      
      // ✅ FIXED: Check both id AND size when deleting
      state.items = state.items.filter(
        (prod) => !(prod.id === item.id && prod.size === item.size)
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } =
  cartlistSlice.actions;

export default cartlistSlice.reducer;