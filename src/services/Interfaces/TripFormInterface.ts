import * as Yup from 'yup';
import type { IOptionsInterface } from './CommonInterface';

export interface ITripFormInterface {
    fieldName: string;
    displayName: string;
    type:  "text" | "textarea" | "tripPurpose" | "tripType" | "start-end-date"
    validation?: Yup.AnySchema;
    options?: Array<IOptionsInterface>;
}