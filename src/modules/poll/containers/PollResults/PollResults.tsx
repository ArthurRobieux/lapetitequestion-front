import React from "react";
import { RouteComponentProps, NavLink } from "react-router-dom";

import styles from "./styles.module.scss";
import { Button } from "../../../common-ui";
import {
  poll_results_1,
  poll_results_2,
  poll_1,
  poll_2,
  ApiPoll,
  ApiPollResults,
} from "../../../api-client/mocks";

import logoSportEasy from "../../../../assets/img/logoSportEasy.svg";

import { PollLayout } from "../PollLayout";

export const PollResults = ({ match }: RouteComponentProps<{ id: string }>) => {
  let pollResultsData = null as ApiPollResults | null;
  let pollData = null as ApiPoll | null;
  if (match.params.id === "1") {
    pollData = poll_1;
    pollResultsData = poll_results_1;
  }
  if (match.params.id === "2") {
    pollData = poll_2;
    pollResultsData = poll_results_2;
  }

  if (!pollResultsData || !pollData) {
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
          <div className={styles.pollTitle}>{pollResultsData.title}</div>
          <div className={styles.pollDescription}>
            {pollResultsData.description}
          </div>
          <div className={styles.pollSeparator} />
          <div>
            {pollResultsData.questions.map((question, index) => (
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
                          answer.choices!.find((c) => c.id === choice.id)
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
                          : answer.choices!.map((choice) => (
                              <div>{choice.description}</div>
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
