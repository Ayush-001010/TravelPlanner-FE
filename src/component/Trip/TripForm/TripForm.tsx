import React, { useEffect, useState } from 'react';
import type ITripForm from './ITripForm';
import { useTripContext, type ITripContext } from '../Trip';
import { useQuery } from '@tanstack/react-query';
import useTripActionHook from '../../../customHooks/useTripActionHook';
import type { FormField } from '../../../services/Interfaces/FormInterface';
import { Formik } from 'formik';

const TripForm: React.FC<ITripForm> = () => {
    const { openForm, formType } = useTripContext() as ITripContext;
    const { getOptions, getTripFormConfig } = useTripActionHook();
    const [formConfig, setFormConfig] = useState<Array<FormField>>([]);
    const [initialValues, setInitialValues] = useState<Record<string, any>>({});
    const [validationSchema, setValidationSchema] = useState<Record<string, any>>({});
    const placeQuery = useQuery({
        queryKey: ['trips'],
        queryFn: async () => {
            const options = await getOptions("Places");
            return options;
        }
    });

    useEffect(() => {
        const config = getTripFormConfig(formType);
        setFormConfig(config);
        const initialVals: Record<string, any> = {};
        const validationSch: Record<string, any> = {};
        config.forEach((field) => {
            initialVals[field.backendName] = '';
            validationSch[field.backendName] = field.validation;
        });
        setInitialValues(initialVals);
        setValidationSchema(validationSch);
    }, [formType]);


    return (
        <>
            {openForm && (
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(_) => {
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                {formConfig.map((field) => (
                                    <div key={field.backendName}>
                                        <label htmlFor={field.backendName}>{field.fieldName}</label>
                                        {field.fieldType === 'textarea' ? (
                                            <textarea
                                                id={field.backendName}
                                                name={field.backendName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values[field.backendName]}
                                            />
                                        ) : (
                                            <input
                                                type={field.fieldType}
                                                id={field.backendName}
                                                name={field.backendName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values[field.backendName]}
                                            />
                                        )}
                                        {errors[field.backendName] && touched[field.backendName] && (
                                            <div>{errors[field.backendName] as string}</div>
                                        )}
                                    </div>
                                ))}
                                <button type="submit">Submit</button>
                            </form>
                        )}
                    </Formik>
                </div>
            )}
        </>
    )
};

export default TripForm;