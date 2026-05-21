import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Doro Wat: Ethiopia's Famous Spicy Chicken Stew | Kitengela Injera Hub",
  description:
    "Discover Doro Wat, Ethiopia's legendary spicy chicken stew made with Berbere, slow-cooked onions and rich flavors traditionally served with fresh injera.",
  keywords:
    "Doro Wat, Ethiopian chicken stew, spicy Ethiopian food, Doro Wat recipe, Ethiopian cuisine, Berbere chicken stew, Kitengela Ethiopian food",
  openGraph: {
    title:
      "Doro Wat: Ethiopia's Famous Spicy Chicken Stew",
    description:
      "Explore Ethiopia's iconic chicken stew packed with spice, culture and unforgettable flavor.",
    type: "article",
    publishedTime: "2025-01-27",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function DoroWatBlogPost() {
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
              Ethiopian Cuisine &amp; Traditional Food
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Doro Wat: Ethiopia&apos;s Famous Spicy Chicken Stew
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">

              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Kitengela Injera Hub
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 27, 2025
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6 min read
              </span>

            </div>
          </header>

          {/* Featured */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🍗🔥</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Few dishes represent Ethiopian cuisine better than{" "}
              <strong>Doro Wat</strong>. Rich, deeply spiced, slow-cooked and
              incredibly flavorful, this legendary chicken stew is considered
              one of Ethiopia&apos;s national treasures.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Doro Wat is not ordinary chicken stew. It combines tender chicken,
              powerful Berbere spices, slow-cooked onions and aromatic
              ingredients into a bold dish that carries generations of history,
              celebration and family tradition.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              1. What Makes Doro Wat Special?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Doro Wat often appears during holidays, celebrations and family
              gatherings across Ethiopia. It is a dish that takes time and
              patience. Traditional preparation may involve slowly cooking
              onions for an extended period before introducing spices and meat.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike quick recipes designed for speed, Doro Wat rewards patience
              with deep layers of flavor that become richer with time.
            </p>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">

              <h3 className="font-semibold text-foreground mb-2">
                Ethiopian Food Fact
              </h3>

              <p className="text-sm text-muted-foreground">
                Traditional Doro Wat commonly includes boiled eggs placed into
                the stew near the end of cooking. The eggs absorb the spicy
                sauce and become one of the most anticipated parts of the meal.
              </p>

            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              2. Key Ingredients Behind the Flavor
            </h2>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>Chicken pieces</li>
              <li>Berbere spice blend</li>
              <li>Large quantities of onions</li>
              <li>Garlic and ginger</li>
              <li>Niter Kibbeh (spiced Ethiopian butter)</li>
              <li>Hard-boiled eggs</li>
              <li>Traditional Ethiopian seasonings</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The star ingredient is often <strong>Berbere</strong>, Ethiopia's
              famous spice blend that gives Doro Wat its distinctive color,
              aroma and heat.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              3. Slow Cooking Creates the Magic
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The secret behind authentic Doro Wat is patience. Traditional
              cooks often begin with onions alone, allowing them to slowly
              soften and develop sweetness before introducing oil, spices and
              chicken.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Want a more detailed cooking process? Explore{" "}
              <a
                href="https://www.daringgourmet.com/doro-wat-spicy-ethiopian-chicken-stew/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Daring Gourmet&apos;s Doro Wat recipe guide
              </a>{" "}
              for ingredients and preparation techniques.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              4. How Ethiopians Traditionally Serve Doro Wat
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Doro Wat is traditionally served over a large round injera placed
              on a communal platter. Extra rolls of fresh injera are provided
              on the side for scooping and sharing.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Meals become social experiences. Friends and family gather around
              the platter, eat together and enjoy conversation while sharing
              food.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              For another perspective on preparation methods and ingredients,
              check out{" "}
              <a
                href="https://www.diversivore.com/doro-wat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Diversivore&apos;s Doro Wat guide
              </a>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              5. Why Doro Wat Matters Beyond Food
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Doro Wat is more than a recipe. It reflects Ethiopian hospitality,
              celebration and family culture. It often appears during Easter,
              Christmas, weddings and important gatherings because preparing it
              communicates care and generosity.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Across Ethiopia and beyond, people continue passing recipes from
              one generation to another, preserving a dish that carries deep
              cultural meaning.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">

              <h3 className="font-semibold text-foreground mb-2">
                Experience Authentic Ethiopian Flavor
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                Looking for fresh injera, Berbere spice, Ethiopian ingredients
                or authentic flavors in Kitengela? We deliver across Kitengela
                and nearby areas.
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20order%20Ethiopian%20food"
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
              Doro Wat remains one of Ethiopia&apos;s most iconic dishes for a
              reason. Rich flavors, tradition and shared experiences come
              together in one unforgettable meal. Pair it with fresh injera and
              you have one of East Africa&apos;s greatest culinary experiences.
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

          {/* Related */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">
              Related Articles
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">

              <Link
                href="/blog/shiro-wot-recipe"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Recipes
                </span>

                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  How to Make Shiro Wot: Ethiopia&apos;s Comfort Food
                </h4>
              </Link>

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

            </div>
          </div>

        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}