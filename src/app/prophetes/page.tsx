'use client';

import { useState } from 'react';
import type { ProphetEraId } from '@/types';
import ProphetHero from '@/components/ProphetHero';
import ProphetFilterBar from '@/components/ProphetFilterBar';
import ProphetCardGrid from '@/components/ProphetCardGrid';
import { PROPHETS, PROPHET_ERAS } from '@/data/prophets';

export default function ProphetesPage() {
  const [selectedEra, setSelectedEra] = useState<ProphetEraId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProphets = PROPHETS.filter((prophet) => {
    if (selectedEra !== 'all' && prophet.era !== selectedEra) {
      return false;
    }

    if (searchQuery.trim() !== '') {
      const normalize = (s: string) =>
        s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const nameMatch = normalize(prophet.name).includes(normalize(searchQuery));
      return nameMatch;
    }

    return true;
  });

  return (
    <main>
      <ProphetHero />
      <ProphetFilterBar
        selectedEra={selectedEra}
        searchQuery={searchQuery}
        onEraChange={setSelectedEra}
        onSearchChange={setSearchQuery}
      />
      <div id="prophet-grid">
        <ProphetCardGrid
          prophets={filteredProphets}
          eras={PROPHET_ERAS}
        />
      </div>
    </main>
  );
}
