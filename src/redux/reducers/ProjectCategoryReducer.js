const stateDefault = {
    arrProjectCategory: []
}



export const ProjectCategoryReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "GET_ALL_PROJECT_CATEGORY": {
            state.arrProjectCategory = action.data;
            // console.log(action.data)
            console.log(state.arrProjectCategory)
        }
        default: return { ...state }
    }
}