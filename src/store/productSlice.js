import { createSlice } from "@reduxjs/toolkit";
import { products } from "../utils/constants /general";

const productSlice = createSlice({
  name: "frutis",
  initialState: {
    products,
    isOpenCart: false,
    cartProduct: [],
  },
  reducers: {
    openCart(state) {
      state.isOpenCart = true;
    },
    closeCart: (state) => {
      state.isOpenCart = false;
    },
    addProduct: (state, action) => {
      const newProduct = state.products.find(
        (item) => item.id === action.payload
      );
      if (newProduct) {
        newProduct.isBought = true;
        newProduct.quantyti = 1;
        state.cartProduct.push(newProduct);
      }
    },
    incrementQuantyti: (state, action) => {
      const product = state.cartProduct.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.quantyti = product.quantyti + 1;
      }
    },
    decrementQuantyti: (state, action) => {
      const product = state.cartProduct.find(
        (item) => item.id === action.payload
      );
      if (product) {
        if (product.quantyti > 1) {
          product.quantyti = product.quantyti - 1;
        } else {
          state.cartProduct = state.cartProduct.filter(
            (item) => item.id !== action.payload
          );
          const originalProduct = state.products.find(
            (item) => item.id === action.payload
          );
          if (originalProduct) {
            originalProduct.isBought = false;
          }
        }
      }
    },
  },
});
export const {
  openCart,
  closeCart,
  incrementQuantyti,
  decrementQuantyti,
  addProduct,
} = productSlice.actions;
export const productReducer = productSlice.reducer;
