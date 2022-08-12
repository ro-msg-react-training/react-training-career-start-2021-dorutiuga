import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/product.model";

interface EditProductState {
  product: Product;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: EditProductState = {
  product: {
    id: 0,
    name: "",
    category: "",
    price: 0,
    description: "",
    image: "",
  },
  isLoading: false,
  errorMessage: "",
};

const editProductSlice = createSlice({
  name: "editProduct",
  initialState,
  reducers: {
    fetchEditProductStart(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    fetchEditProductSuccess(state, action: PayloadAction<Product>) {
      state.isLoading = false;
      state.product = action.payload;
    },
    fetchEditProductFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    updateProduct(state, action: PayloadAction<Product>) {
      state.product = action.payload;
    },
  },
});

export const {
  fetchEditProductFailure,
  fetchEditProductStart,
  fetchEditProductSuccess,
  updateProduct,
} = editProductSlice.actions;

export default editProductSlice.reducer;
