import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type CloseButtonProps = {
  action: any;
  background?: boolean;
  color?: string;
};

export const CloseButton = ({
  action,
  background,
  color = "#8C929A",
}: CloseButtonProps) => (
  <button
    type="button"
    className={classNames(styles.closeButton, {
      [styles.background]: background,
    })}
    onClick={() => action()}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path
        className={styles.iconClose}
        fill={color}
        fillRule="evenodd"
        d="M14.123 12l9.437-9.438A1.5 1.5 0 1 0 21.438.44L12 9.878 2.562.44A1.5 1.5 0 1 0 .44 2.562L9.878 12 .44 21.438a1.5 1.5 0 1 0 2.122 2.122L12 14.122l9.438 9.438a1.496 1.496 0 0 0 2.122 0 1.5 1.5 0 0 0 0-2.122L14.123 12z"
      />
    </svg>
  </button>
);
