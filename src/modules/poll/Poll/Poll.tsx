import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import styles from "./styles.module.scss";
import { Button } from "../../common-ui";
import { poll_1, poll_2, ApiPoll, ApiPollAnswer } from "../../api-client/mocks";

import { PollLayout } from "../PollLayout";
import { TextInput, Checkbox, RadioButton } from "../../common-ui";

export const Poll = ({ match }: RouteComponentProps<{ id: string }>) => {
  let pollData = null as ApiPoll | null;
  if (match.params.id === "1") pollData = poll_1;
  if (match.params.id === "2") pollData = poll_2;

  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [form, setForm] = useState({
    questions: [],
    name: "",
  } as ApiPollAnswer);

  useEffect(() => {
    const f = form;
    if (pollData) {
      pollData.questions.map((question) => {
        if (question.type === "text")
          f.questions.push({ id: question.id, text: "" });
        else f.questions.push({ id: question.id, choice_ids: [] });
      });
    }
    setForm(f);
  }, [pollData]);

  if (!pollData) {
    return (
      <PollLayout>
        Ce sondage n'existe pas.
        <Button description="Retour à l'accueil" to="/" />
      </PollLayout>
    );
  }

  if (currentQuestion === -1)
    return (
      <PollLayout>
        <div className={styles.pollTitle}>{pollData.title}</div>
        <div className={styles.pollDescription}>{pollData.description}</div>
        <div className={styles.pollSeparator} />
        <TextInput
          description="Ton nom *"
          value={form.name}
          onChange={(evt) => setForm({ ...form, name: evt.target.value })}
        />
        <Button
          description="C'est parti !"
          onClick={() => setCurrentQuestion(0)}
          disabled={!form.name}
        />
        <div className={styles.pollSeparator} />
        <Button
          description="Voir les résultats"
          to={`/poll/${match.params.id}/results/`}
          invert
        />
      </PollLayout>
    );

  return (
    <PollLayout>
      {currentQuestion < pollData.questions.length ? (
        <div className={styles.questionContainer}>
          <div className={styles.questionNumber}>
            Question {currentQuestion + 1}
          </div>

          <div className={styles.question}>
            {pollData.questions[currentQuestion].description}
          </div>
          <div className={styles.choices}>
            {pollData.questions[currentQuestion].choices.map((choice) => (
              <>
                <div
                  className={styles.choice}
                  onClick={() => {
                    const f = { ...form };

                    if (
                      pollData!.questions[currentQuestion].type ===
                      "single_choice"
                    ) {
                      f.questions[currentQuestion].choice_ids = [];
                    }

                    if (
                      f.questions[currentQuestion].choice_ids!.includes(
                        choice.id
                      )
                    ) {
                      const index = f.questions[
                        currentQuestion
                      ].choice_ids!.indexOf(choice.id);
                      if (index > -1) {
                        f.questions[currentQuestion].choice_ids!.splice(
                          index,
                          1
                        );
                      }
                    } else {
                      f.questions[currentQuestion].choice_ids!.push(choice.id);
                    }
                    setForm(f);
                  }}
                >
                  {pollData!.questions[currentQuestion].type ===
                    "multiple_choices" && (
                    <Checkbox
                      checked={form.questions[
                        currentQuestion
                      ].choice_ids!.includes(choice.id)}
                    />
                  )}
                  {pollData!.questions[currentQuestion].type ===
                    "single_choice" && (
                    <RadioButton
                      checked={form.questions[
                        currentQuestion
                      ].choice_ids!.includes(choice.id)}
                    />
                  )}
                  {choice.description}
                </div>
              </>
            ))}
          </div>
          {pollData!.questions[currentQuestion].type === "text" && (
            <textarea
              className={styles.textAreaInput}
              value={form.questions[currentQuestion].text}
              onChange={(evt) => {
                const f = { ...form };
                f.questions[currentQuestion].text = evt.target.value;
                setForm(f);
              }}
              placeholder="Réponse..."
            />
          )}
          <Button
            description="Continuer"
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          />
        </div>
      ) : (
        <div className={styles.questionContainer}>
          Bravo, tu as fini le sondage
          {console.log("form", form)}
          <Button description="Retour à l'accueil" to="/" />
        </div>
      )}
    </PollLayout>
  );
};
