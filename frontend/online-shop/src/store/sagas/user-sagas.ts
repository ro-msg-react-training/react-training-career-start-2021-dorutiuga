import { all, call, put, takeEvery } from "redux-saga/effects";
import { FETCH_USER_START } from "../../helpers/strings";
import { User } from "../../models/user";
import { fetchLoginCredentials } from "../../services/users.service";
import { fetchUserFailure, fetchUserSuccess } from "../slices/user-slice";

function* fetchUser(action: any) {
  const user: User = yield call(() => fetchLoginCredentials(action.payload));
  try {
    yield put(fetchUserSuccess(user));
  } catch (err: any) {
    yield put(fetchUserFailure(err));
  }
}

function* fetchUserAsync() {
  yield takeEvery(FETCH_USER_START, fetchUser);
}

function* users() {
  yield all([call(fetchUserAsync)]);
}

export default users;
