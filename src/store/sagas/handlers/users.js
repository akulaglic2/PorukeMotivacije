import { call, put, takeEvery } from "redux-saga/effects";
import fatchLogin from "../requests/users";

const handleLogin = function*(action) {
  const { meta } = action;
  try {
    const login = yield call(fatchLogin, action);

    console.log("fff", login);
    if (!login)
      yield put({
        type: "LOGIN_ERROR",
        message: login.error,
        error: true,
        meta,
      });
    else yield put({ type: "LOGIN_SUCCESS", login: login, meta });
  } catch (error) {
    yield put({
      type: "LOGIN_ERROR",
      message: error.message,
      error: true,
      meta,
    });
  }
};

function* watcherLoginSaga() {
  yield takeEvery("LOGIN_REQUESTED", handleLogin);
}

export default watcherLoginSaga;
