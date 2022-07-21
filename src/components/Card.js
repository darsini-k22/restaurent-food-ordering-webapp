import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  const cardClass = styles.card ;
  return <div className={cardClass}>{props.children}</div>;
}
