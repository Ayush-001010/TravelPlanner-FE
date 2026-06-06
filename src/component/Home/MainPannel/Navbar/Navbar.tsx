import React from "react";
import type INavbar from "./INavbar";
import CommonConfig from "../../../../services/CommonConfig";
import { motion } from "motion/react";

const Navbar: React.FC<INavbar> = ({ activeNav }) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width:"50%", opacity: 1 }}
      transition={{
        delay: 1.2,      // wait before starting
        duration: 1.7,   // smooth reveal
        ease: "easeOut"
      }}
      className="overflow-hidden backdrop-blur-sm shadow bg-white/10 flex justify-around m-4 items-center w-2xl rounded-full h-20"
    >
      {CommonConfig.homePageNavbarConfig.map((navTitle: string, index: number) => (
        <div
          key={index}
          className={`cursor-pointer border rounded-full p-4 border-[#e5e5e5] text-[#e5e5e5] h-10 flex items-center ${
            activeNav === navTitle
              ? "bg-[#343a40] text-[#000] border-none"
              : "hover:bg-[#e5e5e5] hover:text-[#343a40] transition-colors duration-300"
          }`}
        >
          <p className="m-0">{navTitle}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Navbar;
