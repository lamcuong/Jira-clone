import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachDo(props) {
    const danhSachTab = useSelector(state => state.BaiTapDressingRoomReducer.navPills)
    const danhSachDo = useSelector(state => state.BaiTapDressingRoomReducer.tabPanes)
    const dispatch = useDispatch()


    const renderDanhSachTab = () => {
        return danhSachTab.filter(item => item.tabName !== "tabTopClothes").map((item, index) => {
            return <li className="nav-item" key={index}>
                <a className="nav-link   btn-default" data-toggle="pill" href={`#${item.tabName}`}>{item.showName}</a>
            </li>
        })
    }

    const renderDanhSachDo = (type) => {
        return danhSachDo.map((item, index) => {
            if (item.type === type) {
                return <div className="col-md-3" key={index}>
                    <div className="card text-center">
                        <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
                        <h4><b>{item.name}</b></h4>
                        <button onClick={() => {
                            dispatch({
                                type: "THU_DO",
                                item
                            })
                        }}>Thử đồ</button>
                    </div>
                </div>
            }
        })

    }
    const renderTabPanes = () => {

        return danhSachTab.filter(item => item.tabName !== "tabTopClothes").map((item, index) => {
            return <div className="tab-pane container fade" key={index} id={item.tabName}>
                <div className="container">
                    <div className="row">
                        {renderDanhSachDo(item.type)}
                    </div>
                </div>
            </div>
        })

    }
    return (
        <div>
            <ul className='nav nav-pills'>
                <li className="nav-item" type="topclothes" >
                    <a className="nav-link active  btn-default" data-toggle="pill" href={`#${danhSachTab[0].tabName}`}>Áo</a>
                </li>
                {renderDanhSachTab()}
            </ul>
            <div className="well">
                <div className="tab-content">
                    <div className="tab-pane container active" id="tabTopClothes">
                        <div className="container">
                            <div className="row">
                                {renderDanhSachDo('topclothes')}
                            </div>
                        </div>
                    </div>
                    {renderTabPanes()}
                </div>
            </div>



        </div >

    )
}
