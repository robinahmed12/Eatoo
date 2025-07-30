"use client";

import { useEffect } from "react";
import StatCard from "./StatCard";

export default function TrustedSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
        });
      });
    }
  }, []);

  const stats = [
    {
      icon: "👥",
      count: 50000,
      label: "Happy Customers",
      suffix: "+",
    },
    {
      icon: "🍽️",
      count: 1200,
      label: "Partner Restaurants",
      suffix: "+",
    },
    {
      icon: "📦",
      count: 250000,
      label: "Orders Delivered",
      suffix: "+",
    },
    {
      icon: "🏙️",
      count: 45,
      label: "Cities Served",
      suffix: "+",
    },
  ];

  const trustedCompanies = [
    { name: "FoodCorp", logo: "🍔" },
    { name: "QuickBite", logo: "⚡" },
    { name: "TasteMakers", logo: "👨‍🍳" },
    { name: "FreshEats", logo: "🥗" },
    { name: "SpiceRoute", logo: "🌶️" },
    { name: "CrispyCorner", logo: "🍟" },
  ];

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#EDF6F9" }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-100 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-100 to-transparent rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm mb-6">
            <span
              className="text-sm font-semibold"
              style={{ color: "#52B788" }}
            >
              ✨ TRUSTED WORLDWIDE
            </span>
          </div>

          <h2
            className="text-4xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
            style={{ color: "#1D3557" }}
          >
            Trusted by Industry
            <br />
            <span style={{ color: "#E63946" }}>Leaders</span>
          </h2>

          <p
            className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#1D3557" }}
          >
            Join thousands of restaurants and customers who trust MealDash to
            deliver exceptional dining experiences
          </p>
        </div>

        {/* Company Logos Section */}
        <div className="mb-24" data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {trustedCompanies.map((company, index) => (
              <div
                key={company.name}
                className="group flex flex-col items-center p-6 lg:p-8 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl lg:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <span
                  className="text-sm lg:text-base font-bold text-center"
                  style={{ color: "#1D3557" }}
                >
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3
            className="text-3xl lg:text-5xl font-black mb-6"
            style={{ color: "#1D3557" }}
          >
            Our Impact in
            <span style={{ color: "#E63946" }}> Numbers</span>
          </h3>
          <p
            className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#1D3557" }}
          >
            See how MealDash is revolutionizing the food delivery experience
            across the globe with real results
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              count={stat.count}
              label={stat.label}
              suffix={stat.suffix}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <button
              className="group relative px-8 py-4 rounded-2xl text-white font-bold text-lg lg:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              style={{ backgroundColor: "#E63946" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <span>Join Our Growing Community</span>
                <svg
                  className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300"
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
              </div>
            </button>

            <div
              className="flex items-center text-sm lg:text-base"
              style={{ color: "#1D3557" }}
            >
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white"></div>
              </div>
              <span className="font-semibold">
                Join 50,000+ satisfied customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
