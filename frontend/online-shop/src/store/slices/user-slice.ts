import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user";

interface UserState {
  user?: User;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  user: undefined,
  isLoading: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserStart(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    fetchUserSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    fetchUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    unsubscribeUser(state) {
      state.user = undefined;
    },
  },
});

export const {
  fetchUserSuccess,
  fetchUserStart,
  fetchUserFailure,
  unsubscribeUser,
} = userSlice.actions;
export default userSlice.reducer;
