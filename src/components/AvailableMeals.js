import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "./Card";
import MealItems from "./MealItems";

export default function AvailableMeals() {
  const mealList = [
    {
      id: 1,
      name: "Sandwitches",
      price: 12.0,
      description: "A sandwitch",
    },
    {
      id: 2,
      name: "Soup",
      price: 15.67,
      description: "A soup",
    },
    {
      id: 3,
      name: "Burger",
      price: 32.56,
      description: "A burger",
    },
    {
      id: 4,
      name: "Fries",
      price: 11.89,
      description: "A fries",
    },
  ];

  const mealListItems = mealList.map((meals) => {
    return (
      <MealItems
      key={meals.id}
        name={meals.name}
        price={meals.price}
        description={meals.description}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealListItems}</ul>
      </Card>
    </section>
  );
}
