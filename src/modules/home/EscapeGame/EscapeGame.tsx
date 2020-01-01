import React from "react";
import { Button } from "../../common-ui";

import styles from "./styles.module.scss";

export const EscapeGame = () => {
  return (
    <div>
      <div className={styles.text}>
        Cliquez sur le bouton "C'est parti !" et la partie commencera. Vous
        aurez 15 minutes pour arriver au bout des énigmes.
      </div>

      <div className={styles.button}>
        <Button description="C'EST PARTI" to="/escape-game/play/" />
      </div>
    </div>
  );
};
