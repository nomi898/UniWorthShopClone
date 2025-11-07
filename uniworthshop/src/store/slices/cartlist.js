import { createSlice } from "@reduxjs/toolkit";
import products from "../../DummyData/Products";

const initialState = {
  products: products,
  items: [],
  subtotal: 0,
  itemCount: 0,
};

const calculateTotals = (state) => {
  state.subtotal = state.items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  state.itemCount = state.items.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );
};

export const cartlistSlice = createSlice({
  name: "cartlist",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (prod) => prod.id === item.id && prod.size === item.size
      );

      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        state.items.push({ ...item, quantity: item.quantity || 1 });
      }

      calculateTotals(state);
    },

    removeFromCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (prod) => prod.id === item.id && prod.size === item.size
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (prod) => !(prod.id === item.id && prod.size === item.size)
          );
        }
      }

      calculateTotals(state);
    },

    deleteFromCart: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter(
        (prod) => !(prod.id === item.id && prod.size === item.size)
      );

      calculateTotals(state);
    },

    clearCart: (state) => {
      state.items = [];
      calculateTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } =
  cartlistSlice.actions;

export default cartlistSlice.reducer;
