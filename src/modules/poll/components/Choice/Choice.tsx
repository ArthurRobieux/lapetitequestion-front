import React from "react";
import styles from "./styles.module.scss";
import { Checkbox, RadioButton } from "../../../common-ui";
import { ApiPollAnswer, ApiPoll } from "../../../api-client/mocks";

export type ChoiceProps = {
  form: ApiPollAnswer;
  setForm: (f: ApiPollAnswer) => void;
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

        if (pollData!.questions[currentQuestion].type === "single_choice") {
          f.questions[currentQuestion].choice_ids = [];
        }

        if (f.questions[currentQuestion].choice_ids!.includes(choice.id)) {
          const index = f.questions[currentQuestion].choice_ids!.indexOf(
            choice.id
          );
          if (index > -1) {
            f.questions[currentQuestion].choice_ids!.splice(index, 1);
          }
        } else {
          f.questions[currentQuestion].choice_ids!.push(choice.id);
        }
        setForm(f);
      }}
    >
      {pollData!.questions[currentQuestion].type === "multiple_choices" && (
        <Checkbox
          checked={form.questions[currentQuestion].choice_ids!.includes(
            choice.id
          )}
        />
      )}
      {pollData!.questions[currentQuestion].type === "single_choice" && (
        <RadioButton
          checked={form.questions[currentQuestion].choice_ids!.includes(
            choice.id
          )}
        />
      )}
      {choice.description}
    </div>
  );
};
