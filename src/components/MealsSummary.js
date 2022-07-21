import React from "react";
import styles from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Delivered To You!</h2>
      <p>
        Choose food items from the below list to add to the cart and then tap
        onto order now to order food.
      </p>
      <p>
        All our food items are prepared highly hygenic with skilled chiefs and
        delievered to you safely with sanitised delivery partner.
      </p>
    </section>
  );
}
