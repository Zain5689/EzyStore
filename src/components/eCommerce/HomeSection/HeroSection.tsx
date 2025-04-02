import { motion } from "framer-motion";
import templateImage1 from "@assets/Templates/template3.webp";
import templateImage2 from "@assets/Templates/template1.webp";
import templateImage3 from "@assets/Templates/template2.webp";
import templateImage4 from "@assets/Templates/template3.webp";
import templateImage5 from "@assets/Templates/Maintemplate.webp";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative  bg-[#CC770014] h-[80vh]  py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 mt-[13px]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-10 left-[5%] w-10 h-10 bg-pink-200 rounded-full opacity-50 animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-20 right-[10%] w-6 h-6 bg-red-300 rounded-full opacity-50 animate-pulse"
      />

      <div className="max-w-7xl mx-auto">
        {/* Content Container */}
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Heading Section with Animations */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#CC7700] font-semibold text-sm md:text-base uppercase tracking-wide"
          >
            No #01 Digital Services Website
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight"
          >
            Build Your Dream <br className="hidden sm:block" />
            E-Commerce With EzyStore
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mt-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto "
          >
            We are elite authors at Envato, helping you build your own booking
            website easily.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-[#CC7700] text-white px-6 py-3 rounded-lg font-semibold shadow-md ">
              Build Your E-Commerce
            </button>
            <button className="border-2 border-[#CC7700] text-[#CC7700] px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300">
              View Demo
            </button>
          </motion.div>
        </div>

        {/* Templates Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-16 md:mt-24 h-[400px] sm:h-[500px] lg:h-[600px]"
        >
          {/* Responsive Template Images */}
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            src={templateImage1}
            className="absolute top-[-30px] left-[1%] w-[200px] sm:w-[250px] shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300  z-10"
            alt="Template 1"
          />

          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            src={templateImage2}
            className="absolute top-[-300px] left-0 w-[200px] sm:w-[200px] shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 z-10 cursor-pointer"
            alt="Template 2"
          />

          <Link to="/EzyStore">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              src={templateImage3}
              className="absolute top-[-30px] right-[5%] w-[200px] sm:w-[250px] shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300  z-10"
              alt="Template 3"
            />
          </Link>

          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            src={templateImage4}
            className="absolute top-[-310px] right-0 w-[160px] sm:w-[200px] shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300  z-10"
            alt="Template 4"
          />

          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            src={templateImage5}
            className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] lg:w-[427px] shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 z-10"
            alt="Main Template"
          />
        </motion.div>
      </div>

      {/* SVG Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[1]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,60 C100,150 200,30 300,60 C500,90 500,10 600,60 C700,110 800,30 900,60 C1000,90 1100,10 1200,60 L1300,120 L0,120 Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
