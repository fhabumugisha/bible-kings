import type { QuizQuestion, QuizSubjectType } from "@/types";
import { generateQuiz as generateKingQuiz } from "./quiz";
import { generateProphetQuiz } from "./prophet-quiz";
import { shuffleArray } from "./quiz";

export function generateUnifiedQuiz(config: {
  subjectType: QuizSubjectType;
  category: string;
  questionCount: 5 | 10 | 20;
}): QuizQuestion[] {
  if (config.subjectType === "rois") {
    const validKingCategories = ["united", "israel", "judah", "all"];
    const category = validKingCategories.includes(config.category)
      ? (config.category as "united" | "israel" | "judah" | "all")
      : "all";
    return generateKingQuiz({
      category,
      questionCount: config.questionCount,
    });
  }

  if (config.subjectType === "prophetes") {
    return generateProphetQuiz({
      category: config.category as "united" | "israel" | "judah" | "postexilic" | "all",
      questionCount: config.questionCount,
    });
  }

  // subjectType === "tous"
  // Generate 50/50 mix of king and prophet questions
  const halfCount = Math.ceil(config.questionCount / 2);
  const kingQuestions = generateKingQuiz({
    category: "all",
    questionCount: halfCount as 5 | 10 | 20,
  });
  const prophetQuestions = generateProphetQuiz({
    category: "all",
    questionCount: config.questionCount - kingQuestions.length as 5 | 10 | 20,
  });

  // Combine and shuffle
  const allQuestions = [...kingQuestions, ...prophetQuestions];
  const shuffled = shuffleArray(allQuestions);

  // Re-index questions to maintain sequence
  return shuffled.slice(0, config.questionCount).map((q, idx) => ({
    ...q,
    id: `q-${idx + 1}`,
  }));
}
