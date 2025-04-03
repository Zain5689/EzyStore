import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search, Star } from "lucide-react";
import Product1 from "@assets/EzyStore/Products/Poduct_4.webp";
import Product2 from "@assets/EzyStore/Products/Poduct_5.webp";
import Product3 from "@assets/EzyStore/Products/Poduct_6.webp";
import Product4 from "@assets/EzyStore/Products/Poduct_7.webp";
import Product5 from "@assets/EzyStore/Products/Poduct_8.webp";
const productImages = [Product1, Product2, Product3, Product4, Product5];
import { motion } from "framer-motion";

const productsData = [
  {
    id: 1,
    name: "Casual Footwear for Men - Black",
    price: "$150",
    image: productImages[0],
    rating: 4.7,
    stock: 50,
    category: "Electronics & gadgets",
  },
  {
    id: 2,
    name: "Microsoft Office 2019 Professional",
    price: "$29.7",
    oldPrice: "$30",
    discount: "-1 %",
    image: productImages[1],

    category: "Electronics & gadgets",
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max 256GB (HK)",
    price: "$475",
    oldPrice: "$500",
    discount: "-5 %",
    image: productImages[2],
    category: "Software & Games",
  },
  {
    id: 4,
    name: "Apple iPhone 7 Orange 256GB Storage",
    price: "$255",
    image: productImages[3],
    category: "Headphone & Speaker",
  },
  {
    id: 5,
    name: "Nikon AF-S DX NIKKOR 18-140mm f/3.5",
    price: "$199",
    oldPrice: "$250",
    image: productImages[4],
    category: "Camera & Accessories",
  },
  {
    id: 6,
    name: "Casual Footwear for Men - Black",
    price: "$150",
    image: productImages[0],
    rating: 4.7,
    stock: 50,
    category: "Camera & Accessories",
  },
  {
    id: 7,
    name: "Microsoft Office 2019 Professional",
    price: "$29.7",
    oldPrice: "$30",
    discount: "-1 %",
    image: productImages[1],

    category: "Headphone & Speaker",
  },
  {
    id: 8,
    name: "iPhone 14 Pro Max 256GB (HK)",
    price: "$475",
    oldPrice: "$500",
    discount: "-5 %",
    image: productImages[2],
    category: "Electronics & gadgets",
  },
  {
    id: 9,
    name: "Apple iPhone 7 Orange 256GB Storage",
    price: "$255",
    image: productImages[3],
    category: "Furniture",
  },
  {
    id: 10,
    name: "Nikon AF-S DX NIKKOR 18-140mm f/3.5",
    price: "$199",
    oldPrice: "$250",
    image: productImages[4],
    category: "Flash Sale",
  },
  {
    id: 11,
    name: "Casual Footwear for Men - Black",
    price: "$150",
    image: productImages[0],
    rating: 4.7,
    stock: 50,
    category: "On Sale",
  },
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([30, 1000]);
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const itemsPerPage = 8;
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  // Filter products
  let filteredProducts = productsData.filter((product) => {
    const productPrice = parseFloat(product.price.replace("$", ""));
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" ||
        product.category === category ||
        (category === "On Sale" && product.discount)) &&
      productPrice >= priceRange[0] &&
      productPrice <= priceRange[1]
    );
  });

  // Sorting products
  if (sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating-desc") {
    filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categories = [
    "All",
    "Electronics & gadgets",
    "Fashion & Clothing",
    "Interior & Furniture",
    "Software & Games",
    "Smart Watch",
    "Camera & Accessories",
    "Headphone & Speaker",
  ];
  const categories_1 = ["All", "Flash Sale", "On Sale"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      variants={containerVariants}
      className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 "
    >
      {/* Search and Sort */}
      <motion.div
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          opacity: 1,
          transition: { duration: 0.2 },
        }}
        className="flex flex-col sm:flex-row justify-between  mb-6"
      >
        <div className="relative  mb-2">
          <input
            type="text"
            placeholder="Search your keyword"
            className="w-full pl-4 pr-12 py-3 border border-[#EDEDED] "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="absolute  top-1/2 -translate-y-1/2  bg-[#CC7700] transition-colors text-[#ffff] py-3.5 px-4 right-0 ">
            <Search size={20} />
          </button>
        </div>
        <select
          className="px-4 py-3  border border-[#EDEDED] rounded-sm cursor-pointer appearance-none text-[#495057] focus:border-none mb-2"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Low to High</option>
          <option value="price-desc">High to Low</option>
          <option value="rating-desc">Highest Rated</option>
        </select>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden px-4 py-2 bg-[#CC7700] text-white rounded-lg hover:bg-[#CC7700] transition-colors"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row gap-10"
      >
        {/* Sidebar */}
        <div className={`sm:w-72 ${showFilters ? "block" : "hidden sm:block"}`}>
          <div className="bg-white rounded-xl border border-[#EDEDED] mb-5 p-6 ">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`w-full text-left px-4 cursor-pointer  rounded-lg transition-all ${
                    category === cat ? "text-[#CC7700]" : " text-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl border border-[#EDEDED] p-6"
          >
            <div className="space-y-2">
              {categories_1.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="sale-category"
                    value={cat}
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                    className="accent-[#CC7700]"
                  />
                  <span
                    className={`transition-all ${
                      category === cat
                        ? "text-[#CC7700] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-8 border border-[#EDEDED] p-2"
          >
            <h3 className="text-lg font-semibold mb-4">Price Range</h3>
            <input
              type="range"
              min="30"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([30, Number(e.target.value)])}
              className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-[#CC7700]"
            />
            <div className="flex flex-col mt-2  text-sm text-gray-600">
              <span className="border border-[#EEEEEE] mb-2 py-2 px-4">
                ${priceRange[0]}
              </span>
              <span className="border border-[#EEEEEE] mb-2 py-2 px-4">
                ${priceRange[1]}
              </span>
            </div>
            <button
              onClick={() => setCurrentPage(1)}
              className=" mt-4 bg-[#CC7700] text-white px-6 py-2  hover:bg-[#CC7700] transition-colors"
            >
              Filter
            </button>
          </motion.div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="border border-[#EDEDED] px-4 rounded-lg sm:h-[350px] h-[370px] relative group overflow-hidden cursor-pointer"
                onClick={() =>
                  navigate(`/EzyStore/product/${product.id}`, {
                    state: { product },
                  })
                } // تمرير بيانات المنتج
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative pt-[100%]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                <div className="p-4">
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                          fill={
                            i < Math.floor(product.rating)
                              ? "currentColor"
                              : "currentColor"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#CC7700] text-sm font-semibold">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === i + 1
                      ? "bg-[#CC7700] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Shop;
