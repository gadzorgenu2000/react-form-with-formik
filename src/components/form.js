import React from 'react'
import {useFormik} from 'formik'
import validationSchema from '../validation'

const initialValues= {
    name:'',
    email:''

}

const onSubmit= values=>{
    console.log('form data',values)
}


function Form (){
    //using the useFormik Hook
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
               <div className='form-control'>
                    <label htmlFor="name"> Name</label>
                    {/* passing the onchange and value prop to ensure the form fields are tracked in react by formik */}
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name? (
                            <div className='error'>{formik.errors.name}</div>
                            ):null}
                        </div>
               <div className='form-control'>
                    <label htmlFor="email"> Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email? (
                            <div className='error'>{formik.errors.email}</div>
                        ):null}
                        </div>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default Form