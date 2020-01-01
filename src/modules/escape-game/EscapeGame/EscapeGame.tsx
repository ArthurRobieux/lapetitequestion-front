import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Countdown, Button } from "../../common-ui";

const GAME_DURATION = 60 * 15;

export const EscapeGame = () => {
  const [count, setCount] = useState(GAME_DURATION);

  return (
    <div>
      <Countdown count={count} setCount={setCount} active={true} />
      <div className={styles.button}>
        <Button description="ABANDONNER" to="/escape-game/" />
      </div>
    </div>
  );
};
