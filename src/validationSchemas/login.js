import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid e-mail address')
        .required('E-mail is required'),
    password: yup
        .string()
        .min(5, 'Too short!')
        .max(15, 'Too long!')
        .required('Pasword is required'),
})



// Unable to resolve "yup"
// npm i yup@0.24.1
// Arreglo rapido: npm add @babel/runtime