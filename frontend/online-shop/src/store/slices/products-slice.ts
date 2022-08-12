import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/product.model";

interface ProductState {
  products: Product[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  errorMessage: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      ///it is ok to set directly the state  because it uses immer under the hood to make it immutable
      state.isLoading = true;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.isLoading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
