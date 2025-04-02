"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

interface CustomerInfoStepProps {
  customerInfo: CustomerInfo;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof CustomerInfo
  ) => void;
}

const CustomerInfoStep: React.FC<CustomerInfoStepProps> = ({
  customerInfo,
  handleInputChange,
}) => {
  // Create refs for different sections of the form
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl sm:text-[32px] text-[#2F302C] font-bold mb-2 sm:mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          YOUR INFORMATION
        </motion.h2>
        <motion.p
          className="text-[#7E7F7C] text-xs sm:text-[14px] mb-4 sm:mb-6"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Add your name, phone number, and address.
        </motion.p>
      </motion.div>

      <motion.div
        ref={formRef}
        initial={{ opacity: 0 }}
        animate={formInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { name: "firstName", placeholder: "First name" },
            { name: "lastName", placeholder: "Last name" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={
                formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <input
                type="text"
                value={customerInfo[item.name as keyof CustomerInfo]}
                onChange={(e) =>
                  handleInputChange(e, item.name as keyof CustomerInfo)
                }
                className="w-full border-b border-[#D4D4D4] px-2 sm:px-3 py-2 text-sm sm:text-base text-[#7E7F7C] outline-none transition-colors focus:border-[#2F302C]"
                placeholder={item.placeholder}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            { name: "email", type: "email", placeholder: "Email address" },
            { name: "phoneNumber", type: "tel", placeholder: "Phone number" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={
                formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <input
                type={item.type}
                value={customerInfo[item.name as keyof CustomerInfo]}
                onChange={(e) =>
                  handleInputChange(e, item.name as keyof CustomerInfo)
                }
                className="w-full border-b border-[#D4D4D4] px-2 sm:px-3 py-2 text-sm sm:text-base text-[#7E7F7C] outline-none transition-colors focus:border-[#2F302C]"
                placeholder={item.placeholder}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[
            { name: "country", placeholder: "Country" },
            { name: "city", placeholder: "City" },
            { name: "zipCode", placeholder: "ZIP Code" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={
                formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <input
                type="text"
                value={customerInfo[item.name as keyof CustomerInfo]}
                onChange={(e) =>
                  handleInputChange(e, item.name as keyof CustomerInfo)
                }
                className="w-full border-b border-[#D4D4D4] px-2 sm:px-3 py-2 text-sm sm:text-base text-[#7E7F7C] outline-none transition-colors focus:border-[#2F302C]"
                placeholder={item.placeholder}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <textarea
            value={customerInfo.address}
            onChange={(e) => handleInputChange(e, "address")}
            className="w-full border-b border-[#D4D4D4] px-2 sm:px-3 py-2 text-sm sm:text-base text-[#7E7F7C] outline-none transition-colors focus:border-[#2F302C]"
            rows={1}
            placeholder="Address details"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomerInfoStep;
