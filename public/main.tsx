import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import QuizComponent from '../lib/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuizComponent />
  </StrictMode>,
)

