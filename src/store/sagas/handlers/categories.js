import { call, put, takeEvery } from "redux-saga/effects";
import fatchCategories from "../requests/categories";

export const getCategories = function*(action) {
  const { meta } = action;
  try {
    const categories = yield call(fatchCategories, action);
    yield put({ type: "GET_CATEGORIES", login: categories, meta });
  } catch (error) {
    yield put({
      type: "LOGIN_ERROR",
      message: error.message,
      error: true,
      meta,
    });
  }
};
