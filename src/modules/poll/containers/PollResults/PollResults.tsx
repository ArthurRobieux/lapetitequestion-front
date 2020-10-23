import React, { useEffect, useState } from "react";
import { RouteComponentProps, NavLink } from "react-router-dom";

import styles from "./styles.module.scss";
import { Button } from "../../../common-ui";
import { ApiPoll } from "../../../api-client/mocks";

import logoSportEasy from "../../../../assets/img/logoSportEasy.svg";

import { PollLayout } from "../PollLayout";
import { apiClient } from "../../../api-client";

export const PollResults = ({ match }: RouteComponentProps<{ id: string }>) => {
  const [pollData, setPollData] = useState(null as ApiPoll | null);

  useEffect(() => {
    apiClient.lpq.getPoll({ id: match.params.id }).then((response) => {
      setPollData(response);
    });
  }, []);

  if (!pollData) {
    return (
      <PollLayout>
        Ce sondage n'existe pas.
        <Button description="Retour à l'accueil" to="/" />
      </PollLayout>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink to="/">
          <img src={logoSportEasy} alt="logo" />
        </NavLink>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.block}>
          <div className={styles.pollTitle}>{pollData.title}</div>
          <div className={styles.pollDescription}>{pollData.description}</div>
          <div className={styles.pollSeparator} />
          <div>
            {pollData.questions.map((question, index) => (
              <div className={styles.question}>
                <div>
                  {index + 1} : {question.description}
                </div>
                <div className={styles.choices}>
                  {pollData!.questions[index].choices.map((choice) => (
                    <div>
                      {choice.description} -{" "}
                      {Math.round(
                        (question.answers.filter((answer) =>
                          answer.choices!.find((c) => c.choice_id === choice.id)
                        ).length /
                          question.answers.length) *
                          100
                      )}{" "}
                      %
                    </div>
                  ))}
                </div>
                <div>
                  {question.answers.map((answer) => (
                    <div className={styles.answerContainer}>
                      <div className={styles.answerName}>{answer.name}</div>
                      <div className={styles.answer}>
                        {question.question_type === "text"
                          ? answer.text
                          : answer.choices!.map((choice_id) => (
                              <div>{choice_id.choice_id}</div>
                            ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.button}>
            <Button
              description="Retour au sondage"
              to={`/poll/${match.params.id}/`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
