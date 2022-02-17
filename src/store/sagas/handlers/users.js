import { call, put, takeEvery } from "redux-saga/effects";
import fatchLogin from "../requests/users";

export const handleLogin = function*(action) {
  const { meta } = action;
  try {
    const login = yield call(fatchLogin, action);

    if (!login)
      yield put({
        type: "LOGIN_ERROR",
        message: login.error,
        error: true,
        meta,
      });
    else {
      yield put({ type: "LOGIN_SUCCESS", login: login, meta });
      localStorage.setItem("access_token", login.access_token);
    }
  } catch (error) {
    yield put({
      type: "LOGIN_ERROR",
      message: error.message,
      error: true,
      meta,
    });
  }
};

export const handleLogout = function*(action) {
  const { meta } = action;
  try {
    localStorage.removeItem("access_token");
    yield put({ type: "LOGOUT_SUCCESS" });
  } catch (error) {
    yield put({
      type: "LOGIN_ERROR",
      message: error.message,
      error: true,
      meta,
    });
  }
};
