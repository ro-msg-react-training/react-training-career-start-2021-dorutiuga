import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_EDIT_PRODUCT_BY_ID_ACTION,
  FETCH_PRODUCTS_ACTION,
  FETCH_PRODUCTS_BY_ID_ACTION,
} from "../../helpers/strings";
import { Product } from "../../models/product.model";
import {
  fetchProductById,
  fetchProducts,
} from "../../services/products.service";
import {
  fetchEditProductFailure,
  fetchEditProductSuccess,
} from "../slices/edit-product-slice";
import {
  fetchProductDetailsFailure,
  fetchProductDetailsSuccess,
} from "../slices/product-details-slice";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../slices/products-slice";

function* getProductsFetch() {
  const products: Product[] = yield call(() => fetchProducts());
  try {
    yield put(fetchProductsSuccess(products));
  } catch (err: any) {
    yield put(fetchProductsFailure(err));
  }
}

function* getProductDetailFetch(action: PayloadAction<string>) {
  try {
    const product: Product = yield call(() => fetchProductById(action.payload));
    yield put(fetchProductDetailsSuccess(product));
  } catch (err: any) {
    yield put(fetchProductDetailsFailure(err));
  }
}

function* editProduct(action: PayloadAction<string>) {
  try {
    const product: Product = yield call(() => fetchProductById(action.payload));
    yield put(fetchEditProductSuccess(product));
  } catch (err: any) {
    yield put(fetchEditProductFailure(err));
  }
}

function* fetchProductsAsync() {
  yield takeEvery(FETCH_PRODUCTS_ACTION, getProductsFetch);
}

function* fetchProducsByIdAsync() {
  yield takeEvery(FETCH_PRODUCTS_BY_ID_ACTION, getProductDetailFetch);
}

function* fetchEditProductByIdAsync() {
  yield takeEvery(FETCH_EDIT_PRODUCT_BY_ID_ACTION, editProduct);
}

function* productsSaga() {
  yield all([
    call(fetchProductsAsync),
    call(fetchProducsByIdAsync),
    call(fetchEditProductByIdAsync),
  ]);
}

export default productsSaga;
