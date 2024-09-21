export type Problem = {
  id: number;
  question: string;
  choices: {
    label: string;
    value: string;
  }[];
  answer: string;
};

