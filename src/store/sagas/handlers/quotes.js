import { call, put, takeEvery } from "redux-saga/effects";
import fatchQuotes from "../requests/quotes";

export const getQuotes = function*(action) {
  const { meta } = action;
  try {
    const quotes = yield call(fatchQuotes, action);
    yield put({ type: "GET_QUOTES", login: quotes, meta });
  } catch (error) {
    yield put({
      type: "LOGIN_ERROR",
      message: error.message,
      error: true,
      meta,
    });
  }
};
