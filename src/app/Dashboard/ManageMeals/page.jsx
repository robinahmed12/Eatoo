"use client";

import useAxios from "@/hooks/useAxios";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect, useState } from "react";
import { PencilIcon, Trash2Icon } from "lucide-react"; // Import icons
import Swal from "sweetalert2";

const ManageMeals = () => {
  const [meals, setMeals] = useState([]);
  console.log(meals);

  const [loading, setLoading] = useState(true);
  const [editingMeal, setEditingMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const axiosInstance = useAxios();

  useEffect(() => {
    // Initialize AOS
    Aos.init({
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
  }, [axiosInstance]); // Add axiosInstance to dependency array

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E63946",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/api/items/${id}`)
          .then(() => {
            setMeals(meals.filter((meal) => meal._id !== id));
            Swal.fire("Deleted!", "The meal has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Delete failed:", error);
            Swal.fire("Error", "Failed to delete the meal.", "error");
          });
      }
    });
  };

  const handleEdit = (id) => {
    const mealToEdit = meals.find((meal) => meal._id === id);
    setEditingMeal(mealToEdit); // meal object with _id and fields
    setShowModal(true); // opens modal
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/items/${editingMeal._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingMeal),
      });

      const result = await res.json();

      if (res.ok) {
        // ✅ Update the meal in local state
        const updatedMeals = meals.map((meal) =>
          meal._id === editingMeal._id ? { ...meal, ...editingMeal } : meal
        );
        setMeals(updatedMeals);

        // ✅ Show success alert
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Meal updated successfully.",
          confirmButtonColor: "#52B788",
        });

        setShowModal(false);
        setEditingMeal(null);
      } else {
        Swal.fire({
          icon: "error",
          title: "Update failed",
          text: result.message || "Something went wrong.",
          confirmButtonColor: "#E63946",
        });
      }
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while updating.",
        confirmButtonColor: "#E63946",
      });
    }
  };

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
    <div
      className="min-h-screen p-4 md:p-8"
      style={{ backgroundColor: "#EDF6F9" }}
    >
      <h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        style={{ color: "#1D3557" }}
      >
        Manage Meals
      </h1>

      <div
        className="overflow-x-auto rounded-lg shadow-lg"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead style={{ backgroundColor: "#F8F8F8" }}>
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#1D3557" }}
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#1D3557" }}
              >
                Category
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#1D3557" }}
              >
                Price
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#1D3557" }}
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#1D3557" }}
              >
                Status
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#1D3557" }}
              >
                Featured
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{ color: "#1D3557" }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {meals.map((meal) => (
              <tr key={meal._id} data-aos="fade-up">
                <td
                  className="px-4 py-4 whitespace-nowrap text-sm font-medium"
                  style={{ color: "#1D3557" }}
                >
                  {meal.name}
                </td>
                <td
                  className="px-4 py-4 whitespace-nowrap text-sm"
                  style={{ color: "#1D3557" }}
                >
                  {meal.category}
                </td>
                <td
                  className="px-4 py-4 whitespace-nowrap text-sm"
                  style={{ color: "#1D3557" }}
                >
                  ${meal.price}
                </td>
                <td
                  className="px-4 py-4 whitespace-nowrap text-sm"
                  style={{ color: "#1D3557" }}
                >
                  {meal.availableQuantity}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      meal.status === "active"
                        ? "bg-[#52B788]/20 text-[#52B788]"
                        : "bg-[#E63946]/20 text-[#E63946]"
                    }`}
                  >
                    {meal.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      meal.isFeatured
                        ? "bg-[#52B788]/20 text-[#52B788]"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {meal.isFeatured ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(meal._id)}
                    className="inline-flex items-center justify-center p-2 rounded-full mr-2 transition-colors duration-200"
                    style={{
                      backgroundColor: "#52B788",
                      color: "#FFFFFF",
                    }}
                    aria-label="Edit meal"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(meal._id)}
                    className="inline-flex items-center justify-center p-2 rounded-full transition-colors duration-200"
                    style={{
                      backgroundColor: "#E63946",
                      color: "#FFFFFF",
                    }}
                    aria-label="Delete meal"
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && editingMeal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
              <h2 className="text-xl font-bold mb-4">Edit Meal</h2>
              <form onSubmit={(e) => handleUpdate(e)} className="space-y-3">
                <input
                  type="text"
                  value={editingMeal.name}
                  onChange={(e) =>
                    setEditingMeal({ ...editingMeal, name: e.target.value })
                  }
                  placeholder="Meal Name"
                  className="w-full border px-3 py-2 rounded"
                />

                <input
                  type="number"
                  value={editingMeal.price}
                  onChange={(e) =>
                    setEditingMeal({
                      ...editingMeal,
                      price: parseFloat(e.target.value),
                    })
                  }
                  placeholder="Price"
                  className="w-full border px-3 py-2 rounded"
                />

                {/* Add more fields like category, status, quantity, etc. as needed */}

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMeals;
