import React from 'react';

const IndustryUpdate = () => {
    const updates = [
        {
          title: "AI in E-commerce: Smarter Shopping Experiences",
          date: "April 17, 2025",
          description:
            "E-commerce platforms are rapidly integrating AI for personalized recommendations, chatbot support, and inventory optimization.",
        },
        {
          title: "Sustainability is the New Trend",
          date: "April 15, 2025",
          description:
            "From eco-friendly packaging to carbon-neutral delivery — sustainability is influencing consumer choices more than ever.",
        },
      ];
    
      return (
        <div className="bg-gradient-to-br from-white to-gray-200 rounded-xl py-10">
          <h2 className="text-4xl font-bold text-center mb-7">
            🧠 Industry <span className="text-yellow-400">Updates</span>
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {updates.map((update, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 p-6 rounded-2xl hover:shadow-gray-400/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-semibold">
                    {update.title}
                  </h3>
                  <span className="text-xs text-gray-700">
                    {update.date}
                  </span>
                </div>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {update.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default IndustryUpdate;