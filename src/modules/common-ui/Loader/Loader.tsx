import React from "react";

import styles from "./styles.module.scss";

export const Loader = () => (
  <div className={styles.loaderContainer}>
    <div className={styles["lds-ring"]}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
