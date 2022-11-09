import { Editor } from '@tinymce/tinymce-react'
import { Select, Slider } from 'antd';
import { withFormik } from 'formik';
import * as Yup from 'yup'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux';
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function FormCreateTask(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
    } = props;
    const [timeTracking, setTimetracking] = useState({
        timeSpent: '0',
        timeRemaining: '0'
    })
    const dispatch = useDispatch()
    const { arrProject } = useSelector(state => state.ProjectCyberBugsReducer)
    const { arrTaskType } = useSelector(state => state.TaskTypeReducer)
    const { arrPriority } = useSelector(state => state.PriorityReducer)
    const { arrUser } = useSelector(state => state.UserCyberbugsReducer)
    const { arrStatus } = useSelector(state => state.StatusReducer)
    const userOptions = arrUser?.map((item, index) => {
        return { value: item.userId, label: item.name }
    })
    const [size, setSize] = useState('middle');
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const editorRef = useRef(null);



    useEffect(() => {
        dispatch({ type: "GET_ALL_PROJECT_TASK_SAGA" });
        dispatch({ type: "GET_ALL_STATUS_SAGA" })
        dispatch({ type: "GET_TASK_TYPE_SAGA" });
        dispatch({ type: "GET_PRIORITY_SAGA" });
        dispatch({ type: "GET_USER_API", keyword: '' })
        dispatch({ type: "SET_SUBMIT_FUNCTION", submitFunction: handleSubmit })

    }, [])

    return (

        <form onSubmit={handleSubmit} className='container'>
            <div className='form-group'>
                <p>Project</p>
                <select name='projectId' className='form-control' onChange={(e) => {

                    dispatch({
                        type: "GET_USER_BY_PROJECT_ID_SAGA",
                        projectId: e.target.value

                    })

                    setFieldValue('projectId', e.target.value)
                }}>
                    {arrProject.map((project, index) => {
                        return <option key={index} value={project.id}>{project.projectName}</option>
                    })}
                </select>
            </div>
            <div className='form-group'>
                <p>Task name</p>
                <input name='taskName' className='form-control' onChange={handleChange}></input>
            </div>
            <div className='form-group'>
                <p>Status</p>
                <select name='statusId' className='form-control' onChange={handleChange}>
                    {arrStatus.map((status, index) => {
                        return <option key={index} value={status.statusId}>{status.statusName}</option>
                    })}
                </select>
            </div>
            <div className='form-group'>
                <div className='row'>
                    <div className='col-6'>
                        <p>Priority</p>
                        <select onChange={handleChange} name='priorityId' className='form-control'>
                            {arrPriority.map((priority, index) => {
                                return <option key={index} value={priority.priorityId}>{priority.priority}</option>
                            })}
                        </select>
                    </div>
                    <div className='col-6'>
                        <p>Task type</p>
                        <select onChange={handleChange} name='typeId' className='form-control'>
                            {arrTaskType.map((taskType, index) => {
                                return <option key={index} value={taskType.id}>{taskType.taskType}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className='form-group'>
                <div className='row'>
                    <div className='col-6'>
                        <p>Assignees</p>
                        <Select
                            mode="multiple"
                            size={size}
                            options={userOptions}
                            placeholder="Please select"

                            onChange={(values) => {
                                setFieldValue('listUserAsign', values)
                            }}
                            optionFilterProp='label'
                            style={{ width: '100%' }}
                            onSelect={(value) => {
                                console.log(value)
                            }}
                        >
                            {children}
                        </Select>
                    </div>
                    <div className='col-6'>
                        <p>Time Tracking</p>
                        <Slider defaultValue={30} value={timeTracking.timeSpent} max={Number(timeTracking.timeSpent) + Number(timeTracking.timeRemaining)} tooltip={{ open: true }} />
                        <div className='row'>
                            <span className='col-6 font-weight-bold text-left'>{timeTracking.timeSpent}h logged</span>
                            <span className='col-6 font-weight-bold text-right'>{timeTracking.timeRemaining}h remaining</span>
                        </div>
                    </div>

                </div>



            </div>
            <div className='form-group'>
                <div className='row'>
                    <div className='col-6'>
                        <p> Original Estimate</p>
                        <input type='number' min='0' defaultValue='0' className='form-control'></input>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <p>Time Spent</p>
                                <input onChange={(e) => {

                                    setTimetracking({
                                        ...timeTracking,
                                        timeSpent: e.target.value,

                                    });
                                    setFieldValue('timeTrackingSpent', e.target.value)
                                }} className='form-control' type='number' min='0' defaultValue='0'></input>
                            </div>
                            <div className='col-6'>
                                <p>Time Remaining</p>
                                <input onChange={(e) => {

                                    setTimetracking({
                                        ...timeTracking,
                                        timeRemaining: e.target.value,

                                    })
                                    setFieldValue('timeTrackingRemaining', e.target.value)
                                }} className='form-control' type='number' min='0' defaultValue='0'></input>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='form-group'>
                <p >Description</p>
                <Editor
                    apiKey='your-api-key'
                    onInit={(evt, editor) => editorRef.current = editor}
                    name="description"
                    // initialValue={values.description}
                    // value={values.description}
                    init={{

                        height: 500,

                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={(content, editor) => {
                        setFieldValue('description', content)
                    }}
                />



            </div>
            {/* <button type='submit'>submit</button> */}
        </form>
    )
}
const frmCreateTask = withFormik({
    enableReinitialize: true,

    mapPropsToValues: (props) => {

        return {
            listUserAsign: [],
            taskName: '',
            description: '',
            statusId: props.arrStatus[0]?.statusId,
            originalEstimate: 0,
            timeTrackingSpent: 0,
            timeTrackingRemaining: 0,
            projectId: props.arrProject[0]?.id,
            typeId: props.arrTaskType[0]?.id,
            priorityId: props.arrPriority[0]?.priorityId

        }

    },
    validationSchema: Yup.object().shape({

    }),


    handleSubmit: (values, { props, setSubmitting }) => {
        console.log('values', values)
        props.dispatch({
            type: "CREATE_TASK_SAGA",
            taskObject: values
        })
        setSubmitting(false)


    },


    displayName: 'FormCreateTask',
})(FormCreateTask);

const mapStateToProps = (state) => {
    return {
        arrProject: state.ProjectCyberBugsReducer.arrProject,
        arrTaskType: state.TaskTypeReducer.arrTaskType,
        arrPriority: state.PriorityReducer.arrPriority,

        arrStatus: state.StatusReducer.arrStatus,
    }
}

export default connect(mapStateToProps)(frmCreateTask)