import React, { useState } from "react";
import { Layers, CircleCheck, Package } from "lucide-react";
import { motion } from "framer-motion";

type PlanFeature = {
  name: string;
  isAvailable: boolean;
};

type PricingPlan = {
  name: string;
  icon: JSX.Element;
  price: {
    Monthly: string;
    Yearly: string;
    Lifetime: string;
  };
  features: PlanFeature[];
};

type BillingCycle = "Monthly" | "Yearly" | "Lifetime";

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Startup",
    icon: <Layers className="w-8 h-8 text-[#0C0528]" />,
    price: {
      Monthly: "$9.99",
      Yearly: "$99.99",
      Lifetime: "$299.99",
    },
    features: [
      { name: "Custom Domain", isAvailable: false },
      { name: "Subdomain", isAvailable: false },
      { name: "Ecommerce", isAvailable: false },
      { name: "Reports with AI", isAvailable: false },
    ],
  },
  {
    name: "Growth",
    icon: <CircleCheck className="w-8 h-8 text-[#0C0528]" />,
    price: {
      Monthly: "$12.99",
      Yearly: "$129.99",
      Lifetime: "$399.99",
    },
    features: [
      { name: "Custom Domain", isAvailable: false },
      { name: "Subdomain", isAvailable: true },
      { name: "Ecommerce", isAvailable: false },
      { name: "Reports with AI", isAvailable: false },
    ],
  },
  {
    name: "Maturity",
    icon: <Package className="w-8 h-8 text-[#0C0528]" />,
    price: {
      Monthly: "$19.99",
      Yearly: "$199.99",
      Lifetime: "$599.99",
    },
    features: [
      { name: "Custom Domain", isAvailable: true },
      { name: "Subdomain", isAvailable: true },
      { name: "Ecommerce", isAvailable: true },
      { name: "Reports with AI", isAvailable: true },
    ],
  },
];

const BILLING_CYCLES: BillingCycle[] = ["Monthly", "Yearly", "Lifetime"];

const PricingPlans: React.FC = () => {
  const [activePlan, setActivePlan] = useState<BillingCycle>("Monthly");

  const handlePurchase = (planName: string) => {
    console.log(`Purchasing ${planName} plan with ${activePlan} billing`);
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto py-16 px-6"
      aria-labelledby="pricing-heading"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <p className="font-semibold text-[#CC7700] text-sm uppercase">
          Build Your Relationship With Us
        </p>
        <h2
          id="pricing-heading"
          className="md:text-[38px] text-[32px] font-bold mt-2 leading-tight text-[#0C0528]"
        >
          Choose Our Pricing Plan
        </h2>
        <p className="text-gray-500 mt-2">
          Curabitur non nulla sit amet nisl tempus lectus nulla porttitor
          <br />
          accumsan tincidunt.
        </p>
      </div>

      {/* Billing Cycle Toggle */}
      <div
        className="flex justify-center mt-6 bg-[#FF6B6B21] items-center p-3 gap-3 w-fit mx-auto rounded-[8px]"
        role="radiogroup"
        aria-label="Billing cycle selection"
      >
        {BILLING_CYCLES.map((cycle) => (
          <button
            key={cycle}
            className={`px-6 py-2  ${
              activePlan === cycle
                ? "bg-[#CC7700] text-white"
                : " text-gray-700"
            } rounded-md transition-all`}
            onClick={() => setActivePlan(cycle)}
            aria-pressed={activePlan === cycle}
            aria-label={`${cycle} billing cycle`}
          >
            {cycle}
          </button>
        ))}
      </div>

      {/* Pricing Cards with Motion */}
      <div
        className="grid md:grid-cols-3 gap-6 mt-10"
        role="list"
        aria-label="Pricing plans"
      >
        {PRICING_PLANS.map((plan, index) => (
          <motion.div
            key={plan.name}
            className="border border-[#EAEAEA] p-6 rounded-2xl transition-all"
            role="listitem"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 ">
              <div className="bg-[#FF6B6B21] text-[#0C0528] p-3 rounded-[7px] inline-block mb-4 mt-[-25px]">
                <span className="text-lg  font-bold">{plan.icon}</span>
              </div>
              <div className="rounded-lg inline-block mb-4">
                <span className="text-[24px] font-bold">{plan.name}</span>
              </div>
            </div>
            <p className="text-2xl font-bold">
              {plan.price[activePlan]}
              <span className="text-gray-500 text-sm">
                {activePlan !== "Lifetime"
                  ? ` / ${activePlan.toLowerCase()}`
                  : ""}
              </span>
            </p>
            <p className="font-semibold text-gray-900 mt-4">What's Included</p>

            <ul
              className="mt-3 space-y-2"
              aria-label={`Features included in ${plan.name} plan`}
            >
              {plan.features.map((feature) => (
                <li key={feature.name} className="flex space-x-2 mb-3">
                  <span
                    className={`rounded-full px-[5px] ${
                      feature.isAvailable
                        ? "bg-[#19D873] text-[#fff]"
                        : "bg-[#EB4C4C] text-[#fff]"
                    }`}
                    aria-hidden="true"
                  >
                    {feature.isAvailable ? "✔" : "✘"}
                  </span>
                  <span className="text-[#747474] text-[16px]">
                    {feature.name}
                  </span>
                  <span className="sr-only">
                    {feature.isAvailable ? "Included" : "Not included"}
                  </span>
                </li>
              ))}
              <a className="text-[#0C0528] text-[16px]">Show More +</a>
            </ul>
            <div className="flex gap-2">
              <button
                className="mt-6 bg-[#CC7700] text-white px-6 py-2 rounded-lg shadow-2xl"
                onClick={() => handlePurchase(plan.name)}
              >
                Trial
              </button>
              <button className="mt-6 text-[#CC7700] border border-[#CC7700] px-6 py-2 rounded-lg text-[16px]">
                Purchase
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PricingPlans;
