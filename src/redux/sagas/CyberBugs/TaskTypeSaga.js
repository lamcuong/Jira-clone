
import { call, put, takeLatest } from "redux-saga/effects"
import { taskTypeService } from "../../../services/TaskTypeService"

function* getTaskTypeSaga(action) {

    try {
        const { data, status } = yield call(() => {
            return taskTypeService.getTaskType()

        })
        console.log('data', data)
        yield put({
            type: "GET_TASK_TYPE",
            arrTaskType: data.content
        })
    } catch (err) {

    }
}

export function* theoDoiGetTaskType() {
    yield takeLatest("GET_TASK_TYPE_SAGA", getTaskTypeSaga)
}