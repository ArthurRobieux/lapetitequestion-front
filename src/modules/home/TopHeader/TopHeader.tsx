import React from "react";
import { NavLink } from "react-router-dom";
import logoSportEasy from "../../../assets/img/logoSportEasy.svg";
import styles from "./styles.module.scss";

export const TopHeader = () => {
  return (
    <div className={styles.menu}>
      <NavLink className={styles.navlink} to="/">
        <img src={logoSportEasy} alt="logo" />
      </NavLink>
      <div className={styles.tabs}>
        <NavLink className={styles.navlink} to="/">
          Accueil
        </NavLink>
        <NavLink className={styles.navlink} to="/poll/example/">
          Exemples de sondage
        </NavLink>
        <NavLink className={styles.navlink} to="/help/">
          Aide
        </NavLink>
      </div>
    </div>
  );
};
