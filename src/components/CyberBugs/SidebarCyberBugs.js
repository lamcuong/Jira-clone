import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    BarsOutlined,
    PlusCircleOutlined,
    SearchOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormCreateTask from '../Forms/FormCreateTask/FormCreateTask';

const { Header, Sider, Content } = Layout;

export default function SidebarCyberBugs() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    return (
        <div>

            <Sider style={{ height: "100%" }} trigger={null} collapsible collapsed={collapsed}>
                <div className='text-right p-2'><BarsOutlined onClick={() => { setCollapsed(!collapsed) }} style={{ color: '#fff', fontSize: 20 }} /></div>

                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                // defaultSelectedKeys={['1']}

                // items={[
                //     {
                //         key: '1',
                //         icon: <PlusCircleOutlined />,
                //         label: 'Create Task',
                //     },
                //     {
                //         key: '2',
                //         icon: <SearchOutlined />,
                //         label: 'Search',

                //     },

                // ]}
                >
                    <Menu.Item onClick={() => {
                        dispatch({
                            type: "OPEN_FORM_CREATE_TASK",
                            title: 'Create Task',
                            componentContent: <FormCreateTask />
                        })
                    }} key="1" icon={<PlusCircleOutlined />}>
                        <span>Create Task</span>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SearchOutlined />} >
                        <span>Search</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>



    )
}

