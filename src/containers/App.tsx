import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import styles from "./styles.module.scss";
import { HomePage, TopHeader, Help } from "../modules/home";
import { Poll, PollCreate, PollExample, PollResults } from "../modules/poll";

import ArrowTopCrossGreen from "../assets/img/ArrowTopCrossGreen.svg";
import FieldSoccerWhite from "../assets/img/FieldSoccerWhite.svg";

export const App = withRouter(() => {
  const showHeader = ["/", "/poll/example/", "/help/"].includes(
    window.location.pathname
  );

  if (showHeader) document.body.style.backgroundColor = "#030e2f";
  else document.body.style.backgroundColor = "#ececec";

  return (
    <div className={styles.app}>
      {showHeader && <TopHeader />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/help/" component={Help} />
        <Route path="/poll/create/" component={PollCreate} />
        <Route path="/poll/example/" component={PollExample} />
        <Route path="/poll/:id/results/" component={PollResults} />
        <Route path="/poll/:id/" component={Poll} />
      </Switch>
      {showHeader && (
        <>
          <img src={ArrowTopCrossGreen} className={styles.arrow} alt="logo" />
          <img src={FieldSoccerWhite} className={styles.field} alt="logo" />
        </>
      )}
    </div>
  );
});
