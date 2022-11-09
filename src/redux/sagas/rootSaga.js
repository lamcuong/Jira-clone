import { all } from 'redux-saga/effects';
import * as Cyberbugs from './CyberBugs/UserCyberBugSaga'
import * as ProjectCategory from './CyberBugs/ProjectCategorySaga'
import * as CreateProject from './CyberBugs/CreateProjectSaga'
import * as TaskType from './CyberBugs/TaskTypeSaga'
import * as Priority from './CyberBugs/PrioritySaga'
import * as Task from './CyberBugs/TaskSaga'
import * as Status from './CyberBugs/StatusSaga'
import * as Comment from './CyberBugs/CommentSaga'
export function* rootSaga() {
    yield all([
        //Nghiệp vụ theo dõi các action saga todolist


        //Nghiệp vụ cyberbugs .... ,
        Cyberbugs.theoDoiSignin(),
        ProjectCategory.theoDoiGetAllProjectCategory(),
        CreateProject.theoDoiCreateProjectSaga(),
        ProjectCategory.theoDoiGetAllListProjectSaga(),
        CreateProject.theoDoiUpdateProjectSaga(),
        CreateProject.theoDoiDeleteProject(),
        Cyberbugs.theoDoiGetUser(),
        Cyberbugs.theoDoiAssignUser(),
        Cyberbugs.theoDoiRemoveUserFromProject(),
        CreateProject.theoDoiGetProjectDetail(),
        ProjectCategory.theoDoiGetAllProjectTaskSaga(),
        TaskType.theoDoiGetTaskType(),
        Priority.theoDoiGetPriority(),
        Task.theoDoiCreateTaskSaga(),
        Status.theoDoiGetAllStatusSaga(),
        Cyberbugs.theoDoiGetUserByProjectId(),
        Task.theoDoiGetTaskDetailSaga(),
        Task.theoDoiUpdateStatusTaskSaga(),
        Task.theoDoiHandleChangePostApi(),
        Comment.theoDoiInsertCommentSaga()

    ])
}