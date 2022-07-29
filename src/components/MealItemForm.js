import React from "react";
import Input from "./Input";
import styles from "./MealItemForm.module.css";

export default function MealItemForm() {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          defaultValue: 0,
          step: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
}
