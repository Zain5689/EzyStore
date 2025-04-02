import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import Product1 from "@assets/EzyStore/Products/Poduct_4.webp";
import Product2 from "@assets/EzyStore/Products/Poduct_5.webp";
import Product3 from "@assets/EzyStore/Products/Poduct_6.webp";
import Product4 from "@assets/EzyStore/Products/Poduct_7.webp";
import Product5 from "@assets/EzyStore/Products/Poduct_8.webp";

const productImages = [Product1, Product2, Product3, Product4, Product5];

const products = [
  {
    id: 1,
    name: "Casual Footwear for Men - Black",
    price: "$150",
    image: productImages[0],
  },
  {
    id: 2,
    name: "Microsoft Office 2019 Professional",
    price: "$29.7",
    oldPrice: "$30",
    discount: "-1 %",
    image: productImages[1],
    countdown: "1594 : 07 : 39 : 33",
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max 256GB (HK)",
    price: "$475",
    oldPrice: "$500",
    discount: "-5 %",
    image: productImages[2],
    countdown: "650 : 12 : 09 : 33",
  },
  {
    id: 4,
    name: "Apple iPhone 7 Orange 256GB Storage",
    price: "$255",
    image: productImages[3],
  },
  {
    id: 5,
    name: "Nikon AF-S DX NIKKOR 18-140mm f/3.5",
    price: "$199",
    oldPrice: "$250",
    image: productImages[4],
  },
];

const FeatureItems: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="flex items-center justify-between mb-6"
      >
        <h2 className="text-lg font-bold flex items-center gap-2">
          <span className="text-[#CC7700]">●</span> FEATURE ITEMS
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-6 h-6 flex items-center justify-center bg-[#CC7700] text-[#fff]  shadow-md hover:bg-[#a85f00] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-6 h-6 flex items-center justify-center bg-[#CC7700] text-[#fff]  shadow-md hover:bg-[#a85f00] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="mt-4"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.15, // Delay for staggered animation
                duration: 0.5,
                ease: "easeOut",
              }}
              className="border border-[#EDEDED] p-4 rounded-lg h-[300px] relative group  overflow-hidden"
            >
              {product.discount && (
                <div className="absolute top-[70px] left-[-30px] ">
                  <div className="bg-[#CC7700] text-white text-xs px-12 py-1 rotate-[-45deg]  transform origin-top-left flex gap-1 border border-red-600 ">
                    <Zap size={14} className="text-white" />
                    {product.discount}
                  </div>
                </div>
              )}
              <div className="flex justify-center mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              {product.countdown && (
                <p className="text-[17px] text-center w-full bg-[#EDEDED] text-[#CC7700] mt-[-10px] px-2 py-1 mb-2">
                  {product.countdown}
                </p>
              )}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureItems;
