import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addItemsToCart,
  removeItemFromCart,
  removeProduct,
} from "../../helpers/cart.utils";
import { CartItems } from "../../models/cart-items.model";
import { Product } from "../../models/product.model";

interface CartState {
  cart: CartItems[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: CartState = {
  cart: [],
  isLoading: false,
  errorMessage: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart(state) {
      state.cart = [];
    },
    increaseQuantity(state, action: PayloadAction<Product>) {
      state.cart = addItemsToCart(state.cart, action.payload);
    },
    decreaseQuantity(state, action: PayloadAction<Product>) {
      state.cart = removeItemFromCart(state.cart, action.payload);
    },
    removeProductAction(state, action: PayloadAction<Product>) {
      state.cart = removeProduct(state.cart, action.payload);
    },
  },
});

export const {
  emptyCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductAction,
} = cartSlice.actions;

export default cartSlice.reducer;
