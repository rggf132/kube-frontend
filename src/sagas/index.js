import { fork } from "redux-saga/effects"
import task from "./task"

export function* rootSaga() {
    yield fork(task)
}