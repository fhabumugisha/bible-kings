'use client'

import type { King } from '@/types'
import { getKingById } from '@/data/kings'
import StarRating from './StarRating'

interface CardBackProps {
  king: King
  onQuizClick: () => void
  onParallelKingClick: (id: string) => void
}

export default function CardBack({ king, onQuizClick, onParallelKingClick }: CardBackProps) {
  const borderColor =
    king.kingdom === 'united'
      ? 'border-era-united'
      : king.kingdom === 'israel'
        ? 'border-era-israel'
        : 'border-era-judah'

  const faithfulnessLabel = [
    'Infidèle',
    'Infidèle',
    'Mitigé',
    'Variable',
    'Fidèle',
    'Exemplaire',
  ][king.faithfulness]

  return (
    <div
      className={`flex h-full w-full flex-col rounded-2xl border-3 ${borderColor} bg-parchment-100 shadow-lg`}
    >
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-4 pb-0">
        {/* King Name */}
        <h2 className="mb-3 text-center font-cinzel text-lg font-bold text-parchment-900">
          👑 {king.name}
        </h2>

        {/* Top Section: Biblical Reference, Reign, Parallel King, Prophets */}
        <div className="mb-3 space-y-1.5 font-inter text-sm text-parchment-900">
          <div className="flex items-start gap-2">
            <span className="text-base">📖</span>
            <span>{king.biblicalReference}</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-base">⏳</span>
            <span>
              {king.reignDuration} ({king.reignYears})
            </span>
          </div>

          {king.parallelKing && (
            <div className="flex items-start gap-2">
              <span className="text-base">👑</span>
              <span>
                Roi parallèle :{' '}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onParallelKingClick(king.parallelKing!)
                  }}
                  className="cursor-pointer font-semibold underline hover:text-gold"
                >
                  {getKingById(king.parallelKing)?.name ?? king.parallelKing}
                </button>
              </span>
            </div>
          )}

          <div className="flex items-start gap-2">
            <span className="text-base">🕊️</span>
            <span>{king.prophets.length > 0 ? king.prophets.join(', ') : 'Aucun'}</span>
          </div>
        </div>

        {/* Faithfulness Rating */}
        <div className="mb-3 flex items-center justify-center gap-2 rounded-lg bg-parchment-200/80 px-3 py-1.5">
          <StarRating rating={king.faithfulness} size="md" variant="light" />
          <span className="font-inter text-sm font-semibold text-parchment-900">
            {faithfulnessLabel}
          </span>
        </div>

        {/* Explanation */}
        {king.explanation && (
          <div className="mb-3">
            <h3 className="mb-1 font-cinzel text-sm font-bold text-parchment-900">
              📘 Histoire
            </h3>
            <p className="font-inter text-xs leading-relaxed text-parchment-900/80">
              {king.explanation}
            </p>
          </div>
        )}

        {/* Lesson */}
        {king.lesson && (
          <div className="mb-3 rounded-lg bg-gold/10 px-3 py-2">
            <p className="font-inter text-xs font-semibold text-parchment-900">
              🎯 {king.lesson}
            </p>
          </div>
        )}

        {/* Separator */}
        <div className="mb-3 border-t border-parchment-900/20" />

        {/* Facts Section */}
        <div className="mb-2">
          <h3 className="mb-1.5 font-cinzel text-sm font-bold text-parchment-900">
            📌 Faits marquants
          </h3>
          <div className="space-y-1.5 font-inter text-xs text-parchment-900">
            {king.keyFacts.map((fact, index) => (
              <div key={index} className="flex items-start gap-1.5">
                <span className="text-sm">{fact.emoji}</span>
                <span>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Button — pinned at bottom */}
      <div className="shrink-0 p-3 pt-0">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onQuizClick()
          }}
          className="w-full rounded-lg bg-gold px-4 py-2.5 font-inter text-sm font-semibold text-parchment-900 transition-all hover:bg-gold/90 hover:shadow-md"
        >
          🎯 Tester mes connaissances
        </button>
      </div>
    </div>
  )
}
