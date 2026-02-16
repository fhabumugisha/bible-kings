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
  const [selectedFaithfulness, setSelectedFaithfulness] = useState<
    'all' | 'faithful' | 'unfaithful'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quizKingId, setQuizKingId] = useState<string | null>(null);

  // Filter kings
  const filteredKings = KINGS.filter((king) => {
    // Era filter
    if (selectedEra !== 'all' && king.kingdom !== selectedEra) {
      return false;
    }

    // Faithfulness filter
    if (selectedFaithfulness === 'faithful' && king.faithfulness < 4) {
      return false;
    }
    if (selectedFaithfulness === 'unfaithful' && king.faithfulness > 2) {
      return false;
    }

    // Search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const nameMatch = king.name.toLowerCase().includes(query);
      return nameMatch;
    }

    return true;
  });

  return (
    <main>
      <Hero />
      <FilterBar
        selectedEra={selectedEra}
        selectedFaithfulness={selectedFaithfulness}
        searchQuery={searchQuery}
        onEraChange={setSelectedEra}
        onFaithfulnessChange={setSelectedFaithfulness}
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
