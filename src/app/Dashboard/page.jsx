"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Menu,
  X,
  ShoppingBag,
  DollarSign,
  Users,
  Package,
  Home,
  Utensils,
  User,
  BarChart2,
  Settings,
} from "lucide-react";


const statsData = [
  {
    title: "Total Orders",
    value: "1,234",
    change: "+15%",
    color: "#52B788",
    icon: ShoppingBag,
  },
  {
    title: "Revenue",
    value: "$56,789",
    change: "+10%",
    color: "#E63946",
    icon: DollarSign,
  },
  {
    title: "New Customers",
    value: "256",
    change: "+20%",
    color: "#52B788",
    icon: Users,
  },
  {
    title: "Pending Deliveries",
    value: "42",
    change: "-5%",
    color: "#E63946",
    icon: Package,
  },
];

const chartData = [
  { name: "Jan", orders: 400, revenue: 2400 },
  { name: "Feb", orders: 300, revenue: 1398 },
  { name: "Mar", orders: 200, revenue: 9800 },
  { name: "Apr", orders: 278, revenue: 3908 },
  { name: "May", orders: 189, revenue: 4800 },
  { name: "Jun", orders: 239, revenue: 3800 },
  { name: "Jul", orders: 349, revenue: 4300 },
];

const navLinks = [
  { name: "Dashboard", href: "/Dashboard", icon: Home },
  { name: "Main Home", href: "/", icon: ShoppingBag },
  { name: "Add Meal", href: "/Dashboard/AddMeal", icon: Utensils },
  { name: "Manage Meals", href: "/Dashboard/ManageMeals", icon: Settings },

  
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-white border border-[#EDF6F9] rounded-md shadow-lg text-[#1D3557]">
        <p className="font-bold text-sm mb-1">{`Month: ${label}`}</p>
        {payload.map((entry, index) => (
          <p
            key={`item-${index}`}
            className="text-sm"
            style={{ color: entry.stroke }}
          >
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function DashboardHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#EDF6F9] text-[#1D3557]">
      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 bg-white shadow-sm transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden text-[#1D3557]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-xl font-bold text-[#E63946]">Eatoo</h1>
            </div>

            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-[#EDF6F9] text-[#1D3557] hover:text-[#E63946] transition-colors"
                >
                  <link.icon className="h-4 w-4 mr-2" />
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#52B788] flex items-center justify-center text-white text-xs font-bold">
                AD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-[#1D3557] hover:bg-[#EDF6F9] hover:text-[#E63946]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <link.icon className="h-5 w-5 mr-3" />
                {link.name}
              </a>
            ))}
            
          </div>
        </div>
      )}


      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1
            className="text-2xl md:text-3xl font-bold mb-2 text-[#1D3557]"
            data-aos="fade-down"
          >
            Welcome to Your Eatoo Dashboard
          </h1>
          <p
            className="text-sm md:text-base text-[#1D3557] opacity-80"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Here's an overview of your meal ordering platform's performance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#1D3557] opacity-70 uppercase tracking-wider">
                      {stat.title}
                    </p>
                    <h3 className="text-xl font-bold mt-1 text-[#1D3557]">
                      {stat.value}
                    </h3>
                  </div>
                  <div
                    className={`p-2 rounded-lg ${
                      stat.color === "#52B788"
                        ? "bg-[#52B788]/10"
                        : "bg-[#E63946]/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        stat.color === "#52B788"
                          ? "text-[#52B788]"
                          : "text-[#E63946]"
                      }`}
                    />
                  </div>
                </div>
                <p
                  className={`text-xs mt-2 ${
                    stat.color === "#52B788"
                      ? "text-[#52B788]"
                      : "text-[#E63946]"
                  }`}
                >
                  <span className="font-medium">{stat.change}</span> from last
                  month
                </p>
              </div>
            );
          })}
        </div>

        {/* Chart Section */}
        <div
          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow mb-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1D3557] mb-2 md:mb-0">
              Monthly Orders & Revenue
            </h3>
            <div className="flex space-x-2">
              <button className="text-xs px-3 py-1 rounded-full bg-[#E63946]/10 text-[#E63946]">
                Orders
              </button>
              <button className="text-xs px-3 py-1 rounded-full bg-[#52B788]/10 text-[#52B788]">
                Revenue
              </button>
            </div>
          </div>
          <div className="h-[250px] md:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#EDF6F9" />
                <XAxis
                  dataKey="name"
                  stroke="#1D3557"
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#1D3557" tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#E63946"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 6 }}
                  name="Orders"
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#52B788"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 6 }}
                  name="Revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orders */}
        <div
          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3 className="text-lg font-semibold text-[#1D3557] mb-4">
            Recent Orders
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#EDF6F9]">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-[#1D3557] uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-[#1D3557] uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-[#1D3557] uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-[#1D3557] uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-[#1D3557] uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDF6F9]">
                {[1, 2, 3, 4, 5].map((order) => (
                  <tr key={order}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#1D3557]">
                      #ORD-{1000 + order}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-[#1D3557]">
                      Customer {order}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-[#1D3557]">
                      {order * 2} items
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-[#1D3557]">
                      ${(order * 15.99).toFixed(2)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          order % 3 === 0
                            ? "bg-[#52B788]/10 text-[#52B788]"
                            : order % 3 === 1
                            ? "bg-[#E63946]/10 text-[#E63946]"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {order % 3 === 0
                          ? "Delivered"
                          : order % 3 === 1
                          ? "Cancelled"
                          : "Processing"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
