"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const benefits = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Get your favorite meals delivered to your doorstep in 30 minutes or less. We prioritize speed without compromising quality.",
      delay: 0,
    },
    {
      icon: "🥗",
      title: "Fresh Ingredients",
      description:
        "We source only the freshest, locally-grown ingredients to ensure every meal is nutritious and delicious.",
      delay: 100,
    },
    {
      icon: "🛒",
      title: "Easy Ordering",
      description:
        "Our intuitive platform makes ordering your favorite meals simple and hassle-free with just a few clicks.",
      delay: 200,
    },
    {
      icon: "💳",
      title: "Multiple Payment Options",
      description:
        "Pay your way with various secure payment methods including cards, digital wallets, and cash on delivery.",
      delay: 300,
    },
  ];

  return (
    <section
      className="py-16 pt-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#EDF6F9" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#1D3557" }}
          >
            Why Choose <span style={{ color: "#E63946" }}>Eatoo</span>?
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: "#52B788" }}
          ></div>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#1D3557" }}
          >
            Experience the perfect blend of convenience, quality, and taste with
            MealDash. Here's what makes us your ideal meal ordering partner.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={benefit.delay}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Icon Container */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#E63946" }}
                >
                  <span className="text-4xl">{benefit.icon}</span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3
                    className="text-2xl font-bold mb-4 group-hover:text-opacity-80 transition-colors duration-300"
                    style={{ color: "#1D3557" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#1D3557", opacity: 0.8 }}
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div
                  className="w-12 h-1 mx-auto mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "#52B788" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: "#E63946" }}
          >
            <span>Start Ordering Now</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Stats Section */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "500+", label: "Meals Delivered Daily" },
            { number: "25+", label: "Restaurant Partners" },
            { number: "4.8★", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#E63946" }}
              >
                {stat.number}
              </div>
              <div
                className="text-sm md:text-base font-medium"
                style={{ color: "#1D3557" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
