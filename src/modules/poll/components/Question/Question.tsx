import React from "react";
import {
  TextInput,
  SelectInput,
  Button,
  RadioButton,
  Checkbox,
  DeleteButton,
} from "../../../common-ui";
import styles from "./styles.module.scss";
import { ApiQuestionPayload } from "../../../api-client/mocks";

export type QuestionProps = {
  index: number;
  onDelete: () => void;
  question: ApiQuestionPayload;
  setQuestion: (q: ApiQuestionPayload) => void;
  errors: { [k: string]: any };
};

export const Question = ({
  index,
  onDelete,
  question,
  setQuestion,
  errors,
}: QuestionProps) => {
  const choiceOptions = [
    { value: "single_choice", label: "Choix simple" },
    { value: "multiple_choices", label: "Choix multiples" },
    { value: "text", label: "Réponse libre" },
  ];

  console.log("errors", errors);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.questionNumber}>Question {index}</div>
        <div className={styles.questionName}>
          <TextInput
            value={question.description}
            onChange={(evt) =>
              setQuestion({ ...question, description: evt.target.value })
            }
            maxWidth
            placeholder="Ta question..."
            error={errors && errors.description}
          />
        </div>
        <div className={styles.questionType}>
          <SelectInput
            options={choiceOptions}
            selectOption={choiceOptions.find(
              (c) => c.value === question.question_type
            )}
            onChange={(evt) =>
              setQuestion({
                ...question,
                question_type: evt.value,
                choices: evt.value === "text" ? [] : question.choices,
              })
            }
            placeholder="Type"
            clearable={false}
          />
        </div>
      </div>

      {errors && errors.description && (
        <div className={styles.error}>{errors.description}</div>
      )}

      {(question.question_type === "single_choice" ||
        question.question_type === "multiple_choices") && (
        <div>
          {question.choices.map((choice, index) => (
            <div className={styles.choice}>
              {question.question_type === "single_choice" && (
                <RadioButton disabled checked={false} />
              )}
              {question.question_type === "multiple_choices" && (
                <Checkbox disabled checked={false} />
              )}
              <div className={styles.choiceInput}>
                <TextInput
                  value={choice.description}
                  onChange={(evt) => {
                    const newChoices = [...question.choices];
                    newChoices[index] = { description: evt.target.value };
                    setQuestion({ ...question, choices: newChoices });
                  }}
                  placeholder={`Choix ${index + 1}`}
                  maxWidth
                  error={
                    errors &&
                    errors.choices &&
                    errors.choices[index] &&
                    errors.choices[index].description
                  }
                />
                {errors && errors.choices && errors.choices[index] && (
                  <div className={styles.error}>
                    {errors.choices[index].description}
                  </div>
                )}
              </div>
            </div>
          ))}
          <Button
            description="+ Ajouter un choix"
            onClick={() =>
              setQuestion({
                ...question,
                choices: [...question.choices, { description: "" }],
              })
            }
            nude
          />
        </div>
      )}
      {index > 1 && (
        <div className={styles.actions}>
          <DeleteButton action={() => onDelete()} />
        </div>
      )}
    </div>
  );
};
