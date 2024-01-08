import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { fabulous, montserrat, roboto_mono } from './fonts/fonts'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ToasterProviders from './providers/ToasterProvider'
import AuthProvider from './context/AuthContext'

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
      {/* <head>
        <link rel='icon' href='/flower.ico'/>
      </head> */}
      <body className={`${montserrat.variable} font-main relative`}>
        <AuthProvider>
        <Navbar />
        <ToasterProviders />
        {children}
        <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
