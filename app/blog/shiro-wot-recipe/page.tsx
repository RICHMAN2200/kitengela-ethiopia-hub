import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Make Shiro Wot: Ethiopia's Comfort Food | Kitengela Injera Hub",
  description:
    "Learn how to make traditional Ethiopian Shiro Wot, a rich and flavorful chickpea stew made with Berbere and authentic Ethiopian spices.",
  keywords:
    "Shiro Wot recipe, Ethiopian Shiro, Ethiopian chickpea stew, how to make Shiro, Ethiopian food Kitengela, Shiro powder Kenya",
  openGraph: {
    title: "How to Make Shiro Wot: Ethiopia's Comfort Food",
    description:
      "Learn how to prepare traditional Ethiopian Shiro Wot at home with authentic ingredients and flavors.",
    type: "article",
    publishedTime: "2025-01-18",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function ShiroWotBlogPost() {
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
              Recipes &amp; Cooking
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              How to Make Shiro Wot: Ethiopia&apos;s Comfort Food
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Kitengela Injera Hub
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 18, 2025
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
            </div>
          </header>

          {/* Featured image */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🥣</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Few Ethiopian dishes bring comfort the way{" "}
              <strong>Shiro Wot</strong> does. Rich, creamy, aromatic, and
              packed with flavor, this chickpea-based stew is a staple in many
              Ethiopian homes. It is affordable, nutritious, and deeply rooted
              in tradition.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Traditionally served over fresh injera, Shiro Wot is especially
              popular during fasting seasons because it contains no meat while
              still delivering a satisfying and hearty meal.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              1. What is Shiro?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Shiro is a finely ground powder made primarily from chickpeas or
              broad beans blended with garlic, onions, Berbere, and Ethiopian
              spices. When cooked with water, onions, and oil, it transforms
              into a smooth stew known as Shiro Wot.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              2. Ingredients You'll Need
            </h2>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>Shiro powder</li>
              <li>Finely chopped onions</li>
              <li>Garlic</li>
              <li>Berbere spice</li>
              <li>Cooking oil or niter kibbeh</li>
              <li>Warm water</li>
              <li>Salt to taste</li>
            </ul>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">
                Traditional Tip
              </h3>

              <p className="text-sm text-muted-foreground">
                Ethiopian cooks often simmer onions slowly before adding other
                ingredients. This creates a naturally rich base and deeper
                flavor profile.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              3. How to Cook Shiro Wot
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">

              <li>
                Slowly cook onions until soft and fragrant.
              </li>

              <li>
                Add garlic and Berbere spice.
              </li>

              <li>
                Add oil or niter kibbeh.
              </li>

              <li>
                Gradually stir in water.
              </li>

              <li>
                Add Shiro powder while stirring continuously.
              </li>

              <li>
                Simmer until thick, smooth and creamy.
              </li>

            </ol>

            <p className="text-muted-foreground leading-relaxed mb-6">
              If you want a detailed recipe walkthrough with ingredient
              quantities and preparation tips, check out{" "}
              <a
                href="https://holycowvegan.net/ethiopian-shiro-wot-ground-chickpea-stew/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Holy Cow Vegan's Ethiopian Shiro Wot Guide
              </a>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              4. Serving Shiro the Ethiopian Way
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Shiro Wot is traditionally poured directly over fresh injera.
              Extra rolled injera is served on the side for scooping and
              sharing. Some families garnish it with green chili peppers,
              tomatoes, or extra spiced butter.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">

              <h3 className="font-semibold text-foreground mb-2">
                Order Authentic Shiro Ingredients
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                Looking for authentic Ethiopian Shiro powder, Berbere, and
                fresh injera in Kitengela? We can help.
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20order%20Shiro%20powder"
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
              Shiro Wot proves that simple ingredients can create extraordinary
              flavors. Whether you are preparing it during fasting seasons or
              making it as a comforting everyday meal, this classic Ethiopian
              dish brings warmth and tradition to every table.
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
                href="/blog/berbere-spice-guide"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Ingredients
                </span>

                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  Berbere Spice: The Soul of Ethiopian Cooking
                </h4>
              </Link>

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

            </div>
          </div>

        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}