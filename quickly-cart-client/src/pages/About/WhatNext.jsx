import React from "react";
import { FcNext } from "react-icons/fc";

const WhatNext = () => {
  return (
    <div className="">
        <h2 className='text-3xl font-semibold text-blue-600 mb-1'>What next:</h2>
      <ul className="space-y-1">
        <li className="flex items-center gap-2">
          <FcNext></FcNext>
          <span className="text-lg font-medium">
          Live Order Tracking:
          </span>
          <span>
          Customers will be able to track their orders in real-time after placing them, knowing exactly where they are.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <FcNext></FcNext>
          <span className="text-lg font-medium">
          AI Product Suggestions:
          </span>
          <span>
          Based on the customer’s previous purchases and browsing history, intelligent product suggestions will be provided.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <FcNext></FcNext>
          <span className="text-lg font-medium">
          Mobile App Integration:
          </span>
          <span>
          The Android and iOS apps will be released soon, making shopping even easier.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <FcNext></FcNext>
          <span className="text-lg font-medium">
          Multi-Vendor Support:
          </span>
          <span>
          Multiple vendors will be able to upload and sell their products on Quicky Cart.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <FcNext></FcNext>
          <span className="text-lg font-medium">
          In-App Payment Gateway:
          </span>
          <span>
          Soon, payment methods like Bkash, Nagad, Rocket, and credit/debit cards will be <br /> integrated into the app for seamless transactions.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default WhatNext;
