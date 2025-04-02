import { motion } from "framer-motion";
import step1 from "@assets/Icons/CompleteProject1.webp";
import step2 from "@assets/Icons/CompleteProject2.webp";
import step3 from "@assets/Icons/CompleteProject3.webp";
import step4 from "@assets/Icons/CompleteProject4.webp";

const steps = [
  {
    title: "Purchase Template",
    description: "We provide graphics and visual identity design services.",
    icon: step1,
  },
  {
    title: "Add Services",
    description: "We provide graphics and visual identity design services.",
    icon: step2,
  },
  {
    title: "Setup Website & App",
    description: "We provide graphics and visual identity design services.",
    icon: step3,
  },
  {
    title: "Launch Website & App",
    description: "We provide graphics and visual identity design services.",
    icon: step4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, -5, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const SetupECommerce = () => {
  return (
    <div className="py-12 max-w-6xl mx-auto relative">
      <motion.h2
        className="text-3xl sm:text-[42px] font-bold text-[#0C0528] mt-0 ml-4 mb-10 text-center sm:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        }}
      >
        How To Setup E-Commerce
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="group py-8 px-5 bg-white rounded-xl border border-[#EAEAEA] flex flex-col transition-all duration-300 hover:shadow-md"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.span
              className="cursor-pointer flex justify-center items-center w-[65px] h-[65px] bg-gray-100 rounded-full"
              variants={iconVariants}
              whileHover="hover"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-[50px] h-[50px] object-contain"
                loading="lazy"
              />
            </motion.span>
            <motion.h3 className="mt-5 font-semibold text-[#0C0528] text-lg group-hover:text-[#CC7700] transition-colors duration-300">
              {step.title}
            </motion.h3>
            <p className="text-[#747474] text-[15px] mt-2 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SetupECommerce;
