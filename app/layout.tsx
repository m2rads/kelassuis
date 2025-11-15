import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

import '@/styles/tailwind.css'

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: 'Kelussia - %s',
    default: 'Kelussia - Rarity Reimagined. The Story Lives in Blue.',
  },
  description:
    'Kelussia presents Persian Blue Salt—hand-mined, naturally vibrant, and culinary rare. We partner with professional kitchens and gourmet brands to deliver extraordinary ingredients with unmatched provenance and visual impact.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        `h-full scroll-smooth bg-black antialiased`,
        geistMono.variable,
      )}
    >
      <body className={`${geistMono.variable} antialiased flex h-full flex-col`}>{children}</body>
    </html>
  )
}
