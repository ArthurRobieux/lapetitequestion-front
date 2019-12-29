import React from "react";
import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <div>
      <img
        src={require("../../assets/BaguetteTordue.jpg")}
        alt="BaguetteTordue"
        className={styles.image}
      />
    </div>
  );
};
