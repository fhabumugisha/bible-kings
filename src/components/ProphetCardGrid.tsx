'use client'

import { useRouter } from 'next/navigation'
import type { Prophet, ProphetEra, ProphetEraId } from '@/types'
import ProphetCard from './ProphetCard'

interface ProphetCardGridProps {
  prophets: Prophet[]
  eras: ProphetEra[]
  onQuizClick?: (prophetId: string) => void
}

export default function ProphetCardGrid({ prophets, eras, onQuizClick }: ProphetCardGridProps) {
  const router = useRouter()

  const getEraEmoji = (eraId: ProphetEraId): string => {
    switch (eraId) {
      case 'united':
        return '👑'
      case 'israel':
        return '⚔️'
      case 'judah':
        return '🏛️'
      case 'postexilic':
        return '🌅'
      default:
        return ''
    }
  }

  const getEraColorClasses = (eraId: ProphetEraId): string => {
    switch (eraId) {
      case 'united':
        return 'border-era-united bg-era-united/5'
      case 'israel':
        return 'border-era-israel bg-era-israel/5'
      case 'judah':
        return 'border-era-judah bg-era-judah/5'
      case 'postexilic':
        return 'border-era-postexilic bg-era-postexilic/5'
      default:
        return ''
    }
  }

  // First era is above the fold — don't lazy load those
  const firstEraId = eras[0]?.id

  return (
    <div className="w-full" id="prophet-grid">
      {eras.map((era) => {
        const eraProphets = prophets.filter((prophet) => prophet.era === era.id)

        if (eraProphets.length === 0) return null

        const isFirstEra = era.id === firstEraId

        return (
          <section
            key={era.id}
            className={`w-full py-12 md:py-16 ${getEraColorClasses(era.id)}`}
          >
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12">
              {/* Era Header */}
              <div className="mb-8 md:mb-12">
                <div
                  className={`mb-4 h-1 w-20`}
                  style={{
                    backgroundColor:
                      era.id === 'united'
                        ? '#d4a017'
                        : era.id === 'israel'
                          ? '#c0392b'
                          : era.id === 'judah'
                            ? '#2c3e8f'
                            : '#0d9488',
                  }}
                />
                <h2 className="mb-3 font-cinzel text-2xl font-bold text-parchment-900 sm:text-3xl md:text-4xl">
                  {getEraEmoji(era.id)} {era.label}
                </h2>
                <p className="mb-2 font-inter text-base text-scroll sm:text-lg">
                  {era.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 font-inter text-sm text-scroll">
                  <span>{era.prophetCount} prophètes</span>
                  <span className="text-scroll/50">•</span>
                  <span>{era.dates}</span>
                </div>
              </div>

              {/* Grid of Cards — mobile: 1 col centered, no col-span-2 */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-8">
                {eraProphets.map((prophet) => (
                    <div
                      key={prophet.id}
                      id={prophet.id}
                      className="flex justify-center max-w-[320px] mx-auto sm:max-w-none w-full"
                      style={{ scrollMarginTop: '80px' }}
                    >
                      <ProphetCard
                        prophet={prophet}
                        onQuizClick={() => onQuizClick?.(prophet.id)}
                        onViewDetailsClick={() => router.push(`/prophetes/${prophet.id}`)}
                        lazy={!isFirstEra}
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
