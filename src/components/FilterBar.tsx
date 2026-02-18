'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import type { Kingdom } from '@/types';

interface FilterBarProps {
  selectedEra: Kingdom | 'all';
  searchQuery: string;
  onEraChange: (era: Kingdom | 'all') => void;
  onSearchChange: (query: string) => void;
}

export default function FilterBar({
  selectedEra,
  searchQuery,
  onEraChange,
  onSearchChange,
}: FilterBarProps) {
  const eraButtons = [
    { id: 'all' as const, label: 'Tous' },
    { id: 'united' as const, label: 'Monarchie Unie' },
    { id: 'israel' as const, label: 'Israël (Nord)' },
    { id: 'judah' as const, label: 'Juda (Sud)' },
  ];

  const eraColor = (id: string, active: boolean) => {
    if (!active)
      return 'text-parchment-900/70 hover:text-parchment-900 hover:bg-parchment-200/60';
    if (id === 'united') return 'bg-era-united text-white shadow-sm';
    if (id === 'israel') return 'bg-era-israel text-white shadow-sm';
    if (id === 'judah') return 'bg-era-judah text-white shadow-sm';
    return 'bg-parchment-900 text-white shadow-sm';
  };

  return (
    <div className="sticky top-0 z-30 bg-parchment-50/80 backdrop-blur-md border-b border-parchment-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-3">
          {/* Era pills — horizontal scroll on mobile */}
          <div className="flex items-center gap-1 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible scrollbar-none">
            {eraButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => onEraChange(btn.id)}
                aria-pressed={selectedEra === btn.id}
                className={`px-3 py-2.5 min-h-[44px] rounded-md font-inter font-medium text-sm transition-all whitespace-nowrap shrink-0 ${eraColor(
                  btn.id,
                  selectedEra === btn.id
                )}`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search — pushed right on desktop */}
          <div className="sm:ml-auto relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-parchment-900/40" />
            <input
              id="search-kings"
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full sm:w-52 pl-9 pr-3 py-2.5 min-h-[44px] rounded-md border border-parchment-300/80 bg-white/60 text-sm text-parchment-900 font-inter placeholder:text-parchment-900/40 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
