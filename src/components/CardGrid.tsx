'use client'

import type { King, Era } from '@/types'
import KingCard from './KingCard'

interface CardGridProps {
  kings: King[]
  eras: Era[]
  onQuizClick: (kingId: string) => void
}

export default function CardGrid({ kings, eras, onQuizClick }: CardGridProps) {
  const handleParallelKingClick = (parallelKingId: string) => {
    const element = document.getElementById(parallelKingId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const getEraEmoji = (eraId: string): string => {
    switch (eraId) {
      case 'united':
        return '👑'
      case 'israel':
        return '⚔️'
      case 'judah':
        return '🏛️'
      default:
        return ''
    }
  }

  const getEraColorClasses = (eraId: string): string => {
    switch (eraId) {
      case 'united':
        return 'border-era-united bg-era-united/5'
      case 'israel':
        return 'border-era-israel bg-era-israel/5'
      case 'judah':
        return 'border-era-judah bg-era-judah/5'
      default:
        return ''
    }
  }

  return (
    <div className="w-full">
      {eras.map((era) => {
        const eraKings = kings.filter((king) => king.kingdom === era.id)

        if (eraKings.length === 0) return null

        return (
          <section
            key={era.id}
            className={`w-full py-12 md:py-16 ${getEraColorClasses(era.id)}`}
          >
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12">
              {/* Era Header */}
              <div className="mb-8 md:mb-12">
                <div
                  className={`mb-4 h-1 w-20 bg-${era.color}`}
                  style={{
                    backgroundColor:
                      era.id === 'united'
                        ? '#d4a017'
                        : era.id === 'israel'
                          ? '#c0392b'
                          : '#2c3e8f',
                  }}
                />
                <h2 className="mb-3 font-cinzel text-2xl font-bold text-parchment-900 sm:text-3xl md:text-4xl">
                  {getEraEmoji(era.id)} {era.label}
                </h2>
                <p className="mb-2 font-inter text-base text-scroll sm:text-lg">
                  {era.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 font-inter text-sm text-scroll">
                  <span>{era.kingCount} rois</span>
                  <span className="text-scroll/50">•</span>
                  <span>{era.dates}</span>
                </div>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-8">
                {eraKings.map((king) => (
                  <div key={king.id} id={king.id} className="flex justify-center">
                    <KingCard
                      king={king}
                      onQuizClick={() => onQuizClick(king.id)}
                      onParallelKingClick={handleParallelKingClick}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
