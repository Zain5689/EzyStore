import React from "react";
import { motion } from "framer-motion";
import Icon1 from "@assets/Icons/CompleteProject3.webp";
import Icon2 from "@assets/Icons/CompleteProject2.webp";
import Icon3 from "@assets/Icons/Icon5.webp";
import Icon4 from "@assets/Icons/Icon6.webp";

type FeatureCard = {
  icon: string;
  title: string;
  description: string;
};

const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: Icon1,
    title: "Custom Domain",
    description:
      "A reader will be distracted by the readable content of a page.",
  },
  {
    icon: Icon2,
    title: "Unlimited Language",
    description: "Lorem Ipsum is simply dummy text of the printing industry.",
  },
  {
    icon: Icon3,
    title: "Attractive Themes",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
  },
  {
    icon: Icon4,
    title: "Form Builder",
    description: "Lorem Ipsum is simply dummy text of the printing industry.",
  },
];

const ACHIEVEMENT_LIST = [
  "We completed 500+ client's projects",
  "We have 10+ multiple developers",
  "100+ active clients working with us",
  "Your trusted business partner",
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Features: React.FC = () => {
  const handlePurchaseClick = () => {
    console.log("Purchase button clicked");
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12"
      aria-labelledby="features-heading"
    >
      <div className="w-full md:w-1/2">
        <motion.p
          variants={fadeInUp}
          className="font-semibold text-[#CC7700] text-sm uppercase"
        >
          Why You Choose Our Template
        </motion.p>

        <motion.h2
          id="features-heading"
          variants={fadeInUp}
          className="md:text-[38px] text-[32px] font-bold mt-2 leading-tight text-[#0C0528]"
        >
          Bring More Profits With More Valuable Features
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-[#747474] mt-4 text-sm md:text-base"
        >
          It is a long established fact that a reader will be choose by the
          readable content of a page when looking at.
        </motion.p>

        <motion.ul
          variants={fadeInUp}
          className="list-disc list-inside mt-4 text-[#747474] leading-8"
          aria-label="Our achievements"
        >
          {ACHIEVEMENT_LIST.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </motion.ul>

        <motion.button
          variants={fadeInUp}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-[#CC7700] text-white px-6 py-3 rounded-lg font-semibold shadow-md"
          onClick={handlePurchaseClick}
          aria-label="Purchase template now"
        >
          Purchase Now
        </motion.button>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2"
        role="list"
        aria-label="Feature cards"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {FEATURE_CARDS.map((card, index) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.1 },
              },
            }}
            className="px-6 py-5 bg-white border border-[#EAEAEA] rounded-lg"
            role="listitem"
          >
            <div className="bg-[#CC77001A] w-[50px] h-[70px] flex items-center justify-center mb-2 mt-[-12px]">
              <img
                src={card.icon}
                alt={card.title}
                className="w-[40px] h-[40px]"
              />
            </div>
            <h3 className="font-bold text-lg text-[#0C0528]">{card.title}</h3>
            <p className="text-[#747474] mt-2 text-sm">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Features;
