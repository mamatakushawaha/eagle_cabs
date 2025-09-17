import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Clients", path: "/client" },
    { name: "Careers", path: "/careers" },
    { name: "Enquiry", path: "/enquiry" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex items-center justify-between px-4 sm:px-6 lg:px-16 py-3 sm:py-4 fixed top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex-shrink-0 w-24 h-9 sm:w-28 sm:h-10 md:w-32 md:h-12">
        <Link to="/">
          <img
            src={logo}
            alt="Eagle Cabs Logo"
            className={`w-full h-full object-contain transition-all duration-300 ${
              scrolled ? "" : ""
            }`}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium transition-colors duration-300">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `transition-all duration-300 text-sm xl:text-base ${
                scrolled
                  ? isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                  : isActive
                  ? "text-orange-500 font-semibold"
                  : "text-black hover:text-orange-300"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden lg:block">
        <button
          onClick={() => navigate("/contact")}
          className={`px-4 py-1.5 xl:px-6 xl:py-2 rounded-full font-semibold text-sm xl:text-lg transition-all duration-300 shadow-lg ${
            scrolled
              ? "bg-orange-500 text-white hover:bg-white hover:text-orange-500"
              : "bg-white text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className={`focus:outline-none ${scrolled ? "text-gray-700" : "text-yellow-600"}`}
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md flex flex-col items-center py-4 sm:py-6 space-y-3 sm:space-y-4 lg:hidden shadow-lg">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 text-base sm:text-lg hover:text-orange-500 transition-all duration-300"
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={() => { navigate("/contact"); setMobileMenuOpen(false); }}
            className="bg-orange-500 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-orange-500 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}