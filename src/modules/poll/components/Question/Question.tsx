import React, { useState } from "react";
import {
  TextInput,
  SelectInput,
  Button,
  RadioButton,
  Checkbox,
} from "../../../common-ui";
import styles from "./styles.module.scss";

export type QuestionProps = { index: number };

export const Question = ({ index }: QuestionProps) => {
  const [form, setForm] = useState({
    type: { value: "single_choices", label: "Choix simple" },
    description: "",
    choices: [""],
  } as {
    type:
      | { value: "single_choices"; label: "Choix simple" }
      | { value: "multiple_choices"; label: "Choix multiples" }
      | { value: "text"; label: "Réponse libre" };
    description: string;
    choices: string[];
  });

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.questionNumber}>Question {index}</div>
        <div className={styles.questionName}>
          <TextInput
            value={form.description}
            onChange={(evt) =>
              setForm({ ...form, description: evt.target.value })
            }
            maxWidth
            placeholder="Ta question..."
          />
        </div>
        <div className={styles.questionType}>
          <SelectInput
            options={[
              { value: "single_choices", label: "Choix simple" },
              { value: "multiple_choices", label: "Choix multiples" },
              { value: "text", label: "Réponse libre" },
            ]}
            selectOption={form.type}
            onChange={(evt) => setForm({ ...form, type: evt })}
            placeholder="Type"
            clearable={false}
          />
        </div>
      </div>

      {(form.type.value === "single_choices" ||
        form.type.value === "multiple_choices") && (
        <div>
          {form.choices.map((choice, index) => (
            <div className={styles.choice}>
              {form.type.value === "single_choices" && (
                <RadioButton disabled checked={false} />
              )}
              {form.type.value === "multiple_choices" && (
                <Checkbox disabled checked={false} />
              )}
              <div className={styles.choiceInput}>
                <TextInput
                  value={choice}
                  onChange={(evt) => {
                    const newChoices = [...form.choices];
                    newChoices[index] = evt.target.value;
                    setForm({ ...form, choices: newChoices });
                  }}
                  placeholder={`Choix ${index + 1}`}
                  maxWidth
                />
              </div>
            </div>
          ))}
          <Button
            description="+ Ajouter un choix"
            onClick={() => setForm({ ...form, choices: [...form.choices, ""] })}
            nude
          />
        </div>
      )}
    </div>
  );
};
