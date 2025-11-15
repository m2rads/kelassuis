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
    template: '%s - TaxPal',
    default: 'TaxPal - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
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
