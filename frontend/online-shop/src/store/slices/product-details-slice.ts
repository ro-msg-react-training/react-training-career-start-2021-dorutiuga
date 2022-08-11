import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/product.model";

interface ProductDetailsState {
  product?: Product;
  isLoading: boolean;
  errorMessage: string;
  alert: boolean;
  confirmOpen: boolean;
}
const initialState: ProductDetailsState = {
  product: undefined,
  isLoading: false,
  errorMessage: "",
  alert: false,
  confirmOpen: false,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    fetchProductDetailsStart(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    fetchProductDetailsSuccess(state, action: PayloadAction<Product>) {
      state.isLoading = false;
      state.product = action.payload;
    },
    fetchProductDetailsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    openAlert(state, action: PayloadAction<boolean>) {
      state.alert = action.payload;
    },
    openConfirmationDialog(state, action: PayloadAction<boolean>) {
      state.confirmOpen = action.payload;
    },
  },
});

export const {
  fetchProductDetailsFailure,
  fetchProductDetailsStart,
  fetchProductDetailsSuccess,
  openAlert,
  openConfirmationDialog,
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
