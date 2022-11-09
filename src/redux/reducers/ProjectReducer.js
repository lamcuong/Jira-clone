const initialState = {
    projectEdit: {
        "id": 24,
        "projectName": "fwefwe",
        "creator": 0,
        "description": "asdefg",
        "categoryId": ""
    },
    projectDetail: {

    }
}

export const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_PROJECT": {
            state.projectEdit = action.projectEdit
            return { ...state }

        }
        case "PUT_PROJECT_DETAIL": {
            state.projectDetail = action.projectDetail
            return { ...state }
        }




        default:
            return { ...state }
    }
}
