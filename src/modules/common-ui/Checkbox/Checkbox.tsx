import React from "react";
import classNames from "classnames";
import { css } from "emotion";

import styles from "./styles.module.scss";

export type CheckboxProps<T> = {
  checked: boolean;
  className?: string;
  color?: string;
};

export const Checkbox = ({ className, checked, color }: CheckboxProps<any>) => {
  const checkboxActiveStyle = css`
    &:before {
      background: ${color};
      border: 0;
    }
  `;

  return (
    <span
      className={classNames(
        "FormCheckbox",
        className,
        styles.checkbox,
        { [styles.checkboxActive]: checked },
        { CheckboxActive: checked },
        { [checkboxActiveStyle]: checked && color }
      )}
    >
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
      />
    </span>
  );
};
