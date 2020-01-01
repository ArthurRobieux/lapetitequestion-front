import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Countdown, Button } from "../../common-ui";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Menu } from "../Menu";

const GAME_DURATION = 60 * 15;

export const EscapeGame = () => {
  const [count, setCount] = useState(GAME_DURATION);
  const [page, setPage] = useState(1);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      default:
        return <Page1 />;
    }
  };
  return (
    <div>
      <div className={styles.header}>
        <Countdown count={count} setCount={setCount} active={true} />
        <div className={styles.button}>
          <Button description="ABANDONNER" to="/escape-game/" />
        </div>
      </div>
      <Menu setPage={setPage} />
      {renderPage()}
    </div>
  );
};
