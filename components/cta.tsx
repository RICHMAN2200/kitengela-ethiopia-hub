import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#B24F3F] to-[#8B3A2F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
          Order Now
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
          Ready to Taste Authentic Ethiopia?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
          Fresh homemade injera and traditional Ethiopian products delivered to your doorstep in Kitengela and Athi River. Order before 5PM for same-day delivery.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20order%20fresh%20injera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#B24F3F] px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/90 hover:-translate-y-0.5 transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </Link>
          <Link
            href="tel:0719377666"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call 0719 377 666
          </Link>
        </div>
        <p className="mt-8 text-sm text-white/70">
          Chuna Estate, New Valley, Kitengela | Open 7AM - 8PM Daily
        </p>
      </div>
    </section>
  )
}
