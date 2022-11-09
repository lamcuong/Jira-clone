// import React from 'react'

// export default function InfoMain() {
//     return (
//         <>
//             <div>
//                 <h3>Cyber Board</h3>
//                 <div className="info" style={{ display: 'flex' }}>
//                     <div className="search-block">
//                         <input className="search" />
//                         <i className="fa fa-search" />
//                     </div>
//                     <div className="avatar-group" style={{ display: 'flex' }}>
//                         <div className="avatar">
//                             <img src={require("../../../assets/img/download (1).jfif")} alt="1" />
//                         </div>
//                         <div className="avatar">
//                             <img src={require("../../../assets/img/download (2).jfif")} alt="1" />
//                         </div>
//                         <div className="avatar">
//                             <img src={require("../../../assets/img/download (3).jfif")} alt="1" />
//                         </div>
//                     </div>
//                     <div style={{ marginLeft: 20 }} className="text">Only My Issues</div>
//                     <div style={{ marginLeft: 20 }} className="text">Recently Updated</div>
//                 </div>
//             </div>

//         </>
//     )
// }
import React from 'react'
import HtmlParser from 'react-html-parser'
export default function InfoMain(props) {
    const { projectDetail } = props
    const renderAvatar = () => {
        return projectDetail.members?.map((item, index) => {
            return <div className='avatar' key={index}>
                <img src={item.avatar} alt={item.avatar} />
            </div>
        })

    }
    return (
        <>
            <h3>{projectDetail.projectName}</h3>
            {HtmlParser(projectDetail.description)}
            <div className="info" style={{ display: 'flex' }}>
                <div className="search-block">
                    <input className="search" />
                    <i className="fa fa-search" />
                </div>
                <div className="avatar-group" style={{ display: 'flex' }}>
                    {renderAvatar()}

                </div>
                <div style={{ marginLeft: 20 }} className="text">Only My Issues</div>
                <div style={{ marginLeft: 20 }} className="text">Recently Updated</div>
            </div>
        </>

    )
}