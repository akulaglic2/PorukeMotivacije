import { all } from "redux-saga/effects";
import watcherLoginSaga from "./handlers/users";

export default function* rootSaga() {
  yield all([watcherLoginSaga()]);
}
