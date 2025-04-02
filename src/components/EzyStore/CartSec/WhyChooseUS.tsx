import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Icon_1 from "@assets/EzyStore/Icons/Icon1.webp";
import Icon_2 from "@assets/EzyStore/Icons/Icon2.webp";
import Icon_3 from "@assets/EzyStore/Icons/Icon3.webp";
import Icon_4 from "@assets/EzyStore/Icons/Icon_4.webp";
import Icon_5 from "@assets/EzyStore/Icons/Icon_5.webp";
import Icon_6 from "@assets/EzyStore/Icons/Icon_6.webp";

const WhyChooseUS = () => {
  const features = [
    {
      title: "Global Delivery",
      description:
        "Experience hassle-free shipping and seamless global connectivity with our trustworthy and efficient delivery service, bringing the world to your fingertips!",
      icon: Icon_6,
    },
    {
      title: "Free Shipping",
      description:
        "Shop to your heart's content without worrying about shipping costs. Our free shipping service delivers your purchases with a smile, straight to your doorstep!",
      icon: Icon_5,
    },
    {
      title: "24/7 Supporting",
      description:
        "Shop with confidence anytime, anywhere. Our free shipping service comes with 24/7 support to ensure your packages arrive safely and on time!",
      icon: Icon_4,
    },
    {
      title: "Daily Email",
      description:
        "Stay up-to-date with your deliveries. Enjoy the convenience of daily email updates with our free shipping service, making your online shopping experience even more enjoyable!",
      icon: Icon_3,
    },
    {
      title: "Easy Payment",
      description:
        "Shop and pay with ease. Our free shipping service not only delivers your packages for free but also offers easy payment options, making your shopping experience a breeze!",
      icon: Icon_2,
    },
    {
      title: "Monthly Voucher",
      description:
        "More than just free shipping: our service rewards your loyalty with monthly vouchers, giving you more reasons to shop and save on your favorite products!",
      icon: Icon_1,
    },
  ];

  // Use separate refs for title and features for more precise scroll control
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation controls for more complex animations
  const titleControls = useAnimation();
  const featuresControls = useAnimation();

  // Start animations when elements come into view
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (featuresInView) {
      featuresControls.start("visible");
    }
  }, [featuresInView, featuresControls]);

  // Enhanced animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0.5, opacity: 0, rotateY: 90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="bg-white py-8 sm:py-12"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          ref={titleRef}
          className="text-2xl sm:text-[32px] font-semibold text-[#2F302C] mb-8 sm:mb-12"
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
        >
          WHY CHOOSE US?
        </motion.h2>
        <motion.div
          ref={featuresRef}
          className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 sm:gap-8 md:gap-10"
          initial="hidden"
          animate={featuresControls}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4"
              custom={index}
              variants={featureVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-4xl sm:text-5xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <img
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </motion.div>
              <motion.h3
                className="text-lg sm:text-[20px] text-[#2F302C] font-medium mt-3 sm:mt-4"
                variants={textVariants}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-[#7E7F7C] mt-1 sm:mt-2 text-sm sm:text-[15px] max-w-xs mx-auto"
                variants={textVariants}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUS;
