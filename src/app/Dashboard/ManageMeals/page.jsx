"use client";

import useAxios from "@/hooks/useAxios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { PencilIcon, Trash2Icon } from "lucide-react";
import Swal from "sweetalert2";

const ManageMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingMeal, setEditingMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const axiosInstance = useAxios();

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      
    });
    document.title = "Manage-Meal"

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
  }, [axiosInstance]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E63946",
      cancelButtonColor: "#1D3557",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/api/items/${id}`)
          .then(() => {
            setMeals(meals.filter((meal) => meal._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "The meal has been deleted.",
              icon: "success",
              confirmButtonColor: "#52B788",
            });
          })
          .catch((error) => {
            console.error("Delete failed:", error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete the meal.",
              icon: "error",
              confirmButtonColor: "#E63946",
            });
          });
      }
    });
  };

  const handleEdit = (meal) => {
    setEditingMeal({ ...meal });
    setShowModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put(
        `/api/items/${editingMeal._id}`,
        editingMeal
      );
      setMeals(meals.map((m) => (m._id === editingMeal._id ? editingMeal : m)));
      Swal.fire({
        title: "Updated!",
        text: "Meal updated successfully.",
        icon: "success",
        confirmButtonColor: "#52B788",
      });
      setShowModal(false);
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update meal.",
        icon: "error",
        confirmButtonColor: "#E63946",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EDF6F9]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#E63946] mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-[#1D3557]">
            Loading delicious meals...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDF6F9] p-6">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-3xl font-bold text-[#1D3557] mb-8"
          data-aos="fade-down"
        >
          Manage Meals
        </h1>

        <div
          className="bg-white rounded-xl shadow-md overflow-hidden"
          data-aos="fade-up"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#EDF6F9]">
              <thead className="bg-[#1D3557]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Meal
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Featured
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#EDF6F9]">
                {meals.map((meal, index) => (
                  <tr
                    key={meal._id}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={meal.image}
                            alt={meal.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-[#1D3557]">
                            {meal.name}
                          </div>
                          <div className="text-sm text-[#1D3557]/70">
                            {meal.type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1D3557]">
                      {meal.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1D3557]">
                      ৳{meal.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          meal.status === "active"
                            ? "bg-[#52B788]/20 text-[#52B788]"
                            : "bg-[#E63946]/20 text-[#E63946]"
                        }`}
                      >
                        {meal.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          meal.isFeatured
                            ? "bg-[#52B788]/20 text-[#52B788]"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {meal.isFeatured ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(meal)}
                          className="p-2 rounded-lg bg-[#52B788] text-white hover:bg-[#52B788]/90 transition-colors"
                          aria-label="Edit meal"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(meal._id)}
                          className="p-2 rounded-lg bg-[#E63946] text-white hover:bg-[#E63946]/90 transition-colors"
                          aria-label="Delete meal"
                        >
                          <Trash2Icon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div
            className="bg-white rounded-xl shadow-xl max-w-md w-full"
            data-aos="zoom-in"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#1D3557] mb-4">
                Edit Meal
              </h2>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1D3557] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={editingMeal?.name || ""}
                    onChange={(e) =>
                      setEditingMeal({ ...editingMeal, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#EDF6F9] rounded-lg focus:ring-2 focus:ring-[#52B788] focus:border-[#52B788]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D3557] mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    value={editingMeal?.price || ""}
                    onChange={(e) =>
                      setEditingMeal({ ...editingMeal, price: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#EDF6F9] rounded-lg focus:ring-2 focus:ring-[#52B788] focus:border-[#52B788]"
                    required
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#52B788] text-white py-2 rounded-lg hover:bg-[#52B788]/90 transition-colors"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-[#1D3557] text-white py-2 rounded-lg hover:bg-[#1D3557]/90 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMeals;
