import React, { useEffect } from "react";

import styles from "./styles.module.scss";

export type CountdownProps = {
  count: number;
  setCount: (nb: number) => void;
  active: boolean;
};

export const Countdown = ({ count, setCount, active }: CountdownProps) => {
  useEffect(() => {
    if (active) setTimeout(() => setCount(count - 1), 1000);
  }, [count, active]);

  const displayCount = (count: number) => {
    if (String(count).length < 2) {
      return `0${count}`;
    }
    return String(count);
  };

  return (
    <div className={styles.countdown}>
      {displayCount(Math.floor(count / 60))} : {displayCount(count % 60)}
    </div>
  );
};
