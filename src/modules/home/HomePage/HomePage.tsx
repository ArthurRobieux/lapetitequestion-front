import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../../common-ui";
import Preview from "../../../assets/img/Preview.png";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Crée ton sondage</div>
      <div className={styles.motto}>" La question elle est vite répondue "</div>
      <a
        href="https://www.youtube.com/watch?v=8VSFjyF3B5E"
        className={styles.ref}
        target="_blank"
        rel="noopener noreferrer"
      >
        Si t'as pas la ref clique ici !
      </a>
      <Button description="Créer un sondage" to="/poll/create/" />
      <div className={styles.previewContainer}>
        <img src={Preview} alt="preview" className={styles.preview} />
      </div>
    </div>
  );
};
