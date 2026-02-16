export type Kingdom = "united" | "israel" | "judah";

export type FactCategory =
  | "identity"
  | "achievement"
  | "sin"
  | "death"
  | "construction"
  | "battle"
  | "prophet";

export interface Era {
  id: Kingdom;
  label: string;
  description: string;
  dates: string;
  color: string;
  kingCount: number;
}

export interface KeyFact {
  emoji: string;
  text: string;
  category: FactCategory;
}

export interface King {
  id: string;
  name: string;
  number: number;
  kingdom: Kingdom;
  biblicalReference: string;
  reignDuration: string;
  reignYears: string;
  parallelKing: string | null;
  prophets: string[];
  faithfulness: number;
  keyFacts: KeyFact[];
  explanation: string;
  lesson: string;
  imagePath: string;
  imagePrompt: string;
}

export interface QuizQuestion {
  id: string;
  type: "identification" | "facts" | "prophet" | "faithfulness";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  kingId: string;
}

export interface QuizConfig {
  category: Kingdom | "all";
  questionCount: 5 | 10 | 20;
}

export interface QuizState {
  config: QuizConfig;
  questions: QuizQuestion[];
  currentIndex: number;
  answers: (number | null)[];
  isComplete: boolean;
}
