"use client";

import useAxios from "@/hooks/useAxios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const AddMeal = () => {
  const axiosInstance = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Convert comma-separated tags to an array
      if (data.tags) {
        data.tags = data.tags.split(",").map((tag) => tag.trim());
      }
      const res = await axiosInstance.post("/api/items", data);
      if (res.data.insertedId) {
        Swal.fire("Success", "Meal added successfully!", "success");
        reset();
      } else {
        Swal.fire("Error", "Failed to add meal", "error");
      }
    } catch (error) {
      console.error("Error adding meal:", error);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#EDF6F9" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8" data-aos="fade-down">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#1D3557" }}
          >
            🍽️ Add New Meal
          </h1>
          <p className="text-lg opacity-80" style={{ color: "#1D3557" }}>
            Create delicious meals for your customers
          </p>
        </div>

        {/* Form Container */}
        <div
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Row 1: Name and Category */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Meal Name */}
              <div data-aos="fade-right" data-aos-delay="300">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D3557" }}
                >
                  Meal Name *
                </label>
                <input
                  {...register("name", { required: "Meal name is required" })}
                  type="text"
                  placeholder="e.g., Chicken Biryani"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: errors.name ? "#E63946" : "#52B788",
                    color: "#1D3557",
                  }}
                />
                {errors.name && (
                  <span
                    className="text-sm mt-1 block"
                    style={{ color: "#E63946" }}
                  >
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Category */}
              <div data-aos="fade-left" data-aos-delay="300">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D3557" }}
                >
                  Category *
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: errors.category ? "#E63946" : "#52B788",
                    color: "#1D3557",
                  }}
                >
                  <option value="">Select category</option>
                  <option value="Breakfast">🌅 Breakfast</option>
                  <option value="Lunch">🌞 Lunch</option>
                  <option value="Dinner">🌙 Dinner</option>
                  <option value="Snacks">🍿 Snacks</option>
                  <option value="Drinks">🥤 Drinks</option>
                </select>
                {errors.category && (
                  <span
                    className="text-sm mt-1 block"
                    style={{ color: "#E63946" }}
                  >
                    {errors.category.message}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div data-aos="fade-up" data-aos-delay="400">
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: "#1D3557" }}
              >
                Description *
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Describe your delicious meal..."
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300 resize-none"
                style={{
                  borderColor: errors.description ? "#E63946" : "#52B788",
                  color: "#1D3557",
                }}
              />
              {errors.description && (
                <span
                  className="text-sm mt-1 block"
                  style={{ color: "#E63946" }}
                >
                  {errors.description.message}
                </span>
              )}
            </div>

            {/* Row 2: Price, Type, and Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Price */}
              <div data-aos="fade-right" data-aos-delay="500">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D3557" }}
                >
                  Price (৳) *
                </label>
                <input
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 1, message: "Price must be at least 1" },
                  })}
                  type="number"
                  placeholder="299"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: errors.price ? "#E63946" : "#52B788",
                    color: "#1D3557",
                  }}
                />
                {errors.price && (
                  <span
                    className="text-sm mt-1 block"
                    style={{ color: "#E63946" }}
                  >
                    {errors.price.message}
                  </span>
                )}
              </div>

              {/* Meal Type */}
              <div data-aos="fade-up" data-aos-delay="500">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D3557" }}
                >
                  Meal Type *
                </label>
                <select
                  {...register("type", { required: "Meal type is required" })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: errors.type ? "#E63946" : "#52B788",
                    color: "#1D3557",
                  }}
                >
                  <option value="">Select type</option>
                  <option value="Veg">🥬 Veg</option>
                  <option value="Non-Veg">🍖 Non-Veg</option>
                  <option value="Vegan">🌱 Vegan</option>
                  <option value="Keto">🥑 Keto</option>
                </select>
                {errors.type && (
                  <span
                    className="text-sm mt-1 block"
                    style={{ color: "#E63946" }}
                  >
                    {errors.type.message}
                  </span>
                )}
              </div>

              {/* Available Quantity */}
              <div data-aos="fade-left" data-aos-delay="500">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D3557" }}
                >
                  Available Quantity *
                </label>
                <input
                  {...register("availableQuantity", {
                    required: "Quantity is required",
                    min: { value: 1, message: "Quantity must be at least 1" },
                  })}
                  type="number"
                  placeholder="20"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: errors.availableQuantity
                      ? "#E63946"
                      : "#52B788",
                    color: "#1D3557",
                  }}
                />
                {errors.availableQuantity && (
                  <span
                    className="text-sm mt-1 block"
                    style={{ color: "#E63946" }}
                  >
                    {errors.availableQuantity.message}
                  </span>
                )}
              </div>
            </div>

            {/* Image URL */}
            <div data-aos="fade-up" data-aos-delay="600">
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: "#1D3557" }}
              >
                Image URL *
              </label>
              <input
                {...register("image", { required: "Image URL is required" })}
                type="url"
                placeholder="https://res.cloudinary.com/..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                style={{
                  borderColor: errors.image ? "#E63946" : "#52B788",
                  color: "#1D3557",
                }}
              />
              {errors.image && (
                <span
                  className="text-sm mt-1 block"
                  style={{ color: "#E63946" }}
                >
                  {errors.image.message}
                </span>
              )}
            </div>

            {/* Row 3: Preparation Time and Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preparation Time */}
              <div data-aos="fade-right" data-aos-delay="700">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D3557" }}
                >
                  Preparation Time (minutes) *
                </label>
                <input
                  {...register("preparationTime", {
                    required: "Preparation time is required",
                    min: {
                      value: 1,
                      message: "Time must be at least 1 minute",
                    },
                  })}
                  type="number"
                  placeholder="30"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: errors.preparationTime ? "#E63946" : "#52B788",
                    color: "#1D3557",
                  }}
                />
                {errors.preparationTime && (
                  <span
                    className="text-sm mt-1 block"
                    style={{ color: "#E63946" }}
                  >
                    {errors.preparationTime.message}
                  </span>
                )}
              </div>

              {/* Status */}
              <div data-aos="fade-left" data-aos-delay="700">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D3557" }}
                >
                  Status *
                </label>
                <select
                  {...register("status", { required: "Status is required" })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: errors.status ? "#E63946" : "#52B788",
                    color: "#1D3557",
                  }}
                >
                  <option value="active">✅ Active</option>
                  <option value="out-of-stock">❌ Out of Stock</option>
                </select>
                {errors.status && (
                  <span
                    className="text-sm mt-1 block"
                    style={{ color: "#E63946" }}
                  >
                    {errors.status.message}
                  </span>
                )}
              </div>
            </div>

            {/* Row 4: Tags and Nutrition */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Tags */}
              <div data-aos="fade-right" data-aos-delay="800">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D3557" }}
                >
                  Tags (comma separated)
                </label>
                <input
                  {...register("tags")}
                  type="text"
                  placeholder="spicy, chef special, popular"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: "#52B788",
                    color: "#1D3557",
                  }}
                />
              </div>

              {/* Nutrition */}
              <div data-aos="fade-left" data-aos-delay="800">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#1D3557" }}
                >
                  Nutrition Info
                </label>
                <input
                  {...register("nutrition")}
                  type="text"
                  placeholder="600 kcal, 25g protein"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-opacity-50 transition-all duration-300"
                  style={{
                    borderColor: "#52B788",
                    color: "#1D3557",
                  }}
                />
              </div>
            </div>

            {/* Featured Checkbox */}
            <div data-aos="fade-up" data-aos-delay="900">
              <div
                className="flex items-center gap-3 p-4 rounded-lg"
                style={{ backgroundColor: "#EDF6F9" }}
              >
                <input
                  {...register("isFeatured")}
                  type="checkbox"
                  className="w-5 h-5 rounded focus:ring-2 focus:ring-offset-2"
                  style={{ accentColor: "#E63946" }}
                />
                <label className="font-semibold" style={{ color: "#1D3557" }}>
                  ⭐ Mark as Featured Meal
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6" data-aos="fade-up" data-aos-delay="1000">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50"
                style={{
                  backgroundColor: "#E63946",
                  focusRingColor: "#E63946",
                }}
              >
                🍽️ Add Meal to Menu
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div
          className="text-center mt-8 p-4 rounded-lg"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          <p className="text-sm opacity-80" style={{ color: "#1D3557" }}>
            💡 <strong>Pro Tip:</strong> High-quality images and detailed
            descriptions help increase meal orders!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
