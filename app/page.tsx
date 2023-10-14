import Image from 'next/image'
import AboutSection from './components/about/AboutSection'
import Prestations from './components/prestations/Prestations'
import Contact from './components/contact/Contact'

export default function Home() {
  return (
    <>
      <AboutSection />
      <Prestations />
      <Contact />
    </>
  )
}
