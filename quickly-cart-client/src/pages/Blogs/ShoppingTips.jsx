import React from 'react';

const ShoppingTips = () => {
    const tips = [
        {
          title: "How to Choose the Right Product",
          date: "April 20, 2025",
          excerpt:
            "Buying online can be tricky. Learn how to read reviews, analyze product ratings, and pick the perfect item for your needs.",
        },
        {
          title: "How to Save Big During Special Sales",
          date: "April 19, 2025",
          excerpt:
            "Sales aren’t always a bargain! Discover tips to avoid fake offers, use coupons smartly, and make the most of seasonal discounts.",
        },
      ];
    
      return (
        <div className="bg-white">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            🛒 Shopping Tips That Save You Money
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-500 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <p className="text-sm text-gray-500 mb-1">{tip.date}</p>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-700">{tip.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default ShoppingTips;