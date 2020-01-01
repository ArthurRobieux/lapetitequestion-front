import React, { useState } from "react";
import { Menu } from "../Menu";
import { Countdown, Button } from "../common-ui";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../HomePage";
import { Test } from "../Test";

import styles from "./styles.module.scss";

const GAME_DURATION = 60 * 15;

export const EscapeGame = () => {
  const [count, setCount] = useState(GAME_DURATION);
  const [activeCountdown, setActiveCountdown] = useState(false);

  const resetGame = () => {
    setActiveCountdown(false);
    setTimeout(() => setCount(GAME_DURATION), 1500);
  };

  return (
    <div>
      <img
        src={require("../../assets/Mononoke.png")}
        className={styles.logo}
        alt="mononoke"
      />
      <Menu />
      <Countdown count={count} setCount={setCount} active={activeCountdown} />
      <div className={styles.buttons}>
        <Button
          description="C'EST PARTI"
          onClick={() => setActiveCountdown(true)}
        />
        <Button description="ABANDONNER" onClick={() => resetGame()} />
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/test/" component={Test} />
      </Switch>
    </div>
  );
};
