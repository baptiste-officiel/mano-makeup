import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { fabulous, montserrat, roboto_mono } from './fonts/fonts'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

// const inter = Inter({ subsets: ['latin'], variable: '--font-test' })

export const metadata: Metadata = {
  title: 'Manon Verdier Makeup Artist',
  description: 'Maquilleuse lilloise professionnelle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} font-main`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
