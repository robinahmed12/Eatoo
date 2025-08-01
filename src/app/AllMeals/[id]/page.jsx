import ProtectedRoute from "@/app/components/ProtectedRoute";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function MealDetails({ params }) {
  const { id } = params;
  const mealsCollection = await dbConnect("meals");

  const meal = await mealsCollection.findOne({ _id: new ObjectId(id) });
  console.log(meal);

  if (!meal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center" data-aos="fade-up">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold" style={{ color: "#1D3557" }}>
            Meal not found
          </h2>
          <p className="text-gray-600 mt-2">
            The meal you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen" style={{ backgroundColor: "#EDF6F9" }}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            href={"/AllMeals"}
            className="mb-6 flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md"
            style={{ backgroundColor: "white", color: "#1D3557" }}
            data-aos="fade-right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Menu
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="space-y-4" data-aos="fade-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={meal.image || "/placeholder.svg"}
                  alt={meal.name}
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {meal.isFeatured && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
                    style={{ backgroundColor: "#E63946" }}
                  >
                    ⭐ Featured
                  </div>
                )}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
                  style={{ backgroundColor: "#52B788" }}
                >
                  {meal.status}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {meal.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: "#52B788" }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6" data-aos="fade-left">
              {/* Header */}
              <div className="space-y-3">
                <h1
                  className="text-4xl lg:text-5xl font-bold leading-tight"
                  style={{ color: "#1D3557" }}
                >
                  {meal.name}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {meal.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span
                  className="text-4xl font-bold"
                  style={{ color: "#E63946" }}
                >
                  ${meal.price}
                </span>
                <span className="text-gray-500 line-through text-xl">
                  ${Math.round(meal.price * 1.2)}
                </span>
              </div>

              {/* Quick Info Grid */}
              <div
                className="grid grid-cols-2 gap-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#EDF6F9" }}
                    >
                      🍽️
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-semibold" style={{ color: "#1D3557" }}>
                        {meal.category}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#EDF6F9" }}
                    >
                      🥩
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <p className="font-semibold" style={{ color: "#1D3557" }}>
                        {meal.type}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#EDF6F9" }}
                    >
                      ⏱️
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Prep Time</p>
                      <p className="font-semibold" style={{ color: "#1D3557" }}>
                        {meal.preparationTime} min
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#EDF6F9" }}
                    >
                      📊
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Nutrition</p>
                      <p className="font-semibold" style={{ color: "#1D3557" }}>
                        {meal.nutrition}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div
                className="bg-white p-6 rounded-xl shadow-sm"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#1D3557" }}
                  >
                    Availability
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{
                      backgroundColor:
                        meal.availableQuantity > 10 ? "#52B788" : "#E63946",
                    }}
                  >
                    {meal.availableQuantity > 10 ? "In Stock" : "Limited Stock"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="flex-1 h-2 rounded-full"
                    style={{ backgroundColor: "#EDF6F9" }}
                  >
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: "#52B788",
                        width: `${Math.min(
                          (meal.availableQuantity / 50) * 100,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#1D3557" }}
                  >
                    {meal.availableQuantity} left
                  </span>
                </div>
              </div>

              {/* Order Section */}
              <div
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center border-2 rounded-lg"
                    style={{ borderColor: "#EDF6F9" }}
                  >
                    <button className="px-4 py-2 text-xl font-bold hover:bg-gray-50 transition-colors">
                      -
                    </button>
                    <span
                      className="px-4 py-2 font-semibold"
                      style={{ color: "#1D3557" }}
                    >
                      1
                    </span>
                    <button className="px-4 py-2 text-xl font-bold hover:bg-gray-50 transition-colors">
                      +
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    Total:{" "}
                    <span
                      className="font-bold text-lg"
                      style={{ color: "#E63946" }}
                    >
                      ${meal.price}
                    </span>
                  </div>
                </div>

                <button
                  className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "#E63946" }}
                  disabled={meal.availableQuantity === 0}
                >
                  {meal.availableQuantity === 0
                    ? "Out of Stock"
                    : "🛒 Add to Cart"}
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-md border-2"
                    style={{
                      color: "#1D3557",
                      borderColor: "#1D3557",
                      backgroundColor: "white",
                    }}
                  >
                    ❤️ Add to Wishlist
                  </button>
                  <button
                    className="py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-md border-2"
                    style={{
                      color: "#1D3557",
                      borderColor: "#1D3557",
                      backgroundColor: "white",
                    }}
                  >
                    📤 Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div
            className="mt-16 grid md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "#1D3557" }}
              >
                Fast Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Get your meal delivered in 30-45 minutes
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">🔥</div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "#1D3557" }}
              >
                Fresh & Hot
              </h3>
              <p className="text-gray-600 text-sm">
                Prepared fresh and delivered hot to your door
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">💯</div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "#1D3557" }}
              >
                Quality Guaranteed
              </h3>
              <p className="text-gray-600 text-sm">
                100% satisfaction guarantee or money back
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
