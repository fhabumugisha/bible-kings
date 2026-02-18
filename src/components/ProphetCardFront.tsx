'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { Prophet } from '@/types'
import StarRating from './StarRating'

interface ProphetCardFrontProps {
  prophet: Prophet
  isViewed: boolean
  lazy?: boolean
}

const eraPlaceholderColor: Record<string, string> = {
  united: '#d4a017',
  israel: '#c0392b',
  judah: '#2c3e8f',
  postexilic: '#0d9488',
}

export default function ProphetCardFront({ prophet, isViewed, lazy = false }: ProphetCardFrontProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const borderColor =
    prophet.era === 'united'
      ? 'border-era-united'
      : prophet.era === 'israel'
        ? 'border-era-israel'
        : prophet.era === 'judah'
          ? 'border-era-judah'
          : 'border-era-postexilic'

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-2xl border-3 ${borderColor} bg-parchment-200 shadow-lg`}
    >
      {/* Number Badge */}
      <div className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-sm font-bold text-white">
        #{prophet.number}
      </div>

      {/* Viewed Checkmark */}
      {isViewed && (
        <div className="absolute left-14 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs text-white">
          ✓
        </div>
      )}

      {/* Star Rating */}
      <div className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
        <StarRating rating={prophet.impact} size="sm" />
      </div>

      {/* Era-colored placeholder background while image loads */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${eraPlaceholderColor[prophet.era]}40, ${eraPlaceholderColor[prophet.era]}20)`,
          opacity: imageLoaded ? 0 : 1,
        }}
      />

      {/* Portrait Image — full height with lazy loading and fade-in */}
      <div className="absolute inset-0">
        <Image
          src={imageError ? '/images/prophets/placeholder.svg' : prophet.imagePath}
          alt={`Portrait de ${prophet.name}, prophète de la période ${prophet.era}`}
          fill
          className="object-cover transition-opacity duration-300"
          style={{ opacity: imageLoaded ? 1 : 0 }}
          loading={lazy ? 'lazy' : undefined}
          onError={() => setImageError(true)}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Bottom Gradient Overlay with Name and Ministry Duration */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 pt-10">
        <div className="font-cinzel text-lg font-bold text-white truncate">
          🕊️ {prophet.name}
        </div>
        <div className="font-inter text-sm text-white/80 truncate">~{prophet.ministryDuration}</div>
      </div>
    </div>
  )
}
