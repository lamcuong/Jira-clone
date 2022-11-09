import React from "react"
const initialState = {
    visible: false,
    title: '',
    ComponentContentDrawer: <p>deafault</p>,
    callBackSubmit: (propsValue) => {
        alert('dsfds')

    },

}

export const DrawerCyberbugsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_DRAWER": {

            return { ...state, visible: true }
        }
        case "CLOSE_DRAWER": {
            return { ...state, visible: false }
        }
        case "OPEN_FORM_EDIT_PROJECT": {
            return { ...state, visible: true, ComponentContentDrawer: action.componentContent, title: action.title }
        }
        case "SET_SUBMIT_FORM_EDITOR": {
            return { ...state, callBackSubmit: action.submitFunction }
        }
        case "OPEN_FORM_CREATE_TASK": {
            state.title = action.title
            state.visible = true
            state.ComponentContentDrawer = action.componentContent

            return { ...state }
        }
        case "SET_SUBMIT_FUNCTION": {
            return { ...state, callBackSubmit: action.submitFunction }
        }
        default:
            return { ...state }
    }
}
