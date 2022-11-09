
import { Editor } from '@tinymce/tinymce-react'
import { withFormik } from 'formik';
import React, { useEffect, useRef } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup'
import { GET_ALL_PROJECT_CATEGORY_SAGA } from '../../../redux/constants/CyberBugs/Cyberbugs';

function FormEditProject(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
    } = props;

    // const handleEditorChange = (content, editor) => {
    //     setFieldValue('description', content)
    // }

    const arrProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory)
    const dispatch = useDispatch()
    const editorRef = useRef(null);
    useEffect(() => {


        dispatch({
            type: GET_ALL_PROJECT_CATEGORY_SAGA,
        })

        dispatch({ type: "SET_SUBMIT_FORM_EDITOR", submitFunction: handleSubmit })

    }, [])
    return (
        <form onSubmit={handleSubmit} className='container-fluid'>
            <div className='row'>
                <div className='col-4'>
                    <div className='form-group'>
                        <p className='font-weight-bold'>Project id</p>
                        <input value={values.id} name='id' disabled className='form-control'></input>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='form-group'>
                        <p className='font-weight-bold'>Project name</p>
                        <input onChange={handleChange} name="projectName" value={values.projectName} className='form-control'></input>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='form-group'>
                        <p className='font-weight-bold'>Project Category</p>
                        <select name='categoryId' onChange={handleChange} value={values.categoryId} className='form-control'>
                            {arrProjectCategory.map((item, index) => {
                                return <option value={item.id} key={index}>{item.projectCategoryName}</option>
                            })}
                        </select>

                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <p className='font-weight-bold'>Description</p>
                        <Editor
                            apiKey='your-api-key'
                            onInit={(evt, editor) => editorRef.current = editor}
                            name="description123"
                            initialValue={values.description}
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
                            onEditorChange={(newValue, editor) => values.description = newValue}
                        />



                    </div>
                </div>
            </div>

        </form>
    )
}
const EditProjectForm = withFormik({
    enableReinitialize: true,

    mapPropsToValues: (props) => {
        const { projectEdit } = props
        return {
            id: projectEdit?.id,
            projectName: projectEdit.projectName,
            description: projectEdit.description,
            categoryId: projectEdit.categoryId
        }

    },
    validationSchema: Yup.object().shape({

    }),


    handleSubmit: (values, { props, setSubmitting }) => {

        props.dispatch({ type: 'UPDATE_PROJECT_SAGA', projectUpdate: values })
        console.log(values)


    },


    displayName: 'FormEditProject',
})(FormEditProject);

const mapStateToProps = state => {
    return {
        projectEdit: state.ProjectReducer.projectEdit
    }
}

export default connect(mapStateToProps)(EditProjectForm);