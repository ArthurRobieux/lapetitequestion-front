import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

import logoSportEasy from "../../../assets/img/logoSportEasyBlue.svg";

export type PollLayoutProps = { children: ReactNode };

export const PollLayout = ({ children }: PollLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink to="/">
          <img src={logoSportEasy} alt="logo" />
        </NavLink>
      </div>
      {children}
    </div>
  );
};
