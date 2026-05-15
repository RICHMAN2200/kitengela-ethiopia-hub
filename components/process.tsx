import { Phone, Clock, Truck } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Phone,
    title: "Order",
    description: "Contact us via WhatsApp or phone call. Tell us what you need and your delivery location.",
    color: "bg-primary",
  },
  {
    number: 2,
    icon: Clock,
    title: "We Prepare",
    description: "Your order is prepared fresh using traditional methods. Quality and authenticity guaranteed.",
    color: "bg-[#C98D43]",
  },
  {
    number: 3,
    icon: Truck,
    title: "Fast Delivery",
    description: "Same-day delivery within 30-60 minutes to Kitengela and Athi River. Order before 5PM.",
    color: "bg-[#2A5A44]",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#2A5A44]/10 text-[#2A5A44] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Order Fresh Injera in 3 Simple Steps
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting authentic Ethiopian food in Kitengela has never been easier. Here&apos;s how our service works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-card border border-border rounded-xl p-8 text-center shadow-sm"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
              
              <div className={`mx-auto w-14 h-14 ${step.color} text-white rounded-full flex items-center justify-center mb-4`}>
                <step.icon className="w-6 h-6" />
              </div>
              <span className="inline-block bg-[#C98D43]/10 text-[#C98D43] px-3 py-1 rounded-full text-xs font-bold mb-3">
                Step {step.number}
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-serif font-bold text-[#C98D43]">30-60</div>
              <div className="text-sm text-muted-foreground">Minutes Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#C98D43]">5PM</div>
              <div className="text-sm text-muted-foreground">Same-Day Cutoff</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#C98D43]">3+</div>
              <div className="text-sm text-muted-foreground">Years Trusted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
