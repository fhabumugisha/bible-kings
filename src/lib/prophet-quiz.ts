import type {
  Prophet,
  QuizQuestion,
  ProphetEraId,
} from "@/types";
import { PROPHETS, getProphetsByEra } from "@/data/prophets";
import { KINGS } from "@/data/kings";

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
  prophet: Prophet,
  prophetPool: Prophet[],
  questionId: string
): QuizQuestion {
  const fact = pickRandom(prophet.keyFacts, 1)[0];

  // Get distractors: prefer same era, exclude prophets with identical fact text
  const sameEra = prophetPool.filter(
    (p) =>
      p.id !== prophet.id &&
      p.era === prophet.era &&
      !p.keyFacts.some((f) => f.text === fact.text)
  );
  const otherEra = prophetPool.filter(
    (p) =>
      p.id !== prophet.id &&
      p.era !== prophet.era &&
      !p.keyFacts.some((f) => f.text === fact.text)
  );

  const distractorProphets =
    sameEra.length >= 3
      ? pickRandom(sameEra, 3)
      : [
          ...sameEra,
          ...pickRandom(otherEra, 3 - sameEra.length),
        ];

  const options = shuffleArray([prophet.name, ...distractorProphets.map((p) => p.name)]);
  const correctIndex = options.indexOf(prophet.name);

  // Adapt fact text as relative clause
  let questionText = `Quel prophète ${fact.text.toLowerCase()}`;
  if (!questionText.endsWith("?")) {
    questionText += " ?";
  }

  return {
    id: questionId,
    type: "identification",
    question: questionText,
    options,
    correctIndex,
    explanation: `${prophet.name} ${fact.text.toLowerCase()}. Référence : ${prophet.biblicalReference}.`,
    kingId: prophet.id,
  };
}

// Type 2: Fact association
function generateProphetFactsQuestion(
  prophet: Prophet,
  prophetPool: Prophet[],
  questionId: string
): QuizQuestion {
  const fact = pickRandom(prophet.keyFacts, 1)[0];

  // Get distractors: prefer same FactCategory
  const allOtherFacts = prophetPool
    .filter((p) => p.id !== prophet.id)
    .flatMap((p) => p.keyFacts);

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
    question: `Lequel de ces faits concerne le prophète ${prophet.name} ?`,
    options,
    correctIndex,
    explanation: `${fact.emoji} ${fact.text} est un fait concernant ${prophet.name}. Référence : ${prophet.biblicalReference}.`,
    kingId: prophet.id,
  };
}

// Type 3: King association
function generateKingAssociationQuestion(
  prophet: Prophet,
  prophetPool: Prophet[],
  questionId: string
): QuizQuestion | null {
  if (prophet.contemporaryKings.length === 0) return null;

  const correctKing = pickRandom(prophet.contemporaryKings, 1)[0];

  // Get all contemporary kings from other prophets
  const allOtherKings = prophetPool
    .filter((p) => p.id !== prophet.id)
    .flatMap((p) => p.contemporaryKings)
    .filter((k) => !prophet.contemporaryKings.includes(k));

  // Get distractors from the broader king pool
  const availableKings = KINGS.filter(
    (k) => !prophet.contemporaryKings.includes(k.name) && allOtherKings.includes(k.name)
  );

  const distractors = availableKings.length >= 3
    ? pickRandom(availableKings.map((k) => k.name), 3)
    : availableKings.length > 0
      ? [
          ...availableKings.map((k) => k.name),
          ...pickRandom(
            allOtherKings.filter(
              (k) => !availableKings.map((ak) => ak.name).includes(k)
            ),
            3 - availableKings.length
          ),
        ]
      : pickRandom(allOtherKings, 3);

  const options = shuffleArray([correctKing, ...distractors]);
  const correctIndex = options.indexOf(correctKing);

  return {
    id: questionId,
    type: "prophet",
    question: `Quel prophète était contemporain du roi ${correctKing} ?`,
    options,
    correctIndex,
    explanation: `${prophet.name} était contemporain du roi ${correctKing}. Référence : ${prophet.biblicalReference}.`,
    kingId: prophet.id,
  };
}

