import React from "react";
import styles from "./styles.module.scss";
import { Checkbox, RadioButton } from "../../../common-ui";
import { ApiPollAnswerPayload, ApiPoll } from "../../../api-client/mocks";

export type ChoiceProps = {
  form: ApiPollAnswerPayload;
  setForm: (f: ApiPollAnswerPayload) => void;
  pollData: ApiPoll;
  choice: {
    id: number;
    description: string;
  };
  currentQuestion: number;
};

export const Choice = ({
  form,
  setForm,
  pollData,
  choice,
  currentQuestion,
}: ChoiceProps) => {
  return (
    <div
      className={styles.choice}
      onClick={() => {
        const f = { ...form };

        if (
          pollData!.questions[currentQuestion].question_type === "single_choice"
        ) {
          f.answers[currentQuestion].choice_ids = [];
        }

        if (f.answers[currentQuestion].choice_ids!.includes(choice.id)) {
          const index = f.answers[currentQuestion].choice_ids!.indexOf(
            choice.id
          );
          if (index > -1) {
            f.answers[currentQuestion].choice_ids!.splice(index, 1);
          }
        } else {
          f.answers[currentQuestion].choice_ids!.push(choice.id);
        }
        setForm(f);
      }}
    >
      {pollData!.questions[currentQuestion].question_type ===
        "multiple_choices" && (
        <Checkbox
          checked={form.answers[currentQuestion].choice_ids!.includes(
            choice.id
          )}
        />
      )}
      {pollData!.questions[currentQuestion].question_type ===
        "single_choice" && (
        <RadioButton
          checked={form.answers[currentQuestion].choice_ids!.includes(
            choice.id
          )}
        />
      )}
      {choice.description}
    </div>
  );
};
