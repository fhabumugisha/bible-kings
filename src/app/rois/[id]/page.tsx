import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { KINGS, getKingById, getAdjacentKings } from '@/data/kings'
import KingDetailClient from '@/components/KingDetailClient'

export const dynamicParams = false

export async function generateStaticParams() {
  return KINGS.map((king) => ({
    id: king.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const king = getKingById(id)

  if (!king) return { title: 'Roi introuvable' }

  const eraLabel =
    king.kingdom === 'united'
      ? 'Monarchie Unie'
      : king.kingdom === 'israel'
        ? 'Royaume du Nord'
        : 'Royaume du Sud'

  return {
    title: `${king.name} — ${eraLabel} | Rois d'Israël`,
    description: `${king.name}, ${king.reignDuration} de règne (${king.reignYears}). ${king.keyFacts[0]?.text}`,
    openGraph: {
      title: `${king.name} — Rois d'Israël`,
      description: `Découvrez l'histoire de ${king.name}, roi ${eraLabel === 'Monarchie Unie' ? "d'Israël unifié" : eraLabel === 'Royaume du Nord' ? "d'Israël" : 'de Juda'}.`,
      type: 'article',
    },
  }
}

export default async function KingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const king = getKingById(id)

  if (!king) {
    notFound()
  }

  const { prev, next } = getAdjacentKings(id)

  return <KingDetailClient king={king} prevKing={prev} nextKing={next} />
}
