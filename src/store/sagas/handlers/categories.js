import { call, put, takeEvery } from "redux-saga/effects";
import fetchCategories from "../requests/categories";

export const getCategories = function*(action) {
  const { meta } = action;
  try {
    const categories = yield call(fetchCategories, action);
    yield put({ type: "GET_CATEGORIES", categories: categories, meta });
  } catch (error) {
    yield put({
      type: "LOGIN_ERROR",
      message: error.message,
      error: true,
      meta,
    });
  }
};
