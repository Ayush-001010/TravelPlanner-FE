import * as Yup from 'yup';
import type { FormField } from './Interfaces/FormInterface';


const mobileRegex = /^\d{10}$/;

const SignUpConfig: Array<FormField> = [
    {
        fieldName: 'Name',
        backendName: 'name',
        fieldType: 'text',
        validation: Yup.string().trim().required('Name is required'),
    },
    {
        fieldName: 'Email',
        backendName: 'email',
        fieldType: 'email',
        validation: Yup.string().trim().email('Invalid email').required('Email is required'),
    },
    {
        fieldName: 'Mobile Number',
        backendName: 'mobileNumber',
        fieldType: 'mobileNumber',
        validation: Yup.string()
            .matches(mobileRegex, 'Enter a valid 10 digit mobile number')
            .required('Mobile number is required'),
    },
    {
        fieldName: 'Password',
        backendName: 'password',
        fieldType: 'password',
        validation: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    },
    {
        fieldName: 'Confirm Password',
        backendName: 'confirmPassword',
        fieldType: 'password',
        // must match password (backend name 'password')
        validation: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm password is required'),
    },
    {
        fieldName: 'About',
        backendName: 'about',
        fieldType: 'textarea',
        validation: Yup.string().max(500, 'About cannot exceed 500 characters').notRequired(),
    },
];

export default SignUpConfig;
