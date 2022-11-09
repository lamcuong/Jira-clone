import React, { useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useDispatch, useSelector, connect } from 'react-redux';
import { GET_ALL_PROJECT_CATEGORY_SAGA } from '../../../redux/constants/CyberBugs/Cyberbugs';
import { withFormik } from 'formik';
import * as Yup from 'yup'

function CreateProject(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
    } = props;

    const handleEditorChange = (content, editor) => {

        setFieldValue('description', content)
    }
    const dispatch = useDispatch()


    const arrProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory)
    useEffect(() => {
        dispatch({
            type: GET_ALL_PROJECT_CATEGORY_SAGA
        })
    }, [])


    return (
        <div className='container m-5'>
            <h1>Create Project</h1>
            <form onSubmit={handleSubmit} className='container' onChange={handleChange}>
                <div className='form-group'>
                    <p>Name</p>
                    <input className='form-control' name="projectName"></input>
                </div>
                <div className='form-group'>
                    <p>Description</p>
                    <Editor
                        name="description"

                        initialValue=""
                        init={{
                            height: 500,
                            selector: 'textarea#myTextArea',
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
                        onEditorChange={handleEditorChange}
                    />

                </div>
                <div className='form-group'>
                    <select name="categoryId" className='form-control' onChange={handleChange}>
                        {arrProjectCategory.map((item, index) => {
                            return <option key={index} value={item.id} >{item.projectCategoryName} </option>
                        })}
                    </select>
                </div>
                <button className='btn btn-outline-primary' type='submit'  >Create project</button>
            </form>
        </div>
    )
}
const CreateProjectWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        projectName: '',
        description: '',
        categoryId: props.arrProjectCategory[0]?.id
    }),
    validationSchema: Yup.object().shape({

    }),


    handleSubmit: (values, { props, setSubmitting }) => {
        // console.log('values', values)
        props.dispatch({
            type: "CREATE_PROJECT_SAGA",
            newProject: values
        })




    },


    displayName: 'CreateProjectFormik',
})(CreateProject);

const mapStateToProps = state => {
    return {
        arrProjectCategory: state.ProjectCategoryReducer.arrProjectCategory
    }
}

export default connect(mapStateToProps)(CreateProjectWithFormik);