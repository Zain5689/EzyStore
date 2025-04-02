import { motion } from "framer-motion";
import { WhyChooseUS } from "@components/EzyStore";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const formItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="mb-10 px-4 sm:px-6">
      <div>
        <motion.div
          className="max-w-6xl mx-auto bg-white border border-[#C5C5C557] overflow-hidden mt-6 sm:mt-10 rounded-md mb-6 sm:mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="bg-[#CC7700] text-white py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold"
            variants={itemVariants}
          >
            Get In Touch With Us
          </motion.div>
          <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info Section */}
            <motion.div
              className="space-y-4 sm:space-y-6 py-4 sm:py-6 md:pr-4 sm:md:pr-8"
              variants={itemVariants}
            >
              <motion.div
                className="border-b border-[#CACACA] pb-4 sm:pb-7 w-full sm:w-[80%] md:w-[60%]"
                variants={itemVariants}
              >
                <h3 className="text-[#3D3D3D] text-base sm:text-lg mb-1">
                  Phone Number
                </h3>
                <p className="text-[#666666] text-sm sm:text-base">
                  20123141516
                </p>
              </motion.div>
              <motion.div
                className="border-b border-[#CACACA] pb-4 sm:pb-7 w-full sm:w-[80%] md:w-[60%]"
                variants={itemVariants}
              >
                <h3 className="text-[#3D3D3D] text-base sm:text-lg mb-1">
                  Email Address
                </h3>
                <p className="text-[#666666] text-sm sm:text-base">
                  example@example.com
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-[#3D3D3D] text-base sm:text-lg mb-1">
                  Location
                </h3>
                <p className="text-[#666666] text-sm sm:text-base">
                  Lorem Ipsum
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-[#3D3D3D] text-base sm:text-lg mb-2"
                variants={itemVariants}
              >
                Send us a message
              </motion.h3>
              <motion.p
                className="text-[#666666] text-sm sm:text-base mb-4 sm:mb-6"
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fringilla nunc in molestie feugiat.
              </motion.p>
              <motion.form
                className="space-y-3 sm:space-y-4"
                variants={itemVariants}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    className="w-full text-sm sm:text-[16px] text-[#979797] p-2 border border-[#C5C5C5] rounded-lg sm:rounded-4xl"
                    variants={formItemVariants}
                  />
                  <motion.input
                    type="email"
                    placeholder="Your E-mail"
                    className="w-full p-2 text-sm sm:text-[16px] text-[#979797] border border-[#C5C5C5] rounded-lg sm:rounded-4xl"
                    variants={formItemVariants}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <motion.input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-2 text-sm sm:text-[16px] text-[#979797] border border-[#C5C5C5] rounded-lg sm:rounded-4xl"
                    variants={formItemVariants}
                  />
                  <motion.input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-2 text-sm sm:text-[16px] text-[#979797] border border-[#C5C5C5] rounded-lg sm:rounded-4xl"
                    variants={formItemVariants}
                  />
                </div>
                <motion.textarea
                  placeholder="Message"
                  className="w-full p-2 sm:p-3 text-sm sm:text-[16px] text-[#979797] border border-[#C5C5C5] rounded-lg sm:rounded-2xl h-24 sm:h-28"
                  variants={formItemVariants}
                ></motion.textarea>
                <motion.button
                  className="bg-[#CC7700] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-4xl text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <WhyChooseUS />
    </div>
  );
};

export default Contact;
