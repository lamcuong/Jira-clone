import React from 'react'
import DanhSachTab from './DanhSachTab'

import "./DressingRoom.css"
import Model from './Model'

export default function BaiTapDressingRoom() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="text-center">
                            <img src="./images/cybersoft.png" alt="Cardimage" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-center">
                                CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                                - Virtual Dressing Room
                            </h4>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <DanhSachTab />

                </div>
                <div className='col-4'>

                    <Model />


                </div>
            </div>

        </div>
    )
}
