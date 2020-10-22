import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { Title } from "../../../common-ui";
import { NavLink } from "react-router-dom";
import { apiClient } from "../../../api-client";
import { ApiPollList } from "../../../api-client/mocks";

export const PollExample = () => {
  const [polls, setPolls] = useState([] as ApiPollList);

  const onFetchData = () => {
    apiClient.lpq.getPolls().then((response) => setPolls(response));
  };

  useEffect(() => {
    onFetchData();
  }, []);

  const onDelete = (id: number) => {
    apiClient.lpq.deletePoll({ id }).then(() => onFetchData());
  };

  return (
    <div className={styles.container}>
      <Title>Liste des sondages</Title>

      {polls.map((poll) => (
        <div className={styles.poll}>
          <NavLink to={`/poll/${poll.id}/`} className={styles.example}>
            {poll.title}
          </NavLink>
          <span
            className={styles.delete}
            onClick={() => onDelete(poll.id)}
            role="button"
            tabIndex={0}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
};
