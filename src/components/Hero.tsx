'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useProgressStore } from '@/stores/useProgressStore';
import { KINGS } from '@/data/kings';

const previewKings = KINGS.filter((k) => k.kingdom === 'united');
const rotations = [-3, 2, -1];

export default function Hero() {
  const kingsViewed = useProgressStore((state) => state.kingsViewed);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const progress = hydrated
    ? Math.round((kingsViewed.length / KINGS.length) * 100)
    : 0;

  const handleExploreClick = () => {
    const cardGrid = document.getElementById('card-grid');
    if (cardGrid) {
      cardGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      cardGrid.focus({ preventScroll: true });
    }
  };

  const PreviewCards = ({ className }: { className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false });

    return (
      <div
        ref={ref}
        className={`relative flex items-end -space-x-6 ${className ?? ''}`}
      >
        {previewKings.map((king, i) => (
          <motion.div
            key={king.id}
            animate={isInView ? { y: [0, -8, 0] } : { y: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            style={{ rotate: `${rotations[i]}deg`, zIndex: 3 - i }}
            className="relative w-20 sm:w-24 lg:w-36 xl:w-40 aspect-[2/3] rounded-xl overflow-hidden border-2 border-gold/30 shadow-2xl"
          >
            <Image
              src={king.imagePath}
              alt={`Portrait de ${king.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 96px, 160px"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <p className="font-cinzel text-[10px] lg:text-xs font-bold text-white truncate">
                {king.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-parchment-900 text-white py-10 md:py-14 lg:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left — text content */}
          <div className="lg:w-[55%]">
            <h1
              className="font-cinzel font-extrabold text-white mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                lineHeight: '0.95',
                letterSpacing: '-0.02em',
              }}
            >
              LES ROIS D&apos;ISRAËL ET DE JUDA
            </h1>

            <p className="font-inter font-light text-white/70 text-lg md:text-xl mb-5 max-w-2xl">
              Découvrez les 43 rois de l&apos;Ancien Testament à travers
              des cartes interactives
            </p>

            {/* Mobile/tablet preview cards — inline between subtitle and progress */}
            <div className="flex justify-center mb-6 lg:hidden">
              <PreviewCards />
            </div>

            {/* Progress Bar */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-inter text-sm text-white/60">
                  Progression
                </span>
                <span className="font-inter text-sm font-semibold text-gold">
                  {progress}% découverts
                </span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleExploreClick}
                className="px-6 py-3 bg-gold text-white font-inter font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                Explorer les cartes
              </button>
              <Link
                href="/quiz"
                className="px-6 py-3 border-2 border-white/30 text-white font-inter font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Lancer un quiz
              </Link>
            </div>
          </div>

          {/* Right — floating card previews (desktop only) */}
          <div className="hidden lg:flex lg:w-[45%] justify-center items-center">
            <PreviewCards />
          </div>
        </div>
      </div>
    </section>
  );
}
