'use client';

import Link from 'next/link';
import { useProgressStore } from '@/stores/useProgressStore';

export default function Header() {
  const kingsViewed = useProgressStore((state) => state.kingsViewed);
  const prophetsViewed = useProgressStore((state) => state.prophetsViewed);

  return (
    <header className="sticky top-0 z-50 bg-parchment-50 border-b border-parchment-200 shadow-sm" style={{ paddingTop: 'max(0px, env(safe-area-inset-top))' }}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: App Title */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg md:text-xl font-cinzel font-bold text-parchment-900 hover:text-gold transition-colors"
        >
          <span className="text-2xl">📖</span>
          <span className="hidden sm:inline">Bible Interactive</span>
          <span className="sm:hidden">Bible</span>
        </Link>

        {/* Right: Dual Progress Counters + Quiz Link */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Kings Progress Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gold-light/30 rounded-full border border-gold/20 text-xs sm:text-sm font-inter font-semibold text-parchment-900">
            <span>{kingsViewed.length}/43</span>
            <span>👑</span>
          </div>

          {/* Prophets Progress Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-prophet-light/30 rounded-full border border-prophet/20 text-xs sm:text-sm font-inter font-semibold text-parchment-900">
            <span>{prophetsViewed.length}/23</span>
            <span>🕊️</span>
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
