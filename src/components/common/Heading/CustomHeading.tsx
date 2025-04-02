import type React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bg3 from "@assets/EzyStore/Icons/bg3.webp";

interface CustomHeadingProps {
  subTitle: string;
  title: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ subTitle, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[250px] flex flex-col items-center justify-center bg-cover bg-center mt-10"
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#eeeeeea1] bg-opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 text-center"
      >
        <h2 className="font-[500] text-[48px]">{title}</h2>
        <p className="text-sm text-gray-700">
          <Link to="/EzyStore" className="font-semibold">
            Home
          </Link>
          <span className="font-bold text-[16px] mx-2"> &gt;</span>
          <span className="text-[16px] text-black">{subTitle}</span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CustomHeading;
