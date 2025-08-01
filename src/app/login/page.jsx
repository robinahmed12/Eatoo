"use client";

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.ok) {
      Swal.fire("Login Successful");
      router.push("/");
    } else {
      alert("Login failed");
    }
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDF6F9] p-4 sm:p-6 lg:p-8">
      <div
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-500 ease-in-out"
        data-aos="fade-up"
      >
        <h2
          className="text-3xl font-bold text-center text-[#1D3557] mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Welcome to Eatoo
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div data-aos="fade-up" data-aos-delay="200">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#1D3557] mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent text-[#1D3557] placeholder-gray-400"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#1D3557] mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent text-[#1D3557] placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#E63946] text-white py-3 rounded-md font-semibold hover:bg-[#E63946]/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Login
          </button>
        </form>
        <p
          className="mt-8 text-center text-[#1D3557]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-[#E63946] hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
