"use client"

import { useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import AOS from "aos"
import "aos/dist/aos.css" // Import AOS CSS

// Dummy data for demonstration
const statsData = [
  { title: "Total Orders", value: "1,234", change: "+15%", color: "#52B788" },
  { title: "Revenue", value: "$56,789", change: "+10%", color: "#E63946" },
  { title: "New Customers", value: "256", change: "+20%", color: "#52B788" },
  { title: "Pending Deliveries", value: "42", change: "-5%", color: "#E63946" },
]

const chartData = [
  { name: "Jan", orders: 400, revenue: 2400 },
  { name: "Feb", orders: 300, revenue: 1398 },
  { name: "Mar", orders: 200, revenue: 9800 },
  { name: "Apr", orders: 278, revenue: 3908 },
  { name: "May", orders: 189, revenue: 4800 },
  { name: "Jun", orders: 239, revenue: 3800 },
  { name: "Jul", orders: 349, revenue: 4300 },
]

// Custom Tooltip for Recharts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-white border border-gray-200 rounded-md shadow-lg text-[#1D3557]">
        <p className="font-bold text-sm mb-1">{`Month: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} className="text-sm" style={{ color: entry.stroke }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function DashboardHome() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-[#EDF6F9] text-[#1D3557]">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D3557]" data-aos="fade-down">
        Welcome to Your Eatoo Dashboard
      </h1>
      <p className="mt-2 mb-8 text-lg text-[#1D3557]" data-aos="fade-down" data-aos-delay="100">
        Here's an overview of your meal ordering platform's performance.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {statsData.map((stat, index) => (
          <div
            key={stat.title}
            className="bg-white shadow-lg rounded-lg p-6" // Replaces Card
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-row items-center justify-between pb-2">
              {" "}
              {/* Replaces CardHeader */}
              <h3 className="text-sm font-medium text-[#1D3557]">
                {" "}
                {/* Replaces CardTitle */}
                {stat.title}
              </h3>
              {/* Icon placeholder, replace with actual Lucide icons if needed */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-[#52B788]"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="pt-0">
              {" "}
              {/* Replaces CardContent */}
              <div className="text-2xl font-bold text-[#1D3557]">{stat.value}</div>
              <p className={`text-xs ${stat.color === "#52B788" ? "text-[#52B788]" : "text-[#E63946]"} mt-1`}>
                {stat.change} from last month
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-up" data-aos-delay="400">
        {" "}
        {/* Replaces Card */}
        <div className="pb-4">
          {" "}
          {/* Replaces CardHeader */}
          <h3 className="text-lg font-semibold text-[#1D3557]">Monthly Orders & Revenue</h3> {/* Replaces CardTitle */}
        </div>
        <div className="h-[300px] w-full">
          {" "}
          {/* Replaces ChartContainer and ResponsiveContainer wrapper */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#EDF6F9" /> {/* Soft Mint for grid */}
              <XAxis dataKey="name" stroke="#1D3557" /> {/* Charcoal Gray for axis text */}
              <YAxis stroke="#1D3557" /> {/* Charcoal Gray for axis text */}
              <Tooltip content={<CustomTooltip />} /> {/* Using custom tooltip */}
              <Line type="monotone" dataKey="orders" stroke="#E63946" activeDot={{ r: 8 }} name="Orders" />
              <Line type="monotone" dataKey="revenue" stroke="#52B788" activeDot={{ r: 8 }} name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
