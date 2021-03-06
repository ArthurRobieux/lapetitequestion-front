// TYPES

export type ApiPollCreatePayload = {
  title: string;
  email: string;
  description: string;
  questions: ApiQuestionPayload[];
};

export type ApiQuestionPayload = {
  description: string;
  question_type: "single_choice" | "multiple_choices" | "text";
  choices: { description: string }[];
};

export type ApiQuestion = {
  id: number;
  description: string;
  question_type: "single_choice" | "multiple_choices" | "text";
  choices: { id: number; description: string }[];
  answers: {
    name: string;
    text?: string;
    choices?: { choice_id: number }[];
  }[];
};

export type ApiPollList = ApiPoll[];

export type ApiPoll = {
  id: number;
  title: string;
  description: string;
  questions: ApiQuestion[];
};

export type ApiPollAnswerPayload = {
  name: string;
  answers: {
    question_id: number;
    text?: string;
    choice_ids?: number[];
  }[];
};

export type ApiPollResults = {
  title: string;
  description: string;
  questions: {
    id: number;
    description: string;
    question_type: "single_choice" | "multiple_choices" | "text";
    answers: {
      name: string;
      choices?: { id: number; description: string }[];
      text?: string;
    }[];
  }[];
};

// MOCKS

export const poll_1: ApiPoll = {
  id: 1,
  title: "Equipement saison 2020-2021",
  description: "Sondage pour les maillots de la prochaine saison",
  questions: [
    {
      id: 1,
      description: "Quelle est ta taille de maillot ?",
      question_type: "single_choice",
      choices: [
        { id: 1, description: "XS" },
        { id: 2, description: "S" },
        { id: 3, description: "M" },
        { id: 4, description: "L" },
        { id: 5, description: "XL" },
      ],
      answers: [],
    },
    {
      id: 2,
      description: "Quelles sont tes marques préférées ?",
      question_type: "multiple_choices",
      choices: [
        { id: 1, description: "Nike" },
        { id: 2, description: "Adidas" },
        { id: 3, description: "Puma" },
        { id: 4, description: "Kipsta" },
      ],
      answers: [],
    },
    {
      id: 3,
      description: "Quel numéro de maillot souhaites-tu ?",
      question_type: "text",
      choices: [],
      answers: [],
    },
  ],
};

export const poll_2: ApiPoll = {
  id: 2,
  title: "Ton sport !",
  description: "Voici mon deuxième sondage sur les sports préférés",
  questions: [
    {
      id: 1,
      description: "Quel est ton sport préféré ?",
      question_type: "single_choice",
      choices: [
        { id: 1, description: "Football" },
        { id: 2, description: "Handball" },
        { id: 3, description: "Basketball" },
        { id: 4, description: "Baseball" },
      ],
      answers: [],
    },
  ],
};

