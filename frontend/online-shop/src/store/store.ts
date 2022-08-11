import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products-slice";
import productDetailsReducer from "./slices/product-details-slice";
import orderHistoryReducer from "./slices/order-history-slice";
import userReducer from "./slices/user-slice";
import editProductRedcer from "./slices/edit-product-slice";
import cartReducer from "./slices/cart-slice";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/root-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const rootReducers = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  orderHistory: orderHistoryReducer,
  user: userReducer,
  editProduct: editProductRedcer,
  cart: cartReducer,
});

const saga = createSagaMiddleware();
const persistReducerStore = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistReducerStore,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [saga],
});

saga.run(rootSaga);

export const persistor = persistStore(store);
export type AppDispach = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
