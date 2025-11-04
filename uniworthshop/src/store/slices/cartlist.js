import { createSlice } from '@reduxjs/toolkit'
import products from '../../DummyData/Products';  // ✅ default import

const initialState = {
  Products: products,
  CartList: [],
};

export const counterSlice = createSlice({
  name: 'CartList',
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const item = actions.payload;
      const existingItem = state.CartList.find((prod) => prod.id === item.id);

      // ✅ quantity logic
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.CartList.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, actions) => {
      const item = actions.payload;
      const existingItem = state.CartList.find((prod) => prod.id === item.id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.CartList = state.CartList.filter((prod) => prod.id !== item.id);
        }
      }
    },

    DeletefromCart: (state, actions) => {
      const item = actions.payload;
      state.CartList = state.CartList.filter((prod) => prod.id !== item.id);
    },
  },
});

export const { addToCart, removeFromCart, DeletefromCart } = counterSlice.actions;
export default counterSlice.reducer;
