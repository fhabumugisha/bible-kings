'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { King } from '@/types'
import { useProgressStore } from '@/stores/useProgressStore'
import CardFront from './CardFront'
import CardBack from './CardBack'

interface KingCardProps {
  king: King
  onQuizClick: () => void
  onParallelKingClick: (id: string) => void
}

export default function KingCard({ king, onQuizClick, onParallelKingClick }: KingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const kingsViewed = useProgressStore((state) => state.kingsViewed)
  const markViewed = useProgressStore((state) => state.markViewed)
  const isViewed = kingsViewed.includes(king.id)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (isFlipped && !isViewed) {
      markViewed(king.id)
    }
  }, [isFlipped, isViewed, king.id, markViewed])

  const handleToggleFlip = () => {
    setIsFlipped((prev) => !prev)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggleFlip()
    }
  }

  const springConfig = reducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 300, damping: 40 }

  return (
    <div
      style={{ perspective: '800px' }}
      className="mx-auto w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      onClick={handleToggleFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Carte de ${king.name}, cliquer pour retourner`}
      aria-pressed={isFlipped}
    >
      <motion.div
        className="relative mx-auto"
        style={{
          transformStyle: 'preserve-3d',
          minWidth: '260px',
          maxWidth: '320px',
          aspectRatio: '2/3.5',
        }}
        whileHover={reducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Front Face */}
        <motion.div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={springConfig}
        >
          <CardFront king={king} isViewed={isViewed} />
        </motion.div>

        {/* Back Face */}
        <motion.div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
          animate={{ rotateY: isFlipped ? 0 : 180 }}
          transition={springConfig}
        >
          <CardBack
            king={king}
            onQuizClick={onQuizClick}
            onParallelKingClick={onParallelKingClick}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
