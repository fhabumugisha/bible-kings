'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'

interface CategoryCardProps {
  emoji: string
  title: string
  description: string
  count: number
  viewed: number
  href: string
  accentColor: string
  previewImages: string[]
}

export default function CategoryCard({
  emoji,
  title,
  description,
  count,
  viewed,
  href,
  accentColor,
  previewImages,
}: CategoryCardProps) {
  const rotations = [-5, 0, 5]

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <Link
        href={href}
        className="block rounded-2xl border border-parchment-300 bg-parchment-50 p-6 shadow-sm transition-shadow hover:shadow-lg"
        style={{ borderTopColor: accentColor, borderTopWidth: '3px' }}
      >
        {/* Preview Images */}
        <div className="mb-5 flex items-center justify-center -space-x-4">
          {previewImages.slice(0, 3).map((src, i) => (
            <div
              key={i}
              className="relative h-[100px] w-[68px] overflow-hidden rounded-lg border-2 border-white shadow-md"
              style={{ rotate: `${rotations[i]}deg`, zIndex: 3 - i }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="68px"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <h2 className="mb-1 font-cinzel text-xl font-bold text-parchment-900">
          {emoji} {title}
        </h2>
        <p className="mb-3 font-inter text-sm text-scroll">
          {description}
        </p>

        {/* Progress */}
        <div className="mb-4">
          <div className="mb-1 flex items-center justify-between font-inter text-xs text-scroll">
            <span>{viewed}/{count} découverts</span>
            <span>{count > 0 ? Math.round((viewed / count) * 100) : 0}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-parchment-200">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${count > 0 ? (viewed / count) * 100 : 0}%`,
                backgroundColor: accentColor,
              }}
            />
          </div>
        </div>

        {/* CTA */}
        <span
          className="inline-flex items-center gap-1 font-inter text-sm font-semibold transition-colors"
          style={{ color: accentColor }}
        >
          Explorer →
        </span>
      </Link>
    </motion.div>
  )
}
