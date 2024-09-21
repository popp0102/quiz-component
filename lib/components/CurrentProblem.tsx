import { useState } from 'react';

import { type Problem } from '@lib/types';
import './CurrentProblem.css'

type CurrentProblemProps = {
  problem: Problem;
  onAnswer: (answer: string) => void;
  previousGuess: string;
};

export default function CurrentProblem({ problem, onAnswer, previousGuess }: CurrentProblemProps) {

  return (
    <div className="quiz-problem">
      <p>
        {problem.question}
      </p>
      <div className="quiz-problem-choices">
        {
          problem.choices.map((choice) => {
            let cssClasses = (choice.label === previousGuess) ? 'quiz-problem-choice-wrong' : '';
            return (
              <button
                className={cssClasses}
                key={choice.label}
                onClick={() => onAnswer(choice.label)}
              >
                {choice.value}
              </button>
            )
          })
        }
      </div>
    </div>
  );
}

