import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './slices/cartlist';
export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },

})