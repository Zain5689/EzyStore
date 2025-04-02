import { motion } from "framer-motion";
import Icon1 from "@assets/Icons/Icon1.webp";
import Icon2 from "@assets/Icons/Icon2.webp";
import Icon3 from "@assets/Icons/Icon3.webp";
import Icon4 from "@assets/Icons/Icon4.webp";

const achievements = [
  { logo: Icon1, name: "Achievement 1" },
  { logo: Icon2, name: "Achievement 2" },
  { logo: Icon3, name: "Achievement 3" },
  { logo: Icon4, name: "Achievement 4" },
];

const CompletedProject = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-[50px] mt-32 overflow-hidden">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.p
          variants={textVariants}
          className="text-[#CC7700] font-semibold text-sm md:text-base uppercase tracking-wide"
        >
          Our Great Achievement Proved Us!
        </motion.p>
        <motion.h2
          variants={textVariants}
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0C0528] mt-4 leading-tight"
        >
          We Completed 500+ Projects <br className="hidden sm:block" />
          With Clients' Satisfaction
        </motion.h2>
      </motion.div>

      {/* Logos */}
      <motion.div
        className="flex justify-center gap-8 md:gap-12 flex-wrap mb-14 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {achievements.map((brand, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: { duration: 0.2 },
            }}
            className="group relative flex items-center justify-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-10 sm:h-12 md:h-14 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CompletedProject;
