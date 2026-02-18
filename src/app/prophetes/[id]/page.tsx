import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROPHETS, getProphetById, getAdjacentProphets } from '@/data/prophets'
import ProphetDetailClient from '@/components/ProphetDetailClient'

export const dynamicParams = false

export async function generateStaticParams() {
  return PROPHETS.map((prophet) => ({
    id: prophet.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const prophet = getProphetById(id)

  if (!prophet) return { title: 'Prophète introuvable' }

  const eraLabel =
    prophet.era === 'united'
      ? 'Monarchie Unie'
      : prophet.era === 'israel'
        ? 'Royaume du Nord'
        : prophet.era === 'judah'
          ? 'Royaume du Sud'
          : 'Post-Exiliques'

  return {
    title: `${prophet.name} — ${eraLabel} | Bible Interactive`,
    description: `${prophet.name}, ${prophet.ministryDuration} de ministère (${prophet.ministryYears}). ${prophet.keyFacts[0]?.text}`,
    openGraph: {
      title: `${prophet.name} — Bible Interactive`,
      description: `Découvrez l'histoire du prophète ${prophet.name}.`,
      type: 'article',
    },
  }
}

export default async function ProphetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const prophet = getProphetById(id)

  if (!prophet) {
    notFound()
  }

  const { prev, next } = getAdjacentProphets(id)

  return (
    <ProphetDetailClient
      prophet={prophet}
      prevProphet={prev}
      nextProphet={next}
    />
  )
}
