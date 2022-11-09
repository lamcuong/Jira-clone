const initialState = {

    taskObject: {},
    taskDetailModal: {
        "priorityTask": {
            "priorityId": 1,
            "priority": "High"
        },
        "taskTypeDetail": {
            "id": 2,
            "taskType": "new task"
        },
        "assigness": [
            {
                "id": 2879,
                "avatar": "https://ui-avatars.com/api/?name=ducviet",
                "name": "ducviet",
                "alias": "ducviet"
            }
        ],
        "lstComment": [],
        "taskId": 6930,
        "taskName": "aaaaaaa",
        "alias": "aaaaaaa",
        "description": "<p>aaaaaaaaaaaa</p>",
        "statusId": "2",
        "originalEstimate": 0,
        "timeTrackingSpent": 0,
        "timeTrackingRemaining": 0,
        "typeId": 2,
        "priorityId": 1,
        "projectId": 8999
    }
}

export const TaskReducer = (state = initialState, action) => {
    switch (action.type) {

        case "CREATE_TASK":
            return { ...state, taskObject: action.taskObject }
        case "GET_TASK_DETAIL": {
            return { ...state, taskDetailModal: action.taskDetailModal }
        }

        case "CHANGE_TASK_MODAL": {
            const { name, value } = action;

            return { ...state, taskDetailModal: { ...state.taskDetailModal, [name]: value } }
        }
        case "ADD_ASSIGNESS": {
            // state.taskDetailModal.assigness = [...state.taskDetailModal.assigness, action.userSelected]
            state.taskDetailModal.assigness = [...state.taskDetailModal.assigness, action.userSelected];
            return { ...state }
        }
        case "REMOVE_ASSIGNESS": {
            state.taskDetailModal.assigness = [...state.taskDetailModal.assigness.filter(assigness => assigness.id != action.assignessId)]
            return { ...state }
        }
        default:
            return state
    }
}
