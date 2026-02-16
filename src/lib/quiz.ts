import type {
  King,
  QuizQuestion,
  QuizConfig,
} from "@/types";
import { KINGS, getAllProphets } from "@/data/kings";

// Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Pick count random elements without duplicates
export function pickRandom<T>(array: T[], count: number): T[] {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, Math.min(count, array.length));
}

// Type 1: Identification by key fact
function generateIdentificationQuestion(
  king: King,
  kingPool: King[],
  questionId: string
): QuizQuestion {
  const fact = pickRandom(king.keyFacts, 1)[0];

  // Get distractors: prefer same era, exclude kings with identical fact text
  const sameEra = kingPool.filter(
    (k) =>
      k.id !== king.id &&
      k.kingdom === king.kingdom &&
      !k.keyFacts.some((f) => f.text === fact.text)
  );
  const otherEra = kingPool.filter(
    (k) =>
      k.id !== king.id &&
      k.kingdom !== king.kingdom &&
      !k.keyFacts.some((f) => f.text === fact.text)
  );

  const distractorKings =
    sameEra.length >= 3
      ? pickRandom(sameEra, 3)
      : [
          ...sameEra,
          ...pickRandom(otherEra, 3 - sameEra.length),
        ];

  const options = shuffleArray([king.name, ...distractorKings.map((k) => k.name)]);
  const correctIndex = options.indexOf(king.name);

  // Adapt fact text as relative clause
  let questionText = `Quel roi ${fact.text.toLowerCase()}`;
  if (!questionText.endsWith("?")) {
    questionText += " ?";
  }

  return {
    id: questionId,
    type: "identification",
    question: questionText,
    options,
    correctIndex,
    explanation: `${king.name} ${fact.text.toLowerCase()}. Référence : ${king.biblicalReference}.`,
    kingId: king.id,
  };
}

// Type 2: Fact association
function generateFactsQuestion(
  king: King,
  kingPool: King[],
  questionId: string
): QuizQuestion {
  const fact = pickRandom(king.keyFacts, 1)[0];

  // Get distractors: prefer same FactCategory
  const allOtherFacts = kingPool
    .filter((k) => k.id !== king.id)
    .flatMap((k) => k.keyFacts);

  const sameCategory = allOtherFacts.filter((f) => f.category === fact.category);
  const otherCategory = allOtherFacts.filter((f) => f.category !== fact.category);

  const distractorFacts =
    sameCategory.length >= 3
      ? pickRandom(sameCategory, 3)
      : [
          ...pickRandom(sameCategory, Math.min(sameCategory.length, 3)),
          ...pickRandom(otherCategory, 3 - Math.min(sameCategory.length, 3)),
        ];

  const options = shuffleArray([
    `${fact.emoji} ${fact.text}`,
    ...distractorFacts.map((f) => `${f.emoji} ${f.text}`),
  ]);
  const correctIndex = options.indexOf(`${fact.emoji} ${fact.text}`);

  return {
    id: questionId,
    type: "facts",
    question: `Lequel de ces faits concerne le roi ${king.name} ?`,
    options,
    correctIndex,
    explanation: `${fact.emoji} ${fact.text} est un fait concernant ${king.name}. Référence : ${king.biblicalReference}.`,
    kingId: king.id,
  };
}

// Type 3: Prophet-king association
function generateProphetQuestion(
  king: King,
  kingPool: King[],
  questionId: string
): QuizQuestion | null {
  if (king.prophets.length === 0) return null;

  const correctProphet = pickRandom(king.prophets, 1)[0];
  const allProphets = getAllProphets();

  const distractors = pickRandom(
    allProphets.filter(
      (p) => !king.prophets.includes(p)
    ),
    3
  );

  const options = shuffleArray([correctProphet, ...distractors]);
  const correctIndex = options.indexOf(correctProphet);

  return {
    id: questionId,
    type: "prophet",
    question: `Quel prophète était contemporain du roi ${king.name} ?`,
    options,
    correctIndex,
    explanation: `${correctProphet} était contemporain de ${king.name}. Référence : ${king.biblicalReference}.`,
    kingId: king.id,
  };
}

