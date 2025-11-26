import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Kaylin Co. - Bringing Dreams to Life',
  description: 'Creative agency specializing in web development and design. We transform visions into digital reality.',
  keywords: 'creative agency, web development, design, silicon valley, react, next.js',
  authors: [{ name: 'Kaylin Co.' }],
  openGraph: {
    title: 'Kaylin Co. - Bringing Dreams to Life',
    description: 'Creative agency specializing in web development and design.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="bg-black text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}