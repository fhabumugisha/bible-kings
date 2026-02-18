'use client'

import { useMemo, useEffect, useRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'motion/react'
import { useQuiz } from '@/hooks/useQuiz'
import { generateProphetCardQuiz } from '@/lib/prophet-quiz'
import { PROPHETS } from '@/data/prophets'
import { useProgressStore } from '@/stores/useProgressStore'

interface ProphetQuizModalProps {
  prophetId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ProphetQuizModal({ prophetId, isOpen, onClose }: ProphetQuizModalProps) {
  const recordScore = useProgressStore((state) => state.recordScore)
  const quizScores = useProgressStore((state) => state.quizScores)
  const lastResetKey = useRef('')
  const firstOptionRef = useRef<HTMLButtonElement>(null)

  const prophet = useMemo(
    () => PROPHETS.find((p) => p.id === prophetId),
    [prophetId]
  )

  const questions = useMemo(
    () => (isOpen ? generateProphetCardQuiz(prophetId) : []),
    [prophetId, isOpen]
  )

  const quiz = useQuiz(questions)

  useEffect(() => {
    const resetKey = `${prophetId}-${isOpen}`
    if (isOpen && questions.length > 0 && lastResetKey.current !== resetKey) {
      lastResetKey.current = resetKey
      quiz.reset()
    }
  }, [isOpen, prophetId, questions.length, quiz]);

  useEffect(() => {
    if (quiz.isComplete) {
      recordScore(`card-prophet-${prophetId}`, quiz.score, quiz.totalQuestions);
    }
  }, [quiz.isComplete, quiz.score, quiz.totalQuestions, prophetId, recordScore]);

  // Focus first answer option when new question appears
  useEffect(() => {
    if (isOpen && !quiz.isAnswered && firstOptionRef.current) {
      firstOptionRef.current.focus()
    }
  }, [isOpen, quiz.currentIndex, quiz.isAnswered])

  if (!prophet || questions.length === 0) return null

  const progressPercent = ((quiz.currentIndex + 1) / quiz.totalQuestions) * 100
  const scorePercent = (quiz.score / quiz.totalQuestions) * 100
  const previousBest = quizScores[`card-prophet-${prophetId}`]

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 bg-parchment-50 shadow-xl overflow-y-auto
              inset-0 rounded-none p-4 pt-6
              sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
              sm:max-w-lg sm:w-[90vw] sm:rounded-2xl sm:p-6 sm:max-h-[90vh]"
            style={{ paddingTop: 'max(1.5rem, env(safe-area-inset-top))', paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
          >
            <div className="flex items-center justify-between mb-4">
              <Dialog.Title className="font-cinzel text-xl sm:text-2xl font-bold text-parchment-900">
                Quiz — {prophet.name}
              </Dialog.Title>
              <Dialog.Close className="text-parchment-900 hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <span className="text-2xl font-bold leading-none">&times;</span>
              </Dialog.Close>
            </div>

            {/* Screen reader announcements */}
            <div aria-live="polite" className="sr-only">
              {quiz.isAnswered && (
                quiz.selectedAnswer === quiz.currentQuestion.correctIndex
                  ? 'Bonne réponse !'
                  : 'Mauvaise réponse.'
              )}
              Question {quiz.currentIndex + 1} sur {quiz.totalQuestions}
            </div>

            {!quiz.isComplete ? (
              <>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-scroll">
                      Question {quiz.currentIndex + 1} / {quiz.totalQuestions}
                    </p>
                    <p className="text-sm text-scroll font-semibold">
                      {Math.round(progressPercent)}%
                    </p>
                  </div>
                  <div className="h-2 bg-parchment-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-gold"
                    />
                  </div>
                </div>

                <p className="font-cinzel text-lg sm:text-xl font-semibold text-parchment-900 mb-6">
                  {quiz.currentQuestion.question}
                </p>

                <div className="space-y-3 mb-6">
                  {quiz.currentQuestion.options.map((option, index) => {
                    const isSelected = quiz.selectedAnswer === index;
                    const isCorrectOption =
                      index === quiz.currentQuestion.correctIndex;
                    const showResult = quiz.isAnswered;

                    let buttonClass =
                      "w-full text-left px-4 py-4 min-h-[56px] rounded-lg font-medium transition-all ";

                    if (!showResult) {
                      buttonClass +=
                        "bg-parchment-200 hover:bg-parchment-300 text-parchment-900";
                    } else if (isCorrectOption) {
                      buttonClass += "bg-success text-white";
                    } else if (isSelected && !isCorrectOption) {
                      buttonClass += "bg-red-500 text-white";
                    } else {
                      buttonClass += "bg-parchment-200 text-parchment-900 opacity-50";
                    }

                    return (
                      <button
                        key={index}
                        ref={index === 0 ? firstOptionRef : undefined}
                        onClick={() => quiz.selectAnswer(index)}
                        disabled={quiz.isAnswered}
                        className={buttonClass}
                      >
                        {String.fromCharCode(65 + index)}. {option}
                      </button>
                    );
                  })}
                </div>

                {quiz.isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-parchment-200 rounded-lg p-4 mb-6"
                  >
                    <p className="text-sm text-parchment-900 card-text">
                      <span className="mr-2">📖</span>
                      {quiz.currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}

                {quiz.isAnswered && !quiz.isComplete && (
                  <button
                    onClick={quiz.nextQuestion}
                    className="w-full bg-gold hover:bg-gold/90 text-white font-semibold py-4 min-h-[56px] rounded-lg transition-colors"
                  >
                    Question suivante →
                  </button>
                )}

                {quiz.isComplete && (
                  <button
                    onClick={onClose}
                    className="w-full bg-gold hover:bg-gold/90 text-white font-semibold py-4 min-h-[56px] rounded-lg transition-colors"
                  >
                    Voir les résultats →
                  </button>
                )}
              </>
            ) : (
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-parchment-200"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                      animate={{
                        strokeDashoffset:
                          2 * Math.PI * 56 * (1 - scorePercent / 100),
                      }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      className="text-gold"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="font-cinzel text-3xl font-bold text-parchment-900">
                      {quiz.score}/{quiz.totalQuestions}
                    </p>
                    <p className="text-sm text-scroll">{Math.round(scorePercent)}%</p>
                  </div>
                </div>

                <p className="text-xl font-semibold text-parchment-900 mb-4">
                  {scorePercent === 100
                    ? "Parfait !"
                    : scorePercent >= 75
                      ? "Très bien !"
                      : scorePercent >= 50
                        ? "Bien joué !"
                        : "Continue à apprendre !"}
                </p>

                <div className="flex items-center justify-center gap-6 mb-6">
                  <div>
                    <p className="text-2xl font-bold text-success">✅ {quiz.score}</p>
                    <p className="text-xs text-scroll">Correctes</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-500">
                      ❌ {quiz.totalQuestions - quiz.score}
                    </p>
                    <p className="text-xs text-scroll">Incorrectes</p>
                  </div>
                </div>

                {previousBest && (
                  <p className="text-sm text-parchment-900/70 text-center mb-6">
                    Meilleur score précédent : {previousBest.bestScore}/{previousBest.totalQuestions}
                  </p>
                )}

                <button
                  onClick={onClose}
                  className="w-full bg-gold hover:bg-gold/90 text-white font-semibold py-4 min-h-[56px] rounded-lg transition-colors"
                >
                  Fermer
                </button>
              </div>
            )}
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
