import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SignInConfig from '../../../services/SignInConfig';
import { motion } from 'motion/react';
import type { FormField } from '../../../services/Interfaces/FormInterface';

const SignIn: React.FC = () => {
    // build initial values from config
    const initialValues = SignInConfig.reduce<Record<string, any>>((acc, cur) => {
        acc[cur.backendName] = '';
        return acc;
    }, {});

    // build validation schema object from config
    const validationShape: Record<string, Yup.AnySchema> = {};
    SignInConfig.forEach((f: FormField) => {
        validationShape[f.backendName] = f.validation;
    });
    const validationSchema = Yup.object().shape(validationShape);

    const renderField = (field: FormField) => {
        const baseInputClass = 'w-full p-2.5 rounded-lg border border-gray-300 bg-white/95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 text-sm';
        switch (field.fieldType) {
            case 'email':
                return (
                    <Field
                        type="email"
                        id={field.backendName}
                        name={field.backendName}
                        className={baseInputClass}
                        placeholder={field.fieldName}
                    />
                );
            case 'password':
                return (
                    <Field
                        type="password"
                        id={field.backendName}
                        name={field.backendName}
                        className={baseInputClass}
                        placeholder={field.fieldName}
                    />
                );
            default:
                return (
                    <Field
                        type="text"
                        id={field.backendName}
                        name={field.backendName}
                        className={baseInputClass}
                        placeholder={field.fieldName}
                    />
                );
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full max-w-md mx-auto bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-lg border-2 border-blue-100/50 rounded-3xl p-8 shadow-2xl hover:shadow-blue-200/50 transition-shadow duration-500"
        >
            <header className="mb-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 2, ease: "easeOut" }}
                    className="text-3xl text-[#343a40] font-uncial font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent flex items-center mb-2"
                >
                    <motion.span
                        initial={{ opacity: 0, rotate: -180, scale: 0 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        className="text-[28px] bg-gradient-to-br from-blue-500 to-blue-700 text-white border-2 border-blue-400 rounded-full mr-3 w-12 h-12 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
                    >
                        <i className="bi bi-box-arrow-in-right"></i>
                    </motion.span>
                    {Array.from("Welcome Back!").map((char, index) => (
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.3 + index * 0.05 }}
                            key={index}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1, ease: "easeInOut" }}
                    className="text-gray-700 text-sm leading-relaxed"
                >
                    Sign in to continue your journey with Trip Labs. Plan trips, connect with friends, and create unforgettable memories.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
                    className="text-gray-500 text-xs mt-1"
                >
                    Don't have an account? <span className="text-blue-600 font-bold cursor-pointer hover:underline hover:text-blue-700 transition-all duration-200">Sign up here</span>
                </motion.p>
            </header>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // TODO: replace with real API call
                    console.log('SignIn submit', values);
                    setTimeout(() => {
                        setSubmitting(false);
                        alert('Sign in successful (demo)');
                    }, 700);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="space-y-4">
                            {SignInConfig.map((field, idx) => (
                                <motion.div
                                    key={field.backendName}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.3 + idx * 0.1, duration: 0.6, ease: "easeOut" }}
                                    className="flex flex-col group"
                                >
                                    <label htmlFor={field.backendName} className="mb-1.5 font-bold text-gray-700 text-xs group-hover:text-blue-600 transition-colors duration-200">{field.fieldName}</label>
                                    {renderField(field)}
                                    <ErrorMessage name={field.backendName} component="div" className="text-xs text-red-600 mt-0.5 font-medium" />
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6, duration: 0.8, ease: "easeInOut" }}
                            className="mt-2 text-right"
                        >
                            <span className="text-xs text-blue-600 font-bold cursor-pointer hover:underline hover:text-blue-700 transition-all duration-200">Forgot password?</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.7, duration: 0.9, ease: "easeInOut" }}
                            className="mt-6 flex flex-col items-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="relative overflow-hidden !rounded-full p-2 px-6 w-full flex text-white font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 items-center justify-center shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.6 }}
                                />
                                {isSubmitting ? (
                                    <>
                                        <i className="bi bi-hourglass-split mr-2 animate-spin"></i>
                                        Signing In...
                                    </>
                                ) : (
                                    <>
                                        Sign In
                                        <motion.span 
                                            whileHover={{ x: 3 }}
                                            className="ml-2 bg-white text-blue-700 rounded-full w-6 h-6 flex items-center justify-center shadow-md"
                                        >
                                            <i className="bi bi-arrow-right font-bold" />
                                        </motion.span>
                                    </>
                                )}
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.9, duration: 1, ease: "easeInOut" }}
                            className="mt-6"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-2 bg-white/90 text-gray-500">Or continue with</span>
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-all duration-200"
                                >
                                    <i className="bi bi-google text-red-500 mr-2"></i>
                                    <span className="text-xs font-medium text-gray-700">Google</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-all duration-200"
                                >
                                    <i className="bi bi-facebook text-blue-600 mr-2"></i>
                                    <span className="text-xs font-medium text-gray-700">Facebook</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </Form>
                )}
            </Formik>
        </motion.div>
    );
};

export default SignIn;
