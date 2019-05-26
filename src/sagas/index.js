import { fork } from "redux-saga/effects";
import task from "./task";
import user from "./user";

export function* rootSaga() {
  yield fork(task);
  yield fork(user);
}