// Type 4: Faithfulness rating
function generateFaithfulnessQuestion(
  king: King,
  questionId: string
): QuizQuestion {
  const ratings = [1, 2, 3, 4, 5];
  const otherRatings = ratings.filter((r) => r !== king.faithfulness);
  const distractorRatings = pickRandom(otherRatings, 3);

  const options = shuffleArray([
    `${"⭐".repeat(king.faithfulness)}${"☆".repeat(5 - king.faithfulness)} (${king.faithfulness}/5)`,
    ...distractorRatings.map(
      (r) => `${"⭐".repeat(r)}${"☆".repeat(5 - r)} (${r}/5)`
    ),
  ]);

  const correctOption = `${"⭐".repeat(king.faithfulness)}${"☆".repeat(5 - king.faithfulness)} (${king.faithfulness}/5)`;
  const correctIndex = options.indexOf(correctOption);

  const labels: Record<number, string> = {
    0: "infidèle",
    1: "très infidèle",
    2: "infidèle",
    3: "mitigé",
    4: "fidèle",
    5: "exemplaire",
  };

  return {
    id: questionId,
    type: "faithfulness",
    question: `Comment est évalué le roi ${king.name} en fidélité à Dieu ?`,
    options,
    correctIndex,
    explanation: `${king.name} est évalué ${labels[king.faithfulness]} avec ${king.faithfulness}/5 étoiles. Référence : ${king.biblicalReference}.`,
    kingId: king.id,
  };
}

// Main function: Generate quiz with config
export function generateQuiz(config: QuizConfig): QuizQuestion[] {
  // Filter king pool by category
  let kingPool: King[];
  if (config.category === "all") {
    kingPool = [...KINGS];
  } else {
    kingPool = KINGS.filter((k) => k.kingdom === config.category);
  }

  const questions: QuizQuestion[] = [];
  const usedCombos = new Set<string>(); // Track king+type to avoid duplicates
  const types: Array<"identification" | "facts" | "prophet" | "faithfulness"> = [
    "identification",
    "facts",
    "prophet",
    "faithfulness",
  ];

  let attempts = 0;
  const maxAttempts = config.questionCount * 10;

  while (questions.length < config.questionCount && attempts < maxAttempts) {
    attempts++;

    const type = types[questions.length % types.length];
    const king = pickRandom(kingPool, 1)[0];
    const comboKey = `${king.id}-${type}`;

    if (usedCombos.has(comboKey)) continue;

    let question: QuizQuestion | null = null;

    switch (type) {
      case "identification":
        question = generateIdentificationQuestion(
          king,
          kingPool,
          `q-${questions.length + 1}`
        );
        break;
      case "facts":
        question = generateFactsQuestion(
          king,
          kingPool,
          `q-${questions.length + 1}`
        );
        break;
      case "prophet":
        question = generateProphetQuestion(
          king,
          kingPool,
          `q-${questions.length + 1}`
        );
        break;
      case "faithfulness":
        question = generateFaithfulnessQuestion(king, `q-${questions.length + 1}`);
        break;
    }

    if (question) {
      questions.push(question);
      usedCombos.add(comboKey);
    }
  }

  return questions;
}

// Generate card-specific quiz (3-4 questions about one king)
export function generateCardQuiz(kingId: string): QuizQuestion[] {
  const king = KINGS.find((k) => k.id === kingId);
  if (!king) return [];

  const questions: QuizQuestion[] = [];

  // Type 4 (faithfulness) - always included
  questions.push(generateFaithfulnessQuestion(king, `q-card-${questions.length + 1}`));

  // Type 1 (identification)
  questions.push(
    generateIdentificationQuestion(king, KINGS, `q-card-${questions.length + 1}`)
  );

  // Type 2 (facts)
  questions.push(generateFactsQuestion(king, KINGS, `q-card-${questions.length + 1}`));

  // Type 3 (prophet) - only if king has prophets
  if (king.prophets.length > 0) {
    const prophetQuestion = generateProphetQuestion(
      king,
      KINGS,
      `q-card-${questions.length + 1}`
    );
    if (prophetQuestion) {
      questions.push(prophetQuestion);
    }
  }

  return questions;
}
