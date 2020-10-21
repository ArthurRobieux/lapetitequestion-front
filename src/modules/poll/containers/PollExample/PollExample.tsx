import React, { useEffect } from "react";

import styles from "./styles.module.scss";
import { Title } from "../../../common-ui";
import { NavLink } from "react-router-dom";
import { apiClient } from "../../../api-client";

export const PollExample = () => {
  useEffect(() => {
    apiClient.lpq.getPolls();
    fetch("http://127.0.0.1:8000/api/polls/", {
      method: "GET",
      headers: { "Access-Control-Allow-Origin": "*", credentials: "true" },
    });
  }, []);

  return (
    <div className={styles.container}>
      <Title>Exemples de sondage</Title>
      <NavLink to="/poll/1/" className={styles.example}>
        Exemple 1
      </NavLink>
      <NavLink to="/poll/2/" className={styles.example}>
        Exemple 2
      </NavLink>
    </div>
  );
};
