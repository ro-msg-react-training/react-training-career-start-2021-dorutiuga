import { all, call } from "redux-saga/effects";
import orderHistory from "./order-history-sagas";
import productsSaga from "./products-sagas";
import users from "./user-sagas";

export default function* rootSaga() {
  yield all([call(productsSaga), call(orderHistory), call(users)]);
}
