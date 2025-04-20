import React from 'react';

const NewProductRealiz = () => {
    const products = [
        {
          name: "QuickChef Blender X5",
          releaseDate: "April 20, 2025",
          description:
            "Powerful, sleek and perfect for your daily smoothies and sauces. Comes with 5-speed modes and silent motor tech.",
        },
        {
          name: "Smart LED Strip V3",
          releaseDate: "April 18, 2025",
          description:
            "Customize your lighting like never before. App-controlled, voice-enabled, and packed with vibrant colors.",
        },
      ];
      return (
        <div className="bg-gradient-to-br from-white to-gray-200 rounded-xl py-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            🆕 Recently <span className="text-green-600">Launched Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {product.releaseDate}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default NewProductRealiz;