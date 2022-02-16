import { call, put, takeEvery } from "redux-saga/effects";
import fatchLogin from "../requests/users";

const handleLogin = function*() {
  try {
    const login = yield call(fatchLogin);
    yield put({ type: "LOGIN_SUCCESS", login: login });
  } catch (error) {
    yield put({ type: "LOGIN_ERROR", message: error.message });
  }
};

function* watcherLoginSaga() {
  yield takeEvery("LOGIN_REQUESTED", handleLogin);
}

export default watcherLoginSaga;
