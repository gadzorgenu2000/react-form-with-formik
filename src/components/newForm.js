import React from 'react'
import { Formik, Form , Field, FieldArray ,ErrorMessage} from 'formik'
import validationSchema from '../validation'
import TextError from './textError'

const initialValues= {
    name:'',
    email:'',
    address:'',
    phone:['',''],
    message:'',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNumbers:['']

}

const onSubmit= values=>{
    console.log('form data',values)
}


function NewForm (){
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
               <div className='form-control'>
                    <label htmlFor="name"> Name</label>
                    <Field  type="text"  id="name"  name="name" 
                      />
                </div>
               <div className='form-control'>
                    <label htmlFor="email"> Email</label>
                    <Field type="email" id="email" name="email"/>
               </div>
               <div className='form-control'>
                    <label htmlFor="message"> Message</label>
                    <Field as="textarea" id="address" name="address"/>
               </div>
               <div className='form-control'>
                    <label htmlFor="facebook">  Facebook</label>
                    <Field type="text" id="facebook" name="social.facebook"/>
               </div>
               <div className='form-control'>
                    <label htmlFor="twitter">  Twitter</label>
                    <Field type="text" id="twitter" name="social.twitter"/>
               </div>    
               <div className='form-control'>
                    <label htmlFor="address">  Address</label>
                    <Field type="text" name="address"/>
               </div>
               <div className='form-control'>
                    <label htmlFor="primaryPh">Primary Phone Number</label>
                    <Field type="text" id="primaryPh" name="phone[0]"/>
               <ErrorMessage name='phone'/>
               </div> <div className='form-control'>
                    <label htmlFor="secondaryPh">Secondary Phone Number</label>
                    <Field type="text" id="secondaryPh" name="phone[1]"/>
               <ErrorMessage name='phone'/>
               </div> 
               <div className='form-control'>
                    <label htmlFor="secondaryPh">List of phone numbers</label>
                    <FieldArray name='phoneNumbers'>
                        {(fieldArrayProps)=>{
                            const {push, remove, form}= fieldArrayProps
                            const {values}=form
                            const {phoneNumbers}= values
                            console.log('fieldArrayProp', fieldArrayProps)
                            return <div>
                                {
                                    phoneNumbers.map((number,index) =>(
                                        <div key={index}>
                                            <Field name={`phoneNumbers[${index}]`}/>
                                            {
                                                index> 0 &&
                                            <button type='button' onClick={()=>remove(index)}>-</button>
                                            }
                                            <button type='button' onClick={()=>push('')}>+</button>
                                        </div>
                                    ))
                                }
                            </div>
                        }}
                    </FieldArray>
               </div> 
                <button type="submit"> Submit </button>
            </Form>
        </Formik>
    )
}

export default NewForm