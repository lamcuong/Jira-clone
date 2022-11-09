const stateDefault = {
    projectList: [
        { id: '1', projectName: 'abc', description: '<p>gdfgtr</p>' }
    ],
    arrProject: []

}



export const ProjectCyberBugsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "GET_ALL_LIST_PROJECT": {
            state.projectList = action.data
            return { ...state }
        }
        case "GET_ALL_PROJECT_TASK": {
            state.arrProject = action.arrProject
            return { ...state }
        }
        default: return { ...state }
    }
}