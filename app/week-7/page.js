"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="max-w-xl mx-auto p-6 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
