import { db } from "../../utils/firebase.js"; 

import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get all items for the logged-in user
export async function getItems(userId) {
  const items = [];
  const itemsRef = collection(db, "users", userId, "items");

  const snapshot = await getDocs(itemsRef);
  snapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return items;
}

// Add a new item for the user
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}
