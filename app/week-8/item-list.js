"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-600"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-600"
          }`}
        >
          Sort by Category
        </button>

      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect}/>
        ))}
      </ul>
    </div>
  );
}
