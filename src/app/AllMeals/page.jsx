"use client";
import { useEffect, useState } from "react";
import useAxios from "@/hooks/useAxios";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const AllMeals = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [categories, setCategories] = useState(["all"]);
  
  const axiosInstance = useAxios();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    const fetchMeals = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axiosInstance.get("/api/items");
        const mealsData = response.data;
        
        setMeals(mealsData);
        setFilteredMeals(mealsData);
        
        // Extract unique categories from meals data
        const uniqueCategories = ["all", ...new Set(mealsData.map(meal => meal.category).filter(Boolean))];
        setCategories(uniqueCategories);
        
        // Set dynamic price range based on actual data
        if (mealsData.length > 0) {
          const prices = mealsData.map(meal => meal.price);
          const minPrice = Math.floor(Math.min(...prices));
          const maxPrice = Math.ceil(Math.max(...prices));
          setPriceRange([minPrice, maxPrice]);
        }
        
      } catch (error) {
        console.error("Error fetching meals:", error);
        setError("Failed to load meals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
    document.title = "All Meals - Eatoo";
  }, [axiosInstance]);

  useEffect(() => {
    let filtered = meals.filter(meal => {
      const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           meal.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || meal.category === selectedCategory;
      const matchesPrice = meal.price >= priceRange[0] && meal.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort meals
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case "price":
          aValue = a.price;
          bValue = b.price;
          break;
        case "rating":
          aValue = a.rating;
          bValue = b.rating;
          break;
        case "availability":
          aValue = a.availableQuantity;
          bValue = b.availableQuantity;
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredMeals(filtered);
  }, [meals, searchTerm, sortBy, sortOrder, priceRange, selectedCategory]);

  const resetFilters = () => {
    setSearchTerm("");
    setSortBy("name");
    setSortOrder("asc");
    setSelectedCategory("all");
    // Reset price range to original values
    if (meals.length > 0) {
      const prices = meals.map(meal => meal.price);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));
      setPriceRange([minPrice, maxPrice]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EDF6F9]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#E63946] border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-[#1D3557]">Loading delicious meals...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EDF6F9]">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <svg className="mx-auto h-24 w-24 text-[#E63946] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 14.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[#1D3557]">Oops! Something went wrong</h3>
          <p className="text-lg text-[#1D3557] opacity-70 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#E63946] text-white rounded-lg font-medium hover:bg-[#D62E3B] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDF6F9]">
      {/* Hero Section */}
      <div className="relative py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-[#1D3557]"
            data-aos="fade-up"
          >
            Our Delicious Meals
          </h1>
          <p 
            className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-[#1D3557]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover a world of flavors with our carefully crafted meals, made with the freshest ingredients and prepared with love.
          </p>
          <div 
            className="mt-8 h-1 w-24 mx-auto rounded-full bg-[#E63946]"
            data-aos="fade-up"
            data-aos-delay="400"
          ></div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6" data-aos="fade-up">
          {/* Top Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search meals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#52B788] focus:border-transparent text-[#1D3557]"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* View Toggle & Filter Button */}
            <div className="flex items-center gap-3">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-white shadow text-[#E63946]" : "text-gray-500"}`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-white shadow text-[#E63946]" : "text-gray-500"}`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#52B788] text-white rounded-lg font-medium"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                </svg>
                Filters
              </button>
            </div>
          </div>

          {/* Filters Section */}
          <div className={`grid grid-cols-1 lg:grid-cols-4 gap-4 ${showFilters ? "block" : "hidden lg:grid"}`}>
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-[#1D3557] mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#52B788] focus:border-transparent text-[#1D3557]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-[#1D3557] mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#52B788] focus:border-transparent text-[#1D3557]"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="availability">Availability</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-sm font-medium text-[#1D3557] mb-2">Order</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#52B788] focus:border-transparent text-[#1D3557]"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="w-full px-4 py-2 bg-[#E63946] text-white rounded-lg font-medium hover:bg-[#D62E3B] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-[#1D3557]">
              Showing <span className="font-semibold">{filteredMeals.length}</span> of <span className="font-semibold">{meals.length}</span> meals
            </p>
          </div>
        </div>
      </div>

      {/* Meals Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredMeals.length === 0 ? (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="mb-8">
              <svg className="mx-auto h-24 w-24 text-[#1D3557] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#1D3557]">No meals found</h3>
            <p className="text-lg text-[#1D3557] opacity-70">Try adjusting your search or filter criteria</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-2 bg-[#E63946] text-white rounded-lg font-medium hover:bg-[#D62E3B] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className={viewMode === "grid" 
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "space-y-6"
          }>
            {filteredMeals.map((meal, index) => (
              <div
                key={meal._id}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${
                  viewMode === "list" 
                    ? "h-48 sm:h-full sm:w-64 flex-shrink-0" 
                    : "h-56 sm:h-48 lg:h-56"
                }`}>
                  <Image
                    src={meal.image}
                    alt={meal.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={viewMode === "list" 
                      ? "(max-width: 640px) 100vw, 256px" 
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>

                  {/* Status Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className={`px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg ${
                      meal.availableQuantity > 0 ? "bg-[#52B788]" : "bg-[#E63946]"
                    }`}>
                      {meal.availableQuantity > 0 ? `${meal.availableQuantity} left` : "Out of Stock"}
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <svg className="w-3 h-3 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {meal.rating}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#1D3557] group-hover:text-[#E63946] transition-colors">
                      {meal.name}
                    </h3>
                    <span className="text-xs bg-[#EDF6F9] text-[#1D3557] px-2 py-1 rounded-full font-medium">
                      {meal.category}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4 text-[#1D3557] opacity-70 line-clamp-2">
                    {meal.description}
                  </p>

                  {/* Meal Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-[#1D3557] opacity-70">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {meal.prepTime}
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-[#E63946]">${meal.price}</span>
                      <span className="text-xs text-[#1D3557] opacity-60">per serving</span>
                    </div>

                    <Link
                      href={`/AllMeals/${meal._id}`}
                      className={`px-6 py-2 rounded-full text-white font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#E63946] focus:ring-opacity-50 ${
                        meal.availableQuantity > 0
                          ? "bg-[#E63946] hover:bg-[#D62E3B] hover:shadow-lg transform hover:scale-105"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {meal.availableQuantity > 0 ? "Order Now" : "Unavailable"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA Section */}
      {filteredMeals.length > 0 && (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#52B788]">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg text-white opacity-90 mb-8">
              Join thousands of satisfied customers who trust Eatoo for their daily meals.
            </p>
            <button className="px-8 py-4 bg-[#E63946] text-white rounded-full text-lg font-semibold hover:bg-[#D62E3B] hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Your Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMeals;