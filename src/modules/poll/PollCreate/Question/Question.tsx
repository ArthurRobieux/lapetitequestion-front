import React from "react";

export type QuestionProps = { index: number };

export const Question = ({ index }: QuestionProps) => {
  return <div>Question {index}</div>;
};
