'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { King } from '@/types'
import StarRating from './StarRating'

interface CardFrontProps {
  king: King
  isViewed: boolean
}

export default function CardFront({ king, isViewed }: CardFrontProps) {
  const [imageError, setImageError] = useState(false)

  const borderColor =
    king.kingdom === 'united'
      ? 'border-era-united'
      : king.kingdom === 'israel'
        ? 'border-era-israel'
        : 'border-era-judah'

  const crownEmoji = king.id === 'athalie' ? '👸' : '👑'

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-2xl border-3 ${borderColor} bg-parchment-200 shadow-lg`}
    >
      {/* Number Badge */}
      <div className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-sm font-bold text-white">
        #{king.number}
      </div>

      {/* Viewed Checkmark */}
      {isViewed && (
        <div className="absolute left-14 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs text-white">
          ✓
        </div>
      )}

      {/* Star Rating */}
      <div className="absolute right-3 top-3 z-10">
        <StarRating rating={king.faithfulness} size="sm" />
      </div>

      {/* Portrait Image — full height */}
      <div className="absolute inset-0">
        <Image
          src={imageError ? '/images/kings/placeholder.svg' : king.imagePath}
          alt={`Portrait de ${king.name}, roi de ${king.kingdom === 'united' ? 'Israël uni' : king.kingdom === 'israel' ? 'Israël' : 'Juda'}`}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
        />
      </div>

      {/* Bottom Gradient Overlay with Name and Reign Duration */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 pt-10">
        <div className="font-cinzel text-lg font-bold text-white">
          {crownEmoji} {king.name}
        </div>
        <div className="font-inter text-sm text-white/80">{king.reignDuration} de règne</div>
      </div>
    </div>
  )
}
