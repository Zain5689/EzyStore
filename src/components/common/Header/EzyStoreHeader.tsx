import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  Globe,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@assets/Icons/Logo.webp";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { authLogout } from "@store/auth/authSlice";

const EzyStoreHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const languages = ["English", "Arabic"];
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const navigate = useNavigate();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="py-2 max-w-6xl mx-auto px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-[#CC7700]"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-[#CC7700]"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-[#CC7700]"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-[#CC7700]"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Behance"
              className="text-gray-600 hover:text-[#CC7700]"
            >
              <span className="sr-only">Behance</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 cursor-pointer"
              >
                <Globe className="h-7 w-7" />
                <span className="hidden sm:inline text-[14px]">English</span>
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setIsLanguageOpen(false)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 cursor-pointer"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Right Side - Language & Help */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="text-sm text-center sm:text-left">
              Need help?
              <a
                href="tel:+201208801371"
                className="hover:underline text-[#6A7783] mx-2"
              >
                Talk to an expert: +201208801371
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`bg-gray-100 py-4 px-4 ${
          isScrolled ? "shadow-md" : ""
        } transition-shadow duration-300`}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <Link to="/" className="w-[120px] sm:w-[170px]">
            <img src={Logo} alt="Logo" className="w-full h-auto" />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block flex-grow mx-4 lg:mx-16 py-1 bg-white rounded-md">
            <form onSubmit={handleSearch} className="flex justify-between">
              <div className="flex flex-1">
                <select className="appearance-none text-gray-700 py-2 px-4 rounded-l-md border-0 focus:outline-none focus:ring-0 text-sm">
                  <option>All</option>

                  <option>Products</option>

                  <option>Categories</option>
                </select>

                <input
                  type="text"
                  placeholder="Search your keyword..."
                  className="w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-0 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-gray-900 text-white p-2 rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="/EzyStore/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-[#CC7700] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </a>
            <button
              className="lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="px-4 flex flex-col lg:flex-row justify-between max-w-6xl mx-auto">
          <ul
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 py-4 lg:py-0`}
          >
            <li>
              <Link
                to={"/EzyStore"}
                className="block py-2 lg:py-4 text-sm font-medium text-gray-900 hover:text-[#CC7700] border-b border-transparent hover:border-[#CC7700] transition-colors"
              >
                HOME
              </Link>
            </li>
            <li className="relative group">
              <a
                href="/about"
                className="flex items-center py-2 lg:py-4 text-sm font-medium text-gray-900 hover:text-[#CC7700] border-b-2 border-transparent hover:border-[#CC7700] transition-colors"
              >
                ABOUT
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="lg:absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a
                  href="/about/company"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Company
                </a>
                <a
                  href="/about/team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Our Team
                </a>
                <a
                  href="/about/history"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  History
                </a>
              </div>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 lg:py-4 text-sm font-medium text-gray-900 hover:text-[#CC7700] border-b-2 border-transparent hover:border-[#CC7700] transition-colors"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="/portfolios"
                className="block py-2 lg:py-4 text-sm font-medium text-gray-900 hover:text-[#CC7700] border-b-2 border-transparent hover:border-[#CC7700] transition-colors"
              >
                PORTFOLIOS
              </a>
            </li>
            <li>
              <Link
                to={"shop"}
                className="block py-2 lg:py-4 text-sm font-medium text-gray-900 hover:text-[#CC7700] border-b-2 border-transparent hover:border-[#CC7700] transition-colors"
              >
                SHOP
              </Link>
            </li>
            <li>
              <a
                href="/blog"
                className="block py-2 lg:py-4 text-sm font-medium text-gray-900 hover:text-[#CC7700] border-b-2 border-transparent hover:border-[#CC7700] transition-colors"
              >
                BLOG
              </a>
            </li>
            <li>
              <Link
                to={"/EzyStore/contact"}
                className="block py-2 lg:py-4 text-sm font-medium text-gray-900 hover:text-[#CC7700] border-b-2 border-transparent hover:border-[#CC7700] transition-colors"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          {!accessToken ? (
            <>
              <Link
                to="/auth/login"
                className="bg-white my-4 lg:my-3 border border-[#222222] text-gray-800 px-4 text-sm h-8 p-2"
              >
                Login
              </Link>
            </>
          ) : (
            <div className="flex gap-2 items-center justify-center">
              <h2>{user?.name}</h2>
              <Link
                to="/auth/login"
                className="bg-white my-4 lg:my-3 border border-[#222222] text-gray-800 px-4 text-sm h-8 p-2"
                onClick={() => dispatch(authLogout())}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Search - Only visible on mobile */}
      <div className="md:hidden px-4 py-3 bg-white border-b border-gray-200">
        <form onSubmit={handleSearch} className="flex">
          <div className="relative flex-grow">
            <select className="appearance-none bg-gray-100 mb-2 text-center text-gray-700 py-2 px-1 rounded-l-md border-0 focus:outline-none focus:ring-0 text-sm ">
              <option>All</option>
              <option>Products</option>
              <option>Categories</option>
            </select>
            <div className="flex">
              <input
                type="text"
                placeholder="Search your keyword..."
                className="w-full py-3 px-2 bg-gray-100 text-gray-700 focus:outline-none focus:ring-0 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gray-900 h-fit text-white p-3 rounded-r-md hover:bg-gray-800 focus:outline-none"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default EzyStoreHeader;
