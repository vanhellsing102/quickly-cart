import React from "react";
import { FcNext } from "react-icons/fc";

const WhatNext = () => {
  return (
    <div className="bg-white p-6 border-2 border-slate-200 shadow-md rounded-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">
        What’s Next:
      </h2>
      <ul className="space-y-6">
        <li className="flex items-start gap-2">
          <FcNext className="mt-1" />
          <div>
            <span className="text-lg font-medium text-slate-800">Live Order Tracking:</span>
            <p className="text-slate-700">
              Customers will be able to track their orders in real-time after placing them, knowing exactly where they are.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <FcNext className="mt-1" />
          <div>
            <span className="text-lg font-medium text-slate-800">AI Product Suggestions:</span>
            <p className="text-slate-700">
              Based on the customer’s previous purchases and browsing history, intelligent product suggestions will be provided.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <FcNext className="mt-1" />
          <div>
            <span className="text-lg font-medium text-slate-800">Mobile App Integration:</span>
            <p className="text-slate-700">
              The Android and iOS apps will be released soon, making shopping even easier.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <FcNext className="mt-1" />
          <div>
            <span className="text-lg font-medium text-slate-800">Multi-Vendor Support:</span>
            <p className="text-slate-700">
              Multiple vendors will be able to upload and sell their products on Quicky Cart.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <FcNext className="mt-1" />
          <div>
            <span className="text-lg font-medium text-slate-800">In-App Payment Gateway:</span>
            <p className="text-slate-700">
              Soon, payment methods like Bkash, Nagad, Rocket, and credit/debit cards will be integrated into the app for seamless transactions.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WhatNext;
