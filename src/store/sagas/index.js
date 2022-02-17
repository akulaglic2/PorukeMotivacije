import { all } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/users";
import { takeEvery } from "redux-saga/effects";
import { getCategories } from "./handlers/categories";
import { getQuotes } from "./handlers/quotes";

function* watchActions() {
  yield takeEvery("LOGIN_REQUESTED", handleLogin);
  yield takeEvery("LOGOUT_REQUESTED", handleLogout);
  yield takeEvery("GET_CATEGORIES_SUCCESS", getCategories);
  yield takeEvery("GET_QUOTES_SUCCESS", getQuotes);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
