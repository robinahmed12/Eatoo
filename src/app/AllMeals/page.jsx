"use client";
import { useEffect, useState } from "react";
import useAxios from "@/hooks/useAxios";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AllMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    const fetchMeals = async () => {
      try {
        const res = await axiosInstance.get("/api/items");
        setMeals(res.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  
  

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#EDF6F9" }}
      >
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent mx-auto mb-4"
            style={{ borderColor: "#E63946" }}
          ></div>
          <p className="text-xl font-semibold" style={{ color: "#1D3557" }}>
            Loading delicious meals...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EDF6F9" }}>
      {/* Hero Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#1D3557" }}
            data-aos="fade-up"
          >
            Our Delicious Meals
          </h1>
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#1D3557" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover a world of flavors with our carefully crafted meals, made
            with the freshest ingredients and prepared with love.
          </p>
          <div
            className="mt-8 h-1 w-24 mx-auto rounded-full"
            style={{ backgroundColor: "#E63946" }}
            data-aos="fade-up"
            data-aos-delay="400"
          ></div>
        </div>
      </div>

      {/* Meals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {meals.length === 0 ? (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="mb-8">
              <svg
                className="mx-auto h-24 w-24 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1D3557"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ color: "#1D3557" }}
            >
              No meals available
            </h3>
            <p className="text-lg opacity-70" style={{ color: "#1D3557" }}>
              Check back soon for new delicious options!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {meals.map((meal, index) => (
              
              <div
                key={meal._id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={meal.image || "/placeholder.svg"}
                    alt={meal.name}
                    fill
                    // className="object-cover group-hover:scale-110 transition-transform duration-500"
                    // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 4}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>

                  {/* Quantity Badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg"
                    style={{ backgroundColor: "#52B788" }}
                  >
                    {meal.availableQuantity} left
                  </div>
                </div>

            
                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-opacity-80 transition-colors"
                    style={{ color: "#1D3557" }}
                  >
                    {meal.name}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: "#1D3557", opacity: 0.7 }}
                  >
                    {meal.description}
                  </p>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "#E63946" }}
                      >
                        ${meal.price}
                      </span>
                      <span
                        className="text-xs opacity-60"
                        style={{ color: "#1D3557" }}
                      >
                        per serving
                      </span>
                    </div>

                    <button
                      className="px-6 py-2 rounded-full text-white font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50"
                      style={{
                        backgroundColor: "#E63946",
                        focusRingColor: "#E63946",
                      }}
                    >
                      Details
                    </button>
                  </div>

                  {/* Availability Indicator */}
                  <div className="mt-4 flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        meal.availableQuantity > 0
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "#1D3557", opacity: 0.8 }}
                    >
                      {meal.availableQuantity > 0
                        ? "Available"
                        : "Out of Stock"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA Section */}
      {meals.length > 0 && (
        <div
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#52B788" }}
        >
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg text-white opacity-90 mb-8">
              Join thousands of satisfied customers who trust MealDash for their
              daily meals.
            </p>
            <button
              className="px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              style={{
                backgroundColor: "#E63946",
                color: "white",
              }}
            >
              Start Your Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMeals;
