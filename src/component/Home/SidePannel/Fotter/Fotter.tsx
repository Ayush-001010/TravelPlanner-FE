import { motion } from 'motion/react';
import React from 'react';
import type IFotter from './IFotter';

const Fotter: React.FC<IFotter> = ({ activeStep }) => {
    return (
        <div>
            {activeStep === 1 && (
                <div>
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
            )}
            {activeStep === 2 && (
                <div>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}   // start hidden, shifted left
                        animate={{ opacity: 1, x: 0 }}     // fade in + slide to position
                        transition={{
                            delay: 0.8,        // wait 2 seconds before starting
                            duration: 1,     // fade duration
                            ease: "easeOut"
                        }} className="text-[#212529] font-bold mb-2 text-sm">Please create your account to unlock all features</motion.p>
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
                        Creating an account allows you to save your preferences, access personalized features, and securely manage your data for a seamless experience.
                    </motion.p>
                </div>
            )}
            {activeStep === 3 && (
                <div>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}   // start hidden, shifted left
                        animate={{ opacity: 1, x: 0 }}     // fade in + slide to position
                        transition={{
                            delay: 0.8,        // wait 2 seconds before starting
                            duration: 1,     // fade duration
                            ease: "easeOut"
                        }} className="text-[#212529] font-bold mb-2 text-sm">Welcome back! Please log in to continue</motion.p>
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
                        Logging in allows you to access your personalized settings, saved data, and enjoy a seamless experience tailored to your preferences.
                    </motion.p>
                </div>
            )}
        </div>
    )
};

export default Fotter;