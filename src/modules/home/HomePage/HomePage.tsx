import React from "react";
import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <div>
      <div className={styles.title}>
        Bienvenue sur le site de BaguetteTordue.
      </div>

      <div className={styles.text}>
        Le site est en construction. Mon premier projet est de réaliser un
        escape game dans l'onglet prévu à cet effet.
      </div>

      <img
        src={require("../../../assets/BaguetteTordue.jpg")}
        alt="BaguetteTordue"
        className={styles.image}
      />
    </div>
  );
};
