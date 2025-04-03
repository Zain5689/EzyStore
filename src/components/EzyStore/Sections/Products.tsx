import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import bg2 from "@assets/EzyStore/Icons/bg-2.webp";
import Product1 from "@assets/EzyStore/Products/Poduct_4.webp";
import Product2 from "@assets/EzyStore/Products/Poduct_5.webp";
import Product3 from "@assets/EzyStore/Products/Poduct_6.webp";

const products = [
  {
    id: 1,
    name: "Casual Footwear",
    price: "$150",
    image: Product1,
  },
  {
    id: 2,
    name: "Microsoft Office 2019",
    price: "$29.7",
    oldPrice: "$30",
    discount: "-1%",
    image: Product2,
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max",
    price: "$475",
    oldPrice: "$500",
    discount: "-5%",
    image: Product3,
  },
];

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title }) => (
  <motion.div
    className="w-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <span className="text-[#CC7700]">●</span> {title}
      </h2>
      <div className="flex gap-2">
        <button className="w-8 h-8 flex items-center justify-center bg-[#CC7700] text-white rounded">
          <ChevronLeft size={18} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-[#CC7700] text-white rounded">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="border border-gray-200 p-4 rounded-lg relative group ">
            {product.discount && (
              <div className="absolute top-2 right-2 bg-[#CC7700] text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </div>
            )}
            <div className="flex justify-between">
              <div className="flex justify-center  mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold ">{product.name}</h3>
                <div className="flex  mt-1 text-yellow-500">
                  <Star size={14} />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1">
                    <span className="text-[#CC7700] text-[14px] font-bold">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button>
                    <Heart
                      size={16}
                      className="text-gray-400 hover:text-red-500"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className=" p-6 text-white text-center rounded-lg mb-6"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100%",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="mt-4 mb-2 bg-[#CC7700] text-black px-2 py-2 rounded-sm">
            CATCH{" "}
          </button>
          <p className="text-[14px] mt-2">BIG DEALS</p>
          <h2 className="text-[24px] font-bold text-[#CC7700]">
            ON THE <br /> WATCHES
          </h2>
          <button className="mt-4 bg-white text-black px-5 py-3 rounded-sm hover:bg-gray-200">
            Shop Now
          </button>
        </motion.div>
        <div className="col-span-3 flex flex-col md:flex-row gap-6">
          <Section title="Top Rated Items" />
          <Section title="Best Seller Items" />
          <Section title="Special Items" />
        </div>
      </div>
    </div>
  );
};

export default Products;
