import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Test Reporter - AI-Powered Test Reporting & Insights Platform',
  description: 'Visualize automation results, detect flaky tests, measure coverage, and track ROI — all in one dashboard. Transform your testing workflow with AI-powered insights.',
  keywords: 'test reporting, AI testing, automation testing, test analytics, test coverage, QA tools, Playwright, Selenium, testing dashboard',
  authors: [{ name: 'AI Test Reporter Team' }],
  openGraph: {
    title: 'AI Test Reporter - AI-Powered Test Reporting & Insights Platform',
    description: 'Visualize automation results, detect flaky tests, measure coverage, and track ROI — all in one dashboard.',
    url: 'https://aitestreporter.com',
    siteName: 'AI Test Reporter',
    images: [
      {
        url: 'https://aitestreporter.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Test Reporter Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Test Reporter - AI-Powered Test Reporting',
    description: 'Transform your testing workflow with AI-powered insights. Visualize automation results, detect flaky tests, and track ROI.',
    images: ['https://aitestreporter.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}