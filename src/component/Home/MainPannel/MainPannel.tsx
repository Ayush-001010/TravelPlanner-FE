import React from "react";
import type IMainPannel from "./IMainPannel";
import BackgroundImage from '../../../assets/HomeBackgroundImage.jpg';
import Navbar from "./Navbar/Navbar";
import { motion } from "motion/react";

const MainPannel: React.FC<IMainPannel> = ({ toggleShow }) => {
    return (
        <div className="relative w-full h-full shadow-lg">
            <img
                src={BackgroundImage}
                alt="Journey background"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="relative z-10 w-full h-full p-4">
                <div>
                    <Navbar activeNav="Home" />
                </div>
                <div className="mt-32">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 3, ease: "easeOut" }} className="text-shadow text-[55px] font-bold text-[#f8f9fa] font-lobster flex items-center m-0">
                        <span className="text-[30px] border border-[#dee2e6] rounded-full mr-2 w-12 h-12 hover:bg-[#dee2e6] hover:text-[#343a40] transition-colors duration-300 flex items-center justify-center">
                            <i className="bi bi-backpack shadow"></i>
                        </span>
                        {Array.from("Bag Packed, Destination Chosen").map((char, index) => (
                            <motion.span variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ delay: index * 0.1 }} key={index}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.p >
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 3, ease: "easeOut" }} className="text-shadow text-[55px] font-bold text-[#f8f9fa] font-lobster">
                        {Array.from("Let’s Roll").map((char, index) => (
                            <motion.span variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ delay: index * 0.3 }} key={index}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2, ease: "easeInOut" }} className="text-shadow text-lg w-lg word-break text-[#e7ecef] mt-4">
                        We’re here to help you pack your bags, choose your dream destination, plan the perfect itinerary, and enjoy every moment of the journey with us.
                    </motion.p>
                    <motion.p onClick={toggleShow} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.2, ease: "easeInOut" }} className="rounded-full bg-[#f8f9fa] w-fit p-2 shadow flex items-center mt-6 cursor-pointer hover:bg-[#e7ecef] transition-colors duration-300 text-[#343a40] font-semibold">
                        Sign Up
                        <span className="ml-2 bg-[#343a40] text-[#f8f9fa] rounded-full w-8 h-8 flex items-center justify-center">
                            <i className="bi bi-arrow-up-right" />
                        </span>
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8, ease: "easeInOut" }} className="absolute bottom-4 left-4">
                    <div className="flex items-end mt-30">
                        <p className="border border-[#e5e5e5] rounded-full w-10 h-10 justify-center text-[#e5e5e5] h-10 flex items-center mr-4 cursor-pointer hover:bg-[#e5e5e5] hover:text-[#343a40] transition-colors duration-300">
                            <i className="bi bi-instagram" />
                        </p>
                        <p className="border border-[#e5e5e5] rounded-full w-10 h-10 justify-center text-[#e5e5e5] h-10 flex items-center mr-4 cursor-pointer hover:bg-[#e5e5e5] hover:text-[#343a40] transition-colors duration-300">
                            <i className="bi bi-linkedin" />
                        </p>
                        <p className="border border-[#e5e5e5] rounded-full w-10 h-10 justify-center text-[#e5e5e5] h-10 flex items-center mr-4 cursor-pointer hover:bg-[#e5e5e5] hover:text-[#343a40] transition-colors duration-300">
                            <i className="bi bi-envelope" />
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MainPannel;