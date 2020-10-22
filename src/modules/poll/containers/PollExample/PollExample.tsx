import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { Title } from "../../../common-ui";
import { NavLink } from "react-router-dom";
import { apiClient } from "../../../api-client";
import { ApiPollList } from "../../../api-client/mocks";

export const PollExample = () => {
  const [polls, setPolls] = useState([] as ApiPollList);
  useEffect(() => {
    apiClient.lpq.getPolls().then((response) => setPolls(response));
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

      {polls.map((poll) => (
        <NavLink to={`/poll/${poll.id}/`} className={styles.example}>
          {poll.title}
        </NavLink>
      ))}
    </div>
  );
};
