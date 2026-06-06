import React from 'react';
import type ISidePannel from './ISidePannel';
import CommonConfig from '../../../services/CommonConfig';
import SideSteps from '../../SideSteps/SideSteps';
import { motion } from 'framer-motion';

const SidePannel: React.FC<ISidePannel> = () => {
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
                <SideSteps noOfSteps={3} activeStep={1} />
            </div>
            <div className="mt-8">
                <motion.p
                    initial={{ opacity: 0, x: -50 }}   // start hidden, shifted left
                    animate={{ opacity: 1, x: 0 }}     // fade in + slide to position
                    transition={{
                        delay: 0.8,        // wait 2 seconds before starting
                        duration: 1,     // fade duration
                        ease: "easeOut"
                    }} className="text-[#212529] font-bold mb-2 text-sm">Take Break from routine </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 1,
                        duration: 1,
                        ease: "easeOut"
                    }}
                    className="text-[#474448] text-[#6c757d] text-xs"
                >
                    Stepping away from the office environment interrupts repetitive stress cycles and refreshes your mindset
                </motion.p>
            </div>
        </div>
    )
};

export default SidePannel;