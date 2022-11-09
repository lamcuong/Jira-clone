import React from 'react'
import styleLoading from './LoadingComponent.module.css'
import { useSelector } from 'react-redux'

export default function LoadingComponent() {
    const state = useSelector(state => state.LoadingReducer)
    if (state.isLoading) {
        return (
            <div className={styleLoading.bgLoading}>
                <img src={require('../../../assets/imgLoading/imgLoading.gif')} />
            </div>
        )
    } else {
        return ''
    }

}
