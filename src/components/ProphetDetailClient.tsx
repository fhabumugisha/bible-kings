'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'
import type { Prophet } from '@/types'
import { getAdjacentProphets } from '@/data/prophets'
import StarRating from './StarRating'

interface ProphetDetailClientProps {
  prophet: Prophet
  prevProphet: Prophet | null
  nextProphet: Prophet | null
}

export default function ProphetDetailClient({ prophet, prevProphet, nextProphet }: ProphetDetailClientProps) {
  const [imageError, setImageError] = useState(false)

  const borderColor =
    prophet.era === 'united'
      ? 'border-era-united'
      : prophet.era === 'israel'
        ? 'border-era-israel'
        : prophet.era === 'judah'
          ? 'border-era-judah'
          : 'border-era-postexilic'

  const accentColor =
    prophet.era === 'united'
      ? '#d4a017'
      : prophet.era === 'israel'
        ? '#c0392b'
        : prophet.era === 'judah'
          ? '#2c3e8f'
          : '#0d9488'

  const eraLabel =
    prophet.era === 'united'
      ? 'Monarchie Unie'
      : prophet.era === 'israel'
        ? 'Royaume du Nord'
        : prophet.era === 'judah'
          ? 'Royaume du Sud'
          : 'Post-Exiliques'

  const impactLabel = [
    'Mention',
    'Mention',
    'Significatif',
    'Notable',
    'Important',
    'Majeur',
  ][prophet.impact]

  return (
    <>
      <div className="min-h-dvh bg-parchment-50">
        {/* Navigation Bar */}
        <div className="sticky top-[60px] z-40 border-b border-parchment-300 bg-parchment-100/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link
              href="/prophetes"
              className="font-inter text-sm font-medium text-scroll transition-colors hover:text-parchment-900"
            >
              ← Retour aux prophètes
            </Link>

            <div className="flex items-center gap-2">
              {prevProphet ? (
                <Link
                  href={`/prophetes/${prevProphet.id}`}
                  className="rounded-lg border border-parchment-300 px-3 py-1.5 font-inter text-sm font-medium text-parchment-900 transition-all hover:border-gold hover:bg-parchment-200"
                >
                  ← {prevProphet.name}
                </Link>
              ) : (
                <span className="rounded-lg border border-parchment-300/50 px-3 py-1.5 font-inter text-sm text-scroll/40">
                  ← Précédent
                </span>
              )}

              {nextProphet ? (
                <Link
                  href={`/prophetes/${nextProphet.id}`}
                  className="rounded-lg border border-parchment-300 px-3 py-1.5 font-inter text-sm font-medium text-parchment-900 transition-all hover:border-gold hover:bg-parchment-200"
                >
                  {nextProphet.name} →
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
                    src={imageError ? '/images/prophets/placeholder.svg' : prophet.imagePath}
                    alt={`Portrait de ${prophet.name}`}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 w-full p-4">
                    <p className="font-cinzel text-xl font-bold text-white">
                      🕊️ {prophet.name}
                    </p>
                    <p className="font-inter text-sm text-white/80">
                      ~{prophet.ministryDuration}
                    </p>
                  </div>
                  {/* Number badge */}
                  <div
                    className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    #{prophet.number}
                  </div>
                  {/* Stars badge */}
                  <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1">
                    <StarRating rating={prophet.impact} size="sm" variant="dark" />
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
                  🕊️ {prophet.name}
                </h1>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-parchment-300 bg-parchment-100 p-4">
                  <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wide text-scroll">
                    📖 Référence
                  </p>
                  <p className="font-inter text-sm font-medium text-parchment-900">
                    {prophet.biblicalReference}
                  </p>
                </div>
                <div className="rounded-xl border border-parchment-300 bg-parchment-100 p-4">
                  <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wide text-scroll">
                    ⏳ Ministère
                  </p>
                  <p className="font-inter text-sm font-medium text-parchment-900">
                    {prophet.ministryDuration} ({prophet.ministryYears})
                  </p>
                </div>
                {prophet.contemporaryKings.length > 0 && (
                  <div className="rounded-xl border border-parchment-300 bg-parchment-100 p-4">
                    <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wide text-scroll">
                      👑 Rois contemporains
                    </p>
                    <p className="font-inter text-sm font-medium text-parchment-900">
                      {prophet.contemporaryKings.join(', ')}
                    </p>
                  </div>
                )}
                <div className="rounded-xl border border-parchment-300 bg-parchment-100 p-4">
                  <p className="mb-1 font-inter text-xs font-semibold uppercase tracking-wide text-scroll">
                    ✨ Spécialité
                  </p>
                  <p className="font-inter text-sm font-medium text-parchment-900">
                    {prophet.specialty}
                  </p>
                </div>
              </div>

              {/* Impact */}
              <div className="flex items-center gap-3 rounded-xl bg-parchment-200/60 px-4 py-3">
                <StarRating rating={prophet.impact} size="md" variant="light" />
                <span className="font-inter text-sm font-semibold text-parchment-900">
                  {impactLabel} ({prophet.impact}/5)
                </span>
              </div>

              {/* Explanation */}
              {prophet.explanation && (
                <div>
                  <h2 className="mb-2 font-cinzel text-lg font-bold text-parchment-900">
                    📘 Histoire
                  </h2>
                  <p className="font-inter text-sm leading-relaxed text-parchment-900/80">
                    {prophet.explanation}
                  </p>
                </div>
              )}

              {/* Lesson */}
              {prophet.lesson && (
                <div className="rounded-xl bg-gold/10 px-5 py-4">
                  <p className="font-inter text-sm font-semibold text-parchment-900">
                    🎯 {prophet.lesson}
                  </p>
                </div>
              )}

              {/* Key Facts */}
              <div>
                <h2 className="mb-3 font-cinzel text-lg font-bold text-parchment-900">
                  📌 Faits marquants
                </h2>
                <div className="space-y-3">
                  {prophet.keyFacts.map((fact, index) => (
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

              {/* Bottom Navigation */}
              <div className="flex items-center justify-between border-t border-parchment-300 pt-6">
                {prevProphet ? (
                  <Link
                    href={`/prophetes/${prevProphet.id}`}
                    className="group flex items-center gap-2"
                  >
                    <span className="font-inter text-sm text-scroll transition-colors group-hover:text-parchment-900">
                      ←
                    </span>
                    <div>
                      <p className="font-inter text-xs text-scroll">Précédent</p>
                      <p className="font-cinzel text-sm font-semibold text-parchment-900">
                        {prevProphet.name}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextProphet ? (
                  <Link
                    href={`/prophetes/${nextProphet.id}`}
                    className="group flex items-center gap-2 text-right"
                  >
                    <div>
                      <p className="font-inter text-xs text-scroll">Suivant</p>
                      <p className="font-cinzel text-sm font-semibold text-parchment-900">
                        {nextProphet.name}
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
    </>
  )
}
