import Image from 'next/image'
import AboutSection from './components/about/AboutSection'
import Prestations from './components/prestations/Prestations'

export default function Home() {
  return (
    <>
      <AboutSection />
      <Prestations />
    </>
  )
}
