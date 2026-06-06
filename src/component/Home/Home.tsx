import React, { useState } from "react";
import type IHome from "./IHome";
import SidePannel from "./SidePannel/SidePannel";
import MainPannel from "./MainPannel/MainPannel";
import { AnimatePresence, motion } from "motion/react";

const Home: React.FC<IHome> = () => {
    const [show, setShow] = useState(true);

    const toggleShow = () => {
        setShow((prev) => !prev);
    }
    return (
        <div className="flex h-screen p-4">
            <div className="w-40">
                <SidePannel />
            </div>
            <AnimatePresence>
                {show && (
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
            </AnimatePresence>
        </div>
    )
};

export default Home;