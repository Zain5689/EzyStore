import { motion } from "framer-motion";
import Template1 from "@assets/Templates/template1.webp";
import Template2 from "@assets/Templates/template2.webp";
import Template3 from "@assets/Templates/template3.webp";

const templates = [
  {
    title: "Agency",
    image: Template1,
  },
  {
    title: "IT (Dark)",
    image: Template3,
  },
  {
    title: "Ecommerce",
    image: Template2,
  },
];

const OurTemplate = () => {
  return (
    <section className="bg-[#CC770014] py-16 relative text-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-[#CC7700] text-sm uppercase font-semibold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Creative & User Friendly Design
        </motion.p>

        <motion.h2
          className="md:text-[42px] text-[32px] font-bold text-[#0C0528] mt-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          See Our Modern Template
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {templates.map((template, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-4"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <img
                src={template.image}
                alt={template.title}
                className="rounded-2xl p-2 object-cover h-[400px] w-[416px]"
              />
              <h3 className="text-[24px] mt-4 text-[#0C0528]">
                {template.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="mt-10 bg-[#CC7700] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#AA5E00] transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          More Templates
        </motion.button>
      </div>
    </section>
  );
};

export default OurTemplate;
