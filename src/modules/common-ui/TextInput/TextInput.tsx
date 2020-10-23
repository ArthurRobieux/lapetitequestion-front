import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

export type TextInputProps = {
  value: string;
  onChange: (e: any) => void;
  description?: string;
  noBorder?: boolean;
  maxWidth?: boolean;
  placeholder?: string;
  error?: boolean;
};

export const TextInput = ({
  value,
  onChange,
  description,
  noBorder,
  maxWidth,
  placeholder,
  error = false,
}: TextInputProps) => {
  return (
    <div className={styles.textInputContainer}>
      {description && <div className={styles.description}>{description}</div>}
      <input
        className={classnames(styles.textInput, {
          [styles.noBorder]: noBorder,
          [styles.error]: error,
          [styles.maxWidth]: maxWidth,
        })}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt)}
        placeholder={placeholder}
      />
    </div>
  );
};
