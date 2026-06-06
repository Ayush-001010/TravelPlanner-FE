import * as Yup from 'yup';
import type { FormField } from './Interfaces/FormInterface';


const SignInConfig: Array<FormField> = [
    {
        fieldName: 'Email',
        backendName: 'email',
        fieldType: 'email',
        validation: Yup.string().trim().email('Invalid email').required('Email is required'),
    },
    {
        fieldName: 'Password',
        backendName: 'password',
        fieldType: 'password',
        validation: Yup.string().required('Password is required'),
    },
];

export default SignInConfig;
