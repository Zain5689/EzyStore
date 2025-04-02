import React, { useState } from "react";
import { motion } from "framer-motion";
import Review from "@assets/EzyStore/Icons/rievew.webp";

interface ReviewStepProps {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
    city: string;
    zipCode: string;
    address: string;
  };
  cartItems: {
    id: number;
    name: string;
    type: string;
    price: number;
    image: string;
    colors: string[];
    quantity: number;
  }[];
  notes: string;
  paymentMethod: string;
}

const ReviewStep: React.FC<ReviewStepProps> = ({
  customerInfo,
  paymentMethod,
}) => {
  const [isEditingShipping, setIsEditingShipping] = useState(false);
  const [isEditingPayment, setIsEditingPayment] = useState(false);
  const [updatedCustomerInfo, setUpdatedCustomerInfo] = useState(customerInfo);
  const [updatedPaymentMethod, setUpdatedPaymentMethod] =
    useState(paymentMethod);

  const handleEditShipping = () => {
    setIsEditingShipping(true);
  };

  const handleEditPayment = () => {
    setIsEditingPayment(true);
  };

  const handleSaveShipping = () => {
    // Save the updated shipping information
    console.log("Updated Shipping Info:", updatedCustomerInfo);
    setIsEditingShipping(false);
  };

  const handleSavePayment = () => {
    // Save the updated payment information
    console.log("Updated Payment Method:", updatedPaymentMethod);
    setIsEditingPayment(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Shipping Information */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-[32px] text-[#2F302C] font-bold mb-3">
          SHIPPING INFORMATION
        </h2>
        <p className="text-sm mb-10 text-[#7E7F7C]">
          Please check before you finalize your order
        </p>
        <div className="bg-[#cc7700] text-white p-6 rounded-lg relative">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-bold">{`${updatedCustomerInfo.firstName} ${updatedCustomerInfo.lastName}`}</p>
              <p className="text-sm">{updatedCustomerInfo.phoneNumber}</p>
              <p className="text-sm">{`${updatedCustomerInfo.address}, ${updatedCustomerInfo.city}, ${updatedCustomerInfo.country} - ${updatedCustomerInfo.zipCode}`}</p>
            </div>
            <button className="text-white" onClick={handleEditShipping}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-square-pen"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>
            </button>
          </div>
          <hr className="my-3 border-white/40" />
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold mb-1">FedEx</p>
              <p className="text-sm">
                Estimated delivery time: March 10 - March 20
              </p>
            </div>
            <p className="font-bold text-sm">Free shipping</p>
          </div>
        </div>
      </motion.div>

      <hr className="my-10 border-gray-300" />

      {/* Payment Method */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[32px] font-bold mb-3 text-[#2F302C]">
          PAYMENT METHOD
        </h2>
        <p className="text-sm text-[#7E7F7C] mb-10">
          Please check before you finalize your order
        </p>
        <div className="bg-[#F6F6F6] p-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center gap-6 p-3 ">
            <img src={Review} alt={updatedPaymentMethod} className="w-10" />
            <div>
              <p className="font-bold">{updatedPaymentMethod}</p>
              <p className="text-sm text-gray-500">
                "**** 5118 • Expired 8/2025"
              </p>
            </div>
          </div>
          <button className="text-gray-500" onClick={handleEditPayment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-pen"
            >
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Edit Shipping Form */}
      {isEditingShipping && (
        <div className="mt-6">
          <h3 className="text-lg font-bold">Edit Shipping Information</h3>
          <input
            type="text"
            value={updatedCustomerInfo.firstName}
            onChange={(e) =>
              setUpdatedCustomerInfo({
                ...updatedCustomerInfo,
                firstName: e.target.value,
              })
            }
            placeholder="First Name"
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            value={updatedCustomerInfo.lastName}
            onChange={(e) =>
              setUpdatedCustomerInfo({
                ...updatedCustomerInfo,
                lastName: e.target.value,
              })
            }
            placeholder="Last Name"
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            value={updatedCustomerInfo.phoneNumber}
            onChange={(e) =>
              setUpdatedCustomerInfo({
                ...updatedCustomerInfo,
                phoneNumber: e.target.value,
              })
            }
            placeholder="Phone Number"
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            value={updatedCustomerInfo.address}
            onChange={(e) =>
              setUpdatedCustomerInfo({
                ...updatedCustomerInfo,
                address: e.target.value,
              })
            }
            placeholder="Address"
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            value={updatedCustomerInfo.city}
            onChange={(e) =>
              setUpdatedCustomerInfo({
                ...updatedCustomerInfo,
                city: e.target.value,
              })
            }
            placeholder="City"
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            value={updatedCustomerInfo.country}
            onChange={(e) =>
              setUpdatedCustomerInfo({
                ...updatedCustomerInfo,
                country: e.target.value,
              })
            }
            placeholder="Country"
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            value={updatedCustomerInfo.zipCode}
            onChange={(e) =>
              setUpdatedCustomerInfo({
                ...updatedCustomerInfo,
                zipCode: e.target.value,
              })
            }
            placeholder="Zip Code"
            className="border p-2 rounded mb-2 w-full"
          />
          <button
            onClick={handleSaveShipping}
            className="bg-[#cc7700] text-white p-2 rounded"
          >
            Save
          </button>
        </div>
      )}

      {/* Edit Payment Form */}
      {isEditingPayment && (
        <div className="mt-6">
          <h3 className="text-lg font-bold">Edit Payment Method</h3>
          <input
            type="text"
            value={updatedPaymentMethod}
            onChange={(e) => setUpdatedPaymentMethod(e.target.value)}
            placeholder="Payment Method"
            className="border p-2 rounded mb-2 w-full"
          />
          <button
            onClick={handleSavePayment}
            className="bg-[#cc7700] text-white p-2 rounded"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewStep;
