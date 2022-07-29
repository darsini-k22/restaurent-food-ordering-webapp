import React from "react";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} />;
};

const Overlay = (props) => {};
export default function Modal() {
  return <div>Modal</div>;
}
