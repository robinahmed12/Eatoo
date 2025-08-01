"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Add Meals", href: "/Dashboard/AddMeal" },
  { label: "Manage Meals", href: "/Dashboard/ManageMeals" },
  { label: "Profile", href: "/Dashboard/profile" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-6 border-r">
      <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block px-4 py-2 rounded-md font-medium transition ${
                pathname === item.href
                  ? "bg-red-500 text-white"
                  : "text-gray-700 hover:bg-red-100"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
