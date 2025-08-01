"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import UserInfo from "./UserInfo";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data: session } = useSession();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Meals", href: "/AllMeals" },
    ...(session?.user ? [{ name: "Dashboard", href: "/Dashboard" }] : []),
  ];

  return (
    <>
      <nav className="bg-white  w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-red-600">
              🍽️ Eatoo
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-800 hover:text-green-600 font-medium transition"
                >
                  {item.name}
                </Link>
              ))}
              
            </div>

            <div className="hidden lg:inline md:inline">
              {session?.user && <UserInfo />}
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setDrawerOpen(true)}
                className="text-gray-800 hover:text-green-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-red-600">Eatoo</span>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-gray-800 hover:text-red-600"
            >
              ✕
            </button>
          </div>

          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="block text-gray-800 hover:text-green-600 py-2"
            >
              {item.name}
            </Link>
          ))}

          {session?.user &&  <UserInfo />}

          {!session?.user && (
            <button
              className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700"
              onClick={() => setDrawerOpen(false)}
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;
