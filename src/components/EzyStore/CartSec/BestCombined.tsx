import type React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import product from "@assets/EzyStore/Products/Poduct_12.webp";

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "IPHONE 16 SMARTPHONE",
    price: "US. 12,00.00",
    rating: 5,
    image: product,
  },
  {
    id: 2,
    name: "IPHONE 16 SMARTPHONE",
    price: "US. 12,00.00",
    rating: 5,
    image: product,
  },
  {
    id: 3,
    name: "IPHONE 16 SMARTPHONE",
    price: "US. 12,00.00",
    rating: 5,
    image: product,
  },
];

const BestCombined: React.FC = () => {
  // Ref for the section title
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Ref for the product grid
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 p-8">
      <motion.div
        className="text-center mb-12"
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          BEST COMBINED WITH:
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          THESE COMBINATION WILL MAKE YOUR LIFE TONE - SUR - TONE
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref={gridRef}
        initial={{ opacity: 0 }}
        animate={gridInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="group bg-white p-8 rounded-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.2,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="relative flex justify-center items-center aspect-square mb-6 bg-[#F6F6F6] rounded-lg p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                gridInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-[260px] h-[300px] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={gridInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              <motion.h3
                className="text-lg mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
              >
                {product.name}
              </motion.h3>

              <motion.div
                className="flex gap-1 justify-center mb-2"
                initial={{ opacity: 0 }}
                animate={gridInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.2 }}
              >
                {[...Array(product.rating)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      gridInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.7 + index * 0.2 + starIndex * 0.05,
                    }}
                  >
                    <Star size={16} className="fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-gray-900 font-bold"
                initial={{ opacity: 0 }}
                animate={gridInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
              >
                {product.price}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BestCombined;
