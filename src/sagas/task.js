import { call, put, takeEvery, select } from "redux-saga/effects"
import { getTasksSuccess, getTasksFailure } from "../actions/task"
import { newTaskSuccess, newTaskFailure } from "../actions/task"
import { deleteTaskSuccess, deleteTaskFailure } from "../actions/task"
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

function* newTask(action) {
    const { task } = action.payload
    console.log(task)
    try {
        const response = yield call(axios.post,HOST+ENDPOINT_TASKS, task)

        yield put(newTaskSuccess(response))
    } catch(error) {
        yield put(newTaskFailure(error))
    }
}

function* deleteTask(action) {
    const { id } = action.payload
    console.log(id)
    try {
        const response = yield call(axios.delete,HOST+ENDPOINT_TASKS+'/'+id)

        yield put(deleteTaskSuccess(response, id))
    } catch(error) {
        yield put(deleteTaskFailure(error))
    }
}

function* taskSaga() {
    yield takeEvery('GET_TASKS',getTasks)
    yield takeEvery('NEW_TASK',newTask)
    yield takeEvery('DELETE_TASK',deleteTask)
}

export default taskSaga