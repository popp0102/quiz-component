import { useState } from 'react';

import { type Problem } from '@lib/types';

export default function useQuiz(problems: Problem[], onGameFinish: () => void) {
  const [currentProblemIdx, setCurrentProblemIdx] = useState(0);
  const [selectedWrongChoice, setSelectedWrongChoice] = useState('');
  const totalProblems = problems.length;

  function submitAnswer(answer: string) {
    const correctAnswer = problems[currentProblemIdx].answer;
    const isCorrect     = (correctAnswer === answer);

    if (isCorrect) {
      setSelectedWrongChoice('');

      if ((currentProblemIdx + 1) === totalProblems) {
        onGameFinish();
      } else {
        setCurrentProblemIdx((prevIdx) => prevIdx + 1);
      }
    } else {
      setSelectedWrongChoice(answer);
    }
  }

  return {
    currentProblem: problems[currentProblemIdx],
    submitAnswer: submitAnswer,
    previousGuess: selectedWrongChoice,
  };
}

