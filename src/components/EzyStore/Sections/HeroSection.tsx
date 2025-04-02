import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeImage from "@assets/EzyStore/Icons/1.webp";
import Icon_1 from "@assets/EzyStore/Icons/Icon_1.webp";
import Icon_2 from "@assets/EzyStore/Icons/Icon_2.webp";
import Icon_3 from "@assets/EzyStore/Icons/Icon_3.webp";
import { Menu } from "lucide-react";

const categories = [
  { name: "Electronics & Gadgets", href: "#" },
  { name: "Fashion & Clothing", href: "#" },
  { name: "Interior & Furniture", href: "#" },
  { name: "Software & Games", href: "#" },
  { name: "Smart Watch", href: "#" },
  { name: "Camera & Accessories", href: "#" },
];

const features = [
  {
    icon: Icon_1,
    title: "Online Support 24/7",
    description: "consequat. Duis aute irure",
  },
  {
    icon: Icon_2,
    title: "7 Days Replacement",
    description: "consequat. Duis aute irure",
  },
  {
    icon: Icon_3,
    title: "Global Currency",
    description: "consequat. Duis aute irure",
  },
];

const HeroSection = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 5);

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="max-w-6xl mx-auto md:px-0 px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar with motion */}
        <motion.div
          className="lg:w-1/4"
          initial={{ opacity: 0, x: -50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={heroRef}
        >
          <div className="bg-[#CC7700] text-white p-4 flex gap-2 items-center">
            <Menu />
            <span className="text-lg font-semibold">CATEGORY</span>
          </div>
          <div className="border border-gray-200">
            {displayedCategories.map((category, index) => (
              <a
                key={index}
                className="flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-200"
              >
                <span className="text-[#6A7783]">
                  <span className="font-bold text-[20px] mx-2">+</span>{" "}
                  {category.name}
                </span>
              </a>
            ))}
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="w-full p-4 text-left text-gray-600 hover:bg-gray-50"
            >
              {showAllCategories ? "Show Less" : "Show More"}
            </button>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="lg:w-3/4"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Hero Banner */}
          <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 flex flex-col justify-center p-8 px-12 text-white z-10">
              <h2 className="md:text-[42px] text-[30px] font-bold mb-2 text-[#CC7700]">
                UP TO 60% OFF
              </h2>
              <p className="text-lg text-[#FFF7F7] ml-5 md:mb-11 mb-5">
                THE NEW YEAR SEASON
              </p>
              <button className="bg-[#CC7700] text-white px-6 py-2 rounded-sm hover:bg-[#B36600] transition-colors w-fit">
                Shop Now →
              </button>
            </div>
            <img
              src={HomeImage}
              alt="New Year Sale"
              className="object-cover opacity-50"
            />
            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentSlide(dot)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === dot ? "bg-[#CC7700]" : "bg-white/50"
                  }`}
                >
                  <span className="sr-only">Slide {dot + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Features Section with Motion */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            ref={featuresRef}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={feature.icon} className="p-3" />
                <div>
                  <h3 className="font-semibold text-[#222222] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#6A7783]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
