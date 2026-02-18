'use client';

import Link from 'next/link';
import HubHero from '@/components/HubHero';
import CategoryCard from '@/components/CategoryCard';
import { useProgressStore } from '@/stores/useProgressStore';
import { KINGS } from '@/data/kings';
import { PROPHETS } from '@/data/prophets';

export default function HubPage() {
  const kingsViewed = useProgressStore((state) => state.kingsViewed);
  const prophetsViewed = useProgressStore((state) => state.prophetsViewed);

  const kingPreviewImages = KINGS.filter((k) => k.kingdom === 'united')
    .slice(0, 3)
    .map((k) => k.imagePath);

  const prophetPreviewImages = PROPHETS.filter((p) => p.impact === 5)
    .slice(0, 3)
    .map((p) => p.imagePath);

  return (
    <main>
      <HubHero />

      {/* Category Cards */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <CategoryCard
            emoji="👑"
            title="LES ROIS"
            description="43 rois d'Israël et de Juda"
            count={43}
            viewed={kingsViewed.length}
            href="/rois"
            accentColor="#d4a017"
            previewImages={kingPreviewImages}
          />
          <CategoryCard
            emoji="🕊️"
            title="LES PROPHÈTES"
            description="23 prophètes de l'Ancien Testament"
            count={23}
            viewed={prophetsViewed.length}
            href="/prophetes"
            accentColor="#0d9488"
            previewImages={prophetPreviewImages}
          />
        </div>

        {/* Quiz CTA */}
        <div className="mt-8 rounded-2xl bg-parchment-900 p-6 text-center sm:p-8">
          <h2 className="mb-2 font-cinzel text-xl font-bold text-white sm:text-2xl">
            🎯 TESTEZ VOS CONNAISSANCES
          </h2>
          <p className="mb-5 font-inter text-sm text-white/70">
            Quiz sur les rois, prophètes, ou les deux
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-inter text-sm font-semibold text-parchment-900 transition-colors hover:bg-gold/90"
          >
            Lancer un quiz →
          </Link>
        </div>
      </section>
    </main>
  );
}
