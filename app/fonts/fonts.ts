import { Caprasimo, Inter, Montserrat, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-test'
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-robot'
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-main'
})

export const caprasimo = Caprasimo({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-subtitle'
})

export const fabulous = localFont({
    src: [
      {
        path: './fabulous_party/OpenType-TT/fabulous_party.ttf',
      },
      {
        path: './fabulous_party/Web-TT/Fabulous Party.woff',
      },
      {
        path: './fabulous_party/Web-TT/Fabulous Party.woff2',
      },
    //   {
    //     path: './Roboto-BoldItalic.woff2',
    //     weight: '700',
    //     style: 'italic',
    //   },
    ],
    variable: '--font-title'
  })