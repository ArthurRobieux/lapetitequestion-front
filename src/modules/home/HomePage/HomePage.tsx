import React from "react";
import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <div>
      <div className={styles.title}>Test Specify</div>

      <div className={styles.colorA}>Color A</div>
      <div className={styles.colorB}>Color B</div>
      <div className={styles.colorC}>Color C</div>
      <div className={styles.colorD}>Color D</div>
      <div className={styles.colorE}>Color E</div>
    </div>
  );
};
