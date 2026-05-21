import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Health Benefits of Teff: Ethiopia's Ancient Superfood | Kitengela Injera Hub",
  description:
    "Discover the incredible health benefits of teff, Ethiopia's ancient grain packed with protein, iron, fiber and nutrients used to make authentic injera.",
  keywords:
    "health benefits of teff, Ethiopian superfood, teff nutrition, teff flour benefits, teff grain Kenya, healthy injera",
  openGraph: {
    title: "Health Benefits of Teff: Ethiopia's Ancient Superfood",
    description:
      "Explore why teff is considered one of the world's most powerful ancient grains.",
    type: "article",
    publishedTime: "2025-01-22",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function HealthBenefitsTeffBlogPost() {
  return (
    <main>
      <Header />

      <article className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-xs font-medium mb-4">
              Health &amp; Nutrition
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Health Benefits of Teff: Ethiopia&apos;s Ancient Superfood
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Kitengela Injera Hub
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 22, 2025
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6 min read
              </span>
            </div>
          </header>

          {/* Featured image */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🌾</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Tiny grain. Massive nutrition. For thousands of years,
              <strong> teff </strong>
              has quietly powered generations of Ethiopians, serving as the
              foundation for one of Africa&apos;s most iconic foods: Injera.
              While the grain itself is small enough to fit on your fingertip,
              its nutritional value is remarkably powerful.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Today, teff is gaining global attention as athletes,
              nutritionists, health-conscious families and researchers continue
              discovering why Ethiopia&apos;s ancient grain deserves the title
              of a modern superfood.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              1. Naturally Rich in Protein & Essential Nutrients
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Teff contains protein, iron, magnesium, calcium, fiber and
              complex carbohydrates. Unlike heavily processed grains, teff
              retains much of its nutritional profile because the entire seed
              is consumed.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              According to{" "}
              <a
                href="https://www.webmd.com/diet/benefits-of-teff-flour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                WebMD's guide to teff benefits
              </a>
              , teff flour may support healthy digestion and provide important
              nutrients needed for everyday health.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              2. A Grain Packed with Iron
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              One of teff&apos;s standout qualities is its naturally occurring
              iron content. Iron plays a critical role in transporting oxygen
              throughout the body and supporting energy production.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Many people discover teff while searching for foods that can fit
              into nutrient-dense diets without relying entirely on supplements.
            </p>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">
                Tiny Grain Fact
              </h3>

              <p className="text-sm text-muted-foreground">
                A single grain of teff is extremely small—roughly the size of a
                poppy seed. Yet despite its tiny appearance, it delivers a
                nutritional profile that rivals many larger grains.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              3. Teff is Naturally Gluten-Free
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Teff is naturally gluten-free, making it a popular option for
              people exploring alternatives to wheat-based foods. This has
              contributed significantly to teff's rise in international markets.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Learn more nutritional details from{" "}
              <a
                href="https://teffco.com/pages/teff-benefits?srsltid=AfmBOooYjKYJM0k0PEFaRd1obKl1HvxxGkwSFUgMDxJ5TR11cpuboTYD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Teff Company's Teff Benefits Resource
              </a>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              4. The Grain Helping Scientists Look Toward the Future
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Teff is not only interesting because of nutrition. Scientists are
              increasingly studying it because of its resilience and importance
              in changing climates.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Researchers at{" "}
              <a
                href="https://alliancebioversityciat.org/stories/scientists-unlock-secrets-ethiopias-superfood-race-warming-climate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Alliance Bioversity CIAT
              </a>{" "}
              are exploring how teff may contribute to future food systems as
              global climates continue evolving.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              5. Why Teff Matters in Ethiopian Cuisine
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Teff isn't simply a grain in Ethiopia—it is part of cultural
              identity. It becomes injera, the soft fermented flatbread that
              sits at the center of family meals and celebrations.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The fermentation process used to create authentic injera may also
              contribute additional nutritional and digestive benefits.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">

              <h3 className="font-semibold text-foreground mb-2">
                Taste Ethiopia's Superfood
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                Experience authentic teff-based injera, Berbere, Shiro and
                traditional Ethiopian products delivered in Kitengela and Athi
                River.
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20order%20fresh%20injera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Order on WhatsApp
                </a>

                <a
                  href="tel:0719377666"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-4 py-2 rounded-lg text-sm font-semibold border border-border hover:border-primary transition-colors"
                >
                  Call 0719 377 666
                </a>

                <a
                  href="tel:0720096575"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-4 py-2 rounded-lg text-sm font-semibold border border-border hover:border-primary transition-colors"
                >
                  Call 0720 096 575
                </a>

              </div>

            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Conclusion
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Teff proves that extraordinary things can come in tiny packages.
              From ancient Ethiopian farms to modern kitchens around the world,
              this remarkable grain continues earning its reputation as one of
              nature&apos;s most impressive superfoods.
            </p>

          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Share this article
              </span>

              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">
              Related Articles
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">

              <Link
                href="/blog/what-is-injera-ethiopian-flatbread"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Ethiopian Cuisine
                </span>

                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  What is Injera? The Complete Guide
                </h4>
              </Link>

              <Link
                href="/blog/shiro-wot-recipe"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Recipes
                </span>

                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  How to Make Shiro Wot: Ethiopia's Comfort Food
                </h4>
              </Link>

            </div>
          </div>

        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}