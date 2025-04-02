import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface ShippingPaymentStepProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  onCartClick: () => void;
}

const ShippingPaymentStep: React.FC<ShippingPaymentStepProps> = ({
  setPaymentMethod,
}) => {
  // Create refs for different sections
  const [shippingHeaderRef, shippingHeaderInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [shippingOptionsRef, shippingOptionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [paymentHeaderRef, paymentHeaderInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [paymentOptionsRef, paymentOptionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [paymentFormRef, paymentFormInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const shippingServices = [
    {
      name: "DHL Express",
      deliveryTime: "Jul 20 - Aug 03",
      cost: "Free shipping",
      selected: true,
    },
    {
      name: "FedEx",
      deliveryTime: "Jul 20 - Aug 03",
      cost: "$25.00",
      selected: false,
    },
    {
      name: "Express Expedition",
      deliveryTime: "Jul 20 - Aug 03",
      cost: "$35.00",
      selected: false,
    },
    {
      name: "JNE Express",
      deliveryTime: "Jul 20 - Aug 03",
      cost: "$35.00",
      selected: false,
    },
    {
      name: "POS Indonesia",
      deliveryTime: "Jul 20 - Aug 03",
      cost: "$35.00",
      selected: false,
    },
  ];

  const paymentMethods = [
    {
      name: "Credit Card",
      description:
        "You can use all credit card service. We can accept Visa and Master Card.",
      selected: false,
      icon: "/assets/image_d9149fcf.png",
    },
    {
      name: "Paypal",
      description:
        "Insert your account email of paypal. We will process your payment.",
      selected: false,
      icon: "/assets/paypal_icon.png",
    },
  ];

  // State to track t+
  // -+he active payment method
  const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(
    null
  );

  const handlePaymentMethodClick = (methodName: string) => {
    setActivePaymentMethod(methodName);
    setPaymentMethod(methodName); // Update the parent component's state
  };

  return (
    <div className="box-border flex justify-start items-start flex-col grow shrink basis-auto pb-10 sm:pb-20">
      <motion.div
        ref={shippingHeaderRef}
        className="box-border flex justify-start items-start flex-col gap-2 self-stretch grow-0 shrink-0 basis-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={
          shippingHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-2xl sm:text-[32px] font-extrabold text-left text-[#2f302c] self-stretch grow-0 shrink-0 basis-auto m-0 p-0"
          initial={{ opacity: 0, y: 10 }}
          animate={
            shippingHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          SHIPPING SERVICE
        </motion.p>
        <motion.p
          className="text-sm sm:text-base font-medium text-left text-[#7e7f7c] self-stretch grow-0 shrink-0 basis-auto mb-4 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={shippingHeaderInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose one best shipping service across your needs.
        </motion.p>
      </motion.div>

      <motion.div
        ref={shippingOptionsRef}
        className="box-border flex justify-start items-start flex-col gap-2 self-stretch grow-0 shrink-0 basis-auto my-5 sm:my-10"
        initial={{ opacity: 0 }}
        animate={shippingOptionsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {shippingServices.map((service, index) => (
          <motion.div
            key={index}
            className={`box-border flex justify-start items-center flex-row gap-3 sm:gap-9 self-stretch grow-0 shrink-0 basis-auto px-3 sm:px-5 py-2 ${
              service.selected ? "bg-[#cc7700]" : "bg-[#f6f6f6]"
            }`}
            initial={{ opacity: 0, x: -30 }}
            animate={
              shippingOptionsInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -30 }
            }
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1,
              ease: "easeOut",
            }}
          >
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 flex grow-0 shrink-0 basis-auto box-border ${
                service.selected ? "stroke-white" : "stroke-[#2F302C]"
              }`}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby={`shipping-${index}-label`}
              >
                <title id={`shipping-${index}-label`}>{service.name}</title>
                <g xmlns="http://www.w3.org/2000/svg">
                  <rect
                    height="18.5"
                    width="18.5"
                    rx="9.25"
                    stroke={service.selected ? "white" : "#2F302C"}
                    strokeWidth="1.5"
                    x="2.75"
                    y="2.75"
                  />
                  {service.selected && (
                    <circle cx="12" cy="12" fill="white" r="6" />
                  )}
                </g>
              </svg>
            </div>
            <div className="box-border flex justify-start items-start flex-col gap-1 sm:gap-2 grow shrink basis-auto">
              <p
                className="text-base sm:text-[20px] font-extrabold text-left self-stretch grow-0 shrink-0 basis-auto m-0 p-0"
                style={{ color: service.selected ? "white" : "#2f302c" }}
              >
                {service.name}
              </p>
              <p
                className="text-xs sm:text-sm font-medium text-left self-stretch grow-0 shrink-0 basis-auto m-0 p-0"
                style={{ color: service.selected ? "#f6f6f6" : "#7e7f7c" }}
              >
                Estimated delivery time: {service.deliveryTime}
              </p>
            </div>
            <p
              className="text-sm sm:text-base font-bold grow-0 shrink-0 basis-auto m-0 p-0"
              style={{ color: service.selected ? "white" : "#2f302c" }}
            >
              {service.cost}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="border-t-neutral-300 h-px self-stretch grow-0 shrink-0 basis-auto box-border border-t border-solid"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={
          shippingOptionsInView
            ? { opacity: 1, scaleX: 1 }
            : { opacity: 0, scaleX: 0 }
        }
        transition={{
          duration: 0.5,
          delay: 0.4 + shippingServices.length * 0.1,
          originX: 0,
        }}
      />

      <motion.div
        ref={paymentHeaderRef}
        className="box-border flex justify-start items-start flex-col gap-4 sm:gap-9 self-stretch grow-0 shrink-0 basis-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={
          paymentHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.p
          className="text-2xl sm:text-[32px] font-extrabold text-left text-[#2f302c] self-stretch grow-0 shrink-0 basis-auto m-0 p-0 mt-6 sm:mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={
            paymentHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          PAYMENT METHOD
        </motion.p>
        <motion.p
          className="text-sm sm:text-base font-medium text-left text-[#7e7f7c] self-stretch grow-0 shrink-0 basis-auto m-0 p-0 mt-[-10px] sm:mt-[-20px] mb-3 sm:mb-5"
          initial={{ opacity: 0 }}
          animate={paymentHeaderInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Choose what service you want for your transaction
        </motion.p>
      </motion.div>

      <motion.div
        ref={paymentOptionsRef}
        className="box-border flex flex-col sm:flex-row justify-start items-start gap-4 self-stretch grow-0 shrink-0 basis-auto"
        initial={{ opacity: 0 }}
        animate={paymentOptionsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {paymentMethods.map((method, index) => (
          <motion.div
            key={index}
            className={`box-border flex justify-start items-center flex-row gap-3 sm:gap-5 grow shrink basis-auto px-3 sm:px-5 py-3 ${
              activePaymentMethod === method.name ? "bg-[#cc7700]" : ""
            }`}
            onClick={() => handlePaymentMethodClick(method.name)}
            role="button"
            aria-pressed={activePaymentMethod === method.name}
            initial={{ opacity: 0, y: 20 }}
            animate={
              paymentOptionsInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 flex grow-0 shrink-0 basis-auto box-border ${
                activePaymentMethod === method.name
                  ? "stroke-white"
                  : "stroke-[#2F302C]"
              }`}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby={`payment-${index}-label`}
              >
                <title id={`payment-${index}-label`}>{method.name}</title>
                <g xmlns="http://www.w3.org/2000/svg">
                  <rect
                    height="18.5"
                    width="18.5"
                    rx="9.25"
                    stroke={
                      activePaymentMethod === method.name ? "white" : "#2F302C"
                    }
                    strokeWidth="1.5"
                    x="2.75"
                    y="2.75"
                  />
                  {activePaymentMethod === method.name && (
                    <circle cx="12" cy="12" fill="white" r="6" />
                  )}
                </g>
              </svg>
            </div>
            <div className="box-border flex justify-start items-start flex-col gap-2 sm:gap-3 grow shrink basis-auto">
              <p
                className="text-lg sm:text-xl font-extrabold text-left self-stretch grow-0 shrink-0 basis-auto m-0 p-0"
                style={{
                  color:
                    activePaymentMethod === method.name ? "white" : "#2f302c",
                }}
              >
                {method.name}
              </p>
              <p
                className="text-xs sm:text-sm font-medium text-left self-stretch grow-0 shrink-0 basis-auto m-0 p-0"
                style={{
                  color:
                    activePaymentMethod === method.name ? "#f6f6f6" : "#7e7f7c",
                }}
              >
                {method.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        ref={paymentFormRef}
        className="box-border flex justify-start items-start flex-col gap-5 sm:gap-9 self-stretch grow-0 shrink-0 basis-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={
          paymentFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.p
          className="text-lg sm:text-xl font-bold text-left text-[#2f302c] self-stretch grow-0 shrink-0 basis-auto m-0 p-0 mt-6 sm:mt-11"
          initial={{ opacity: 0 }}
          animate={paymentFormInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Provide your information
        </motion.p>

        <motion.div
          className="box-border flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-2 self-stretch grow-0 shrink-0 basis-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={
            paymentFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.input
            placeholder="Your Name"
            type="text"
            className="border-b-neutral-300 h-11 w-full sm:min-w-0 text-sm sm:text-base font-medium box-border grow shrink basis-auto pl-0 border-b border-solid text-[#7e7f7c] focus:border-black focus:text-black outline-none"
            aria-label="Your Name"
            initial={{ opacity: 0, x: -20 }}
            animate={
              paymentFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.5, delay: 0.8 }}
          />

          <motion.input
            placeholder="Card number"
            type="text"
            className="border-b-neutral-300 h-11 w-full sm:min-w-0 text-sm sm:text-base font-medium box-border grow shrink basis-auto pl-0 border-b border-solid text-[#7e7f7c] focus:border-black focus:text-black outline-none"
            aria-label="Card number"
            initial={{ opacity: 0, x: -20 }}
            animate={
              paymentFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.5, delay: 0.9 }}
          />
        </motion.div>

        <motion.div
          className="box-border flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-5 self-stretch grow-0 shrink-0 basis-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={
            paymentFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <motion.input
            placeholder="Month"
            type="text"
            className="border-b-neutral-300 h-11 w-full sm:min-w-0 text-sm sm:text-base font-medium box-border grow shrink basis-auto pl-0 border-b border-solid text-[#7e7f7c] focus:border-black focus:text-black outline-none"
            aria-label="Expiration month"
            initial={{ opacity: 0, x: -20 }}
            animate={
              paymentFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.5, delay: 1.1 }}
          />
          <motion.input
            placeholder="Year"
            type="text"
            className="border-b-neutral-300 h-11 w-full sm:min-w-0 text-sm sm:text-base font-medium box-border grow shrink basis-auto pl-0 border-b border-solid text-[#7e7f7c] focus:border-black focus:text-black outline-none"
            aria-label="Expiration year"
            initial={{ opacity: 0, x: -20 }}
            animate={
              paymentFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.input
            placeholder="CVV"
            type="text"
            className="border-b-neutral-300 h-11 w-full sm:min-w-0 text-sm sm:text-base font-medium box-border grow shrink basis-auto pl-0 border-b border-solid text-[#7e7f7c] focus:border-black focus:text-black outline-none"
            aria-label="CVV"
            initial={{ opacity: 0, x: -20 }}
            animate={
              paymentFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.5, delay: 1.3 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShippingPaymentStep;
