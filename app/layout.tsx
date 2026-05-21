import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './blocks.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'YouTalk - Блог о психологии',
  description: 'Статьи о психологии, самопознании и личностном росте от профессиональных психологов',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
