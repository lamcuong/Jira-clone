import { call, delay, put, takeLatest } from "redux-saga/effects"
import { baseService } from "../../../services/baseServices";
import { cyberbugsService } from "../../../services/CyberbugService"
import { projectService } from "../../../services/ProjectService";
import { STATUS_CODE } from "../../../util/constants/SettingSystems"
import { notificationFunction } from "../../../util/Notification/NotificationCyberbugs";

function* createProjectSaga(action) {

    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(500);
    try {

        const { data, status } = yield call(() => cyberbugsService.createProjectAuthorization(action.newProject))

        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: "CREATE_PROJECT",
                data: data.content
            })
        }
    } catch (err) {
        console.log(err.response.data)
    }
    yield put({
        type: "HIDE_LOADING"
    })
}




export function* theoDoiCreateProjectSaga() {
    yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga)
}



function* updateProjectSaga(action) {
    // console.log('actionupdate', action)
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(500);
    try {
        const { data, status } = yield call(() => cyberbugsService.updateProject(action.projectUpdate))

        if (status === STATUS_CODE.SUCCESS) {
            // console.log(data)
        }
    } catch (err) {
        console.log(err.response.data)
    }
    yield put({ type: 'GET_ALL_LIST_PROJECT_SAGA' })
    yield put({ type: "CLOSE_DRAWER" })
    yield put({
        type: "HIDE_LOADING"
    })
}




export function* theoDoiUpdateProjectSaga() {
    yield takeLatest('UPDATE_PROJECT_SAGA', updateProjectSaga)
}



function* deleteProject(action) {
    console.log('actionupdate', action)
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(500);
    try {
        const { data, status } = yield call(() => projectService.deleteProject(action.idProject))

        if (status === STATUS_CODE.SUCCESS) {
            // console.log(data)
            notificationFunction('success', 'Delete project successfully!')
        }
    } catch (err) {
        yield put({
            type: "HIDE_LOADING"
        })
        notificationFunction('error', 'Delete project failed!')
        console.log(err.response.data)


    }
    yield put({ type: 'GET_ALL_LIST_PROJECT_SAGA' })
    yield put({ type: "CLOSE_DRAWER" })
    yield put({
        type: "HIDE_LOADING"
    })
}




export function* theoDoiDeleteProject() {
    yield takeLatest('DELETE_PROJECT_SAGA', deleteProject)
}



function* getProjectDetail(action) {

    try {
        const { data, status } = yield call(() => projectService.getProjectDetail(action.projectId))
        console.log(data)
        yield put({
            type: "PUT_PROJECT_DETAIL",
            projectDetail: data.content
        })

    } catch (err) {


        console.log(err.response.data)


    }


}




export function* theoDoiGetProjectDetail() {
    yield takeLatest('GET_PROJECT_DETAIL_SAGA', getProjectDetail)
}