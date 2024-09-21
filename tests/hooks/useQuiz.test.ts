import { renderHook, act } from '@testing-library/react';
import useQuiz from '../../lib/hooks/useQuiz';
import { PROBLEM_SET_1 } from '../__data__/problems';

describe('useQuiz', () => {
  const onGameFinish: jest.MockedFunction<() => void> = jest.fn();
  const subject  = () => { return renderHook(() => useQuiz(PROBLEM_SET_1, onGameFinish)) };

  it('does not throw an error', () => {
    const { result } = subject();
    expect(result.current).toBeDefined();
  });

  describe('submitAnswer', () => {
    it('should go to the next question if its correct', () => {
      const { result, rerender } = subject();
      act(() => {
        result.current.submitAnswer('b');
      });
      rerender();
      const problem = result.current.currentProblem;
      expect(problem.id).toEqual(2);
    });

    it('should not go to the next question if its incorrect', () => {
      const { result, rerender } = subject();
      act(() => {
        result.current.submitAnswer('d');
      });
      rerender();
      const problem = result.current.currentProblem;
      expect(problem.id).toEqual(1);
    });

    it('should call onGameFinish when done', () => {
      const { result, rerender } = subject();
      ['b','d'].forEach((answer) => {
        act(() => {
          result.current.submitAnswer(answer);
        });
        rerender();
      });
      expect(onGameFinish).toHaveBeenCalled();
    });
  });
});


