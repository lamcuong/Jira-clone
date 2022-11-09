import React, { useEffect } from 'react'
import ContentMain from '../../../components/CyberBugs/MainCyberBugs/ContentMain'
import HeaderMain from '../../../components/CyberBugs/MainCyberBugs/HeaderMain'
import InfoMain from '../../../components/CyberBugs/MainCyberBugs/InfoMain'
import { useSelector, useDispatch } from 'react-redux'


export default function IndexCyberbugs(props) {
    let { projectDetail } = useSelector(state => state.ProjectReducer)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "GET_PROJECT_DETAIL_SAGA",
            projectId: props.match.params.projectId
        })
    }, [])
    // console.log('projectDetail', projectDetail)
    return (

        <div className='main'>
            <HeaderMain projectDetail={projectDetail} />
            <InfoMain projectDetail={projectDetail} />
            <ContentMain projectDetail={projectDetail} />
        </div>
    )
}
