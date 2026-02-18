'use client';

import { useState } from 'react';
import type { Kingdom } from '@/types';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import CardGrid from '@/components/CardGrid';
import { QuizModal } from '@/components/QuizModal';
import { KINGS, ERAS } from '@/data/kings';

export default function Home() {
  const [selectedEra, setSelectedEra] = useState<Kingdom | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quizKingId, setQuizKingId] = useState<string | null>(null);

  // Filter kings
  const filteredKings = KINGS.filter((king) => {
    // Era filter
    if (selectedEra !== 'all' && king.kingdom !== selectedEra) {
      return false;
    }

    // Search filter (case + accent insensitive)
    if (searchQuery.trim() !== '') {
      const normalize = (s: string) =>
        s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const nameMatch = normalize(king.name).includes(normalize(searchQuery));
      return nameMatch;
    }

    return true;
  });

  return (
    <main>
      <Hero />
      <FilterBar
        selectedEra={selectedEra}
        searchQuery={searchQuery}
        onEraChange={setSelectedEra}
        onSearchChange={setSearchQuery}
      />
      <div id="card-grid">
        <CardGrid
          kings={filteredKings}
          eras={ERAS}
          onQuizClick={(kingId) => setQuizKingId(kingId)}
        />
      </div>
      <QuizModal
        kingId={quizKingId ?? ''}
        isOpen={quizKingId !== null}
        onClose={() => setQuizKingId(null)}
      />
    </main>
  );
}
