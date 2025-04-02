"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Product from "@assets/EzyStore/Products/Poduct_15.webp";

const cartItems = [
  {
    id: 1,
    name: "IPHONE 16 SMARTPHONE",
    quantity: "1 item",
    price: "$1200.00",
    image: Product,
  },
  {
    id: 2,
    name: "IPHONE 16 SMARTPHONE",
    quantity: "1 item",
    price: "$1200.00",
    image: Product,
  },
  {
    id: 3,
    name: "IPHONE 16 SMARTPHONE",
    quantity: "1 item",
    price: "$1200.00",
    image: Product,
  },
];

export default function OrderSummary() {
  // Create refs for different sections
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [itemsRef, itemsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="box-border flex flex-col gap-4 w-full max-w-[425px]">
      {/* Order Title */}
      <motion.div
        ref={headerRef}
        className="flex flex-col gap-2 sm:gap-4 self-stretch"
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-2xl sm:text-[32px] font-extrabold text-[#2f302c]"
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          YOUR ORDER
        </motion.p>
        <motion.p
          className="text-sm sm:text-base text-[#7e7f7c] mb-2 sm:mb-4"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Review all the products you want to buy
        </motion.p>
      </motion.div>

      {/* Cart Items */}
      <motion.div
        ref={itemsRef}
        className="box-border flex flex-col gap-6 sm:gap-10 self-stretch px-2 sm:px-6 pb-6 sm:pb-10"
        initial={{ opacity: 0 }}
        animate={itemsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-start gap-4 sm:gap-10 h-[80px] sm:h-[100px] box-border"
            initial={{ opacity: 0, y: 30 }}
            animate={itemsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.2,
              ease: "easeOut",
            }}
          >
            <motion.img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="h-full w-auto object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                itemsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.2,
              }}
            />
            <motion.div
              className="flex flex-col gap-1 sm:gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={
                itemsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{
                duration: 0.5,
                delay: 0.6 + index * 0.2,
              }}
            >
              <motion.p
                className="text-xs sm:text-[14px] font-bold text-[#2F302C]"
                initial={{ opacity: 0 }}
                animate={itemsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.2 }}
              >
                {item.name}
              </motion.p>
              <motion.p
                className="text-xs sm:text-[14px] text-[#7E7F7C]"
                initial={{ opacity: 0 }}
                animate={itemsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }}
              >
                {item.quantity}
              </motion.p>
              <motion.p
                className="text-base sm:text-[20px] font-extrabold text-[#2F302C]"
                initial={{ opacity: 0 }}
                animate={itemsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.2 }}
              >
                {item.price}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="border-t border-neutral-200 w-full sm:w-[300px] py-2"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={
          itemsInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
        }
        transition={{
          duration: 0.5,
          delay: 0.9 + cartItems.length * 0.2,
          originX: 0,
        }}
      />
    </div>
  );
}
