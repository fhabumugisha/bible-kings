'use client'

import type { Prophet } from '@/types'
import { getProphetById } from '@/data/prophets'
import StarRating from './StarRating'

interface ProphetCardBackProps {
  prophet: Prophet
  onQuizClick: () => void
  onViewDetailsClick?: () => void
}

export default function ProphetCardBack({ prophet, onQuizClick, onViewDetailsClick }: ProphetCardBackProps) {
  const borderColor =
    prophet.era === 'united'
      ? 'border-era-united'
      : prophet.era === 'israel'
        ? 'border-era-israel'
        : prophet.era === 'judah'
          ? 'border-era-judah'
          : prophet.era === 'fulfillment'
            ? 'border-era-fulfillment'
            : 'border-era-postexilic'

  const impactLabel = [
    'Mention',
    'Mention',
    'Significatif',
    'Notable',
    'Important',
    'Majeur',
  ][prophet.impact]

  return (
    <div
      className={`flex h-full w-full flex-col rounded-2xl border-3 ${borderColor} bg-parchment-100 shadow-lg`}
    >
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-4 pb-0">
        {/* Prophet Name */}
        <h2 className="mb-3 text-center font-cinzel text-lg font-bold text-parchment-900 truncate">
          🕊️ {prophet.name}
        </h2>

        {/* Top Section: Biblical Reference, Ministry, Contemporary Kings, Specialty */}
        <div className="mb-3 space-y-1.5 font-inter text-sm text-parchment-900 card-text">
          <div className="flex items-start gap-2">
            <span className="text-base shrink-0">📖</span>
            <span>{prophet.biblicalReference}</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-base shrink-0">⏳</span>
            <span>
              {prophet.ministryDuration} ({prophet.ministryYears})
            </span>
          </div>

          {prophet.contemporaryKings.length > 0 && (
            <div className="flex items-start gap-2">
              <span className="text-base shrink-0">👑</span>
              <span>Rois contemporains : {prophet.contemporaryKings.join(', ')}</span>
            </div>
          )}

          <div className="flex items-start gap-2">
            <span className="text-base shrink-0">✨</span>
            <span>{prophet.specialty}</span>
          </div>
        </div>

        {/* Impact Rating */}
        <div className="mb-3 flex items-center justify-center gap-2 rounded-lg bg-parchment-200/80 px-3 py-1.5">
          <StarRating rating={prophet.impact} size="md" variant="light" />
          <span className="font-inter text-sm font-semibold text-parchment-900">
            {impactLabel}
          </span>
        </div>

        {/* Explanation */}
        {prophet.explanation && (
          <div className="mb-3">
            <h3 className="mb-1 font-cinzel text-sm font-bold text-parchment-900">
              📘 Histoire
            </h3>
            <p className="font-inter text-xs leading-relaxed text-parchment-900/80 card-text">
              {prophet.explanation}
            </p>
          </div>
        )}

        {/* Lesson */}
        {prophet.lesson && (
          <div className="mb-3 rounded-lg bg-gold/10 px-3 py-2">
            <p className="font-inter text-xs font-semibold text-parchment-900 card-text">
              🎯 {prophet.lesson}
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
          <div className="space-y-1.5 font-inter text-xs text-parchment-900 card-text">
            {prophet.keyFacts.map((fact, index) => (
              <div key={index} className="flex items-start gap-1.5">
                <span className="text-sm shrink-0">{fact.emoji}</span>
                <span>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons — pinned at bottom with proper touch targets */}
      <div className="shrink-0 p-3 pt-0 space-y-2">
        {onViewDetailsClick && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onViewDetailsClick()
            }}
            className="w-full rounded-lg border-2 border-parchment-900/20 bg-parchment-200/60 px-4 py-3 min-h-[48px] font-inter text-sm font-semibold text-parchment-900 transition-all hover:border-gold hover:bg-parchment-200"
          >
            📖 Voir les détails
          </button>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onQuizClick()
          }}
          className="w-full rounded-lg bg-gold px-4 py-3.5 min-h-[56px] font-inter text-sm font-semibold text-parchment-900 transition-all hover:bg-gold/90 hover:shadow-md"
        >
          🎯 Tester mes connaissances
        </button>
      </div>
    </div>
  )
}
