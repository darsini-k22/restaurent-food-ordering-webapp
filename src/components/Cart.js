import React from "react";
import styles from "./Cart.module.css";

export default function Cart() {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Shusi", quantity: 3, price: 25.99 }].map((items) => {
        return <li>{items.name}</li>;
      })}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount:</span>
        <span>39.55</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
}
