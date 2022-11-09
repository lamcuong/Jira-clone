import Axios from 'axios';
import { call, delay, fork, take, takeEvery, takeLatest, put, select } from 'redux-saga/effects';
import { cyberbugsService } from '../../../services/CyberbugService';
import { userService } from '../../../services/UserService';
import { STATUS_CODE, TOKEN, USER_LOGIN } from '../../../util/constants/SettingSystems';
import { USER_SIGNIN_API, USLOGIN } from '../../constants/CyberBugs/Cyberbugs';



function* signinSaga(action) {
    // console.log(action);
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(500);
    try {
        const { data, status } = yield cyberbugsService.signinCyberBug(action.userLogin);
        yield put({
            type: "HIDE_LOADING"
        })
        //Lưu vào localstorage khi đăng nhập thành công
        localStorage.setItem(TOKEN, data.content.accessToken)
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content))
        console.log(data);

        yield put({
            type: USLOGIN,
            userLogin: data.content
        })

        let history = yield select(state => state.HistoryReducer.history)
        history.push('/home')
    } catch (err) {


        console.log(err.response.data)
    }
    yield put({
        type: "HIDE_LOADING"
    })


}

export function* theoDoiSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}




function* getUser(action) {
    // console.log(action);

    try {
        const { data, status } = yield userService.getUser(action.keyword);
        console.log(data)
        yield put({ type: "GET_USER_SEARCH", listUserSearch: data.content })





    } catch (err) {


        console.log(err.response.data)
    }


}

export function* theoDoiGetUser() {
    yield takeLatest("GET_USER_API", getUser);
}





function* assignUser(action) {
    // console.log(action);

    try {
        const { data, status } = yield userService.assignUser(action.userProject);
        console.log(data)
        yield put({ type: "GET_ALL_LIST_PROJECT_SAGA" })





    } catch (err) {


        console.log(err.response.data)
    }


}

export function* theoDoiAssignUser() {
    yield takeLatest("ASSIGN_USER_PROJECT_SAGA", assignUser);
}


function* removeUserFromProject(action) {
    // console.log(action);

    try {
        const { data, status } = yield userService.removeUserFromProject(action.userProject);
        console.log(data)
        yield put({ type: "GET_ALL_LIST_PROJECT_SAGA" })





    } catch (err) {


        console.log(err.response.data)
    }


}

export function* theoDoiRemoveUserFromProject() {
    yield takeLatest("REMOVE_USER_FROM_PROJECT_SAGA", removeUserFromProject);
}




function* getUserByProjectIdSaga(action) {
    // console.log(action);

    try {

        const { data, status } = yield userService.getUserByProjectId(action.projectId);
        // console.log('checkdata', data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({ type: "GET_USER_BY_PROJECT_ID", arrUser: data.content })
        }





    } catch (err) {

        if (err.response?.data.statusCode === STATUS_CODE.NOT_FOUND) {
            yield put({
                type: 'GET_USER_BY_PROJECT_ID',
                arrUser: []
            })
        }
        console.log(err.response.data)
    }


}

export function* theoDoiGetUserByProjectId() {
    yield takeLatest("GET_USER_BY_PROJECT_ID_SAGA", getUserByProjectIdSaga);
}
