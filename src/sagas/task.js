import { call, put, takeEvery, select } from "redux-saga/effects"
import { getTasksSuccess, getTasksFailure } from "../actions/task"
import axios from 'axios'

const HOST = 'http://35.189.87.15:3000'

const ENDPOINT_TASKS = '/tasks'

function* getTasks(action) {
    try {
        const response = yield call(axios.get,HOST+ENDPOINT_TASKS)

        yield put(getTasksSuccess(response))
    } catch(error) {
        yield put(getTasksFailure(error))
    }
}

function* taskSaga() {
    yield takeEvery('GET_TASKS',getTasks)
}

export default taskSaga