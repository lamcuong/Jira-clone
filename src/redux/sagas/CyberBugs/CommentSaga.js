import { call, put, takeLatest } from "redux-saga/effects"
import { commentService } from "../../../services/CommentService"


function* insertCommentSaga(action) {

    try {
        console.log(action)
        const { data, status } = yield call(() => commentService.insertComment(action.objComment))

    } catch (err) {
        console.log(err)
    }
}

export function* theoDoiInsertCommentSaga() {
    yield takeLatest("INSERT_COMMENT_SAGA", insertCommentSaga)
}