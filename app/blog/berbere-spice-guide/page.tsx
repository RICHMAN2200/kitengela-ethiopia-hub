import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Berbere Spice: The Soul of Ethiopian Cooking | Kitengela Injera Hub",
  description:
    "Discover Berbere spice, the fiery heart of Ethiopian cuisine. Learn its ingredients, history, uses, and where to order authentic Berbere in Kitengela.",
  keywords:
    "Berbere spice, Ethiopian spices, Ethiopian cooking, Berbere Kitengela, Ethiopian ingredients, authentic Berbere Kenya",
  openGraph: {
    title: "Berbere Spice: The Soul of Ethiopian Cooking",
    description:
      "Discover Berbere spice, the fiery heart of Ethiopian cuisine.",
    type: "article",
    publishedTime: "2025-01-05",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function BerbereSpiceBlogPost() {
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
              Ingredients &amp; Spices
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Berbere Spice: The Soul of Ethiopian Cooking
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Kitengela Injera Hub
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 5, 2025
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6 min read
              </span>
            </div>
          </header>

          {/* Featured image */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🌶️</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If you have ever tasted authentic Ethiopian dishes like rich
              Doro Wot or aromatic Shiro, then you have already experienced
              the unmistakable power of <strong>Berbere</strong>. More than
              just a spice blend, Berbere is the fiery heart and soul of
              Ethiopian cooking.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              1. What is Berbere?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Berbere is a complex Ethiopian spice mixture known for its
              vibrant red color and bold flavor profile. Traditional recipes
              are often family secrets passed down through generations,
              creating subtle variations across regions and households.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              2. Ingredients Behind the Flavor
            </h2>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li><strong>Chili peppers:</strong> Heat and color foundation</li>
              <li><strong>Garlic & Ginger:</strong> Savory depth</li>
              <li><strong>Korarima:</strong> Ethiopian cardamom aroma</li>
              <li><strong>Fenugreek:</strong> Nutty bitterness</li>
              <li><strong>Clove & Cinnamon:</strong> Warm sweetness</li>
              <li><strong>Ajwain:</strong> Herbal complexity</li>
            </ul>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">
                The Secret is in the Roast
              </h3>

              <p className="text-sm text-muted-foreground">
                Traditional Ethiopian kitchens lightly toast spices before
                grinding them. This releases aromatic oils and creates the
                deep flavor Berbere is famous for.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              3. Ways to Use Berbere
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
              <li>Use it as a base for Ethiopian stews</li>
              <li>Rub it onto grilled chicken or fish</li>
              <li>Add to soups and eggs</li>
              <li>Sprinkle lightly over fresh injera</li>
            </ol>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              4. Why Authenticity Matters
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Quality Berbere should be fresh, aromatic, layered, and complex.
              It should tell a story beyond simple heat.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Learn more:
              <a
                href="https://www.rootsethiopia.org/news/blog-posts/spice-up-your-life-with-berbere-the-spice-blend-at-the-heart-of-ethiopian-cooking.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline ml-2"
              >
                Roots Ethiopia Guide
              </a>
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">
                Get Authentic Berbere Delivered
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                Order authentic Berbere, Shiro and fresh injera in Kitengela
                and Athi River.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20order%20Berbere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  Order on WhatsApp
                </a>

                <a
                  href="tel:0719377666"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-4 py-2 rounded-lg text-sm font-semibold border"
                >
                  Call 0719 377 666
                </a>

                <a
                  href="tel:0720096575"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-4 py-2 rounded-lg text-sm font-semibold border"
                >
                  Call 0720 096 575
                </a>
              </div>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Conclusion
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Berbere connects history, culture, hospitality and unforgettable
              flavor. It is one of Ethiopia's greatest culinary treasures.
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
            <h3 className="font-serif text-xl font-bold mb-6">
              Related Articles
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">

              <Link
                href="/blog/how-to-eat-ethiopian-food"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43]"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Culture
                </span>

                <h4 className="font-semibold mt-1 group-hover:text-primary">
                  How to Eat Ethiopian Food: A Beginner's Guide
                </h4>
              </Link>

              <Link
                href="/blog/what-is-injera-ethiopian-flatbread"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43]"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Ethiopian Cuisine
                </span>

                <h4 className="font-semibold mt-1 group-hover:text-primary">
                  What is Injera? Complete Guide
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