import * as Yup from 'yup';

export type FieldType = 'text' | 'email' | 'mobileNumber' | 'textarea' | 'password';

export interface FormField {
    fieldName: string;
    backendName: string;
    validation: Yup.AnySchema;
    fieldType: FieldType;
}
