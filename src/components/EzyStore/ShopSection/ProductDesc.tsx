import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Product1 from "@assets/EzyStore/Products/Poduct_14.webp";
import Product2 from "@assets/EzyStore/Products/Poduct_15.webp";

const ProductDesc = () => {
  const [activeTab, setActiveTab] = useState("description");

  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <div className="border-t border-[#D9D9D9]">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8"
        >
          {["Description", "Additional Information", "Reviews [5]"].map(
            (tab) => (
              <button
                key={tab}
                className={`pb-2 text-base md:text-lg font-medium ${
                  activeTab === tab.toLowerCase()
                    ? "border-b-2 border-black text-black"
                    : "text-[#9F9F9F]"
                }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </button>
            )
          )}
        </motion.div>

        {/* Content with Scroll Animation */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-4 text-[#9F9F9F] mb-10 text-sm md:text-base text-center md:text-left"
        >
          {activeTab === "description" && (
            <div>
              <p>
                <strong>iPhone 16</strong> – A sleek, powerful smartphone with a
                stunning OLED display, ultra-fast A18 chip, pro-grade 48MP
                camera, long-lasting battery, and a new Camera Control Button
                for effortless photography.
              </p>
              <p className="mt-4">
                Experience the future of smartphones with the iPhone 16,
                designed to deliver unmatched performance, stunning visuals, and
                pro-level photography. Featuring a 6.1-inch OLED display (or
                6.7-inch for the Plus model), it offers vibrant colors and
                exceptional clarity. Powered by the A18 chip, it ensures
                lightning-fast performance, smooth multitasking, and an enhanced
                gaming experience.
              </p>
            </div>
          )}
          {activeTab === "additional information" && (
            <p>
              Here is some additional information about the product. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Voluptatum impedit
              possimus nihil quas velit labore illum nam nostrum esse quisquam?
              Aliquam sit optio dolores ipsa, beatae similique! Cumque,
              exercitationem quisquam.
            </p>
          )}
          {activeTab === "reviews [5]" && (
            <p>
              Read user reviews about this product.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Voluptatum impedit possimus nihil
              quas velit labore illum nam nostrum esse quisquam? Aliquam sit
              optio dolores ipsa, beatae similique! Cumque, exercitationem
              quisquam.
            </p>
          )}
        </motion.div>

        {/* Product Images with Motion */}
        <div className="flex flex-wrap justify-center  gap-4 mt-6">
          <motion.img
            src={Product1}
            alt="iPhone 16"
            className="w-40 md:w-[300px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src={Product2}
            alt="iPhone 16"
            className="w-24 md:w-[150px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
