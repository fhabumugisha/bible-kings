'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import { getKingById } from '@/data/kings'
import { getProphetById } from '@/data/prophets'

const previewKing = getKingById('david')
const previewProphet = getProphetById('elie')

function PreviewCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <div ref={ref} className="flex items-center justify-center -space-x-6 lg:-space-x-8">
      {/* King Card */}
      {previewKing && (
        <motion.div
          className="relative h-[180px] w-[120px] overflow-hidden rounded-xl border-2 border-era-united shadow-2xl lg:h-[240px] lg:w-[160px]"
          style={{ rotate: '-4deg', zIndex: 2 }}
          animate={
            isInView
              ? { y: [0, -8, 0] }
              : { y: 0 }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src={previewKing.imagePath}
            alt={previewKing.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 120px, 160px"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
            <p className="font-cinzel text-xs font-bold text-white">👑 {previewKing.name}</p>
          </div>
        </motion.div>
      )}

      {/* Prophet Card */}
      {previewProphet && (
        <motion.div
          className="relative h-[180px] w-[120px] overflow-hidden rounded-xl border-2 border-era-israel shadow-2xl lg:h-[240px] lg:w-[160px]"
          style={{ rotate: '3deg', zIndex: 1 }}
          animate={
            isInView
              ? { y: [0, -8, 0] }
              : { y: 0 }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <Image
            src={previewProphet.imagePath}
            alt={previewProphet.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 120px, 160px"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
            <p className="font-cinzel text-xs font-bold text-white">🕊️ {previewProphet.name}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default function HubHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="bg-parchment-900 text-white py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12"
        >
          {/* Text — 55% */}
          <div className="text-center lg:w-[55%] lg:text-left">
            <h1
              className="font-cinzel font-extrabold text-white"
              style={{
                fontSize: 'clamp(2.2rem, 7vw, 4.5rem)',
                lineHeight: '0.95',
                letterSpacing: '-0.02em',
              }}
            >
              PERSONNAGES
              <br />
              DE LA BIBLE
            </h1>
            <p
              className="mt-4 font-inter font-light text-white/70"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
            >
              Découvrez les rois et prophètes de l&apos;Ancien Testament
            </p>

            {/* Mobile preview cards */}
            <div className="mt-6 lg:hidden">
              <PreviewCards />
            </div>
          </div>

          {/* Preview cards — 45% (desktop) */}
          <div className="hidden lg:flex lg:w-[45%] lg:justify-center">
            <PreviewCards />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
