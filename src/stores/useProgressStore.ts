import { create } from "zustand";
import { persist } from "zustand/middleware";

interface QuizScore {
  bestScore: number;
  totalQuestions: number;
  lastPlayed: string;
}

interface ProgressState {
  kingsViewed: string[];
  quizScores: Record<string, QuizScore>;
  markViewed: (kingId: string) => void;
  recordScore: (quizId: string, score: number, total: number) => void;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      kingsViewed: [],
      quizScores: {},

      markViewed: (kingId) =>
        set((state) => {
          if (state.kingsViewed.includes(kingId)) return state;
          return { kingsViewed: [...state.kingsViewed, kingId] };
        }),

      recordScore: (quizId, score, total) =>
        set((state) => {
          const existing = state.quizScores[quizId];
          const bestScore =
            existing && existing.bestScore > score
              ? existing.bestScore
              : score;
          return {
            quizScores: {
              ...state.quizScores,
              [quizId]: {
                bestScore,
                totalQuestions: total,
                lastPlayed: new Date().toISOString(),
              },
            },
          };
        }),

      resetProgress: () => set({ kingsViewed: [], quizScores: {} }),
    }),
    {
      name: "kings-progress",
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.warn("Failed to rehydrate progress store:", error);
        }
      },
    }
  )
);
