import React, { useRef } from "react";
import { Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
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
];

const RelatedProduct: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <>
      <div className="border-t border-[#D9D9D9]"></div>
      <div ref={containerRef} className="max-w-6xl mx-auto pt-8 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="py-10"
        >
          <h2 className="text-[#000000] text-[36px] text-center">
            Related Products
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="border border-[#EDEDED] p-4 rounded-lg h-[300px] relative group overflow-hidden"
            >
              {product.discount && (
                <div className="absolute top-[70px] left-[-30px]">
                  <div className="bg-[#CC7700] text-white text-xs px-12 py-1 rotate-[-45deg] transform origin-top-left flex gap-1 border border-red-600">
                    <Zap size={14} className="text-white" />
                    {product.discount}
                  </div>
                </div>
              )}
              <div className="flex justify-center mb-3">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-105"
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
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <button className="text-[16px] font-bold text-[#CC7700] border border-[#CC7700] px-16 py-3 hover:bg-[#CC7700] hover:text-white transition-colors">
            Show More
          </button>
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
