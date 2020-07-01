import React from "react";

import styles from "./styles.module.scss";

export type ProgressBarProps = {
  value: number;
  total: number;
};

export const ProgressBar = ({ value, total }: ProgressBarProps) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar}>
        <div className={styles.background} />
        <div
          className={styles.color}
          style={{ width: `${(value / total) * 100}%` }}
        />
      </div>
      <div className={styles.value}>
        {value} / {total}
      </div>
    </div>
  );
};
