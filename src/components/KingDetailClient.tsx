'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'
import type { King } from '@/types'
import { getKingById } from '@/data/kings'
import StarRating from './StarRating'
import { QuizModal } from './QuizModal'

interface KingDetailClientProps {
  king: King
  prevKing: King | null
  nextKing: King | null
}

export default function KingDetailClient({ king, prevKing, nextKing }: KingDetailClientProps) {
  const [imageError, setImageError] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)

  const borderColor =
    king.kingdom === 'united'
      ? 'border-era-united'
      : king.kingdom === 'israel'
        ? 'border-era-israel'
        : 'border-era-judah'

  const accentColor =
    king.kingdom === 'united'
      ? '#d4a017'
      : king.kingdom === 'israel'
        ? '#c0392b'
        : '#2c3e8f'

  const eraLabel =
    king.kingdom === 'united'
      ? 'Monarchie Unie'
      : king.kingdom === 'israel'
        ? 'Royaume du Nord'
        : 'Royaume du Sud'

  const faithfulnessLabel = [
    'Infidèle',
    'Infidèle',
    'Mitigé',
    'Variable',
    'Fidèle',
    'Exemplaire',
  ][king.faithfulness]

  const crownEmoji = king.id === 'athalie' ? '👸' : '👑'

  return (
    <>
      <div className="min-h-screen bg-parchment-50">
        {/* Navigation Bar */}
        <div className="sticky top-[60px] z-40 border-b border-parchment-300 bg-parchment-100/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="font-inter text-sm font-medium text-scroll transition-colors hover:text-parchment-900"
            >
              ← Retour aux cartes
            </Link>

            <div className="flex items-center gap-2">
              {prevKing ? (
                <Link
                  href={`/kings/${prevKing.id}`}
                  className="rounded-lg border border-parchment-300 px-3 py-1.5 font-inter text-sm font-medium text-parchment-900 transition-all hover:border-gold hover:bg-parchment-200"
                >
                  ← {prevKing.name}
                </Link>
              ) : (
                <span className="rounded-lg border border-parchment-300/50 px-3 py-1.5 font-inter text-sm text-scroll/40">
                  ← Précédent
                </span>
              )}

              {nextKing ? (
                <Link
                  href={`/kings/${nextKing.id}`}
                  className="rounded-lg border border-parchment-300 px-3 py-1.5 font-inter text-sm font-medium text-parchment-900 transition-all hover:border-gold hover:bg-parchment-200"
                >
                  {nextKing.name} →
                </Link>
              ) : (
                <span className="rounded-lg border border-parchment-300/50 px-3 py-1.5 font-inter text-sm text-scroll/40">
                  Suivant →
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr] lg:gap-12"
          >
            {/* Left Column — Card Image */}
            <div className="flex justify-center lg:sticky lg:top-[140px] lg:self-start">
              <div
                className={`w-full max-w-[320px] overflow-hidden rounded-2xl border-3 ${borderColor} bg-parchment-100 shadow-xl`}
              >
                <div className="relative aspect-[2/3]">
                  <Image
                    src={imageError ? '/images/kings/placeholder.svg' : king.imagePath}
                    alt={`Portrait de ${king.name}`}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 w-full p-4">
                    <p className="font-cinzel text-xl font-bold text-white">
                      {crownEmoji} {king.name}
                    </p>
                    <p className="font-inter text-sm text-white/80">
                      {king.reignDuration} de règne
                    </p>
                  </div>
                  {/* Number badge */}
                  <div
                    className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    #{king.number}
                  </div>
                  {/* Stars badge */}
                  <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1">
                    <StarRating rating={king.faithfulness} size="sm" variant="dark" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div
                  className="mb-2 inline-block rounded-full px-3 py-1 font-inter text-xs font-semibold text-white"
                  style={{ backgroundColor: accentColor }}
                >
                  {eraLabel}
                </div>
                <h1 className="font-cinzel text-3xl font-bold text-parchment-900 sm:text-4xl">
                  {crownEmoji} {king.name}
                </h1>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-parchment-300 bg-parchment-100 p-4">
                  <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wide text-scroll">
                    📖 Référence
                  </p>
                  <p className="font-inter text-sm font-medium text-parchment-900">
                    {king.biblicalReference}
                  </p>
                </div>
                <div className="rounded-xl border border-parchment-300 bg-parchment-100 p-4">
                  <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wide text-scroll">
                    ⏳ Règne
                  </p>
                  <p className="font-inter text-sm font-medium text-parchment-900">
                    {king.reignDuration} ({king.reignYears})
                  </p>
                </div>
                <div className="rounded-xl border border-parchment-300 bg-parchment-100 p-4">
                  <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wide text-scroll">
                    🕊️ Prophète(s)
                  </p>
                  <p className="font-inter text-sm font-medium text-parchment-900">
                    {king.prophets.length > 0 ? king.prophets.join(', ') : 'Aucun'}
                  </p>
                </div>
                <div className="rounded-xl border border-parchment-300 bg-parchment-100 p-4">
                  <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wide text-scroll">
                    👑 Roi parallèle
                  </p>
                  {king.parallelKing ? (
                    <Link
                      href={`/kings/${king.parallelKing}`}
                      className="font-inter text-sm font-semibold underline transition-colors hover:text-gold"
                    >
                      {getKingById(king.parallelKing)?.name ?? king.parallelKing}
                    </Link>
                  ) : (
                    <p className="font-inter text-sm text-scroll">Aucun</p>
                  )}
                </div>
              </div>

              {/* Faithfulness */}
              <div className="flex items-center gap-3 rounded-xl bg-parchment-200/60 px-4 py-3">
                <StarRating rating={king.faithfulness} size="md" variant="light" />
                <span className="font-inter text-sm font-semibold text-parchment-900">
                  {faithfulnessLabel} ({king.faithfulness}/5)
                </span>
              </div>

              {/* Explanation */}
              {king.explanation && (
                <div>
                  <h2 className="mb-2 font-cinzel text-lg font-bold text-parchment-900">
                    📘 Histoire
                  </h2>
                  <p className="font-inter text-sm leading-relaxed text-parchment-900/80">
                    {king.explanation}
                  </p>
                </div>
              )}

              {/* Lesson */}
              {king.lesson && (
                <div className="rounded-xl bg-gold/10 px-5 py-4">
                  <p className="font-inter text-sm font-semibold text-parchment-900">
                    🎯 {king.lesson}
                  </p>
                </div>
              )}

              {/* Key Facts */}
              <div>
                <h2 className="mb-3 font-cinzel text-lg font-bold text-parchment-900">
                  📌 Faits marquants
                </h2>
                <div className="space-y-3">
                  {king.keyFacts.map((fact, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-parchment-300 bg-parchment-100 p-3"
                    >
                      <span className="text-lg">{fact.emoji}</span>
                      <span className="font-inter text-sm text-parchment-900">{fact.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiz CTA */}
              <button
                onClick={() => setQuizOpen(true)}
                className="w-full rounded-xl bg-gold px-6 py-3 font-inter text-base font-semibold text-parchment-900 transition-all hover:bg-gold/90 hover:shadow-lg"
              >
                🎯 Tester mes connaissances sur {king.name}
              </button>

              {/* Bottom Navigation */}
              <div className="flex items-center justify-between border-t border-parchment-300 pt-6">
                {prevKing ? (
                  <Link
                    href={`/kings/${prevKing.id}`}
                    className="group flex items-center gap-2"
                  >
                    <span className="font-inter text-sm text-scroll transition-colors group-hover:text-parchment-900">
                      ←
                    </span>
                    <div>
                      <p className="font-inter text-xs text-scroll">Précédent</p>
                      <p className="font-cinzel text-sm font-semibold text-parchment-900">
                        {prevKing.name}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextKing ? (
                  <Link
                    href={`/kings/${nextKing.id}`}
                    className="group flex items-center gap-2 text-right"
                  >
                    <div>
                      <p className="font-inter text-xs text-scroll">Suivant</p>
                      <p className="font-cinzel text-sm font-semibold text-parchment-900">
                        {nextKing.name}
                      </p>
                    </div>
                    <span className="font-inter text-sm text-scroll transition-colors group-hover:text-parchment-900">
                      →
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <QuizModal
        kingId={king.id}
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
      />
    </>
  )
}
