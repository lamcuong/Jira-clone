import { call, put, take, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugService";
import { projectService } from "../../../services/ProjectService";
import { STATUS_CODE } from "../../../util/constants/SettingSystems";
import { GET_ALL_PROJECT_CATEGORY, GET_ALL_PROJECT_CATEGORY_SAGA } from "../../constants/CyberBugs/Cyberbugs";

function* getAllProjectCategorySaga(action) {
    // console.log('action', action)
    try {
        const { data, status } = yield call(() => cyberbugsService.getAllProjectCategory())
        console.log("data", data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_PROJECT_CATEGORY,
                data: data.content
            })
        }
    } catch (err) {
        console.log(err.response.data)
    }
}

export function* theoDoiGetAllProjectCategory() {
    yield takeLatest(GET_ALL_PROJECT_CATEGORY_SAGA, getAllProjectCategorySaga)
}


function* getAllListProjectSaga(action) {

    try {

        const { data, status } = yield call(() => {
            return cyberbugsService.getAllListProject()
        })
        // console.log('data', data)
        yield put({
            type: "GET_ALL_LIST_PROJECT",
            data: data.content
        })

    } catch (err) {

    }
}

export function* theoDoiGetAllListProjectSaga() {
    yield takeLatest("GET_ALL_LIST_PROJECT_SAGA", getAllListProjectSaga)
}



function* getAllProjectTaskSaga(action) {

    try {
        const { data, status } = yield call(() => {
            return projectService.getAllProjectTask()

        })
        console.log('data', data)
        yield put({
            type: "GET_ALL_PROJECT_TASK",
            arrProject: data.content
        })
        yield put({
            type: "GET_USER_BY_PROJECT_ID_SAGA",
            projectId: data.content[0]?.id
        })

    } catch (err) {

    }
}

export function* theoDoiGetAllProjectTaskSaga() {
    yield takeLatest("GET_ALL_PROJECT_TASK_SAGA", getAllProjectTaskSaga)
}