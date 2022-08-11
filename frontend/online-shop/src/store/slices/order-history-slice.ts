import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderHistory } from "../../models/order-history.model";

interface OrderHistoryState {
  orders: OrderHistory[];
  isLoading: boolean;
  errorMessage: string;
}
const initialState: OrderHistoryState = {
  orders: [],
  isLoading: false,
  errorMessage: "",
};

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {
    fetchOrderHistoryStart(state) {
      state.isLoading = true;
    },
    fetchOrdersHistorySuccess(state, action: PayloadAction<OrderHistory[]>) {
      state.isLoading = false;
      state.orders = action.payload;
    },
    fetchOrderHistoryFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  fetchOrderHistoryFailure,
  fetchOrderHistoryStart,
  fetchOrdersHistorySuccess,
} = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
