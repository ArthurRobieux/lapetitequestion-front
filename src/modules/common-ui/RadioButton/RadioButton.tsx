import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type RadioButtonProps = {
  checked: boolean;
  disabled?: boolean;
};

export const RadioButton = ({ checked, disabled }: RadioButtonProps) => {
  return (
    <div className={styles.simpleRadioButtonContainer}>
      <input
        className={classNames(styles.radioButton, {
          [styles.radioButtonActive]: checked,
          [styles.disabled]: disabled,
        })}
        type="radio"
        checked={checked}
      />
    </div>
  );
};
