// question-models.ts

export interface Question {
  text: string;
  options: string[];
  correct_option: string;
  difficulty: string; // Assuming difficulty is 'Easy', 'Moderate', 'Hard'
}

export interface State {
  questions: {
    logical: Question[];
    psychometric: Question[];
  };
  currentSection: 'logical' | 'psychometric';
  currentQuestionIndex: number;
  answers: Record<string, { question: Question; correct: boolean }[]>;
  completed: boolean;
  questionPool: {
    logical: {
      easy: Question[];
      moderate: Question[];
      hard: Question[];
    };
    psychometric: {
      easy: Question[];
      moderate: Question[];
      hard: Question[];
    };
  };
  lastAnswers: boolean[];
}
