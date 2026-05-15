import Image from "next/image"

const products = [
  {
    title: "Fresh Homemade Injera",
    subtitle: "Prepared Daily",
    description: "Naturally fermented teff injera, soft and sour",
    image: "/images/injera-platter.jpg",
  },
  {
    title: "Doro Wat",
    subtitle: "Signature Dish",
    description: "Traditional Ethiopian chicken stew with berbere",
    image: "/images/doro-wat-1.png",
  },
  {
    title: "Ethiopian Coffee",
    subtitle: "Premium Beans",
    description: "Yirgacheffe, Sidamo & Harrar varieties",
    image: "/images/coffee.png",
  },
  {
    title: "Traditional Platter",
    subtitle: "Full Experience",
    description: "Complete Ethiopian feast with assorted sides",
    image: "/images/gallery-2.jpg",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-[#4A2810] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C98D43]/20 text-[#C98D43] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            Our Products
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Premium Ethiopian Products
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Authentic Ethiopian ingredients sourced with care and delivered fresh to your doorstep in Kitengela.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:-translate-y-1 hover:bg-white/10 hover:border-[#C98D43]/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2810]/60 to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-[#C98D43] font-medium mb-2">
                  {product.subtitle}
                </p>
                <p className="text-xs text-white/60">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20know%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C98D43] text-[#4A2810] px-6 py-3 rounded-lg font-semibold hover:bg-[#C98D43]/90 transition-colors"
          >
            Order Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
