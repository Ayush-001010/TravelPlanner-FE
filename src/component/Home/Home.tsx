import React, { useState } from "react";
import type IHome from "./IHome";
import SidePannel from "./SidePannel/SidePannel";
import MainPannel from "./MainPannel/MainPannel";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import { AnimatePresence, motion } from "motion/react";

const Home: React.FC<IHome> = () => {
    const [activeStep, setActiveStep] = useState(0);

    const toggleShow = () => {
        setActiveStep((prev) => (prev + 1) % 3); // Cycle through steps 0, 1, 2
    }
    
    return (
        <div className="flex h-screen p-4">
            <div className="w-40">
            <SidePannel activeStep={activeStep + 1} />
            </div>
            <AnimatePresence>
                {(activeStep === 0) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} // fade out when unmounted
                        transition={{ duration: 2 }} // slow fade (2s)
                        className="w-full"
                    >
                        <MainPannel toggleShow={toggleShow} />
                    </motion.div>
                )}
                {(activeStep === 1) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} // fade out when unmounted
                        transition={{ duration: 2 }} // slow fade (2s)
                        className="w-full h-full overflow-y-auto"
                    >
                        <div className="h-full flex items-center py-4">
                            <SignUp toggleShow={toggleShow}/>
                        </div>
                    </motion.div>
                )}
                {(activeStep === 2) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} // fade out when unmounted
                        transition={{ duration: 2 }} // slow fade (2s)
                        className="w-full h-full overflow-y-auto"
                    >
                        <div className="h-full flex items-center py-4">
                            <SignIn/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};

export default Home;