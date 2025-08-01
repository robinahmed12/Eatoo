"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
        });
      });
    }

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Meals", href: "/AllMeals" },
    { name: "Dashboard", href: "/Dashboard" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* AOS CSS */}
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg backdrop-blur-md bg-opacity-95"
            : "bg-white shadow-sm"
        }`}
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 flex items-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <a
                href="/"
                className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent hover:from-red-500 hover:to-red-400 transition-all duration-300"
                style={{ color: "#E63946" }}
              >
                🍽️ Eatoo
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-300 group"
                  style={{ color: "#1D3557" }}
                  data-aos="fade-down"
                  data-aos-delay={200 + index * 100}
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "#52B788" }}
                  ></span>
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* CTA Button */}
              <UserInfo />

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-300"
                style={{ color: "#1D3557" }}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div
            className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100"
            style={{ backgroundColor: "#EDF6F9" }}
          >
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-white font-medium rounded-lg transition-all duration-300"
                style={{ color: "#1D3557" }}
                onClick={() => setIsMenuOpen(false)}
                data-aos="fade-up"
                data-aos-delay={100 + index * 50}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <button
                className="w-full flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: "#E63946" }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default NavBar;
