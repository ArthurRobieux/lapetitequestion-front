import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

export type TextInputProps = {
  value: string;
  onChange: (e: any) => void;
  description?: string;
  noBorder?: boolean;
};

export const TextInput = ({
  value,
  onChange,
  description,
  noBorder,
}: TextInputProps) => {
  return (
    <div className={styles.textInputContainer}>
      {description && <div className={styles.description}>{description}</div>}
      <input
        className={classnames(styles.textInput, {
          [styles.noBorder]: noBorder,
        })}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt)}
      />
    </div>
  );
};
