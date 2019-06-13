import { call, put, takeEvery, select } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "../actions/user";
import { push } from "connected-react-router";
import axios from "axios";

// const HOST = "http://35.189.87.15:3000";
const HOST = "http://localhost:3001/api";

const ENDPOINT_USER = "/auth/local";

function* login(action) {
  const { user } = action.payload;
  //   console.log(user);
  try {
    const response = yield call(
      axios.post,
      HOST + ENDPOINT_USER + "/login",
      user
    );

    yield put(loginSuccess(response));
    yield put(push("/"));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* userSaga() {
  yield takeEvery("LOGIN", login);
}

export default userSaga;
