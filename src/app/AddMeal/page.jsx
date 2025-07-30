"use client";
import useAxios from "@/hooks/useAxios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddMeal = () => {
  const axiosInstance = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      // Convert comma-separated tags to an array
      if (data.tags) {
        data.tags = data.tags.split(",").map((tag) => tag.trim());
      }

      console.log("API response:", res.data);

      const res = await axiosInstance.post("/api/meals", data);

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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6">🍽️ Add New Meal</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium">Meal Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Chicken Biryani"
            className="input input-bordered w-full"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Enter meal description"
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price (৳)</label>
          <input
            {...register("price", { required: true, min: 1 })}
            type="number"
            placeholder="299"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium">Category</label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block font-medium">Meal Type</label>
          <select
            {...register("type", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select type</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Vegan">Vegan</option>
            <option value="Keto">Keto</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium">Image URL</label>
          <input
            {...register("image", { required: true })}
            type="url"
            placeholder="https://res.cloudinary.com/..."
            className="input input-bordered w-full"
          />
        </div>

        {/* Available Quantity */}
        <div>
          <label className="block font-medium">Available Quantity</label>
          <input
            {...register("availableQuantity", { required: true, min: 1 })}
            type="number"
            placeholder="20"
            className="input input-bordered w-full"
          />
        </div>

        {/* Is Featured */}
        <div className="flex items-center gap-2">
          <input
            {...register("isFeatured")}
            type="checkbox"
            className="checkbox"
          />
          <label className="font-medium">Mark as Featured</label>
        </div>

        {/* Preparation Time */}
        <div>
          <label className="block font-medium">
            Preparation Time (minutes)
          </label>
          <input
            {...register("preparationTime", { required: true, min: 1 })}
            type="number"
            placeholder="30"
            className="input input-bordered w-full"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium">Status</label>
          <select
            {...register("status", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="active">Active</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block font-medium">Tags (comma separated)</label>
          <input
            {...register("tags")}
            type="text"
            placeholder="spicy, chef special"
            className="input input-bordered w-full"
          />
        </div>

        {/* Nutrition */}
        <div>
          <label className="block font-medium">Nutrition Info</label>
          <input
            {...register("nutrition")}
            type="text"
            placeholder="600 kcal"
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button type="submit" className="btn btn-primary px-6 py-2">
            Add Meal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMeal;
