// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import modalReducer from './modalSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
