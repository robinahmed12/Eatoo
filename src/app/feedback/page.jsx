"use client"

import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Rahman",
      position: "Marketing Manager",
      company: "Tech Solutions BD",
      avatar: "SR",
      rating: 5,
      text: "Eatoo has revolutionized our office lunch culture. The variety of healthy meals and punctual delivery makes it our go-to choice for team meetings and daily meals.",
      orderCount: 47,
      location: "Dhaka"
    },
    {
      id: 2,
      name: "Mohammad Hasan",
      position: "Software Engineer",
      company: "DevCorp Ltd",
      avatar: "MH",
      rating: 5,
      text: "As a busy developer, Eatoo saves me time every day. The app is intuitive, the food quality is consistently excellent, and the delivery tracking feature is brilliant.",
      orderCount: 89,
      location: "Chittagong"
    },
    {
      id: 3,
      name: "Fatima Khatun",
      position: "Doctor",
      company: "City Medical Center",
      avatar: "FK",
      rating: 5,
      text: "During long hospital shifts, Eatoo ensures I get nutritious meals delivered right to my workplace. The healthy options align perfectly with my dietary requirements.",
      orderCount: 156,
      location: "Sylhet"
    },
    {
      id: 4,
      name: "Ahmed Ali",
      position: "Business Owner",
      company: "Green Ventures",
      avatar: "AA",
      rating: 5,
      text: "We use Eatoo for all our corporate events and daily office catering. Their professional service and diverse menu options never disappoint our clients and team.",
      orderCount: 203,
      location: "Dhaka"
    },
    {
      id: 5,
      name: "Rashida Begum",
      position: "Teacher",
      company: "International School",
      avatar: "RB",
      rating: 5,
      text: "Eatoo helps me maintain a balanced diet during busy school days. The portion sizes are perfect and the home-style flavors remind me of comfort food.",
      orderCount: 78,
      location: "Comilla"
    },
    {
      id: 6,
      name: "Karim Sheikh",
      position: "Architect",
      company: "Design Studio Pro",
      avatar: "KS",
      rating: 5,
      text: "Working late nights on projects, Eatoo's extended delivery hours and quality food keep me energized. The app's user experience is as good as our design standards!",
      orderCount: 134,
      location: "Chittagong"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: "👥" },
    { number: "98%", label: "Satisfaction Rate", icon: "⭐" },
    { number: "24/7", label: "Service Available", icon: "🕒" },
    { number: "15min", label: "Avg Delivery Time", icon: "🚚" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#EDF6F9] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#52B788]"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[#E63946]"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[#52B788]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <span className="text-2xl mr-2">💬</span>
            <span className="text-sm font-semibold text-[#52B788]">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D3557] mb-4">
            What Our <span className="text-[#E63946]">Customers</span> Say
          </h2>
          <p className="text-lg text-[#1D3557] opacity-80 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Eatoo for their daily meal needs
          </p>
        </div>

        {/* Stats Row */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-[#E63946] mb-1">{stat.number}</div>
              <div className="text-sm text-[#1D3557] opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div 
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
                <blockquote className="text-xl lg:text-2xl text-[#1D3557] font-medium mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E63946] to-[#52B788] flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[activeTestimonial].avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1D3557] text-lg">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-[#52B788] font-medium">
                        {testimonials[activeTestimonial].position}
                      </p>
                      <p className="text-[#1D3557] opacity-70 text-sm">
                        {testimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="bg-[#EDF6F9] px-3 py-1 rounded-full">
                      <span className="text-[#1D3557]">📍 {testimonials[activeTestimonial].location}</span>
                    </div>
                    <div className="bg-[#EDF6F9] px-3 py-1 rounded-full">
                      <span className="text-[#1D3557]">🍽️ {testimonials[activeTestimonial].orderCount} orders</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Image/Visual */}
              <div className="lg:w-80 w-full">
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-[#EDF6F9] to-[#52B788] rounded-2xl flex items-center justify-center">
                    <div className="text-6xl lg:text-8xl">
                      {testimonials[activeTestimonial].avatar}
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#E63946] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-[#E63946] w-8' 
                    : 'bg-[#52B788] opacity-30 hover:opacity-50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  activeTestimonial === index ? 'ring-2 ring-[#E63946]' : ''
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E63946] to-[#52B788] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-[#1D3557]">{testimonial.name}</h4>
                    <p className="text-sm text-[#52B788]">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-[#1D3557] text-sm leading-relaxed line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#EDF6F9]">
                  <span className="text-xs text-[#1D3557] opacity-70">📍 {testimonial.location}</span>
                  <span className="text-xs text-[#52B788] font-medium">{testimonial.orderCount} orders</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-[#E63946] to-[#52B788] rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Experience the convenience of Eatoo today and discover why thousands trust us for their daily meals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#E63946] px-8 py-3 rounded-full font-bold hover:bg-[#EDF6F9] transition-all duration-300 shadow-lg hover:shadow-xl">
                Order Now 🍽️
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#E63946] transition-all duration-300">
                View Menu 📱
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}