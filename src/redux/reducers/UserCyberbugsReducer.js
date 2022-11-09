import { USER_LOGIN } from "../../util/constants/SettingSystems"
import { USLOGIN } from "../constants/CyberBugs/Cyberbugs";

let usLogin = {}

if (localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: usLogin,
    userSearch: [],
    arrUser: []
}

export const UserCyberbugsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case USLOGIN: {
            state.userLogin = action.userLogin
            return { ...state }
        }
        case "GET_USER_SEARCH": {
            state.userSearch = action.listUserSearch
            console.log('state', state)
            return { ...state }

        }
        case "GET_USER_BY_PROJECT_ID": {
            return { ...state, arrUser: action.arrUser }
        }
        default: return { ...state }
    }
}


