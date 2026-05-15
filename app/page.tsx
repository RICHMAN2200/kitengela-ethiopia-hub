import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Gallery } from "@/components/gallery"
import { Process } from "@/components/process"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Products />
      <Gallery />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
