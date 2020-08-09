import React from 'react'
import {Formik} from 'formik'
import validationSchema from '../validation'

const initialValues= {
    name:'',
    email:''

}

const onSubmit= values=>{
    console.log('form data',values)
}


function newForm (){

   

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <form onSubmit={formik.handleSubmit}>
               <div className='form-control'>
                    <label htmlFor="name"> Name</label>
                    {/* passing the onchange and value prop to ensure the form fields are tracked in react by formik */}
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        {...formik.getFieldProps('name')}
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
                        {...formik.getFieldProps('email')}

                        />
                        {formik.touched.email && formik.errors.email? (
                            <div className='error'>{formik.errors.email}</div>
                        ):null}
                        </div>
                <button type="submit"> Submit </button>
            </form>
        </Formik>
    )
}

export default newForm