import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import QuizComponent from '../lib/index';

export const problems = [
  {
    id: 1,
    question: 'What is 2+2?',
    choices: [
      { label: 'a', value: '1' },
      { label: 'b', value: '4' },
      { label: 'c', value: '8' },
      { label: 'd', value: '9' },
    ],
    answer: 'b',
  },
  {
    id: 2,
    question: 'What is 3*2?',
    choices: [
      { label: 'a', value: '1' },
      { label: 'b', value: '2' },
      { label: 'c', value: '3' },
      { label: 'd', value: '6' },
    ],
    answer: 'd',
  },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuizComponent title="Test Quiz" problems={problems} onGameFinish={() => {alert('I win')}} />
  </StrictMode>,
)

