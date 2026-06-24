import * as Yup from 'yup';

export type FieldType = 'text' | 'email' | 'mobileNumber' | 'textarea' | 'password' | "datetime-local" | "select";

export interface FormField {
    fieldName: string;
    backendName: string;
    validation: Yup.AnySchema;
    fieldType: FieldType;
    placeholder?: string;
}
