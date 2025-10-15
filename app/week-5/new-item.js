"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // less than 20
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  // more than 1
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };

    console.log("New item:", item);

    alert(
      `Added item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[500px] bg-gray-900 text-white rounded-md p-6 space-y-4 border border-gray-700"
    >
      <h2 className="text-xl font-semibold">Add New Item</h2>

      {/* Name Field */}
      <div className="flex flex-col w-full">
        <label className="mb-1 font-medium">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter item name"
          className="p-2 rounded-md text-white border-2 border-gray-700"
        />
      </div>

      {/* Quantity Field */}
      <div className="flex flex-col items-center space-y-2">
        <label className="font-medium">Quantity:</label>
        <div className="flex items-center space-x-4">
          <button
            type="button"
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
            type="button"
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

      {/* Category Field */}
      <div className="flex flex-col w-full">
        <label className="mb-1 font-medium">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md text-gray-500 border-2 border-gray-700"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
      >
        Add Item
      </button>
    </form>
  );
}