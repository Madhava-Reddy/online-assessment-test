// store.ts

import { createStore } from '@stencil/store';
import { State, Question } from '../models/question-model';


const initialState: State = {
  questions: {
    logical: [],
    psychometric: []
  },
  currentSection: 'logical',
  currentQuestionIndex: 0,
  answers: {},
  completed: false,
  questionPool: {
    logical: {
      easy: [],
      moderate: [],
      hard: []
    },
    psychometric: {
      easy: [],
      moderate: [],
      hard: []
    }
  },
  lastAnswers: []
};

const { state, onChange } = createStore(initialState);

export { state, onChange };

// Function to fetch questions from JSON file
export function fetchQuestions() {
  fetch('/assets/questions.json')
    .then(response => response.json())
    .then(data => {
      state.questions.logical = data.logical;
      state.questions.psychometric = data.psychometric;
      initializeQuestionPools();
      initializeFirstQuestion();
    })
    .catch(error => console.error('Error fetching questions:', error));
}

// Initialize question pools based on difficulty
function initializeQuestionPools() {
  state.questionPool.logical.easy = state.questions.logical.filter(q => q.difficulty === 'Easy');
  state.questionPool.logical.moderate = state.questions.logical.filter(q => q.difficulty === 'Moderate');
  state.questionPool.logical.hard = state.questions.logical.filter(q => q.difficulty === 'Hard');
  state.questionPool.psychometric.easy = state.questions.psychometric.filter(q => q.difficulty === 'Easy');
  state.questionPool.psychometric.moderate = state.questions.psychometric.filter(q => q.difficulty === 'Moderate');
  state.questionPool.psychometric.hard = state.questions.psychometric.filter(q => q.difficulty === 'Hard');
}

export function initializeFirstQuestion() {
  state.questions.logical[0] = selectNextQuestion('logical');
}

export function selectNextQuestion(currentSection: 'logical' | 'psychometric'): Question {
  const { questionPool } = state;
  let currentDifficulty: 'easy' | 'moderate' | 'hard' = 'easy';

  const lastAnswers = state.lastAnswers.slice(-3);

  if (lastAnswers.length === 3 && lastAnswers.every(answer => answer === true)) {
    currentDifficulty = 'hard';
  } else if (
    (lastAnswers.length === 2 && lastAnswers[0] && lastAnswers[1]) ||
    (lastAnswers.length >= 2 && !lastAnswers[0] && lastAnswers[1] && lastAnswers[2])
  ) {
    currentDifficulty = 'moderate';
  }

  const pool = questionPool[currentSection][currentDifficulty];

  if (pool.length === 0) {
    throw new Error('No questions left in the pool');
  }

  // Select a random index within the pool
  const randomIndex = Math.floor(Math.random() * pool.length);

  // Remove the selected question from the pool and fetch it
  const nextQuestion = pool.splice(randomIndex, 1)[0];


  return nextQuestion;
}

export function handleNextQuestion(event: any) {
  const currentSection = state.currentSection;
  state.answers[currentSection] = state.answers[currentSection] || [];
  state.answers[currentSection].push({
    question: state.questions[currentSection][state.currentQuestionIndex],
    correct: event.detail
  });

  state.lastAnswers.push(event.detail);
  if (state.lastAnswers.length > 3) {
    state.lastAnswers.shift();
  }

  if (state.currentQuestionIndex < 9) {
    state.currentQuestionIndex++;
    state.questions[currentSection][state.currentQuestionIndex] = selectNextQuestion(currentSection);
  } else if (currentSection === 'logical') {
    state.currentSection = 'psychometric';
    state.currentQuestionIndex = 0;
    state.questions[state.currentSection][state.currentQuestionIndex] = selectNextQuestion(state.currentSection);
    state.lastAnswers = [];
  } else {
    state.completed = true;
  }
}

// Initial fetch of questions
fetchQuestions();
