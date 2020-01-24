import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import styles from "./styles.module.scss";
import { HomePage, EscapeGame, Menu } from "../modules/home";
import { EscapeGame as EG } from "../modules/escape-game";

export const App = withRouter(() => {
  const SHOW_MENU = !window.location.pathname.includes("/escape-game/play/");

  return (
    <div className={styles.app}>
      {SHOW_MENU && <Menu />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/escape-game/play/" component={EG} />
        <Route path="/escape-game/" component={EscapeGame} />
      </Switch>
    </div>
  );
});
