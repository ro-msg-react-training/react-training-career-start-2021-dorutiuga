import { all, call, put, takeEvery } from "redux-saga/effects";
import { FETCH_ORDER_HISTORY_ACTION } from "../../helpers/strings";
import { OrderHistory } from "../../models/order-history.model";
import { fetchOrdersHistory } from "../../services/orders-history.service";
import {
  fetchOrderHistoryFailure,
  fetchOrdersHistorySuccess,
} from "../slices/order-history-slice";

function* OrderHistoryFetch() {
  try {
    const ordersHistory: OrderHistory[] = yield call(() =>
      fetchOrdersHistory()
    );
    yield put(fetchOrdersHistorySuccess(ordersHistory));
  } catch (err: any) {
    yield put(fetchOrderHistoryFailure(err));
  }
}

function* fetchOrderHistoryAsync() {
  yield takeEvery(FETCH_ORDER_HISTORY_ACTION, OrderHistoryFetch);
}

function* orderHistory() {
  yield all([call(fetchOrderHistoryAsync)]);
}
export default orderHistory;
