import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Personal Resume Portfolio | Next.js Template',
  description: 'Modern resume and portfolio template built with Next.js and Tailwind CSS.',
  keywords: 'resume, portfolio, nextjs, tailwind, personal site, template, developer portfolio',
  authors: [{ name: 'Your Name' }],
  
  icons: {
     icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
  
  openGraph: {
    title: 'Personal Resume Portfolio',
    description: 'A modern resume and portfolio template built with Next.js.',
    type: 'website',
    locale: 'en_US',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
