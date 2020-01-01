import React from "react";
import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <div>
      <div className={styles.title}>
        Bienvenue sur l'escape game de BaguetteTordue
      </div>

      <div className={styles.text}>
        Lancez le compte à rebour, et la partie commencera. Vous avez 15 minutes
        pour arriver au bout des énigmes.
      </div>

      <img
        src={require("../../assets/BaguetteTordue.jpg")}
        alt="BaguetteTordue"
        className={styles.image}
      />
    </div>
  );
};
