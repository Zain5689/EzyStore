import type React from "react";
import { Minus, Plus, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CartItem {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  colors: string[];
  quantity: number;
}

interface ShoppingCartStepProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, increment: boolean) => void;
}

const ShoppingCartStep: React.FC<ShoppingCartStepProps> = ({
  cartItems,
  updateQuantity,
}) => {
  const [refs, inViews] = cartItems
    .map(() =>
      useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "-50px 0px",
      })
    )
    .reduce(
      (acc, [ref, inView], index) => {
        acc[0][index] = ref;
        acc[1][index] = inView;
        return acc;
      },
      [{}, {}] as [Record<number, any>, Record<number, boolean>]
    );

  return (
    <>
      {cartItems.map((item, index) => {
        const ref = refs[index];
        const inView = inViews[index];

        return (
          <motion.div
            ref={ref}
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <motion.img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-full sm:w-32 h-auto sm:h-32 object-cover rounded-lg max-w-[200px] mx-auto sm:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            />
            <div className="flex-1 mt-4 sm:mt-0">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <motion.h3
                    className="font-bold text-[16px] text-[#2F302C]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.div
                    className="flex gap-1 my-3 sm:my-5"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    <Star className="w-3 h-3 bg-[#000]0" />
                    <Star className="w-3 h-3 bg-[#000]0" />
                    <Star className="w-3 h-3 bg-[#000]0" />
                    <Star className="w-3 h-3 bg-[#000]0" />
                    <Star className="w-3 h-3 bg-[#000]0" />
                  </motion.div>
                  <motion.div
                    className="flex bg-[#F6F6F6] w-full sm:w-[150px] py-2 px-2 items-center gap-2 mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    <span className="text-sm text-[#7E7F7C]">Type:</span>
                    <select className="rounded px-2 py-1 text-sm flex-1 sm:flex-none">
                      <option>{item.type}</option>
                    </select>
                  </motion.div>
                  <motion.div
                    className="flex gap-2 mt-4 sm:mt-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                  >
                    {item.colors.map((color, colorIndex) => (
                      <motion.button
                        key={colorIndex}
                        className="w-6 h-6"
                        style={{ backgroundColor: color }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          inView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + 0.6 + colorIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </motion.div>
                </div>
                <div className="text-left sm:text-right mt-4 sm:mt-0">
                  <motion.div
                    className="flex items-center gap-2 bg-[#F6F6F6] p-2 mb-3 w-full sm:w-auto justify-between sm:justify-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    <motion.button
                      onClick={() => updateQuantity(item.id, false)}
                      className="w-6 h-6 flex items-center justify-center rounded"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Minus size={16} />
                    </motion.button>
                    <span className="text-[#7E7F7C]">Number:</span>
                    <span>{item.quantity}</span>
                    <motion.button
                      onClick={() => updateQuantity(item.id, true)}
                      className="w-6 h-6 flex items-center justify-center rounded"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus size={16} />
                    </motion.button>
                  </motion.div>
                  <motion.p
                    className="mt-2 font-bold"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                  >
                    ${item.price}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default ShoppingCartStep;
