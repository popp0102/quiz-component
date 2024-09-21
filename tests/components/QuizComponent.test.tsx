import { render, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

import QuizComponent from '../../lib/components/QuizComponent';
import { PROBLEM_SET_1 } from '../__data__/problems';

describe('QuizComponent Component', () => {
  const onGameFinish: jest.MockedFunction<() => void> = jest.fn();
  const title = "Quiz";
  const subject = () => { render(<QuizComponent problems={PROBLEM_SET_1} onGameFinish={onGameFinish} title={title}/>, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });

  it('should do the quiz and complete it', async () => {
    subject();

    // Start the Game
    const startButton = screen.getByRole('button', { name: title });
    userEvent.click(startButton);

    // Choose the correct answers
    ['four', 'six'].forEach(async (guess) => {
      await waitFor(() => {
        expect(screen.getByRole('button', { name: guess })).toBeInTheDocument();
      });

      const choiceButton = screen.getByRole('button', { name: guess });
      userEvent.click(choiceButton);
    });

    await waitFor(() => {
      expect(onGameFinish).toHaveBeenCalled();
    });
  });
});

