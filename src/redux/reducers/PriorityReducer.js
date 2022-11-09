const initialState = {
    arrPriority: []
}

export const PriorityReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_PRIORITY':

            return { ...state, arrPriority: action.arrPriority }

        default:
            return { ...state }
    }
}
