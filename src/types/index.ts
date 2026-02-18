export type Kingdom = "united" | "israel" | "judah";

export type ProphetEraId = "united" | "israel" | "judah" | "postexilic";

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

export interface Prophet {
  id: string;
  name: string;
  number: number;
  era: ProphetEraId;
  biblicalReference: string;
  ministryDuration: string;
  ministryYears: string;
  kingdom: string;
  contemporaryKings: string[];
  specialty: string;
  impact: number;
  keyFacts: KeyFact[];
  explanation: string;
  lesson: string;
  imagePath: string;
  imagePrompt: string;
}

export interface ProphetEra {
  id: ProphetEraId;
  label: string;
  description: string;
  dates: string;
  color: string;
  prophetCount: number;
}

export type QuizSubjectType = "rois" | "prophetes" | "tous";

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

export interface QuizConfigExtended {
  subjectType: QuizSubjectType;
  category: string;
  questionCount: 5 | 10 | 20;
}

export interface QuizState {
  config: QuizConfig;
  questions: QuizQuestion[];
  currentIndex: number;
  answers: (number | null)[];
  isComplete: boolean;
}
