import React from 'react'
import { Button, Input } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, TwitterOutlined, FacebookFilled, } from '@ant-design/icons';
import { withFormik } from 'formik';
import * as Yup from 'yup'

import { USER_SIGNIN_API } from '../../../redux/constants/CyberBugs/Cyberbugs';
import { connect } from 'react-redux'
import { signinCyberbugAction } from '../../../redux/actions/CyberBugsAction';



function LoginCyberBugs(props) {
    // console.log(props)
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (
        <form onSubmit={handleSubmit} className="container" style={{ height: window.innerHeight }}>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: window.innerHeight }}>
                <h3>Login CyberBugs</h3>

                <div className='mt-3 '>
                    <Input onChange={handleChange} name="email" style={{ width: '100%', minWidth: '400px' }} size="large" placeholder="email" prefix={<UserOutlined />} />
                </div>
                <div className='text-danger'>{errors.email}</div>
                <div className='mt-3'>
                    <Input type='password' onChange={handleChange} name="password" style={{ width: '100%', minWidth: '400px' }} size="large" placeholder="password" prefix={<UserOutlined />} />

                </div>
                <div className='text-danger'>{errors.password}</div>
                <Button htmlType='submit' className='mt-5' size='large' style={{ minWidth: "400px", backgroundColor: 'rgb(102,117,223)', color: "#fff" }} >Login</Button>
                <div className='social mt-3 d-flex'>
                    <Button style={{ backgroundColor: 'rgb(59,89,152)', color: "#fff" }} size="large" shape="circle" icon={<FacebookFilled />}>
                    </Button>
                    <Button className='ml-4' type='primary' shape="circle" size="large" icon={<TwitterOutlined />}></Button>
                </div>


            </div>

        </form >

    )
}

const LoginCyberBugsWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email is required!").email('Email is invalid!'),
        password: Yup.string().min(6, 'password is 6-32 character!').max(32, "password is 6-32 character!")
    }),


    handleSubmit: ({ email, password }, { props, setSubmitting }) => {


        props.dispatch(signinCyberbugAction(email, password));



    },


    displayName: 'Login CyberBugs',
})(LoginCyberBugs);



export default connect()(LoginCyberBugsWithFormik);