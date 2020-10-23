import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

export type ButtonProps = {
  description: string;
  onClick?: () => void;
  to?: string;
  invert?: boolean;
  maxWidth?: boolean;
  disabled?: boolean;
  nude?: boolean;
  className?: string;
};

export const Button = ({
  description,
  onClick,
  to,
  invert,
  maxWidth,
  disabled,
  nude,
  className,
}: ButtonProps) => {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={classnames(className, styles.button, {
          [styles.invert]: invert,
          [styles.maxWidth]: maxWidth,
          [styles.disabled]: disabled,
          [styles.nude]: nude,
        })}
      >
        {description}
      </button>
    );
  } else if (to) {
    return (
      <NavLink
        to={to}
        className={classnames(className, styles.button, {
          [styles.invert]: invert,
          [styles.maxWidth]: maxWidth,
          [styles.disabled]: disabled,
          [styles.nude]: nude,
        })}
      >
        {description}
      </NavLink>
    );
  }
  return <div className={styles.button}>{description}</div>;
};
