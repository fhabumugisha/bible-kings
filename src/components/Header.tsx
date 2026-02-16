'use client';

import Link from 'next/link';
import { useProgressStore } from '@/stores/useProgressStore';

export default function Header() {
  const kingsViewed = useProgressStore((state) => state.kingsViewed);

  return (
    <header className="sticky top-0 z-50 bg-parchment-50 border-b border-parchment-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: App Title */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg md:text-xl font-cinzel font-bold text-parchment-900 hover:text-gold transition-colors"
        >
          <span className="text-2xl">👑</span>
          <span className="hidden sm:inline">Rois d&apos;Israël</span>
          <span className="sm:hidden">Rois</span>
        </Link>

        {/* Right: Progress Counter + Quiz Link */}
        <div className="flex items-center gap-4">
          {/* Progress Counter Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gold-light/30 rounded-full border border-gold/20 text-sm font-inter font-semibold text-parchment-900">
            <span>{kingsViewed.length} / 43</span>
            <span>👑</span>
          </div>

          {/* Quiz Link */}
          <Link
            href="/quiz"
            className="px-4 py-2 bg-gold text-white font-inter font-semibold rounded-lg hover:bg-gold/90 transition-colors text-sm"
          >
            Quiz
          </Link>
        </div>
      </div>
    </header>
  );
}
