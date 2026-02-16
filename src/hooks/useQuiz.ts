import { useState, useMemo, useCallback } from "react";
import type { QuizQuestion } from "@/types";

interface UseQuizReturn {
  currentQuestion: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  isCorrect: boolean;
  isComplete: boolean;
  score: number;
  answers: (number | null)[];
  selectAnswer: (optionIndex: number) => void;
  nextQuestion: () => void;
  reset: () => void;
}

export function useQuiz(questions: QuizQuestion[]): UseQuizReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => Array(questions.length).fill(null)
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === currentQuestion?.correctIndex;
  const isComplete = currentIndex === totalQuestions - 1 && isAnswered;

  const score = useMemo(
    () =>
      answers.reduce<number>((count, answer, idx) => {
        if (answer !== null && questions[idx] && answer === questions[idx].correctIndex) return count + 1;
        return count;
      }, 0),
    [answers, questions]
  );

  const selectAnswer = useCallback((optionIndex: number) => {
    setSelectedAnswer((prev) => {
      if (prev !== null) return prev;
      return optionIndex;
    });
    setAnswers((prevAnswers) => {
      if (prevAnswers[currentIndex] !== null) return prevAnswers;
      const updated = [...prevAnswers];
      updated[currentIndex] = optionIndex;
      return updated;
    });
  }, [currentIndex]);

  const nextQuestion = useCallback(() => {
    setSelectedAnswer(null);
    setCurrentIndex((prevIdx) => prevIdx + 1);
  }, []);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setAnswers(Array(questions.length).fill(null));
    setSelectedAnswer(null);
  }, [questions.length]);

  return {
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedAnswer,
    isAnswered,
    isCorrect,
    isComplete,
    score,
    answers,
    selectAnswer,
    nextQuestion,
    reset,
  };
}
