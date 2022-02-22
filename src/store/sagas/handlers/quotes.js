import { call, put, takeEvery } from "redux-saga/effects";
import fetchQuotes from "../requests/quotes";
import fetchSearchQuotes from "../requests/searchQuotes";

export const getQuotes = function*(action) {
  const { meta } = action;
  try {
    const quotes = yield call(fetchQuotes, action);
    const hasSessionId = localStorage.getItem("access_token");

    return hasSessionId ? yield put({ type: "GET_QUOTES", quotes, meta }) : [];
  } catch (error) {
    yield put({
      type: "LOGIN_ERROR",
      message: error.message,
      error: true,
      meta,
    });
  }
};

export const searchQuotes = function*(action) {
  const { meta } = action;
  try {
    const quotes = yield call(fetchSearchQuotes, action);

    yield put({ type: "SEARCH_QUOTES_SUCCESS", quotes, meta });
  } catch (error) {
    yield put({
      type: "LOGIN_ERROR",
      message: error.message,
      error: true,
      meta,
    });
  }
};
