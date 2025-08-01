"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoClose } from "react-icons/io5"
import { useEffect } from "react"

const navItems = [
  { label: "Main Home", href: "/" },
  { label: "Dashboard", href: "/Dashboard" },
  { label: "Add Meals", href: "/Dashboard/AddMeal" },
  { label: "Manage Meals", href: "/Dashboard/ManageMeals" },
  { label: "Profile", href: "/Dashboard/profile" },
]

export default function DashboardSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const pathname = usePathname()

  

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-[#EDF6F9] shadow-lg p-4 z-50 transition-transform duration-300 ease-in-out
        transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:h-screen lg:block lg:border-r lg:border-gray-200
      `}
     
    >
      {/* Close Button (mobile only) */}
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h2 className="text-xl font-bold text-[#1D3557]">Dashboard</h2>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="text-[#1D3557] hover:text-[#E63946] transition-colors duration-200"
          aria-label="Close sidebar"
        >
          <IoClose className="text-2xl" />
        </button>
      </div>

      {/* Logo/Title (desktop only) */}
      <h2 className="text-2xl font-bold mb-6 text-center text-[#1D3557] hidden lg:block">Dashboard</h2>

      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li key={item.href} data-aos="fade-right" data-aos-delay={100 + index * 50}>
            <Link
              href={item.href}
              className={`
                block px-4 py-2 rounded-md font-medium transition-all duration-200
                ${
                  pathname === item.href
                    ? "bg-[#E63946] text-white shadow-md"
                    : "text-[#1D3557] hover:bg-[#EDF6F9] hover:text-[#52B788]"
                }
              `}
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
