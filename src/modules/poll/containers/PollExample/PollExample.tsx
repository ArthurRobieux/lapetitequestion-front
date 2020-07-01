import React from "react";

import styles from "./styles.module.scss";
import { Title } from "../../../common-ui";
import { NavLink } from "react-router-dom";

export const PollExample = () => {
  return (
    <div className={styles.container}>
      <Title>Exemples de sondage</Title>
      <NavLink to="/poll/1/" className={styles.example}>
        Exemple 1
      </NavLink>
      <NavLink to="/poll/2/" className={styles.example}>
        Exemple 2
      </NavLink>
    </div>
  );
};
