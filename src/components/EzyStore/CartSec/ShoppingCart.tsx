"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, CreditCard, Eye } from "lucide-react";
import ShoppingCartStep from "./ShoppingCartStepProps";
import CustomerInfoStep from "./CustomerInfoStep";
import ReviewStep from "./ReviewStep";
import ShippingPaymentStep from "./ShippingPaymentStep";
import Product1 from "@assets/EzyStore/Products/Poduct_9.webp";
import BestCombined from "./BestCombined";
import WhyChooseUS from "./WhyChooseUS";
import OrderSummary from "./OrderSummary";

interface CartItem {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  colors: string[];
  quantity: number;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  zipCode: string;
  address: string;
}

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "HEADBAND FOLDABLE STEREO",
    type: "Stereo",
    price: 35.73,
    image: Product1,
    colors: ["#3B82F6", "#EF4444", "#6B7280", "#581C87"],
    quantity: 1,
  },
  {
    id: 2,
    name: "HEADBAND FOLDABLE STEREO",
    type: "Stereo",
    price: 35.73,
    image: Product1,
    colors: ["#6B7280", "#E5E7EB", "#EF4444"],
    quantity: 3,
  },
  {
    id: 3,
    name: "HEADBAND FOLDABLE STEREO",
    type: "Stereo",
    price: 35.73,
    image: Product1,
    colors: ["#EF4444", "#065F46", "#581C87"],
    quantity: 1,
  },
];

const initialCustomerInfo: CustomerInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
  city: "",
  zipCode: "",
  address: "",
};

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);
  const [voucherCode, setVoucherCode] = useState("");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [customerInfo, setCustomerInfo] =
    useState<CustomerInfo>(initialCustomerInfo);
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card");
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts to trigger animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const updateQuantity = (id: number, increment: boolean) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.06;
  const total = subtotal - discount;

  const steps = [
    {
      icon: ShoppingBag,
      label: " CART",
      subLabel: "Review all your product and edit the number.",
    },
    {
      icon: User,
      label: "CUSTOMER INFORMATION",
      subLabel: "Add your name, phone number and address.",
    },
    {
      icon: CreditCard,
      label: "SHIPPING & PAYMENT",
      subLabel: "With many payment method included here.",
    },
    {
      icon: Eye,
      label: "REVIEW",
      subLabel: "View all your information before the confirmation.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof CustomerInfo
  ) => {
    setCustomerInfo({
      ...customerInfo,
      [field]: e.target.value,
    });
  };

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-16 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-2xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        SHOPING CART
      </motion.h1>
      <motion.p
        className="text-gray-500 text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BY
      </motion.p>

      {/* Progress Steps */}
      <div className="relative mb-12">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 " />
        <div className="relative flex flex-col sm:flex-row justify-start sm:justify-between gap-6 sm:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setCurrentStep(index)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-full ${
                  index <= currentStep
                    ? "bg-[#CC7700]"
                    : "bg-white border-2 border-gray-300"
                } flex items-center justify-center relative z-10`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={index === currentStep ? { scale: [1, 1.1, 1] } : {}}
                transition={
                  index === currentStep
                    ? { duration: 0.5, times: [0, 0.5, 1] }
                    : {}
                }
              >
                <step.icon
                  className={`w-6 h-6 ${
                    index <= currentStep ? "text-white" : "text-gray-400"
                  }`}
                />
              </motion.div>
              <div className="text-center mt-2">
                <p className={`font-semibold text-[16px] text-[#2F302C] `}>
                  {step.label}
                </p>
                <p className="text-[#7E7F7C] text-[14px] mt-1 text-center max-w-[200px]">
                  {step.subLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Step Content */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Shopping Cart */}
            {currentStep === 0 && (
              <motion.div
                key="cart"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ShoppingCartStep
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                />
              </motion.div>
            )}

            {/* Step 2: Customer Information */}
            {currentStep === 1 && (
              <motion.div
                key="customer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <CustomerInfoStep
                  customerInfo={customerInfo}
                  handleInputChange={handleInputChange}
                />
              </motion.div>
            )}

            {/* Step 3: Shipping & Payment */}
            {currentStep === 2 && (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ShippingPaymentStep
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                  onCartClick={(): void => {
                    throw new Error("Function not implemented.");
                  }}
                />
              </motion.div>
            )}

            {/* Step 4: Review */}
            {currentStep === 3 && (
              <motion.div
                key="review"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ReviewStep
                  customerInfo={customerInfo}
                  cartItems={cartItems}
                  notes={notes}
                  paymentMethod={paymentMethod}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column - Order Summary */}
        <motion.div
          className="bg-white p-6 m-5 border-l-none md:border-l md:border-[#D4D4D4]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {[1, 2, 3].includes(currentStep) && (
              <motion.div
                key="orderSummary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <OrderSummary />
              </motion.div>
            )}
          </AnimatePresence>

          {currentStep === 0 && (
            <motion.h2
              className="text-[#2F302C] text-[32px] font-bold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              ORDER SUMMARY
            </motion.h2>
          )}

          {currentStep === 0 && (
            <motion.p
              className="text-[#7E7F7C] mb-4 text-[16px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Apply your monthly voucher to get more discount!
            </motion.p>
          )}

          {currentStep === 0 && (
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <label className="block text-sm text-gray-600 mb-[-15px]">
                Your voucher code
              </label>
              <input
                type="text"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
                className="w-full border-b border-[#D4D4D4] px-3 mb-11"
              />
            </motion.div>
          )}

          <AnimatePresence>
            <motion.div
              className="space-y-6 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                className="flex justify-between"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              >
                <span>Price</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </motion.div>

              {currentStep >= 1 && (
                <motion.div
                  className="flex justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                >
                  <span>Shipping</span>
                  <span>-</span>
                </motion.div>
              )}

              <motion.div
                className="flex justify-between font-bold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.3 }}
              >
                <span className="font-normal">Discount 6%</span>-$
                {discount.toFixed(2)}
              </motion.div>

              <motion.div
                className="flex justify-between"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.4 }}
              >
                <span>Total Price</span>
                <span className="text-[#CE0000] font-bold">
                  ${total.toFixed(2)}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {currentStep === 0 && (
            <motion.textarea
              placeholder="Write your notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border-b border-[#D4D4D4] py-2 mb-12"
              rows={3}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          )}

          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <motion.button
              onClick={
                currentStep < steps.length - 1
                  ? handleContinue
                  : () => alert("Order Placed Successfully!")
              }
              className="w-full bg-[#CC7700] text-white py-2"
              whileHover={{ scale: 1.02, backgroundColor: "#b36b00" }}
              whileTap={{ scale: 0.98 }}
            >
              {currentStep < steps.length - 1
                ? currentStep === 0
                  ? "PROCEED TO CHECKOUT"
                  : "CONTINUE"
                : "PLACE ORDER"}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {currentStep === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          <WhyChooseUS />
          <BestCombined />
        </motion.div>
      )}

      {[1, 2, 3].includes(currentStep) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <WhyChooseUS />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ShoppingCart;
