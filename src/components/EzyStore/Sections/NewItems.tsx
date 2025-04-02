import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap } from "lucide-react";
import Product1 from "@assets/EzyStore/Products/Poduct_4.webp";
import Product2 from "@assets/EzyStore/Products/Poduct_5.webp";
import Product3 from "@assets/EzyStore/Products/Poduct_6.webp";
import Product4 from "@assets/EzyStore/Products/Poduct_7.webp";
import Product5 from "@assets/EzyStore/Products/Poduct_8.webp";
import Product6 from "@assets/EzyStore/Products/Poduct_9.webp";
import Product7 from "@assets/EzyStore/Products/Poduct_10.webp";
import Product8 from "@assets/EzyStore/Products/Poduct_11.webp";
import bg1 from "@assets/EzyStore/Icons/bg1.webp";

const products = [
  {
    id: 1,
    name: "Casual Footwear for Men - Black",
    price: "$150",
    image: Product8,
  },
  {
    id: 2,
    name: "Microsoft Office 2019 Professional",
    price: "$29.7",
    oldPrice: "$30",
    discount: "-1 %",
    image: Product2,
    countdown: "1594 : 07 : 39 : 33",
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max 256GB (HK)",
    price: "$475",
    oldPrice: "$500",
    discount: "-5 %",
    image: Product3,
    countdown: "650 : 12 : 09 : 33",
  },
  {
    id: 4,
    name: "Apple iPhone 7 Orange 256GB Storage",
    price: "$255",
    image: Product4,
  },
  {
    id: 5,
    name: "Nikon AF-S DX NIKKOR 18-140mm f/3.5",
    price: "$199",
    oldPrice: "$250",
    image: Product5,
  },
  {
    id: 6,
    name: "Casual Footwear for Men - Black",
    price: "$150",
    image: Product6,
  },
  {
    id: 7,
    name: "Microsoft Office 2019 Professional",
    price: "$29.7",
    oldPrice: "$30",
    discount: "-1 %",
    image: Product7,
    countdown: "1594 : 07 : 39 : 33",
  },
  {
    id: 8,
    name: "iPhone 14 Pro Max 256GB (HK)",
    price: "$475",
    oldPrice: "$500",
    discount: "-5 %",
    image: Product1,
    countdown: "650 : 12 : 09 : 33",
  },
];

const NewItems: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div
      className="max-w-6xl mx-auto pt-8 pb-28 px-4 lg:px-6"
      ref={containerRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row gap-6"
      >
        {/* Left Section - PC Banner and Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/4 order-2 lg:order-1"
        >
          {/* PC Banner */}
          <motion.div
            className="p-6 text-white text-center rounded-lg mb-6"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "70%",
            }}
          >
            <button className="mt-4 mb-2 bg-[#CC7700] text-black px-2 py-2 rounded-sm">
              BUILT YOUR PC
            </button>
            <p className="text-[20px] mt-2">with</p>
            <h2 className="text-[24px] font-bold text-[#CC7700]">
              MODERN PC <br /> ACCESSORIES
            </h2>
            <button className="mt-4 bg-white text-black px-5 py-3 rounded-sm hover:bg-gray-200">
              Shop Now
            </button>
          </motion.div>

          {/* Newsletter */}
          <div className="p-6 border  border-[#EBEBEB] rounded-lg ">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="text-[#CC7700] text-[30px] mr-2">●</span>
              <span className="text-[16px] text-[#222222]">
                GET OUR UPDATES
              </span>
            </h3>
            <p className="text-[#6C757D] text-[16px] font-bold mt-2">
              Subscribe Newsletter
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mt-3 px-4 py-3 border border-[#EBEBEB] rounded-sm"
            />
            <button className="w-full bg-[#CC7700] text-white px-4 py-3 mt-3 rounded-sm">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Right Section - Product Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-3/4 order-1 lg:order-2"
        >
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-[#CC7700] text-xl">●</span> FEATURE ITEMS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="border border-[#EDEDED] p-4 rounded-lg h-[280px] relative group overflow-hidden"
              >
                {product.discount && (
                  <div className="absolute top-[10px] left-[-50px]">
                    <div className="bg-[#CC7700] text-white text-xs px-16 py-1 rotate-[-45deg] text-center border border-red-600 flex gap-1 items-center justify-center">
                      <Zap size={14} className="text-white" />
                      {product.discount}
                    </div>
                  </div>
                )}
                <div className="flex justify-center mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-semibold line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#CC7700] font-bold">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewItems;
