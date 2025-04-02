import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Product1 from "@assets/EzyStore/Products/Poduct_1.webp";
import Product2 from "@assets/EzyStore/Products/Poduct_2.webp";
import Product3 from "@assets/EzyStore/Products/Poduct_3.webp";

const promotions = [
  {
    title: "FEEL THE MUSIC",
    subtitle: "WITH",
    description: "STEREO AIRPODS",
    image: Product1,
    background: "bg-black",
  },
  {
    title: "GET",
    subtitle: "HOT DEALS",
    description: "ON THE GADGET",
    image: Product2,
    background: "bg-black",
  },
  {
    title: "CATCH",
    subtitle: "BIG DEALS",
    description: "ON THE WATCHES",
    image: Product3,
    background: "bg-black",
  },
];

const Features = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-16" ref={ref}>
        {promotions.map((promo, index) => (
          <motion.div
            key={index}
            className={`${promo.background} text-white p-6 rounded-lg relative overflow-hidden aspect-[4/2.25]`}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative z-10 ">
              <h3 className="text-[16px] leading-4 mb-2">{promo.title}</h3>
              <p className="text-[20px] font-semibold mb-2">{promo.subtitle}</p>
              <p className="text-[16px] leading-4">{promo.description}</p>
            </div>
            <motion.img
              src={promo.image || "/placeholder.svg"}
              alt={promo.title}
              className="object-cover mt-[-50px] opacity-75 w-full h-[150px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
