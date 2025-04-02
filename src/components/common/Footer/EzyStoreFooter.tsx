import { MapPin, Mail, Phone } from "lucide-react";
import Logo from "@assets/Icons/LogoFooter.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F1417] text-gray-300 py-10">
      <div className=" max-w-6xl mx-auto md:px-2  px-4 flex flex-wrap sm:flex justify-between gap-10">
        {/* Logo & About */}
        <div className="max-w-sm">
          <Link to="/" className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" loading="lazy" className="h-10" />
            <div className="text-[34px] text-white font-bold flex items-center">
              Ezy<span className="text-[#CC7700]">Store</span>
            </div>
          </Link>
          <p className="mt-4 text-sm text-[#6A7783] leading-relaxed line-clamp-4">
            We are Team "Ala Allah," working on a project. Honestly, no one
            knows anything about it, but everything is in God's hands.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "Terms & Conditions",
              "Privacy Policy",
              "Contact Us",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-[#CC7700] cursor-pointer text-[#6A7783] transition duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2 text-[#6A7783]">
              <MapPin className="text-[#6A7783] w-5 h-5" />
              <span>Minya El-Qamh, Ash Sharqiyah, Egypt</span>
            </li>
            <li className="flex items-center space-x-2 text-[#6A7783] mt-4">
              <Mail className="text-[#6A7783] w-5 h-5" />
              <span>support@gmail.com, contact@rangs.com</span>
            </li>
            <li className="flex items-center space-x-2 text-[#6A7783] mt-4">
              <Phone className="text-[#6A7783] w-5 h-5" />
              <span>+012 08801371, +201145209670</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-[#6A7783] mt-10 border-t border-gray-700 py-4">
        © {new Date().getFullYear()} all rights reserved Batman 2025
      </div>
    </footer>
  );
};

export default Footer;
