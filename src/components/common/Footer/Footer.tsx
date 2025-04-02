import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import Logo from "@assets/Icons/Logo.webp";

const USEFUL_LINKS = [
  { label: "Our Blogs", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "About Us", href: "#" },
] as const;

const SOCIAL_LINKS = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
] as const;

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <motion.footer
      className="bg-[#FF6B6B14] pt-16 pb-8"
      role="contentinfo"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.4, ease: "easeInOut" }}
          >
            {/* Logo and Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              <a href="/" className="flex items-center gap-2">
                <img
                  src={Logo}
                  width={200}
                  height={40}
                  className="object-contain"
                />
              </a>
              <p className="text-[#0C0528] text-sm leading-relaxed">
                We are Team "Ala Allah", working on a project. Honestly, no one
                knows anything about it, but everything is in God's hands.
              </p>
            </motion.div>

            {/* Useful Links */}
            <motion.nav
              aria-label="Footer Navigation"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-3">
                {USEFUL_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[#0C0528] hover:text-[#CC7700] transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="not-italic space-y-4">
                {[
                  { Icon: MapPin, text: "Minya El-Qamh, Ash Sharqiyah, Egypt" },
                  {
                    Icon: Phone,
                    text: "+201208801371",
                    href: "tel:+201208801371",
                  },
                  {
                    Icon: Mail,
                    text: "contact@example.com",
                    href: "mailto:contact@example.com",
                  },
                ].map(({ Icon, text, href }, index) => (
                  <motion.div
                    className="flex items-center gap-3"
                    key={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    <button className="bg-[#CC7700] py-1.5 p-2 rounded-[5px]">
                      <Icon className="w-5 h-5 text-[#fff]" />
                    </button>
                    {href ? (
                      <a
                        href={href}
                        className="text-[#0C0528] text-sm hover:text-[#CC7700] transition-colors duration-200"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="text-[#0C0528] text-sm">{text}</p>
                    )}
                  </motion.div>
                ))}
              </address>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-[#0C0528] text-sm mb-4">
                Get latest updates first
              </p>
              <motion.form
                onSubmit={handleSubscribe}
                className="flex bg-white p-1 w-[300px] border border-[#EAEAEA] rounded-[5px]"
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-2 text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0"
                  required
                  aria-label="Email for newsletter"
                />
                <motion.button
                  type="submit"
                  className="bg-[#CC7700] text-white rounded-lg px-4 py-2 flex items-center justify-center border border-[#FF6B6B80]"
                  whileHover={{ scale: 1.1 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>

          {/* Social Links & Copyright */}
          <motion.div className="mt-16 pt-4 border-t border-dotted border-[#545454] flex justify-center items-center text-center">
            <motion.div className="flex flex-col items-center gap-4">
              <motion.div className="flex items-center justify-center mb-4 gap-4">
                {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
                  <motion.a
                    key={name}
                    href={href}
                    className="w-8 h-8 rounded-full bg-[#CC770033] flex items-center justify-center text-[#CC7700] hover:bg-[#CC7700] hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
              <p className="text-[#0C0528] text-sm text-center">
                Copyright © {new Date().getFullYear()}. All rights reserved by
                Redman.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
