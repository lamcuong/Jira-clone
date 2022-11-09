import React from 'react'
import { Button, Popconfirm, Space, Table, Tag, Avatar, Popover, AutoComplete } from 'antd';
import { useState, useRef } from 'react';
import ReactHtmlParser from 'react-html-parser'
import { EditOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FormEditProject from '../../../components/Forms/FormEditProject/FormEditProject';
import { NavLink } from 'react-router-dom';

const data = [
    {
        "id": 1,
        "projectName": "Web jira",
        "description": "web quản lý task dự án",
        "categoryId": 1,
        "alias": "web-jira",
        "deleted": false
    },
    {
        "id": 2,
        "projectName": "App jira",
        "description": "app quản lý task dự án",
        "categoryId": 3,
        "alias": "app-jira",
        "deleted": false
    },
    {
        "id": 3,
        "projectName": "Phần mềm jira",
        "description": "phần mềm quản lý công việc",
        "categoryId": 2,
        "alias": "phan-mem-jira",
        "deleted": false
    },
    {
        "id": 4,
        "projectName": "string",
        "description": "string",
        "categoryId": 1,
        "alias": "string",
        "deleted": false
    },
    {
        "id": 5,
        "projectName": "project name",
        "description": "<p>adskajdksjahd</p>",
        "categoryId": 2,
        "alias": "project-name",
        "deleted": false
    },
    {
        "id": 6,
        "projectName": "newproject123",
        "description": "<p>dsadsada</p>",
        "categoryId": 1,
        "alias": "newproject123",
        "deleted": false
    },
    {
        "id": 7,
        "projectName": "thoa",
        "description": "<p>front end remote</p>",
        "categoryId": 1,
        "alias": "thoa",
        "deleted": false
    },
    {
        "id": 8,
        "projectName": "alice",
        "description": "<p>test post</p>",
        "categoryId": 1,
        "alias": "alice",
        "deleted": false
    },
    {
        "id": 9,
        "projectName": "alice nguyen",
        "description": "<p>323</p>",
        "categoryId": 1,
        "alias": "alice-nguyen",
        "deleted": false
    },
    {
        "id": 10,
        "projectName": "truc ng",
        "description": "<p>react</p>",
        "categoryId": 1,
        "alias": "truc-ng",
        "deleted": false
    },
    {
        "id": 11,
        "projectName": "nguyen phuc loc ",
        "description": "<p>react</p>",
        "categoryId": 1,
        "alias": "nguyen-phuc-loc",
        "deleted": false
    },
    {
        "id": 12,
        "projectName": "",
        "description": "",
        "categoryId": 1,
        "alias": "",
        "deleted": false
    },
    {
        "id": 13,
        "projectName": "dfs",
        "description": "<p>dfa</p>",
        "categoryId": 1,
        "alias": "dfs",
        "deleted": false
    },
    {
        "id": 14,
        "projectName": "alice ng thanh",
        "description": "<p>react create cyberbugs</p>",
        "categoryId": 1,
        "alias": "alice-ng-thanh",
        "deleted": false
    },
    {
        "id": 15,
        "projectName": "newproject123456",
        "description": "<p>123321321</p>",
        "categoryId": 2,
        "alias": "newproject123456",
        "deleted": false
    }
];
export default function ProjectManagement() {
    const { userSearch } = useSelector(state => state.UserCyberbugsReducer)
    const [value, setValue] = useState('')
    const searchRef = useRef(null)

    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {

        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'age',
        });
    };
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: (item2, item1) => {
                return item2.id - item1.id
            },
            sortDirections: ['descend']

        },
        {
            title: 'ProjectName',
            dataIndex: 'projectName',
            key: 'projectName',
            render: (text, record, index) => {

                return <NavLink to={`projectdetail/${record.id}`}> {text} </NavLink>
            },
            sorter: (item2, item1) => {
                let projectName1 = item1.projectName.trim().toLowerCase();
                let projectName2 = item2.projectName.trim().toLowerCase();
                if (projectName2 < projectName1) {
                    return -1
                } else {
                    return 1
                }
            },
            // sortDirections: ['descend']
        },
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     key: 'description',
        //     render: (text, record, index) => {
        //         let jsxContent = ReactHtmlParser(text)

        //         return <div key={index}>
        //             {jsxContent}
        //         </div>
        //     }

        // },
        {
            title: 'Category',
            dataIndex: 'categoryName',
            key: 'categoryName',
            // render: (text, record, index) => {
            //     let jsxContent = ReactHtmlParser(text)

            //     return <div key={index}>
            //         {jsxContent}
            //     </div>
            // }

            sorter: (item2, item1) => {
                let categoryName1 = item1.categoryName.trim().toLowerCase();
                let categoryName2 = item2.categoryName.trim().toLowerCase();
                if (categoryName2 < categoryName1) {
                    return -1
                } else {
                    return 1
                }
            },
        },
        {
            title: 'Creator',

            key: 'creator',
            render: (text, record, index) => {
                return <Tag color="green">{record.creator?.name}</Tag>
            },
            sorter: (item2, item1) => {
                let creator1 = item1.creator?.name.trim().toLowerCase();
                let creator2 = item2.creator?.name.trim().toLowerCase();
                if (creator2 < creator1) {
                    return -1
                } else {
                    return 1
                }
            },
            // sortDirections: ['descend']
        },
        {
            title: 'members',

            key: 'members',
            render: (text, record, index) => {

                return <div>
                    {record.members?.slice(0, 3).map((members, index) => {


                        return <Popover key={index} placement="top" title={'Remove user'} content={() => {
                            return <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {record.members?.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.userId}</td>
                                            <td><img style={{ width: "50%" }} src={item.avatar} alt={item.avatar} /></td>
                                            <td>{item.name}</td>
                                            <td><button onClick={() => {
                                                dispatch({
                                                    type: 'REMOVE_USER_FROM_PROJECT_SAGA',
                                                    userProject: {
                                                        'userId': item.userId,
                                                        'projectID': record.id
                                                    }
                                                })
                                            }} className='btn btn-danger'>X</button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>

                        }} trigger="click">
                            <Avatar key={index} src={members.avatar} />
                        </Popover>


                    })}

                    {record.members?.length > 3 ? <Avatar>...</Avatar> : ''}

                    <Popover placement="rightTop" title={"Add user"} content={() => {
                        return <AutoComplete

                            options={userSearch?.map((user, index) => {
                                return { label: user.name, value: user.userId.toString() }
                            })}

                            value={value}
                            onChange={(text) => {
                                setValue(text)
                                console.log(record)
                            }}
                            onSelect={(value, option) => {
                                setValue(option.label)
                                dispatch({
                                    type: 'ASSIGN_USER_PROJECT_SAGA',
                                    userProject: {
                                        'projectId': record.id,
                                        'userId': option.value
                                    }

                                })
                            }}
                            style={{ width: '100%' }} onSearch={(value) => {
                                if (searchRef.current) {
                                    clearTimeout(searchRef.current)
                                }

                                searchRef.current = setTimeout(() => {
                                    dispatch({
                                        type: 'GET_USER_API',
                                        keyword: value
                                    })
                                }, 300)


                            }} />
                    }} trigger="click">
                        <Button style={{ borderRadius: '50%' }}>+</Button>
                    </Popover>


                </div >

            },


        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => {
                return <div>
                    <button onClick={(() => {

                        dispatch({
                            type: "OPEN_FORM_EDIT_PROJECT",
                            title: 'Edit Project',
                            componentContent: <FormEditProject />
                        })
                        dispatch({ type: 'EDIT_PROJECT', projectEdit: record })
                    })} className="btn mr-2 btn-primary">
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => {
                            dispatch({ type: "DELETE_PROJECT_SAGA", idProject: record.id })

                        }}

                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-danger">
                            <DeleteOutlined style={{ fontSize: 17 }} />
                        </button>
                    </Popconfirm>

                </div>
            }


        },

    ];
    const projectList = useSelector(state => state.ProjectCyberBugsReducer.projectList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "GET_ALL_LIST_PROJECT_SAGA"
        })
    }, [])
    return (
        <div className='container-fluid m-5'>
            <h3>Project Management</h3>

            <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table columns={columns} rowKey={'id'} dataSource={projectList} onChange={handleChange} />
        </div>
    )
}
