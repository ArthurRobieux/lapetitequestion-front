import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";
import { Button } from "../Button";

export type CopyTextProps = {
  text: string;
  copied: boolean;
  copyToClipboard: () => void;
  nude?: boolean;
  fontWeight?: "bold" | "normal";
};

export const CopyText = ({
  text,
  copied,
  copyToClipboard,
  nude,
  fontWeight = "bold",
}: CopyTextProps) => {
  return (
    <div
      className={classnames(styles.tokenContainer, { [styles.nude]: nude })}
      onClick={() => copyToClipboard()}
      role="button"
      tabIndex={0}
    >
      <div
        className={classnames(styles.token, {
          [styles.fontWeightNormal]: fontWeight === "normal",
        })}
        id="token"
      >
        {text}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => copyToClipboard()}
          nude
          disabled={copied}
          description={copied ? "Copié" : "Copier"}
        />
      </div>
    </div>
  );
};
