import { render } from '@testing-library/react';
import QuizComponent from '../../lib/components/QuizComponent';

describe('QuizComponent Component', () => {
  const subject = () => { render(<QuizComponent />, {}) };

  it('does not throw an error', () => {
    expect(subject).not.toThrow();
  });
});

