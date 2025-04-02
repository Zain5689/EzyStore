import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Star from "@assets/Templates/Group 19.webp";
import Testimonial1 from "@assets/Templates/Testimonial1.webp";
import Testimonial2 from "@assets/Templates/Testimonial2.webp";

interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    author: {
      name: "Barella",
      title: "Bank Manager",
      avatar: Testimonial1,
    },
  },
  {
    id: 2,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    author: {
      name: "Maria Silva",
      title: "Marketing Director",
      avatar: Testimonial2,
    },
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const currentTestimonial = TESTIMONIALS[activeIndex];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center p-10 bg-white"
      aria-labelledby="testimonials-heading"
    >
      {/* Left Section */}
      <motion.div variants={fadeInUp} className="lg:w-1/2 space-y-4">
        <h2
          id="testimonials-heading"
          className="text-[38px] font-bold text-[#0C0528]"
        >
          Our Client's Testimonial
        </h2>
        <motion.div
          variants={fadeInUp}
          className="bg-[#CC770014] p-6 rounded-lg relative transition-all duration-300"
          style={{
            opacity: isAnimating ? 0.7 : 1,
            transform: isAnimating ? "translateY(10px)" : "translateY(0)",
          }}
        >
          <div className="flex justify-between items-center">
            <span className="text-yellow-500 text-xl mb-3" aria-hidden="true">
              ⭐
            </span>
            <span className="text-[#747474] mt-2 leading-7 text-[16px]">
              3 Start
            </span>
          </div>
          <p className="text-[#747474] mt-2 leading-7 text-[16px]">
            {currentTestimonial.content}
          </p>
          <div className="flex items-center mt-4">
            <img
              src={currentTestimonial.author.avatar}
              alt={currentTestimonial.author.name}
              className="w-12 h-12 mr-3"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-gray-900">
                {currentTestimonial.author.name}
              </p>
              <p className="text-gray-600 text-sm">
                {currentTestimonial.author.title}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-1">
            <span className="text-xs font-bold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            {TESTIMONIALS.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-10 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-[#CC7700]" : "bg-gray-300"
                }`}
                role="button"
                tabIndex={0}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => e.key === "Enter" && setActiveIndex(index)}
              ></div>
            ))}
            <span className="text-xs font-bold">
              {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        variants={fadeInUp}
        className="w-[450px] flex justify-center relative mt-10 lg:mt-0"
      >
        <motion.img
          src={Star}
          alt="testimonials"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
