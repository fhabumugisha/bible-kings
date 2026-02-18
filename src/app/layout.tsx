import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const cinzel = Cinzel({
  variable: "--font-cinzel-var",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bible-kings.vercel.app'),
  title: "Rois d'Israël et de Juda — Collection Interactive",
  description:
    "Découvrez les 43 rois d'Israël et de Juda à travers des cartes 3D interactives et des quiz gamifiés. Une expérience éducative et ludique.",
  openGraph: {
    title: "Rois d'Israël et de Juda — Collection Interactive",
    description:
      "Découvrez les 43 rois bibliques à travers des cartes 3D interactives et des quiz gamifiés.",
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Les rois d'Israël et de Juda — cartes interactives",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rois d'Israël et de Juda — Collection Interactive",
    description:
      "Découvrez les 43 rois bibliques à travers des cartes 3D interactives et des quiz gamifiés.",
    images: ['/images/og-image.jpg'],
  },
  other: {
    'theme-color': '#3d2e1e',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cinzel.variable} ${inter.variable} bg-parchment-50 text-parchment-900 font-inter antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
