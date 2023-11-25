import Image from 'next/image'
import AboutSection from './components/about/AboutSection'
import Prestations from './components/prestations/Prestations'
import Contact from './components/contact/Contact'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {

  return (
    <>
      <AboutSection />
      <Prestations />
      <Contact />
    </>
  )
}
