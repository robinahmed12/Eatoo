"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden p-4 text-2xl fixed top-2 left-2 z-50 bg-white rounded-md shadow"
      >
        <IoMenu />
      </button>

      {/* Sidebar */}
      <DashboardSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
      <main className="flex-1   bg-gray-50 overflow-y-auto w-full">
        {children}
      </main>
    </div>
  );
}
