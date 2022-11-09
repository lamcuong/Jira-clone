
import { call, put, takeLatest } from "redux-saga/effects"
import { priorityService } from "../../../services/PriorityService"
import { taskTypeService } from "../../../services/TaskTypeService"

function* getPriority(action) {

    try {
        const { data, status } = yield call(() => {
            return priorityService.getPriority()

        })
        console.log('data', data)
        yield put({
            type: "GET_PRIORITY",
            arrPriority: data.content
        })
    } catch (err) {

    }
}

export function* theoDoiGetPriority() {
    yield takeLatest("GET_PRIORITY_SAGA", getPriority)
}