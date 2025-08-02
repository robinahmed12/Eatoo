"use client";

import { useState, useEffect } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    // AOS Animation simulation with Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".observe-animation");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      primary: "support@eatoo.com",
      secondary: "business@eatoo.com",
      description: "Get in touch via email",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      primary: "+880 1234 567890",
      secondary: "+880 9876 543210",
      description: "Available 24/7 for support",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      primary: "123 Food Street",
      secondary: "Dhaka 1212, Bangladesh",
      description: "Come visit our office",
    },
  ];

  const quickActions = [
    { title: "Order Support", description: "Help with current orders" },
    { title: "Technical Issues", description: "App or website problems" },
    { title: "Partnership", description: "Business collaborations" },
    { title: "Feedback", description: "Share your experience" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .observe-animation {
          opacity: 0;
          transform: translateY(30px);
        }

        .floating-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .floating-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        .gradient-border {
          background: linear-gradient(135deg, #52b788, #e63946);
          padding: 2px;
          border-radius: 12px;
        }

        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>

      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#EDF6F9] via-white to-[#EDF6F9] overflow-hidden"
        id="contact"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#52B788] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E63946] opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 observe-animation">
            <div className="inline-flex items-center px-4 py-2 bg-[#52B788] bg-opacity-10 rounded-full mb-6">
              <span className="text-[#52B788] font-medium text-sm">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D3557] mb-6">
              Contact <span className="text-[#E63946]">Eatoo</span>
            </h2>
            <p className="text-xl text-[#1D3557] opacity-80 max-w-3xl mx-auto leading-relaxed">
              Have questions about your order? Need support with our app? We're
              here to help you 24/7 with exceptional customer service.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 observe-animation">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-[#EDF6F9] hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <h4 className="font-semibold text-[#1D3557] text-sm sm:text-base mb-1">
                  {action.title}
                </h4>
                <p className="text-[#1D3557] opacity-60 text-xs sm:text-sm">
                  {action.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="xl:col-span-2 observe-animation">
              <div className="gradient-border">
                <div className="glass-effect p-8 sm:p-10 rounded-xl">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#52B788] to-[#E63946] rounded-xl flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#1D3557]">
                        Send us a message
                      </h3>
                      <p className="text-[#1D3557] opacity-70 mt-1">
                        We'll get back to you within 24 hours
                      </p>
                    </div>
                  </div>

                  {submitStatus === "success" && (
                    <div className="mb-8 p-4 bg-gradient-to-r from-[#52B788] to-[#52B788] bg-opacity-10 text-[#1D3557] rounded-xl border-l-4 border-[#52B788]">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#52B788] mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="font-semibold">
                          Message sent successfully! We'll be in touch soon.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-8 p-4 bg-[#E63946] bg-opacity-10 text-[#1D3557] rounded-xl border-l-4 border-[#E63946]">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#E63946] mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="font-semibold">
                          Something went wrong. Please try again later.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-[#1D3557] font-semibold mb-2 text-sm">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-white ${
                            focusedField === "name"
                              ? "border-[#52B788] ring-4 ring-[#52B788] ring-opacity-20"
                              : "border-[#EDF6F9] hover:border-[#52B788]"
                          }`}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="relative">
                        <label className="block text-[#1D3557] font-semibold mb-2 text-sm">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-white ${
                            focusedField === "phone"
                              ? "border-[#52B788] ring-4 ring-[#52B788] ring-opacity-20"
                              : "border-[#EDF6F9] hover:border-[#52B788]"
                          }`}
                          placeholder="+880 1234 567890"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-[#1D3557] font-semibold mb-2 text-sm">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-white ${
                            focusedField === "email"
                              ? "border-[#52B788] ring-4 ring-[#52B788] ring-opacity-20"
                              : "border-[#EDF6F9] hover:border-[#52B788]"
                          }`}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div className="relative">
                        <label className="block text-[#1D3557] font-semibold mb-2 text-sm">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-white ${
                            focusedField === "subject"
                              ? "border-[#52B788] ring-4 ring-[#52B788] ring-opacity-20"
                              : "border-[#EDF6F9] hover:border-[#52B788]"
                          }`}
                        >
                          <option value="">Select a subject</option>
                          <option value="order-support">Order Support</option>
                          <option value="technical-issue">
                            Technical Issue
                          </option>
                          <option value="partnership">
                            Partnership Inquiry
                          </option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-[#1D3557] font-semibold mb-2 text-sm">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-white resize-none ${
                          focusedField === "message"
                            ? "border-[#52B788] ring-4 ring-[#52B788] ring-opacity-20"
                            : "border-[#EDF6F9] hover:border-[#52B788]"
                        }`}
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className={`w-full py-4 px-8 rounded-xl font-bold text-white text-lg transition-all duration-300 transform ${
                        isSubmitting
                          ? "bg-[#E63946] opacity-70 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#E63946] to-[#D62E3B] hover:from-[#D62E3B] hover:to-[#B02A37] hover:-translate-y-1 hover:shadow-xl"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message
                          <svg
                            className="ml-2 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 observe-animation">
              {/* Contact Methods */}
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="floating-card bg-white p-6 rounded-2xl shadow-lg border border-[#EDF6F9]"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#52B788] to-[#E63946] rounded-xl flex items-center justify-center text-white mr-4">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#1D3557] mb-2">
                        {method.title}
                      </h4>
                      <p className="text-[#1D3557] font-semibold mb-1">
                        {method.primary}
                      </p>
                      <p className="text-[#1D3557] opacity-70 mb-2">
                        {method.secondary}
                      </p>
                      <p className="text-sm text-[#52B788] font-medium">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Business Hours */}
              <div className="floating-card bg-white p-6 rounded-2xl shadow-lg border border-[#EDF6F9]">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#52B788] to-[#E63946] rounded-xl flex items-center justify-center text-white mr-4">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1D3557]">
                      Business Hours
                    </h4>
                    <p className="text-sm text-[#52B788] font-medium">
                      We're here when you need us
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { days: "Monday - Friday", hours: "9:00 AM - 10:00 PM" },
                    { days: "Saturday", hours: "10:00 AM - 11:00 PM" },
                    { days: "Sunday", hours: "11:00 AM - 9:00 PM" },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-[#EDF6F9] last:border-b-0"
                    >
                      <span className="text-[#1D3557] font-medium">
                        {schedule.days}
                      </span>
                      <span className="text-[#52B788] font-semibold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="floating-card bg-gradient-to-br from-[#E63946] to-[#D62E3B] p-6 rounded-2xl shadow-lg text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.865-.833-2.635 0L4.178 14.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Emergency Support</h4>
                    <p className="text-sm opacity-90">Available 24/7</p>
                  </div>
                </div>
                <p className="mb-3">For urgent order issues or emergencies:</p>
                <p className="font-bold text-lg">+880 1800 EATOO</p>
                <p className="text-sm opacity-90">(+880 1800 32866)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
