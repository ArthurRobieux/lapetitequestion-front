import React from "react";
import { withRouter } from "react-router-dom";

import { EscapeGame } from "../modules/EscapeGame";

import styles from "./styles.module.scss";

export const App = withRouter(() => {
  return (
    <div className={styles.app}>
      <EscapeGame />
    </div>
  );
});
