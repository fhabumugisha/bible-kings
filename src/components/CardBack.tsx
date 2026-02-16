'use client'

import type { King } from '@/types'
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
      className={`relative h-full w-full overflow-hidden rounded-2xl border-3 ${borderColor} bg-parchment-100 p-4 shadow-lg`}
    >
      {/* King Name */}
      <h2 className="mb-3 text-center font-cinzel text-lg font-bold text-parchment-900">
        👑 {king.name}
      </h2>

      {/* Top Section: Biblical Reference, Reign, Parallel King, Prophets */}
      <div className="mb-4 space-y-2 font-inter text-sm text-parchment-900">
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

        <div className="flex items-start gap-2">
          <span className="text-base">👑</span>
          {king.parallelKing ? (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onParallelKingClick(king.parallelKing!)
              }}
              className="cursor-pointer underline hover:text-gold"
            >
              Roi parallèle
            </button>
          ) : (
            <span>Aucun roi parallèle</span>
          )}
        </div>

        <div className="flex items-start gap-2">
          <span className="text-base">🕊️</span>
          <span>{king.prophets.length > 0 ? king.prophets.join(', ') : 'Aucun'}</span>
        </div>
      </div>

      {/* Middle Section: Star Rating with Label */}
      <div className="mb-3 flex items-center gap-2">
        <StarRating rating={king.faithfulness} size="md" />
        <span className="font-inter text-sm font-semibold text-parchment-900">
          {faithfulnessLabel}
        </span>
      </div>

      {/* Separator */}
      <div className="my-4 border-t border-parchment-900/20" />

      {/* Facts Section */}
      <div className="mb-4">
        <h3 className="mb-2 font-cinzel text-base font-bold text-parchment-900">
          📌 Faits marquants
        </h3>
        <div className="space-y-2 font-inter text-sm text-parchment-900">
          {king.keyFacts.map((fact, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-base">{fact.emoji}</span>
              <span>{fact.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onQuizClick()
        }}
        className="w-full rounded-lg bg-gold px-4 py-3 font-inter font-semibold text-parchment-900 transition-all hover:bg-gold/90 hover:shadow-md"
      >
        🎯 Tester mes connaissances
      </button>
    </div>
  )
}
