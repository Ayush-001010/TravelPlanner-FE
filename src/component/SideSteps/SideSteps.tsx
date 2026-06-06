import React from 'react';
import type ISideSteps from './ISideSteps';
import { motion } from 'motion/react';

const SideSteps: React.FC<ISideSteps> = ({ noOfSteps, activeStep }) => {
    const marginDistance = 100;
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
            {[...Array(noOfSteps)].map((_, index) => (
                <div key={index}>
                    {(index + 1 === activeStep && index > 0) && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: `${index === 0 ? marginDistance : marginDistance / 2}px`, opacity: 1 }} 
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-6 flex items-center justify-center border-r"
                        >
                            <div className="w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-sm" />
                        </motion.div>
                    )}
                    <motion.div 
                        key={index} 
                        initial={{ scale: 0.8, opacity: 0 }} 
                        animate={{ 
                            scale: index + 1 === activeStep ? 1.1 : 1, 
                            opacity: 1 
                        }} 
                        transition={{ 
                            duration: 0.5, 
                            delay: 0.6 + index * 0.15,
                            ease: "easeOut" 
                        }}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-semibold text-sm transition-all duration-300 cursor-pointer ${
                            index + 1 === activeStep 
                                ? 'shadow-lg bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600 text-white scale-110' 
                                : index + 1 < activeStep
                                    ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500 text-white shadow-md'
                                    : 'bg-white/80 text-gray-400 border-gray-300 hover:border-blue-300 hover:text-blue-500'
                        }`}
                    >
                        {index + 1 === activeStep && (
                            <motion.div
                                className="absolute w-16 h-16 rounded-full border-2 border-blue-400"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1.3, opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                            />
                        )}
                        {index + 1 < activeStep ? (
                            <motion.i 
                                className="bi bi-check-lg text-xl font-bold"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        ) : (
                            <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                        )}
                    </motion.div>
                    {(index + 1 === activeStep && index < noOfSteps - 1) && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: `${index === 0 ? marginDistance : marginDistance / 2}px`, opacity: 1 }} 
                            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                            className="w-6 flex items-center justify-center border-r"
                        >
                            <div className="w-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full shadow-sm" />
                        </motion.div>
                    )}
                </div>
            ))}
        </motion.div>
    );
};

export default SideSteps;