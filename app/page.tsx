import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <SecondaryFeatures />
        <CallToAction />
        <Contact />
        {/* <Pricing /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
