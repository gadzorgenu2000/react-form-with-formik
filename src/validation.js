
import * as Yup from 'yup'

const validationSchema= Yup.object({
    name:Yup.string().required('Required!'),
    email:Yup.string().email('Invalid email format').required('Required')
})
export default validationSchema