import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type RadioButtonProps = {
  checked: boolean;
};

export const RadioButton = ({ checked }: RadioButtonProps) => {
  return (
    <div className={styles.simpleRadioButtonContainer}>
      <input
        className={classNames(styles.radioButton, {
          [styles.radioButtonActive]: checked,
        })}
        type="radio"
        checked={checked}
      />
    </div>
  );
};
