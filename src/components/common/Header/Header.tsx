import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@assets/Icons/Logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Templates", path: "/templates", hasDropdown: true },
    { name: "Listings", path: "/listings" },
    { name: "Pricing", path: "/pricing" },
    { name: "Pages", path: "/pages", hasDropdown: true },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const languages = ["English", "Arabic"];

  return (
    <div
      className={`fixed w-full z-50 bg-[#CC770014] transition-all duration-300 ${
        isScrolled ? "shadow-md bg-[#fff]" : ""
      }`}
    >
      <header className="container px-4 md:py-[15.5px] py-[18.5px] w-[80%] mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              height={40}
              className="object-contain md:w-[200px] w-[120px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className="text-sm font-medium text-gray-700 hover:text-orange-600"
                >
                  {link.name} {link.hasDropdown && <span>+</span>}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-orange-600"
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
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              to=""
              className="rounded-md bg-[#CC7700] px-4 py-2 text-sm font-medium text-white"
            >
              Login
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-orange-600"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-20 px-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-700 hover:text-orange-600"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t pt-4 mt-4">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="w-full flex items-center space-x-2 py-3 px-4 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  <Globe className="h-5 w-5" />
                  <span>Language</span>
                </button>
                {isLanguageOpen && (
                  <div className="pl-8">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setIsLanguageOpen(false)}
                        className="w-full text-left py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
                <Link
                  to=""
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-2 py-3 px-4 bg-[#CC7700] text-white text-center rounded-md "
                >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
