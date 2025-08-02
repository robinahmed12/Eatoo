"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from "next/link"

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div
      className="min-h-screen  pt-10 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#EDF6F9" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#1D3557" }}>
                Delicious Meals
                <span className="block" style={{ color: "#E63946" }}>
                  Delivered Fast
                </span>
              </h1>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-4" style={{ color: "#52B788" }}>
                Eatoo
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ color: "#1D3557" }}
              >
                Experience the convenience of ordering your favorite meals from top restaurants. Fresh ingredients,
                expert preparation, and lightning-fast delivery right to your doorstep.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                style={{ backgroundColor: "#E63946" }}
              >
                Order Now
              </button>
              <Link href={"/AllMeals"}>
              
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                style={{
                  color: "#52B788",
                  borderColor: "#52B788",
                  backgroundColor: "transparent",
                }}
              >
                View Menu
              </button>
              </Link>
            </div>

            {/* Stats */}
            <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: "#E63946" }}>
                  500+
                </div>
                <div className="text-sm sm:text-base" style={{ color: "#1D3557" }}>
                  Restaurants
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: "#E63946" }}>
                  50K+
                </div>
                <div className="text-sm sm:text-base" style={{ color: "#1D3557" }}>
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: "#E63946" }}>
                  30min
                </div>
                <div className="text-sm sm:text-base" style={{ color: "#1D3557" }}>
                  Avg Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Delicious meal from Eatoo"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            <div
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl z-20"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#52B788" }}
                >
                  <span className="text-white text-xl">🍕</span>
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1D3557" }}>
                    Pizza Palace
                  </div>
                  <div className="text-xs" style={{ color: "#52B788" }}>
                    ⭐ 4.8 (120 reviews)
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl z-20"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#E63946" }}
                >
                  <span className="text-white text-xl">🚚</span>
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1D3557" }}>
                    Fast Delivery
                  </div>
                  <div className="text-xs" style={{ color: "#52B788" }}>
                    15-30 minutes
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div
              className="absolute inset-0 rounded-3xl -z-10 transform rotate-3"
              style={{ backgroundColor: "#52B788", opacity: 0.1 }}
            ></div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-16 lg:mt-24" data-aos="fade-up" data-aos-delay="500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EDF6F9" }}
              >
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1D3557" }}>
                Quality Food
              </h3>
              <p className="text-sm" style={{ color: "#1D3557", opacity: 0.7 }}>
                Fresh ingredients from trusted restaurants
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EDF6F9" }}
              >
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1D3557" }}>
                Fast Delivery
              </h3>
              <p className="text-sm" style={{ color: "#1D3557", opacity: 0.7 }}>
                Quick delivery to your location
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EDF6F9" }}
              >
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1D3557" }}>
                Easy Payment
              </h3>
              <p className="text-sm" style={{ color: "#1D3557", opacity: 0.7 }}>
                Multiple secure payment options
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EDF6F9" }}
              >
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#1D3557" }}>
                Easy Ordering
              </h3>
              <p className="text-sm" style={{ color: "#1D3557", opacity: 0.7 }}>
                Simple and intuitive interface
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
