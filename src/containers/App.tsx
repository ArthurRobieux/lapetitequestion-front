import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Menu } from "../modules/Menu";
import { HomePage } from "../modules/HomePage";
import { Test } from "../modules/Test";

import styles from "./styles.module.scss";

export const App = withRouter(() => {
  return (
    <div className={styles.app}>
      <img
        src={require("../assets/Mononoke.png")}
        className={styles.logo}
        alt="mononoke"
      />
      <Menu />

      <div className={styles.title}>Vive BaguetteTordue</div>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/test/" component={Test} />
      </Switch>
    </div>
  );
});
