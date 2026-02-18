'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, useReducedMotion, useInView } from 'motion/react'
import type { Prophet } from '@/types'
import { useProgressStore } from '@/stores/useProgressStore'
import ProphetCardFront from './ProphetCardFront'
import ProphetCardBack from './ProphetCardBack'

interface ProphetCardProps {
  prophet: Prophet
  onQuizClick: () => void
  onViewDetailsClick?: () => void
  lazy?: boolean
}

export default function ProphetCard({ prophet, onQuizClick, onViewDetailsClick, lazy = false }: ProphetCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const prophetsViewed = useProgressStore((state) => state.prophetsViewed)
  const markProphetViewed = useProgressStore((state) => state.markProphetViewed)
  const isViewed = prophetsViewed.includes(prophet.id)
  const reducedMotion = useReducedMotion()

  const entranceRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(entranceRef, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isFlipped && !isViewed) {
      markProphetViewed(prophet.id)
    }
  }, [isFlipped, isViewed, prophet.id, markProphetViewed])

  // Show flip hint only if user hasn't viewed any prophets yet
  const showFlipHint = useMemo(() => prophetsViewed.length === 0 && !isFlipped, [prophetsViewed.length, isFlipped])

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
    <motion.div
      ref={entranceRef}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5 }}
      style={{ perspective: '800px' }}
      className="mx-auto w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      onClick={handleToggleFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Carte de ${prophet.name}, cliquer pour retourner`}
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
          <ProphetCardFront prophet={prophet} isViewed={isViewed} lazy={lazy} />

          {/* Flip hint — visible only on first visit */}
          {showFlipHint && (
            <div className="absolute bottom-16 left-0 right-0 z-20 text-center pointer-events-none">
              <span className="inline-block bg-black/70 text-white text-xs font-inter px-3 py-1.5 rounded-full animate-pulse">
                Toucher pour retourner
              </span>
            </div>
          )}
        </motion.div>

        {/* Back Face */}
        <motion.div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
          animate={{ rotateY: isFlipped ? 0 : 180 }}
          transition={springConfig}
        >
          <ProphetCardBack
            prophet={prophet}
            onQuizClick={onQuizClick}
            onViewDetailsClick={onViewDetailsClick}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
