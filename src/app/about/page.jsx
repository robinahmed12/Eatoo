"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#EDF6F9] text-[#1D3557] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <section className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold  mb-4" style={{ color: "#1D3557" }}>
            About Eatoo: Your Ultimate Meal Ordering Experience
          </h2>
          <p className="text-lg md:text-xl text-[#1D3557] max-w-3xl mx-auto">
            Eatoo is designed to revolutionize how you browse, order, and manage
            your favorite meals. We connect you with delicious food, seamlessly
            and efficiently.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-[#E63946] mb-4">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed">
              At Eatoo, our mission is to simplify the meal ordering process,
              making it accessible and enjoyable for everyone. We strive to
              provide a platform where users can effortlessly discover new
              culinary delights and restaurants can efficiently manage their
              orders and reach a wider audience.
            </p>
          </div>
          <div
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-left"
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1677087121409-3e9aae206aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdXAlMjBwaWNrJTIwYnVpc25lc3N8ZW58MHx8MHx8fDA%3D"
              alt="Chef cooking in a professional kitchen"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          <div
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
            data-aos="fade-right"
          >
            <Image
              src="https://images.unsplash.com/photo-1564486054181-6c848302b7a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lYWwlMjBkaXNofGVufDB8fDB8fHww"
              alt="Mobile app showing food ordering interface"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <h3 className="text-3xl font-bold text-[#E63946] mb-4">
              What is Eatoo?
            </h3>
            <p className="text-lg leading-relaxed">
              Eatoo is a full-stack web application built using the MERN stack
              (MongoDB, Express.js, Next.js, Node.js). It offers a comprehensive
              solution for meal ordering, featuring distinct interfaces for
              users and administrators. Whether you're a hungry customer or a
              restaurant owner, Eatoo provides the tools you need.
            </p>
          </div>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-[#E63946] text-center mb-6">
            Key Features
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#E63946]"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h4 className="text-xl font-semibold text-[#1D3557] mb-2">
                Seamless Meal Browsing
              </h4>
              <p className="text-[#1D3557]">
                Explore a wide variety of meals from your favorite local
                restaurants with intuitive search and filtering options.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#52B788]"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h4 className="text-xl font-semibold text-[#1D3557] mb-2">
                Effortless Ordering
              </h4>
              <p className="text-[#1D3557]">
                Add items to your cart, customize your order, and complete your
                purchase with a few simple clicks.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#E63946]"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h4 className="text-xl font-semibold text-[#1D3557] mb-2">
                Order Management
              </h4>
              <p className="text-[#1D3557]">
                Track your order status in real-time and view your order history
                for a complete overview.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#52B788]"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h4 className="text-xl font-semibold text-[#1D3557] mb-2">
                Role-Based Access
              </h4>
              <p className="text-[#1D3557]">
                Distinct user and admin interfaces ensure tailored experiences
                and secure access to features.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#E63946]"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <h4 className="text-xl font-semibold text-[#1D3557] mb-2">
                Admin Tools
              </h4>
              <p className="text-[#1D3557]">
                Admins can efficiently manage meals, track orders, and oversee
                the platform's operations.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#52B788]"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <h4 className="text-xl font-semibold text-[#1D3557] mb-2">
                Secure & Scalable
              </h4>
              <p className="text-[#1D3557]">
                Built with robust technologies to ensure a secure, reliable, and
                scalable platform.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-[#E63946] mb-4">
            Join the Eatoo Community!
          </h3>
          <p className="text-lg text-[#1D3557] max-w-3xl mx-auto mb-6">
            We are constantly working to enhance your Eatoo experience. Stay
            tuned for new features, partnerships, and delicious additions to our
            menu!
          </p>
          <button className="bg-[#E63946] hover:bg-[#D62C3A] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg">
            Start Ordering Now
          </button>
        </section>
      </main>
    </div>
  );
}
