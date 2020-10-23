import React, { useState, useEffect } from "react";
import { RouteComponentProps, NavLink } from "react-router-dom";

import { Button } from "../../../common-ui";
import { ApiPoll, ApiPollAnswerPayload } from "../../../api-client/mocks";

import cristiano from "../../../../assets/img/cristiano.jpg";
import logoSportEasy from "../../../../assets/img/logoSportEasy.svg";

import { PollLayout } from "../PollLayout";
import { TextInput } from "../../../common-ui";
import { Choice } from "../../components/Choice";
import { ProgressBar } from "../../components/ProgressBar";

import styles from "./styles.module.scss";
import { apiClient } from "../../../api-client";

export const Poll = ({ match }: RouteComponentProps<{ id: string }>) => {
  const [pollData, setPollData] = useState(null as ApiPoll | null);

  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [form, setForm] = useState({
    answers: [],
    name: "",
  } as ApiPollAnswerPayload);

  useEffect(() => {
    apiClient.lpq.getPoll({ id: match.params.id }).then((response) => {
      setPollData(response);
      const f = form;

      response.questions.forEach((question) => {
        f.answers.push({
          question_id: question.id,
          choice_ids: [],
          text: "",
        });
      });

      setForm(f);
    });
  }, []);

  const onSubmit = () => {
    if (pollData) {
      console.log("form", form);
      apiClient.lpq
        .createAnswers({ id: pollData!.id, payload: form })
        .then(() => setCurrentQuestion(currentQuestion + 1));
    }
  };

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
      <div className={styles.container}>
        <div className={styles.header}>
          <NavLink to="/">
            <img src={logoSportEasy} alt="logo" />
          </NavLink>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.block}>
            <div className={styles.hello}>Bonjour</div>
            <div className={styles.description}>
              Tu es invité à participer au sondage, il ne prendra que quelques
              minutes :
            </div>

            <div className={styles.pollTitle}>" {pollData.title} "</div>
            <div className={styles.pollDescription}>{pollData.description}</div>
            <div className={styles.pollSeparator} />
            <div>Entre ton nom pour commencer : </div>
            <TextInput
              value={form.name}
              onChange={(evt) => setForm({ ...form, name: evt.target.value })}
            />
            <Button
              description="C'est parti !"
              onClick={() => setCurrentQuestion(0)}
              disabled={!form.name}
            />
          </div>
        </div>
      </div>
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
              <div key={choice.id}>
                <Choice
                  form={form}
                  setForm={setForm}
                  pollData={pollData!}
                  choice={choice}
                  currentQuestion={currentQuestion}
                />
              </div>
            ))}
          </div>
          {pollData!.questions[currentQuestion].question_type === "text" && (
            <textarea
              className={styles.textAreaInput}
              value={form.answers[currentQuestion].text}
              onChange={(evt) => {
                const f = { ...form };
                f.answers[currentQuestion].text = evt.target.value;
                setForm(f);
              }}
              placeholder="Réponse..."
            />
          )}

          <div className={styles.buttons}>
            {currentQuestion > 0 && (
              <div className={styles.previousButton}>
                <Button
                  description="< Précédent"
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  nude
                />
              </div>
            )}
            {currentQuestion === pollData.questions.length - 1 ? (
              <Button
                description="Terminer"
                onClick={onSubmit}
                disabled={
                  !form.answers[currentQuestion].choice_ids!.length &&
                  !form.answers[currentQuestion].text
                }
              />
            ) : (
              <Button
                description="Continuer"
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                disabled={
                  !form.answers[currentQuestion].choice_ids!.length &&
                  !form.answers[currentQuestion].text
                }
              />
            )}
          </div>
          <ProgressBar
            value={currentQuestion + 1}
            total={pollData.questions.length}
          />
        </div>
      ) : (
        <div className={styles.questionContainer}>
          <div className={styles.thanks}>
            Merci d'avoir répondu à ce sondage !
          </div>
          <img src={cristiano} alt="icon" className={styles.cristiano} />
          {console.log("form", form)}
          <Button description="Retour à l'accueil" to="/" />
          <a
            className={styles.more}
            href="https://www.sporteasy.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            En savoir plus sur SportEasy
          </a>
        </div>
      )}
    </PollLayout>
  );
};
