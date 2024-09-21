import { useState } from 'react';

import { type Problem } from '@lib/types';
import useQuiz from '@hooks/useQuiz';
import CurrentProblem from '@components/CurrentProblem';

import './QuizComponent.css';

type QuizComponentProps = {
  problems: Problem[];
  onGameFinish: () => void;
  title?: string;
  config?: { [key: string]: string };
};

const DEFAULT_CONFIG = {
  primary: 'green',
  secondary: 'yellow',
};

export default function QuizComponent({problems, onGameFinish, title, config=DEFAULT_CONFIG}: QuizComponentProps) {
  const [started, setStarted] = useState(false);

  const quiz = useQuiz(problems, onGameFinish);

  return (
    <div className="quiz" style={{ '--primary-color': config.primary, '--secondary-color': config.secondary } as React.CSSProperties}>
      {title &&
        <div className="quiz-title">
          { title }
        </div>
      }
      { !started ?
          <button onClick={() => setStarted(true)} className="quiz-start-button" >
            {title || 'Start Quiz'}
          </button>
        :
        <CurrentProblem
          problem={quiz.currentProblem}
          onAnswer={quiz.submitAnswer}
          previousGuess={quiz.previousGuess}
        />
      }
    </div>
  );
}

