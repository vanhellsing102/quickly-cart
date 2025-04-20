import React from 'react';

const UserGuides = () => {
    const guides = [
        {
          title: "How to Track Your Order",
          content:
            "Once your order is placed, go to 'My Orders' from your account menu. Click on the order to see real-time tracking updates with courier information.",
        },
        {
          title: "How to Return a Product",
          content:
            "Go to the 'My Orders' section, choose the product you want to return, and select 'Request Return'. Follow the steps and schedule pickup easily.",
        },
      ];
    
      return (
        <div className="bg-gradient-to-br from-white to-gray-200 rounded-xl py-10">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🛠️ User <span className="text-blue-600">Guides</span>
            </h2>
            <p className="text-gray-600 mb-12 text-sm md:text-base">
              Need help using Quickly Cart? Here are step-by-step guides to get you started.
            </p>
          </div>
    
          <div className="max-w-5xl mx-auto space-y-8">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{guide.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{guide.content}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default UserGuides;