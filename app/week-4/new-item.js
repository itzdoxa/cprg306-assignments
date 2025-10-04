"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // less than 20
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  // more than 1
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex flex-col justify-center items-center w-[500px] h-[150px] bg-black text-white rounded-md p-4 space-y-4 border border-gray-700">
      <h2 className="text-lg font-semibold">Add New Item</h2>

      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-md font-bold text-lg ${
            quantity === 1
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-500 text-white"
          }`}
        >
          –
        </button>

        <span className="text-xl font-semibold w-10 text-center">
          {quantity}
        </span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`w-10 h-10 flex items-center justify-center rounded-md font-bold text-lg ${
            quantity === 20
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          +
        </button>
      </div>

      <p className="text-xs text-gray-400">Allowed range: 1–20</p>
    </div>
  );
}