export const poll_results_1: ApiPollResults = {
  title: "Equipement saison 2020-2021",
  description: "Sondage pour les maillots de la prochaine saison",
  questions: [
    {
      id: 1,
      description: "Quelle est ta taille de maillot ?",
      question_type: "single_choice",
      answers: [
        { name: "Arthur", choices: [{ id: 3, description: "M" }] },
        { name: "Julie", choices: [{ id: 3, description: "M" }] },
        { name: "Lénaic", choices: [{ id: 3, description: "M" }] },
        { name: "Quentin", choices: [{ id: 3, description: "M" }] },
        { name: "Matéo", choices: [{ id: 3, description: "M" }] },
        { name: "Andy", choices: [{ id: 1, description: "XS" }] },
        { name: "Thomas", choices: [{ id: 3, description: "M" }] },
        { name: "Vincent", choices: [{ id: 3, description: "M" }] },
        { name: "Esselinho", choices: [{ id: 3, description: "M" }] },
        { name: "Karl", choices: [{ id: 3, description: "M" }] },
        { name: "Julien", choices: [{ id: 3, description: "M" }] },
        { name: "Nizar", choices: [{ id: 5, description: "XL" }] },
        { name: "Albin", choices: [{ id: 3, description: "M" }] },
        { name: "Anne-lise", choices: [{ id: 3, description: "M" }] },
        { name: "Florian", choices: [{ id: 3, description: "M" }] },
        { name: "Harold", choices: [{ id: 3, description: "M" }] },
        { name: "Guillaume", choices: [{ id: 3, description: "M" }] },
        { name: "Mathis", choices: [{ id: 3, description: "M" }] },
        { name: "Etienne", choices: [{ id: 5, description: "XL" }] },
      ],
    },
    {
      id: 2,
      description: "Quelles sont tes marques préférées ?",
      question_type: "multiple_choices",
      answers: [
        {
          name: "Arthur",
          choices: [{ id: 1, description: "Nike" }],
        },
        {
          name: "Julie",
          choices: [
            { id: 1, description: "Nike" },
            { id: 4, description: "Kipsta" },
          ],
        },
        { name: "Lénaïc", choices: [{ id: 2, description: "Adidas" }] },
        {
          name: "Quentin",
          choices: [
            { id: 3, description: "Puma" },
            { id: 4, description: "Kipsta" },
          ],
        },
        {
          name: "Matéo",
          choices: [{ id: 1, description: "Nike" }],
        },
        {
          name: "Andy",
          choices: [
            { id: 1, description: "Nike" },
            { id: 3, description: "Puma" },
          ],
        },
        {
          name: "Thomas",
          choices: [{ id: 2, description: "Adidas" }],
        },
        {
          name: "Vincent",
          choices: [
            { id: 1, description: "Nike" },
            { id: 4, description: "Kipsta" },
          ],
        },
        {
          name: "Esselinho",
          choices: [
            { id: 2, description: "Adidas" },
            { id: 3, description: "Puma" },
          ],
        },
        {
          name: "Karl",
          choices: [{ id: 1, description: "Nike" }],
        },
        {
          name: "Julien",
          choices: [{ id: 4, description: "Kipsta" }],
        },
        {
          name: "Nizar",
          choices: [
            { id: 2, description: "Adidas" },
            { id: 3, description: "Puma" },
          ],
        },
        {
          name: "Albin",
          choices: [
            { id: 1, description: "Nike" },
            { id: 2, description: "Adidas" },
          ],
        },
        {
          name: "Anne-lise",
          choices: [{ id: 1, description: "Nike" }],
        },
        {
          name: "Florian",
          choices: [
            { id: 2, description: "Adidas" },
            { id: 3, description: "Puma" },
          ],
        },
        {
          name: "Harold",
          choices: [{ id: 3, description: "Puma" }],
        },
        {
          name: "Guillaume",
          choices: [{ id: 4, description: "Kipsta" }],
        },
        {
          name: "Mathis",
          choices: [
            { id: 1, description: "Nike" },
            { id: 3, description: "Puma" },
          ],
        },
        {
          name: "Etienne",
          choices: [{ id: 2, description: "Adidas" }],
        },
      ],
    },
    {
      id: 3,
      description: "Quel numéro de maillot souhaites-tu ?",
      question_type: "text",
      answers: [
        { name: "Arthur", text: "23" },
        { name: "Julie", text: "21" },
        { name: "Lénaic", text: "7" },
        { name: "Quentin", text: "15" },
        { name: "Matéo", text: "19" },
        { name: "Andy", text: "2" },
        { name: "Thomas", text: "11" },
        { name: "Vincent", text: "25" },
        { name: "Esselinho", text: "4" },
        { name: "Karl", text: "12" },
        { name: "Julien", text: "42" },
        { name: "Nizar", text: "1" },
        { name: "Albin", text: "6" },
        { name: "Anne-lise", text: "18" },
        { name: "Florian", text: "17" },
        { name: "Harold", text: "5" },
        { name: "Guillame", text: "8" },
        { name: "Mathis", text: "10" },
        { name: "Etienne", text: "13" },
      ],
    },
  ],
};

export const poll_results_2: ApiPollResults = {
  title: "Ton sport !",
  description: "Voici mon deuxième sondage sur les sports préférés",
  questions: [
    {
      id: 1,
      description: "Quel est ton sport préféré ?",
      question_type: "single_choice",
      answers: [
        { name: "Arthur", choices: [{ id: 3, description: "Basketball" }] },
        { name: "Julie", choices: [{ id: 4, description: "Baseball" }] },
        { name: "Lénaic", choices: [{ id: 1, description: "Football" }] },
      ],
    },
  ],
};
