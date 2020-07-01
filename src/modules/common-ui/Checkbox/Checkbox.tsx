import React from "react";
import classNames from "classnames";
import { css } from "emotion";

import styles from "./styles.module.scss";

export type CheckboxProps<T> = {
  checked: boolean;
  className?: string;
  color?: string;
  disabled?: boolean;
};

export const Checkbox = ({
  className,
  checked,
  color,
  disabled,
}: CheckboxProps<any>) => {
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
        { [styles.disabled]: disabled },
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
