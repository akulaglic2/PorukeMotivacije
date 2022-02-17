import { all } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/users";
import { takeEvery } from "redux-saga/effects";
import { getCategories } from "./handlers/categories";

function* watchActions() {
  yield takeEvery("LOGIN_REQUESTED", handleLogin);
  yield takeEvery("LOGOUT_REQUESTED", handleLogout);
  yield takeEvery("GET_CATEGORIES_SUCCESS", getCategories);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
