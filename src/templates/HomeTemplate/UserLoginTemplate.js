import React from 'react';
import { Route } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { useEffect, useState } from 'react';

const { Header, Footer, Sider, Content } = Layout;







export const UserLoginTemplate = (props) => {
    const [{ width, height }, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        window.onresize = () => {
            setSize({
                width: Math.round(window.innerWidth),
                height: Math.round(window.innerHeight)
            })
        }

    }, [])
    let { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Layout>
                <Sider width={width / 2} style={{ height: height, backgroundImage: `url(https://picsum.photos/${Math.round(width / 2)}/${height})`, backgroundSize: '100%' }}>

                </Sider>
                <Content>
                    <Component {...propsRoute} />
                </Content>
            </Layout>

        </>
    }} />

}








