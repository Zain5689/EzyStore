import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Minus, Plus } from "lucide-react";
import { ProductDesc, RelatedProduct } from "@components/EzyStore";

// Define the types for the product object
interface Product {
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  images: string[];
  specs?: string[];
  types?: string[];
  colors?: string[];
  image?: string;
}

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product as Product; // Explicitly type the product

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedType, setSelectedType] = useState(product?.types?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const thumbnailVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  if (!product) {
    return (
      <p className="text-center text-gray-600 mt-10">Product not found!</p>
    );
  }

  return (
    <>
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 p-2 sm:p-4 md:p-8">
          {/* Thumbnails */}
          <motion.div
            className="md:col-span-1 flex md:flex-col overflow-x-auto md:overflow-visible space-x-3 sm:space-x-4 md:space-x-0 md:space-y-4 pb-4 md:pb-0"
            variants={containerVariants}
          >
            <div className="flex md:flex-col gap-3 sm:gap-4">
              {Array.isArray(product?.images) && product.images.length > 0 ? (
                product.images.map((image: string, index: number) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 rounded-lg overflow-hidden transition ${
                      selectedImage === index
                        ? "border-[#CC7700]"
                        : "border-gray-300"
                    }`}
                    variants={thumbnailVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) =>
                        (e.currentTarget.src = "/placeholder.svg")
                      }
                    />
                  </motion.button>
                ))
              ) : (
                <p className="text-gray-500">No images available</p>
              )}
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={
                    product.images?.[selectedImage] ||
                    product.image ||
                    "/placeholder.svg"
                  }
                  alt={product.name}
                  className="w-full rounded-lg"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="md:col-span-6 space-y-3 sm:space-y-4"
            variants={containerVariants}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-[42px] font-medium text-[#000000]"
              variants={itemVariants}
            >
              {product.name}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-[#9F9F9F]"
              variants={itemVariants}
            >
              US. {product.price}
            </motion.p>

            <motion.div
              className="flex items-center gap-2 flex-wrap"
              variants={itemVariants}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? "#FFB800" : "none"}
                    className="text-[#FFB800] mx-0.5 sm:mx-1"
                  />
                ))}
              </div>
              <span className="text-[#9F9F9F] text-sm sm:text-base md:text-[20px]">
                <span className="mx-2 sm:mx-4">|</span> {product.reviewCount}{" "}
                Customer Review
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-sm sm:text-base"
            >
              <p>
                SIM Card: Single SIM (Nano-SIM)
                <br />
                Screen: 6.9 inches, 1320 x 286 pixels <br />
                RAM: 8GB <br />
                Internal memory: 1TB <br />
                Rear Camera: Triple: 48 MP + 12 MP + 48 MP <br />
                Selfie Camera: 12 MP <br />
                Color: Black Titanium
              </p>
            </motion.div>

            <motion.div
              className="text-xs sm:text-sm text-gray-600 space-y-1 md:space-y-2"
              variants={itemVariants}
            >
              {product.specs?.map((spec: string, index: number) => (
                <p key={index}>{spec}</p>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-600 mb-2">Type</p>
              <div className="flex gap-2 flex-wrap">
                {product.types?.map((type: string) => (
                  <motion.button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 sm:px-4 py-1 rounded text-sm sm:text-base ${
                      selectedType === type
                        ? "bg-[#CC7700] text-white"
                        : "bg-[#F5F5F5] text-gray-600"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {type}
                  </motion.button>
                ))}
              </div>
              <div className="mt-3">
                <ul className="flex gap-2 cursor-pointer">
                  <motion.li
                    className="text-white bg-[#B88E2F] p-2 rounded-md text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pro
                  </motion.li>
                  <motion.li
                    className="text-[16px] bg-[#F9F1E7] p-2 rounded-md text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Max
                  </motion.li>
                  <motion.li
                    className="text-[16px] bg-[#F9F1E7] p-2 rounded-md text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    S
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-600 mb-2">Color</p>
              <div className="flex gap-2">
                {product.colors?.map((color: string) => (
                  <motion.button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                      selectedColor === color ? "ring-2 ring-[#CC7700]" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <div className="flex gap-3 sm:gap-4 my-3 sm:my-4">
                <motion.span
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#96AEC6]"
                  whileHover={{ scale: 1.1 }}
                ></motion.span>
                <motion.span
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#000]"
                  whileHover={{ scale: 1.1 }}
                ></motion.span>
                <motion.span
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#616161]"
                  whileHover={{ scale: 1.1 }}
                ></motion.span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-10"
              variants={itemVariants}
            >
              <div className="flex border border-[#9F9F9F] rounded-2xl">
                <motion.button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 py-2 sm:py-4"
                  whileHover={{ backgroundColor: "#f5f5f5" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Minus size={16} />
                </motion.button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-10 sm:w-14 text-center text-sm sm:text-base"
                />
                <motion.button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-2 sm:py-4"
                  whileHover={{ backgroundColor: "#f5f5f5" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus size={16} />
                </motion.button>
              </div>

              <motion.button
                className="text-black rounded-2xl border px-3 sm:px-4 py-2 text-sm sm:text-base"
                whileHover={{ backgroundColor: "#CC7700", color: "white" }}
                whileTap={{ scale: 0.95 }}
              >
                Add To Cart
              </motion.button>

              <motion.button
                className="px-4 sm:px-6 border rounded-2xl text-sm sm:text-base"
                whileHover={{ backgroundColor: "#f5f5f5" }}
                whileTap={{ scale: 0.95 }}
              >
                + Compare
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <ProductDesc />
      <RelatedProduct />
    </>
  );
};

export default ProductDetails;
