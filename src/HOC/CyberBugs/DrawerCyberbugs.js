import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function DrawerCyberbugs() {
    const { visible, ComponentContentDrawer, callBackSubmit, title } = useSelector(state => state.DrawerCyberbugsReducer)
    const dispatch = useDispatch()
    const showDrawer = () => {
        dispatch({
            type: "SHOW_DRAWER"
        })
    };
    const onClose = () => {
        dispatch({
            type: "CLOSE_DRAWER"
        })
    };
    return (

        <>

            <Drawer
                title={title}
                width={720}
                onClose={onClose}
                open={visible}
                bodyStyle={{
                    paddingBottom: 80,
                }}
                footer={
                    <div className='text-right'>
                        <Space>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={callBackSubmit} type="primary">
                                Submit
                            </Button>
                        </Space>
                    </div>
                }
            >
                {ComponentContentDrawer}
            </Drawer>
        </>
    )
}
