"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import AOS from "aos"
import "aos/dist/aos.css" // Import AOS CSS
import Link from "next/link"

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const router = useRouter()

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Only animate once
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
    if (res.ok) {
      alert("Registered successfully")
      router.push("/login")
    } else {
      alert("Registration failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#EDF6F9]">
      {/* Soft Mint Background */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1D3557] mb-2">
            {/* Charcoal Gray Text */}
            Register for Eatoo
          </h1>
          <p className="text-[#1D3557]">
            {/* Charcoal Gray Text */}
            Create your account to start ordering delicious meals.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1D3557] mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border border-[#1D3557]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent text-[#1D3557]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1D3557] mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="m@example.com"
              required
              className="w-full px-4 py-2 border border-[#1D3557]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent text-[#1D3557]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1D3557] mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-[#1D3557]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent text-[#1D3557]"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#E63946] text-white font-semibold rounded-md hover:bg-[#E63946]/90 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 transition-colors duration-200"
          >
            Register
          </button>
        </form>
         <p className="mt-8 text-center text-[#1D3557]" data-aos="fade-up" data-aos-delay="500">
          Already have an account?{" "}
          <Link href="/login" className="text-[#E63946] hover:underline font-medium">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}
