const initialState = {
    arrStatus: []
}

export const StatusReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_ALL_STATUS": {
            console.log('action', action)
            return { ...state, arrStatus: action.arrStatus }
        }


        default:
            return state
    }
}
