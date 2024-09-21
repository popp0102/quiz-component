import { render } from '@testing-library/react';

import { PROBLEM_SET_1 } from '../__data__/problems';
import CurrentProblem from '../../lib/components/CurrentProblem';

describe('CurrentProblem Component', () => {
  const problem = PROBLEM_SET_1[0];
  const previousGuess = '';
  const subject = () => { render(<CurrentProblem problem={problem} onAnswer={() => {}} previousGuess={previousGuess} />, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

