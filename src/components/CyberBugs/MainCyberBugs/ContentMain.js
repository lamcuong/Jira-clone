// import React from 'react'

// export default function ContentMain() {
//     return (
//         <div className="content" style={{ display: 'flex' }}>
//             <div className="card" style={{ width: '17rem', height: '25rem' }}>
//                 <div className="card-header">
//                     BACKLOG 3
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}>
//                         <p>
//                             Each issue has a single reporter but can have multiple
//                             assignees
//                         </p>
//                         <div className="block" style={{ display: 'flex' }}>
//                             <div className="block-left">
//                                 <i className="fa fa-bookmark" />
//                                 <i className="fa fa-arrow-up" />
//                             </div>
//                             <div className="block-right">
//                                 <div className="avatar-group" style={{ display: 'flex' }}>
//                                     <div className="avatar">
//                                         <img src={require("../../../assets/img/download (1).jfif")} alt="1" />
//                                     </div>
//                                     <div className="avatar">
//                                         <img src={require("../../../assets/img/download (2).jfif")} alt="1" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>
//                     <li className="list-group-item">
//                         <p>
//                             Each issue has a single reporter but can have multiple
//                             assignees
//                         </p>
//                         <div className="block" style={{ display: 'flex' }}>
//                             <div className="block-left">
//                                 <i className="fa fa-check-square" />
//                                 <i className="fa fa-arrow-up" />
//                             </div>
//                             <div className="block-right">
//                                 <div className="avatar-group" style={{ display: 'flex' }}>
//                                     <div className="avatar">
//                                         <img src={require("../../../assets/img/download (1).jfif")} alt="1" />
//                                     </div>
//                                     <div className="avatar">
//                                         <img src={require("../../../assets/img/download (2).jfif")} alt="1" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>
//                     <li className="list-group-item">Vestibulum at eros</li>
//                 </ul>
//             </div>
//             <div className="card" style={{ width: '17rem', height: '25rem' }}>
//                 <div className="card-header">
//                     SELECTED FOR DEVELOPMENT 2
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Cras justo odio</li>
//                     <li className="list-group-item">Dapibus ac facilisis in</li>
//                 </ul>
//             </div>
//             <div className="card" style={{ width: '17rem', height: '25rem' }}>
//                 <div className="card-header">
//                     IN PROGRESS 2
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Cras justo odio</li>
//                     <li className="list-group-item">Dapibus ac facilisis in</li>
//                 </ul>
//             </div>
//             <div className="card" style={{ width: '17rem', height: '25rem' }}>
//                 <div className="card-header">
//                     DONE 3
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Cras justo odio</li>
//                     <li className="list-group-item">Dapibus ac facilisis in</li>
//                     <li className="list-group-item">Vestibulum at eros</li>
//                 </ul>
//             </div>
//         </div>

//     )
// }
import React from 'react'
import { taskTypeService } from '../../../services/TaskTypeService'
import { useDispatch } from 'react-redux'
export default function ContentMain(props) {
    const dispatch = useDispatch();
    const { projectDetail } = props
    const renderCard = () => {
        return projectDetail.lstTask?.map((taskListDetail, index) => {

            return <div key={index} className="card" style={{ width: '17rem', height: 'auto' }}>
                <div className="card-header">
                    {taskListDetail.statusName}
                </div>
                <ul className="list-group list-group-flush">
                    {taskListDetail.lstTaskDeTail?.map((task, index) => {

                        return <li key={index} className="list-group-item" data-toggle="modal" onClick={() => {
                            dispatch({ type: "GET_TASK_DETAIL_SAGA", taskId: task.taskId })
                        }} data-target="#infoModal" style={{ cursor: 'pointer' }}>
                            <p >
                                {task.taskName}
                            </p>
                            <div className="block" style={{ display: 'flex' }}>
                                <div className="block-left">
                                    <p className='text-danger'>{task.priorityTask.priority}</p>
                                </div>
                                <div className="block-right">
                                    <div className="avatar-group" style={{ display: 'flex' }}>
                                        {task.assigness?.map((assignee, index) => {
                                            return <div key={index} className="avatar">
                                                <img src={assignee.avatar} alt={assignee.avatar} />
                                            </div>
                                        })}

                                    </div>
                                </div>
                            </div>
                        </li>

                    })}
                </ul>
            </div>

        })
    }
    return (
        <div className="content" style={{ display: 'flex' }}>
            {renderCard()}

        </div>


    )
}



// <div className="card" style={{ width: '17rem', height: '25rem' }}>
// <div className="card-header">
//     SELECTED FOR DEVELOPMENT 2
// </div>
// <ul className="list-group list-group-flush">
//     <li className="list-group-item">Cras justo odio</li>
//     <li className="list-group-item">Dapibus ac facilisis in</li>
// </ul>
// </div>
// <div className="card" style={{ width: '17rem', height: '25rem' }}>
// <div className="card-header">
//     IN PROGRESS 2
// </div>
// <ul className="list-group list-group-flush">
//     <li className="list-group-item">Cras justo odio</li>
//     <li className="list-group-item">Dapibus ac facilisis in</li>
// </ul>
// </div>
// <div className="card" style={{ width: '17rem', height: '25rem' }}>
// <div className="card-header">
//     DONE 3
// </div>
// <ul className="list-group list-group-flush">
//     <li className="list-group-item">Cras justo odio</li>
//     <li className="list-group-item">Dapibus ac facilisis in</li>
//     <li className="list-group-item">Vestibulum at eros</li>
// </ul>
// </div>