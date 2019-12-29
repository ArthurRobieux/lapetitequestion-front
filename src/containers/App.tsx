import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Menu } from "../modules/Menu";
// import styles from "./styles.module.scss";

export const App = withRouter(() => {
  return (
    <div>
      <div>Vive BaguetteTordue</div>
      <Menu />
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>} />
        <Route path="/1/" component={() => <div>1</div>} />
        <Route path="/2/" component={() => <div>2</div>} />
      </Switch>
    </div>
  );
});
