"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const offers = [
    {
      icon: "🚚",
      title: "Free Delivery",
      subtitle: "Orders over ৳500",
      description:
        "Enjoy complimentary delivery on all orders above ৳500. No hidden charges, just delicious food delivered to your doorstep.",
      highlight: "Save up to ৳80",
      color: "from-[#52B788] to-[#40916C]",
    },
    {
      icon: "🎉",
      title: "First Order Discount",
      subtitle: "25% OFF",
      description:
        "New to MealDash? Get 25% off your first order! Use code WELCOME25 at checkout and start your culinary journey with us.",
      highlight: "Up to ৳200 OFF",
      color: "from-[#E63946] to-[#DC2F02]",
    },
    {
      icon: "⭐",
      title: "Loyalty Rewards",
      subtitle: "Earn & Save",
      description:
        "Earn 5 points for every ৳100 spent. Redeem 100 points for ৳50 discount. Refer friends and get bonus points!",
      highlight: "5% Cashback",
      color: "from-[#F77F00] to-[#FCBF49]",
    },
  ];

  const pricingTiers = [
    {
      name: "Basic Plan",
      price: "Free",
      period: "Forever",
      description: "Perfect for occasional food lovers",
      features: [
        "Browse all restaurants",
        "Standard delivery",
        "Basic customer support",
        "Order tracking",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Premium Plan",
      price: "৳299",
      period: "per month",
      description: "Best for regular food enthusiasts",
      features: [
        "Everything in Basic",
        "Priority delivery",
        "24/7 premium support",
        "Exclusive restaurant access",
        "Monthly free delivery",
        "Special member discounts",
      ],
      buttonText: "Choose Premium",
      popular: true,
    },
    {
      name: "Family Plan",
      price: "৳499",
      period: "per month",
      description: "Ideal for families and groups",
      features: [
        "Everything in Premium",
        "Up to 6 family members",
        "Bulk order discounts",
        "Family meal suggestions",
        "Unlimited free delivery",
        "Dedicated family support",
      ],
      buttonText: "Choose Family",
      popular: false,
    },
  ];

  return (
    <div className="bg-[#EDF6F9] pt-24 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D3557] mb-4">
            Special Offers & Pricing
          </h2>
          <p className="text-lg text-[#1D3557]/70 max-w-3xl mx-auto">
            Discover amazing deals and choose the perfect plan for your dining
            needs. Save more, eat better with MealDash!
          </p>
        </div>

        {/* Offers Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${offer.color} rounded-t-2xl`}
              ></div>

              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{offer.icon}</div>
                <h3 className="text-2xl font-bold text-[#1D3557] mb-2">
                  {offer.title}
                </h3>
                <div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${offer.color} text-white font-semibold text-sm`}
                >
                  {offer.subtitle}
                </div>
              </div>

              <p className="text-[#1D3557]/70 text-center mb-6 leading-relaxed">
                {offer.description}
              </p>

              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-[#52B788]/10 text-[#52B788] rounded-full font-semibold text-sm">
                  {offer.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Plans Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">
            Choose Your Plan
          </h3>
          <p className="text-lg text-[#1D3557]/70 max-w-2xl mx-auto">
            Select the perfect plan that fits your lifestyle and dining
            preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                tier.popular ? "ring-4 ring-[#E63946]/20 scale-105" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#E63946] to-[#DC2F02] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-[#1D3557] mb-2">
                  {tier.name}
                </h4>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#E63946]">
                    {tier.price}
                  </span>
                  {tier.price !== "Free" && (
                    <span className="text-[#1D3557]/60 ml-2">
                      /{tier.period}
                    </span>
                  )}
                </div>
                <p className="text-[#1D3557]/70">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#52B788] mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#1D3557]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  tier.popular
                    ? "bg-gradient-to-r from-[#E63946] to-[#DC2F02] text-white shadow-lg hover:shadow-xl"
                    : "bg-[#1D3557] text-white hover:bg-[#1D3557]/90"
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="bg-gradient-to-r from-[#E63946] to-[#DC2F02] rounded-2xl p-8 md:p-12 text-center text-white"
          data-aos="fade-up"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Ordering?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and experience the best food
            delivery service in town!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#E63946] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#E63946] transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
