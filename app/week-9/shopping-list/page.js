"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
    .split(",")[0] 
    .replace(
      /[\uD83C[\uDC00-\uDFFF]]|[\uD83D[\uDC00-\uDFFF]]|[\u2011-\u26FF]|[\uD83E[\uDD10-\uDDFF]]/g,
      "\uFFFD" 
    )
    .trim()
    .toLowerCase();

  setSelectedItemName(cleanedName);
  };


  return (
    <main className="flex flex-col md:flex-row gap-8 p-6 min-h-screen text-white">
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Shopping List</h1>

        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
