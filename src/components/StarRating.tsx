'use client'

import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'

interface StarRatingProps {
  rating: number
  size?: 'sm' | 'md'
  variant?: 'dark' | 'light'
}

export default function StarRating({ rating, size = 'sm', variant = 'dark' }: StarRatingProps) {
  const starSize = size === 'sm' ? 16 : 20
  const emptyColor = variant === 'dark' ? 'text-white/40' : 'text-parchment-900/25'

  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Fidélité : ${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= rating
        const StarComponent = isFilled ? StarSolid : StarOutline

        return (
          <StarComponent
            key={star}
            width={starSize}
            height={starSize}
            className={isFilled ? 'text-gold' : emptyColor}
          />
        )
      })}
    </div>
  )
}
