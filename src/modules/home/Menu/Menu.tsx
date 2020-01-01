import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavLink className={styles.navlink} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navlink} to="/escape-game/">
        Escape Game
      </NavLink>
    </div>
  );
};
