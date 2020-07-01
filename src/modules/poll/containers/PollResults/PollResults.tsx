import React from "react";
import { RouteComponentProps } from "react-router-dom";

import styles from "./styles.module.scss";
import { Button } from "../../../common-ui";
import { poll_results_1, poll_results_2 } from "../../../api-client/mocks";

import { PollLayout } from "../PollLayout";

export const PollResults = ({ match }: RouteComponentProps<{ id: string }>) => {
  let pollResultsData = null;
  if (match.params.id === "1") pollResultsData = poll_results_1;
  if (match.params.id === "2") pollResultsData = poll_results_2;

  if (!pollResultsData) {
    return (
      <PollLayout>
        Ce sondage n'existe pas.
        <Button description="Retour à l'accueil" to="/" />
      </PollLayout>
    );
  }

  return (
    <PollLayout>
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
            <div>
              {question.answers.map((answer) => (
                <div className={styles.answerContainer}>
                  <div className={styles.answerName}>{answer.name}</div>
                  <div className={styles.answer}>
                    {question.type === "text"
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
      <Button
        description="Retour au sondage"
        to={`/poll/${match.params.id}/`}
      />
    </PollLayout>
  );
};
