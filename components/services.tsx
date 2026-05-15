import { ArrowRight, Circle, Coffee, Package, Truck, UtensilsCrossed, Users, Flame, Wheat } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Circle,
    title: "Fresh Homemade Injera",
    description: "Prepared daily using traditional fermentation. Soft, sour, and perfectly authentic for family meals and group orders.",
    color: "bg-primary",
  },
  {
    icon: Flame,
    title: "Berbere Chili Spice",
    description: "Hand-blended Ethiopian berbere spice. The essential soul of authentic Ethiopian cuisine.",
    color: "bg-[#C98D43]",
  },
  {
    icon: Coffee,
    title: "Ethiopian Coffee",
    description: "Premium beans from Yirgacheffe, Sidamo, and Harrar. Experience coffee from its birthplace.",
    color: "bg-[#2A5A44]",
  },
  {
    icon: Wheat,
    title: "Shiro & Pulses",
    description: "Chickpea and broad bean powders for authentic Ethiopian stews like shiro wot.",
    color: "bg-[#C98D43]",
  },
  {
    icon: Package,
    title: "Traditional Ingredients",
    description: "Niter kibbeh (spiced butter), korerima, and other essential Ethiopian cooking ingredients.",
    color: "bg-primary",
  },
  {
    icon: Truck,
    title: "Fast Local Delivery",
    description: "30-60 minute delivery across Kitengela and Athi River. Order before 5PM for same-day.",
    color: "bg-[#2A5A44]",
  },
  {
    icon: UtensilsCrossed,
    title: "Event Catering",
    description: "Corporate events, weddings, and parties. Bring authentic Ethiopian cuisine to your gathering.",
    color: "bg-[#C98D43]",
  },
  {
    icon: Users,
    title: "Wholesale Supply",
    description: "Bulk supply for restaurants and businesses. Consistent quality with reliable delivery.",
    color: "bg-primary",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Local Ethiopian Food Hub
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From fresh daily injera to premium Ethiopian spices and catering services. Everything you need for authentic Ethiopian cuisine in Kitengela.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background border border-border rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-[#C98D43] transition-all duration-300"
            >
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Products & Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
