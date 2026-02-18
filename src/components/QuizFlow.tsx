'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import type { Kingdom, QuizQuestion } from '@/types'
import { generateQuiz } from '@/lib/quiz'
import { useQuiz } from '@/hooks/useQuiz'
import { useProgressStore } from '@/stores/useProgressStore'

type Stage = 'config' | 'quiz' | 'results'

export default function QuizFlow() {
  const [stage, setStage] = useState<Stage>('config')
  const [category, setCategory] = useState<Kingdom | 'all'>('all')
  const [questionCount, setQuestionCount] = useState<5 | 10 | 20>(10)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])

  const quiz = useQuiz(questions)
  const recordScore = useProgressStore((state) => state.recordScore)
  const quizScores = useProgressStore((state) => state.quizScores)

  const categoryOptions = [
    { value: 'all' as const, label: 'Tous les rois' },
    { value: 'united' as const, label: 'Monarchie Unie' },
    { value: 'israel' as const, label: 'Israël (Nord)' },
    { value: 'judah' as const, label: 'Juda (Sud)' },
  ]

  const countOptions: Array<5 | 10 | 20> = [5, 10, 20]

  const handleStart = () => {
    const generatedQuestions = generateQuiz({ category, questionCount })
    setQuestions(generatedQuestions)
    setStage('quiz')
  }

  const handleComplete = () => {
    recordScore(`global-${category}-${questionCount}`, quiz.score, quiz.totalQuestions)
    setStage('results')
  }

  const handleReplay = () => {
    setStage('config')
    quiz.reset()
  }

  // Config Stage
  if (stage === 'config') {
    return (
      <div className="min-h-dvh bg-parchment-900 text-white py-8 px-4" style={{ paddingTop: 'max(2rem, env(safe-area-inset-top))', paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-cinzel text-3xl">👑 Quiz</h1>
            <Link href="/" className="text-gold hover:text-gold-light transition-colors min-h-[44px] flex items-center">
              Retour
            </Link>
          </div>

          <motion.div
            className="bg-parchment-100 rounded-2xl p-6 sm:p-8 text-parchment-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-8">
              <h2 className="font-cinzel text-xl mb-4">Catégorie</h2>
              <div className="flex flex-wrap gap-3">
                {categoryOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCategory(opt.value)}
                    className={`px-5 py-3 min-h-[44px] rounded-full font-medium transition-colors ${
                      category === opt.value
                        ? 'bg-gold text-white'
                        : 'bg-parchment-200 hover:bg-parchment-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-cinzel text-xl mb-4">Nombre de questions</h2>
              <div className="flex gap-3">
                {countOptions.map((count) => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`px-6 py-3 min-h-[44px] rounded-full font-medium transition-colors ${
                      questionCount === count
                        ? 'bg-gold text-white'
                        : 'bg-parchment-200 hover:bg-parchment-300'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleStart}
              className="w-full bg-gold text-white py-4 min-h-[56px] rounded-xl font-semibold text-lg hover:bg-gold/90 transition-colors"
            >
              Commencer
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  // Quiz Stage
  if (stage === 'quiz') {
    const progressPercent = ((quiz.currentIndex + (quiz.isAnswered ? 1 : 0)) / quiz.totalQuestions) * 100

    return (
      <div className="min-h-dvh bg-parchment-900 text-white py-8 px-4" style={{ paddingTop: 'max(2rem, env(safe-area-inset-top))', paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-cinzel text-3xl">👑 Quiz</h1>
            <Link href="/" className="text-gold hover:text-gold-light transition-colors min-h-[44px] flex items-center">
              Retour
            </Link>
          </div>

          {/* Screen reader announcements */}
          <div aria-live="polite" className="sr-only">
            Question {quiz.currentIndex + 1} sur {quiz.totalQuestions}
          </div>

          <motion.div
            className="bg-parchment-100 rounded-2xl p-6 sm:p-8 text-parchment-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">
                  Question {quiz.currentIndex + 1} / {quiz.totalQuestions}
                </span>
                <span className="text-sm text-parchment-900/60">{Math.round(progressPercent)}%</span>
              </div>
              <div className="h-2 bg-parchment-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <h2 className="font-cinzel text-xl sm:text-2xl mb-6">{quiz.currentQuestion.question}</h2>

            <div className="space-y-3 mb-6">
              {quiz.currentQuestion.options.map((option, index) => {
                const isSelected = quiz.selectedAnswer === index
                const isCorrect = index === quiz.currentQuestion.correctIndex

                let buttonClass = 'w-full text-left px-5 py-4 min-h-[56px] rounded-xl font-medium transition-all '

                if (!quiz.isAnswered) {
                  buttonClass += isSelected
                    ? 'bg-parchment-300 border-2 border-gold'
                    : 'bg-parchment-200 hover:bg-parchment-300'
                } else {
                  if (isCorrect) {
                    buttonClass += 'bg-success text-white'
                  } else if (isSelected && !isCorrect) {
                    buttonClass += 'bg-red-500 text-white'
                  } else {
                    buttonClass += 'bg-parchment-200 opacity-50'
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => quiz.selectAnswer(index)}
                    disabled={quiz.isAnswered}
                    className={buttonClass}
                  >
                    <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                )
              })}
            </div>

            {quiz.isAnswered && (
              <motion.div
                className="bg-parchment-50 p-4 rounded-xl mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-xl">📖</span>
                  <p className="text-sm card-text">{quiz.currentQuestion.explanation}</p>
                </div>
              </motion.div>
            )}

            {quiz.isAnswered && (
              <button
                onClick={() => {
                  if (quiz.isComplete) {
                    handleComplete()
                  } else {
                    quiz.nextQuestion()
                  }
                }}
                className="w-full bg-gold text-white py-4 min-h-[48px] rounded-xl font-semibold hover:bg-gold/90 transition-colors"
              >
                {quiz.isComplete ? 'Voir les résultats' : 'Question suivante →'}
              </button>
            )}
          </motion.div>
        </div>
      </div>
    )
  }

  // Results Stage
  const incorrectCount = quiz.totalQuestions - quiz.score
  const percentage = Math.round((quiz.score / quiz.totalQuestions) * 100)
  const circumference = 2 * Math.PI * 80
  const strokeDashoffset = circumference - (percentage / 100) * circumference
  const previousBest = quizScores[`global-${category}-${questionCount}`]

  return (
    <div className="min-h-dvh bg-parchment-900 text-white py-8 px-4" style={{ paddingTop: 'max(2rem, env(safe-area-inset-top))', paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-cinzel text-3xl">👑 Quiz</h1>
          <Link href="/" className="text-gold hover:text-gold-light transition-colors min-h-[44px] flex items-center">
            Retour
          </Link>
        </div>

        <motion.div
          className="bg-parchment-100 rounded-2xl p-6 sm:p-8 text-parchment-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-cinzel text-3xl text-center mb-8">Résultats</h2>

          <div className="flex justify-center mb-8">
            <svg width="200" height="200" className="transform -rotate-90">
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#e8d5b8"
                strokeWidth="12"
                fill="none"
              />
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="#d4a017"
                strokeWidth="12"
                fill="none"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              <text
                x="100"
                y="95"
                textAnchor="middle"
                className="fill-parchment-900 font-cinzel text-3xl font-bold transform rotate-90"
                style={{ transform: 'rotate(90deg)', transformOrigin: '100px 100px' }}
              >
                {quiz.score}/{quiz.totalQuestions}
              </text>
              <text
                x="100"
                y="115"
                textAnchor="middle"
                className="fill-parchment-900/60 text-lg transform rotate-90"
                style={{ transform: 'rotate(90deg)', transformOrigin: '100px 100px' }}
              >
                {percentage}%
              </text>
            </svg>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-1">✅</div>
              <div className="font-semibold">{quiz.score} correctes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">❌</div>
              <div className="font-semibold">{incorrectCount} incorrectes</div>
            </div>
          </div>

          {previousBest && (
            <p className="text-sm text-parchment-900/70 text-center mb-6">
              Meilleur score précédent : {previousBest.bestScore}/{previousBest.totalQuestions}
            </p>
          )}

          <div className="bg-parchment-50 rounded-xl p-4 sm:p-6 mb-6 max-h-96 overflow-y-auto">
            <h3 className="font-cinzel text-xl mb-4">Détail des réponses</h3>
            <div className="space-y-3">
              {questions.map((question, index) => {
                const userAnswer = quiz.answers[index]
                const isCorrect = userAnswer === question.correctIndex

                return (
                  <div key={question.id} className="pb-3 border-b border-parchment-200 last:border-0">
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-lg">{isCorrect ? '✅' : '❌'}</span>
                      <p className="text-sm font-medium flex-1">Q{index + 1}: {question.question}</p>
                    </div>
                    <div className="ml-7 text-sm text-parchment-900/70">
                      {!isCorrect && userAnswer !== null && (
                        <p className="text-red-600">Votre réponse : {question.options[userAnswer]}</p>
                      )}
                      <p className="text-success">Bonne réponse : {question.options[question.correctIndex]}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleReplay}
              className="flex-1 bg-gold text-white py-4 min-h-[48px] rounded-xl font-semibold hover:bg-gold/90 transition-colors"
            >
              Rejouer
            </button>
            <Link
              href="/"
              className="flex-1 bg-parchment-200 text-parchment-900 py-4 min-h-[48px] rounded-xl font-semibold hover:bg-parchment-300 transition-colors text-center"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
