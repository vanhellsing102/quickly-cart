import React from 'react';
import { FcNext } from "react-icons/fc";

const WhyQuickyCart = () => {
    return (
        <div className="bg-white border-2 border-slate-200 shadow-md p-6 rounded-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
        Why Quicky Cart:
      </h2>
      <ul className="space-y-4">
        <li className="flex items-start gap-2">
          <FcNext className="mt-1" />
          <div>
            <span className="underline underline-offset-4 text-lg font-medium text-slate-800">
              Fast & Real-Time:
            </span>{" "}
            <span className="text-slate-700">
              Experience instant cart updates and real-time product interaction.
            </span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <FcNext className="mt-1" />
          <div>
            <span className="underline underline-offset-4 text-lg font-medium text-slate-800">
              Secure & Reliable:
            </span>{" "}
            <span className="text-slate-700">
              User authentication and backend are built with robust technologies like Express.js, MongoDB, and JWT.
            </span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <FcNext className="mt-1" />
          <div>
            <span className="underline underline-offset-4 text-lg font-medium text-slate-800">
              User-Friendly UI:
            </span>{" "}
            <span className="text-slate-700">
              Clean, minimal, and responsive design ensures a smooth experience on both desktop and mobile.
            </span>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <FcNext className="mt-1" />
          <div>
            <span className="underline underline-offset-4 text-lg font-medium text-slate-800">
              Seamless Checkout:
            </span>{" "}
            <span className="text-slate-700">
              No long forms or confusing steps — just quick and easy purchases.
            </span>
          </div>
        </li>
      </ul>
    </div>
    );
};

export default WhyQuickyCart;