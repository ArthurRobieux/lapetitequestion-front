import React, { useState, useEffect } from "react";
import { RouteComponentProps, NavLink } from "react-router-dom";

import { Button } from "../../../common-ui";
import {
  poll_1,
  poll_2,
  ApiPoll,
  ApiPollAnswer,
} from "../../../api-client/mocks";

import cristiano from "../../../../assets/img/cristiano.jpg";
import logoSportEasy from "../../../../assets/img/logoSportEasy.svg";

import { PollLayout } from "../PollLayout";
import { TextInput } from "../../../common-ui";
import { Choice } from "../../components/Choice";
import { ProgressBar } from "../../components/ProgressBar";

import styles from "./styles.module.scss";

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
      pollData.questions.forEach((question) => {
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
            <div className={styles.pollSeparator} />
            <Button
              description="Voir les résultats"
              to={`/poll/${match.params.id}/results/`}
              nude
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
              <>
                <Choice
                  form={form}
                  setForm={setForm}
                  pollData={pollData!}
                  choice={choice}
                  currentQuestion={currentQuestion}
                />
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
            <Button
              description="Continuer"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              disabled={
                form.questions[currentQuestion].choice_ids
                  ? !form.questions[currentQuestion].choice_ids!.length
                  : !form.questions[currentQuestion].text
              }
            />
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
