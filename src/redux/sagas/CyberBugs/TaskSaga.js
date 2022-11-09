import { call, delay, put, select, takeLatest } from "redux-saga/effects"
import { taskService } from "../../../services/TaskService"
import { taskTypeService } from "../../../services/TaskTypeService"
import { STATUS_CODE } from "../../../util/constants/SettingSystems";
import { notificationFunction } from "../../../util/Notification/NotificationCyberbugs";

function* createTaskSaga(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(500);
    try {
        const { data, status } = yield call(() => {
            return taskService.createTask(action.taskObject)

        })
        console.log('dataDDD', data)
        yield put({
            type: "CREATE_TASK",
            taskObject: data.content
        })
        yield put({
            type: "GET_PROJECT_DETAIL_SAGA",
            projectId: data.content.projectId

        })
        yield put({
            type: "GET_TASK_DETAIL_SAGA",
            taskId: data.content.taskId
        })
        yield put({ type: "CLOSE_DRAWER" })
        notificationFunction('success', 'Create task successfully!')
    } catch (err) {

    }
    yield put({
        type: "HIDE_LOADING"
    })
}

export function* theoDoiCreateTaskSaga() {
    yield takeLatest("CREATE_TASK_SAGA", createTaskSaga)
}




function* getTaskDetailSaga(action) {

    try {
        const { data, status } = yield call(() => {
            return taskService.getTaskDetail(action.taskId)

        })


        yield put({
            type: "GET_TASK_DETAIL",
            taskDetailModal: data.content
        })

    } catch (err) {

    }

}

export function* theoDoiGetTaskDetailSaga() {
    yield takeLatest("GET_TASK_DETAIL_SAGA", getTaskDetailSaga)
}


function* updateStatusTaskSaga(action) {

    try {
        const { data, status } = yield call(() => {
            return taskService.updateStatusTask(action.taskStatusUpdate)

        })
        console.log(data)
        yield put({
            type: "GET_PROJECT_DETAIL_SAGA",
            projectId: action.taskStatusUpdate.projectId

        })

        yield put({
            type: "GET_TASK_DETAIL_SAGA",
            taskId: action.taskStatusUpdate.taskId
        })

    } catch (err) {

    }

}

export function* theoDoiUpdateStatusTaskSaga() {
    yield takeLatest("UPDATE_STATUS_TASK_SAGA", updateStatusTaskSaga)
}


function* handleChangePostApi(action) {
    console.log('sdfsdf')
    switch (action.actionType) {

        case "CHANGE_TASK_MODAL": {
            const { name, value } = action
            yield put({
                type: "CHANGE_TASK_MODAL",
                name,
                value
            })
        }; break;
        case "REMOVE_ASSIGNESS": {
            const { assignessId } = action
            yield put({
                type: "REMOVE_ASSIGNESS",
                assignessId
            })
        }; break;
        case "ADD_ASSIGNESS": {
            const { userSelected } = action
            yield put({
                type: "ADD_ASSIGNESS",
                userSelected

            })
        }

    }
    try {
        let { taskDetailModal } = yield select(state => state.TaskReducer)
        const listUserAsign = taskDetailModal.assigness?.map((user, index) => {
            return user.id
        })
        let taskUpdateApi = { ...taskDetailModal, listUserAsign }
        const { data, status } = yield call(() => {
            return taskService.updateTask(taskUpdateApi)
        })
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: "GET_PROJECT_DETAIL_SAGA",
                projectId: taskUpdateApi.projectId

            })

            yield put({
                type: "GET_TASK_DETAIL_SAGA",
                taskId: taskUpdateApi.taskId
            })

        }

    } catch (err) {
        console.log(err.response?.data)
    }

}

export function* theoDoiHandleChangePostApi() {
    yield takeLatest("HANDLE_CHANGE_POST_API", handleChangePostApi)
}