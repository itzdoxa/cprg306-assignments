"use client";

import { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {

  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Load items from Firestore
  useEffect(() => {
  if (!user) return;

    async function loadItems() {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }

    loadItems();
  }, [user]);


  
  // Add new item to Firestore
  const handleAddItem = async (item) => {
  if (!user) return;

    const newId = await addItem(user.uid, item);

    // Add item with Firestore-generated ID
    setItems((prev) => [...prev, { ...item, id: newId }]);
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
