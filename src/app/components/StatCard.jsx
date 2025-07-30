"use client"

import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

const StatCard = ({ icon, count, label, suffix, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <div ref={ref} className="relative group" data-aos="zoom-in" data-aos-delay={index * 150}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3"></div>

      {/* Content */}
      <div className="relative p-8 lg:p-10 text-center">
        {/* Icon with background */}
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 group-hover:scale-110 transition-transform duration-300">
          <span className="text-4xl">{icon}</span>
        </div>

        {/* Counter */}
        <div className="mb-4">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight" style={{ color: "#E63946" }}>
              {inView ? <CountUp end={count} duration={2.5} separator="," /> : 0}
            </span>
            <span className="text-2xl lg:text-3xl font-bold ml-2" style={{ color: "#52B788" }}>
              {suffix}
            </span>
          </div>
        </div>

        {/* Label */}
        <p className="text-lg lg:text-xl font-semibold leading-tight" style={{ color: "#1D3557" }}>
          {label}
        </p>

        {/* Decorative line */}
        <div
          className="w-16 h-1 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: "#52B788" }}
        ></div>
      </div>
    </div>
  )
}

export default StatCard
