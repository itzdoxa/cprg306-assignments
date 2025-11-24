"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Load meals when the ingredient changes
  useEffect(() => {
    async function loadMealIdeas() {
      const mealData = await fetchMealIdeas(ingredient);
      setMeals(mealData);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-gray-800 p-4 rounded-md flex-1">
      <h2 className="text-xl font-bold mb-4 text-center text-white">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {!ingredient && (
        <p className="text-gray-400 text-center">
          Select an item to see meal ideas.
        </p>
      )}

      <ul className="space-y-3">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="p-2 border border-gray-700 rounded-md flex items-center gap-4"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded object-cover"
            />
            <span className="text-white font-medium">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
