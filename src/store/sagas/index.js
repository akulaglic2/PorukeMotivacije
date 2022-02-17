import { all } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/users";
import { takeEvery } from "redux-saga/effects";

function* watchActions() {
  yield takeEvery("LOGIN_REQUESTED", handleLogin);
  yield takeEvery("LOGIN_REQUESTED", handleLogout);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
