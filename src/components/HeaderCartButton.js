import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styles from './HeaderCartButton.module.css'

export default function HeaderCartButton() {
  return (
    <button className={styles['header-cart']}>
      <FaCartPlus className={styles.icon} />
      <span className={styles['header-cart-text']}>Your Cart</span>
      <span className={styles.orders}>1</span>
    </button>
  );
}
