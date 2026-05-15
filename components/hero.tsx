import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export function Hero() {
  const stats = [
    { number: "3+", label: "Years Trusted" },
    { number: "200+", label: "Weekly Injera" },
    { number: "30-60", label: "Min Delivery" },
    { number: "5PM", label: "Same-Day Cutoff" },
  ]

  const benefits = [
    "Fresh homemade injera daily",
    "No traveling to Nairobi",
    "Same-day delivery available",
    "Flexible order sizes",
  ]

  return (
    <section className="relative py-12 md:py-20 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2A5A44] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1">
            <span className="inline-block bg-[#2A5A44]/10 text-[#2A5A44] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Chuna Estate, New Valley, Kitengela
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Fresh Homemade{" "}
              <span className="text-primary">Injera</span>{" "}
              Delivered Across Kitengela
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-xl leading-relaxed">
              Authentic Ethiopian products without traveling to Nairobi. Fresh injera, Ethiopian coffee, berbere spices, shiro, and traditional products delivered across Kitengela and Athi River.
            </p>

            {/* Benefits */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-[#2A5A44] flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20order%20fresh%20injera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25"
              >
                Order on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:0719377666"
                className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3.5 rounded-lg text-base font-semibold border-2 border-[#C98D43] hover:bg-[#C98D43]/10 transition-colors"
              >
                Call to Order
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl border border-border p-4 text-center shadow-sm"
                >
                  <div className="font-serif text-2xl md:text-3xl font-bold text-[#C98D43]">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Hero Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#C98D43]/30">
                <Image
                  src="/images/injera-header-dark.png"
                  alt="Traditional Ethiopian Injera Platter with colorful stews and vegetables - Kitengela Injera Hub"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-3 rounded-xl shadow-lg">
                <span className="block text-xs font-medium opacity-90">Fresh Daily</span>
                <strong className="text-sm font-bold">Order Before 5PM</strong>
              </div>
              {/* Logo badge */}
              <div className="absolute -top-6 -left-6 bg-white rounded-full p-2 shadow-xl border-2 border-[#C98D43]">
                <Image
                  src="/images/logo.png"
                  alt="Kitengela Injera Hub Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#2A5A44]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
