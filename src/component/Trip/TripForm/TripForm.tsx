import React, { useCallback, useEffect, useState } from 'react';
import type ITripForm from './ITripForm';
import { useTripContext, type ITripContext } from '../Trip';
import { useQuery } from '@tanstack/react-query';
import useTripActionHook from '../../../customHooks/useTripActionHook';
import type { FormField } from '../../../services/Interfaces/FormInterface';
import { Formik } from 'formik';
import Header from './Header/Header';
import Label from './Label/Label';
import { Button, DatePicker, Input, Select } from 'antd';
import type { IOptionsInterface } from '../../../services/Interfaces/CommonInterface';
import Error from './Error/Error';
import * as Yup from 'yup';

const TripForm: React.FC<ITripForm> = () => {
    const { openForm, formType , addNewItenary} = useTripContext() as ITripContext;
    const { getOptions, getTripFormConfig  } = useTripActionHook();
    const [formConfig, setFormConfig] = useState<Array<FormField>>([]);
    const [initialValues, setInitialValues] = useState<Record<string, any>>({});
    const [validationSchema, setValidationSchema] = useState<Record<string, any>>({});
    const [options, setOptions] = useState<Record<string, Array<IOptionsInterface>>>({});

    const submitHandler = (values : any) => {
        switch (formType) {
            case "Places": {
                addNewItenary(values);
                break;
            }
            default: break;
        }
    }

    const placeQuery = useQuery({
        queryKey: ['trips'],
        queryFn: async () => {
            const options = await getOptions("Places");
            return options;
        }
    });

    const genratedOptions = useCallback(() => {
        switch (formType) {
            case "Places": {
                if (placeQuery.data) {
                    const { data } = placeQuery;
                    const placeOptions = data.data.map((place: any) => ({
                        label: place.Place_Name,
                        value: place.Place_Name
                    }));
                    return { placeName: placeOptions };
                }
                return { placeName: [] };
            }
            default: return { placeName: [] };
        }
    }, [placeQuery.data, formType]);

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

    useEffect(() => {
        const generatedOpts = genratedOptions();
        setOptions(generatedOpts);
    }, [placeQuery.data]);

    return (
        <>
            {openForm && (
                <div className="p-4 absolute bottom-4 right-4 bg-[#353535] shadow-2xl shadow-[#dee2e6] rounded-lg">
                    <Header />
                    <Formik initialValues={initialValues} validationSchema={Yup.object().shape(validationSchema)} onSubmit={submitHandler}>
                        {({ values, errors, touched  , setFieldValue , setFieldTouched, handleSubmit }) => (
                            <form onSubmit={handleSubmit} className="mt-2">
                                {formConfig.map((field: FormField) => {
                                    const { fieldName, fieldType, placeholder, backendName } = field;
                                    switch (fieldType) {
                                        case "select": return (
                                            <div className="mb-2">
                                                <Label title={fieldName} />
                                                <Select value={values[backendName]} onChange={(value) => setFieldValue(backendName, value)} onBlur={() => setFieldTouched(backendName, true)} options={options[backendName] || []} placeholder={placeholder} className="border bg-[#dee2e6] shadow-lg rounded-lg h-10 w-full " />
                                                {(errors[backendName] && touched[backendName]) && (
                                                    <Error errorMessage={errors[backendName] as string} />
                                                )}
                                            </div>
                                        )
                                        case "datetime-local": return (
                                            <div className="mb-2">
                                                <Label title={fieldName} />
                                                <DatePicker value={values[backendName]} onChange={(value) => setFieldValue(backendName, value)} onBlur={() => setFieldTouched(backendName, true)} showTime className="w-full" />
                                                {(errors[backendName] && touched[backendName]) && (
                                                    <Error errorMessage={errors[backendName] as string} />
                                                )}
                                            </div>
                                        )
                                        case "textarea": return (
                                            <div className="mb-2">
                                                <Label title={fieldName} />
                                                <Input.TextArea value={values[backendName]} onChange={(event) => setFieldValue(backendName, event.target.value)} onBlur={() => setFieldTouched(backendName, true)} placeholder={placeholder} className="border bg-[#dee2e6] shadow-lg rounded-lg p-2 w-full" />
                                                {(errors[backendName] && touched[backendName]) && (
                                                    <Error errorMessage={errors[backendName] as string} />
                                                )}
                                            </div>
                                        )
                                        default: return null;
                                    }
                                })}
                                <div className="flex justify-end w-full">
                                    <Button htmlType="submit" className="bg-[#dee2e6] hover:!bg-[#e9ecef] text-black rounded-lg px-4 py-2 mt-2">Submit</Button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            )}
        </>
    )
};

export default TripForm;