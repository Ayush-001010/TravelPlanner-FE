import React, { useMemo } from 'react';
import type ITripForm from './ITripForm';
import TripConfig from '../../../../services/TripConfig';
import type { ITripFormInterface } from '../../../../services/Interfaces/TripFormInterface';
import { Button, DatePicker, Input, Select } from 'antd';
import { Formik, type FormikProps } from 'formik';
import useFormikHook from '../../../../customHooks/useFormikHook';
import type { IOptionsInterface } from '../../../../services/Interfaces/CommonInterface';
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import { getDefaultClassNames } from "@daypicker/react";
import useTripActionHook from '../../../../customHooks/useTripActionHook';
import { useNavigate } from "react-router-dom"

const TripForm: React.FC<ITripForm> = () => {
    const { initialValues, validationSchema } = useFormikHook("create-trip", TripConfig.createTripFormConfigs);
    const defaultClassNames = getDefaultClassNames();
    const { createTrip } = useTripActionHook();
    const navigate = useNavigate();

    const tripPurposeOptions = useMemo((): Array<IOptionsInterface> => [
        {
            label: (
                <div className="">
                    <p className="m-0">Adventure</p>
                </div>
            ), value: "adventure"
        },
        {
            label: (
                <div>
                    <p className="m-0">Relaxing</p>
                </div>
            ), value: "relaxing"
        },
        {
            label: (
                <div>
                    <p className="m-0">Business/Office</p>
                </div>
            ), value: "business/office"
        },
    ], [
    ]);
    const tripTypeOptions = useMemo((): Array<IOptionsInterface> => [
        {
            label: (
                <div>
                    <p className="m-0">Solo</p>
                </div>
            ), value: "solo",
        },
        {
            label: (
                <div>
                    <p className="m-0">Couple</p>
                </div>
            ), value: "couple",
        },
        {
            label: (
                <div>
                    <p className="m-0">Family</p>
                </div>
            ), value: "family",
        },
        {
            label: (
                <div>
                    <p>Friends</p>
                </div>
            ), value: "friends",
        },
    ], [
    ]);
    const labelCss = useMemo(() => "text-[#014f86] font-semibold", []);
    const dateHandler = (date: any, fieldName: string, formik: FormikProps<any>) => {
        // Antd DatePicker returns a Moment-like object; normalize to JS Date or null
        if (!date) {
            formik.setFieldValue(fieldName, null);
            return;
        }
        const normalized = typeof date.toDate === 'function' ? date.toDate() : date;
        formik.setFieldValue(fieldName, normalized);
    };
    const textHandler = (e: React.ChangeEvent<any>, fieldName: string, formik: FormikProps<any>) => {
        formik.setFieldValue(fieldName, e.target.value);
    }
    const selectHandler = (value: any, fieldName: string, formik: FormikProps<any>) => {
        formik.setFieldValue(fieldName, value);
    }
    const submitHandler = async (values: any) => {
        console.log("Form submitted with values:", values);
        const response = await createTrip(values);
        if (response) {
            navigate(`/trip/${response}`);
        }
    };

    return (
        <div>
            {Object.keys(initialValues).length > 0 && (
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
                    {(formik: FormikProps<any>) => {
                        console.log("formik values", formik.values);
                        return (
                            <div>
                                {
                                    TripConfig.createTripFormConfigs.map((config: ITripFormInterface) => {
                                        const { type, displayName } = config;
                                        switch (type) {
                                            case "text": return (
                                                <div className="p-2">
                                                    <label className={labelCss}>{displayName}</label>
                                                    <Input value={formik.values[config.fieldName]} onChange={(e) => textHandler(e, config.fieldName, formik)} />
                                                </div>
                                            )
                                            case "textarea": return (
                                                <div className="">
                                                    <label className={labelCss}>{displayName}</label>
                                                    <Input.TextArea value={formik.values[config.fieldName]} onChange={(e) => textHandler(e, config.fieldName, formik)} />
                                                </div>
                                            )
                                            case "tripPurpose": return (
                                                <div className="inline-block mt-2 p-2 w-1/2">
                                                    <div className="flex flex-col">
                                                        <label className={labelCss}>{displayName}</label>
                                                        <Select options={tripPurposeOptions} onChange={(value) => selectHandler(value, config.fieldName, formik)} />
                                                    </div>
                                                </div>
                                            )
                                            case "tripType": return (
                                                <div className="inline-block mt-2 p-2 w-1/2">
                                                    <div className="flex flex-col">
                                                        <label className={labelCss}>{displayName}</label>
                                                        <Select options={tripTypeOptions} onChange={(value) => selectHandler(value, config.fieldName, formik)} />
                                                    </div>
                                                </div>
                                            )
                                            case "start-end-date": return (
                                                <div className="p-2">
                                                    <div className="flex flex-col">
                                                        <label className={labelCss}>{displayName}</label>
                                                        <div className="flex gap-2">
                                                            <DatePicker className="w-1/2" onChange={(date: any) => dateHandler(date, "startDate", formik)} />
                                                            <DatePicker className="w-1/2" onChange={(date: any) => dateHandler(date, "endDate", formik)} />
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 flex justify-center">
                                                        <div className="inline-block scale-90 origin-top">
                                                            <DayPicker
                                                                mode="range"
                                                                classNames={{
                                                                    today: `border-amber-500`, // Add a border to today's date
                                                                    selected: `bg-amber-500 border-amber-500 text-white`, // Highlight the selected day
                                                                    root: `${defaultClassNames.root} shadow-md rounded-lg border border-gray-200 p-3`, // Add a shadow to the root element
                                                                    chevron: `${defaultClassNames.chevron} fill-amber-500`, // Change the color of the chevron
                                                                    month_caption: `text-sm font-semibold text-gray-700`,
                                                                    day: `text-sm`,
                                                                }}
                                                                selected={
                                                                    formik.values.startDate && formik.values.endDate
                                                                        ? {
                                                                            from: new Date(formik.values.startDate),
                                                                            to: new Date(formik.values.endDate),
                                                                        }
                                                                        : undefined
                                                                }
                                                                onSelect={(range: any) => {
                                                                    if (range?.from) {
                                                                        formik.setFieldValue("startDate", range.from);
                                                                    }
                                                                    if (range?.to) {
                                                                        formik.setFieldValue("endDate", range.to);
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return null;
                                    })
                                }
                                <div className="mt-4 flex justify-end">
                                    <Button className="" htmlType="submit" onClick={formik.submitForm} type="primary">
                                        Create
                                    </Button>
                                </div>
                            </div>
                        )
                    }}

                </Formik>
            )}
        </div>
    )
};

export default TripForm;