// Type 4: Impact rating
function generateImpactQuestion(
  prophet: Prophet,
  questionId: string
): QuizQuestion {
  const impacts = [1, 2, 3, 4, 5];
  const otherImpacts = impacts.filter((i) => i !== prophet.impact);
  const distractorImpacts = pickRandom(otherImpacts, 3);

  const impactLabels: Record<number, string> = {
    1: "mention",
    2: "significatif",
    3: "notable",
    4: "important",
    5: "majeur",
  };

  const options = shuffleArray([
    `⭐`.repeat(prophet.impact) + `☆`.repeat(5 - prophet.impact) + ` (${impactLabels[prophet.impact]})`,
    ...distractorImpacts.map(
      (i) => `⭐`.repeat(i) + `☆`.repeat(5 - i) + ` (${impactLabels[i]})`
    ),
  ]);

  const correctOption = `⭐`.repeat(prophet.impact) + `☆`.repeat(5 - prophet.impact) + ` (${impactLabels[prophet.impact]})`;
  const correctIndex = options.indexOf(correctOption);

  return {
    id: questionId,
    type: "faithfulness",
    question: `Quel est l'impact spirituel du prophète ${prophet.name} ?`,
    options,
    correctIndex,
    explanation: `${prophet.name} a un impact ${impactLabels[prophet.impact]} avec ${prophet.impact}/5. Référence : ${prophet.biblicalReference}.`,
    kingId: prophet.id,
  };
}

// Main function: Generate quiz with config
export function generateProphetQuiz(config: {
  category: ProphetEraId | "all";
  questionCount: 5 | 10 | 20;
}): QuizQuestion[] {
  // Filter prophet pool by category
  let prophetPool: Prophet[];
  if (config.category === "all") {
    prophetPool = [...PROPHETS];
  } else {
    prophetPool = getProphetsByEra(config.category);
  }

  const questions: QuizQuestion[] = [];
  const usedCombos = new Set<string>(); // Track prophet+type to avoid duplicates
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
    const prophet = pickRandom(prophetPool, 1)[0];
    const comboKey = `${prophet.id}-${type}`;

    if (usedCombos.has(comboKey)) continue;

    let question: QuizQuestion | null = null;

    switch (type) {
      case "identification":
        question = generateIdentificationQuestion(
          prophet,
          prophetPool,
          `q-${questions.length + 1}`
        );
        break;
      case "facts":
        question = generateProphetFactsQuestion(
          prophet,
          prophetPool,
          `q-${questions.length + 1}`
        );
        break;
      case "prophet":
        question = generateKingAssociationQuestion(
          prophet,
          prophetPool,
          `q-${questions.length + 1}`
        );
        break;
      case "faithfulness":
        question = generateImpactQuestion(prophet, `q-${questions.length + 1}`);
        break;
    }

    if (question) {
      questions.push(question);
      usedCombos.add(comboKey);
    }
  }

  return questions;
}

// Generate card-specific quiz (3-4 questions about one prophet)
export function generateProphetCardQuiz(prophetId: string): QuizQuestion[] {
  const prophet = PROPHETS.find((p) => p.id === prophetId);
  if (!prophet) return [];

  const questions: QuizQuestion[] = [];

  // Type 4 (impact) - always included
  questions.push(generateImpactQuestion(prophet, `q-card-${questions.length + 1}`));

  // Type 1 (identification)
  questions.push(
    generateIdentificationQuestion(prophet, PROPHETS, `q-card-${questions.length + 1}`)
  );

  // Type 2 (facts)
  questions.push(generateProphetFactsQuestion(prophet, PROPHETS, `q-card-${questions.length + 1}`));

  // Type 3 (king association) - only if prophet has contemporary kings
  if (prophet.contemporaryKings.length > 0) {
    const kingQuestion = generateKingAssociationQuestion(
      prophet,
      PROPHETS,
      `q-card-${questions.length + 1}`
    );
    if (kingQuestion) {
      questions.push(kingQuestion);
    }
  }

  return questions;
}
