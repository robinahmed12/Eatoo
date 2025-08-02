"use client";

import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
          offset: 50,
        });
      });
    }
  }, []);

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],
    services: [
      { name: "Order Food", href: "/order" },
      { name: "Restaurant Partners", href: "/partners" },
      { name: "Delivery", href: "/delivery" },
      { name: "Catering", href: "/catering" },
      { name: "Gift Cards", href: "/gift-cards" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Track Order", href: "/track" },
      { name: "Refunds", href: "/refunds" },
      { name: "FAQ", href: "/faq" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "#",
    },
    
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "#",
    },
  ];

  const appStoreLinks = [
    {
      name: "App Store",
      icon: "🍎",
      text: "Download on the",
      subtext: "App Store",
      href: "#",
    },
    {
      name: "Google Play",
      icon: "📱",
      text: "Get it on",
      subtext: "Google Play",
      href: "#",
    },
  ];

  return (
    <footer style={{ backgroundColor: "#1D3557" }} className="text-white ">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2" data-aos="fade-up">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3">🍽️</div>
                <h2 className="text-2xl font-bold">Eatoo</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your favorite meals delivered fast and fresh. Connecting food
                lovers with the best restaurants in town since 2020.
              </p>

              {/* App Store Links */}
              <div className="space-y-3 mb-6">
                {appStoreLinks.map((app, index) => (
                  <a
                    key={app.name}
                    href={app.href}
                    className="flex items-center space-x-3 p-3 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors duration-300 group"
                  >
                    <span className="text-2xl">{app.icon}</span>
                    <div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {app.text}
                      </div>
                      <div className="text-sm font-semibold group-hover:text-white">
                        {app.subtext}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                    style={{ color: "#52B788" }}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3
                className="text-lg font-semibold mb-6"
                style={{ color: "#52B788" }}
              >
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3
                className="text-lg font-semibold mb-6"
                style={{ color: "#52B788" }}
              >
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3
                className="text-lg font-semibold mb-6"
                style={{ color: "#52B788" }}
              >
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3
                className="text-lg font-semibold mb-6"
                style={{ color: "#52B788" }}
              >
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm" data-aos="fade-right">
              © 2024 MealDash. All rights reserved. Made with ❤️ for food
              lovers.
            </div>
            <div
              className="flex items-center space-x-6 text-sm text-gray-400"
              data-aos="fade-left"
            >
              <span className="flex items-center">
                <span
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: "#52B788" }}
                ></span>
                Available 24/7
              </span>
              <span className="flex items-center">
                <span className="text-lg mr-1">🚚</span>
                Free delivery over $25
              </span>
              <span className="flex items-center">
                <span className="text-lg mr-1">⭐</span>
                4.8/5 Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
