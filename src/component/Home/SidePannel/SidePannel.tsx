import React from 'react';
import type ISidePannel from './ISidePannel';
import CommonConfig from '../../../services/CommonConfig';
import SideSteps from '../../SideSteps/SideSteps';
import { motion } from 'framer-motion';
import Fotter from './Fotter/Fotter';

const SidePannel: React.FC<ISidePannel> = ({ activeStep }) => {
    return (
        <div className="h-screen">
            <div className="mb-4 h-48">
                <motion.p className="font-lora mt-2 font-bold text-[#474448] text-5xl overflow-hidden" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
                    {Array.from(CommonConfig.companyTitle).map((char, index) => (
                        <motion.span variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ delay: index * 0.1 }} key={index}>
                            {char}
                        </motion.span>
                    ))}
                </motion.p>
            </div>
            <div className="mb-4 h-64 flex items-center justify-center mr-8">
                <SideSteps noOfSteps={3} activeStep={activeStep} />
            </div>
            <div className="mt-8">
                <Fotter activeStep={activeStep} />
            </div>
        </div>
    )
};

export default SidePannel;