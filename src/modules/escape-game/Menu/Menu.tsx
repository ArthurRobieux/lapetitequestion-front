import React from "react";
import styles from "./styles.module.scss";

export type MenuProps = { setPage: (nb: number) => void };

export const Menu = ({ setPage }: MenuProps) => {
  return (
    <div className={styles.menu}>
      <div
        className={styles.tab}
        onClick={() => setPage(1)}
        role="button"
        tabIndex={0}
      >
        Page 1
      </div>
      <div
        className={styles.tab}
        onClick={() => setPage(2)}
        role="button"
        tabIndex={0}
      >
        Page 2
      </div>
    </div>
  );
};
