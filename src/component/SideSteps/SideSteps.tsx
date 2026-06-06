import React from 'react';
import type ISideSteps from './ISideSteps';
import { motion } from 'motion/react';

const SideSteps: React.FC<ISideSteps> = ({ noOfSteps, activeStep }) => {
    const marginDistance = 100;
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration:1 ,  delay: 0.8, ease: "easeInOut"}}>
            {[...Array(noOfSteps)].map((_, index) => (
                <div key={index}>
                    {(index + 1 === activeStep &&  index > 0) && <div className="w-12 flex items-center justify-center">
                        <div className={index === 0 ? 'w-1 border-r' : 'w-12'} style={{ height: `${index === 0 ? marginDistance : marginDistance / 2}px` }} />
                    </div>}
                    <div key={index} className={`w-12 h-12 rounded-full flex items-center justify-center border-1 font-normal text-sm  ${index + 1 === activeStep ? 'shadow bg-[#dee2e6] border-[#495057] text-[#495057]' : 'mb-1 text-[#adb5bd]  border-[#adb5bd]'}`}>
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                    {(index + 1 === activeStep && index < noOfSteps - 1) && <div className="w-12 flex items-center justify-center">
                        <div className={index === 0 ? 'w-1 border-r' : 'w-12'} style={{ height: `${index === 0 ? marginDistance : marginDistance / 2}px` }} />
                    </div>}
                </div>
            ))}
        </motion.div>
    );
};

export default SideSteps;