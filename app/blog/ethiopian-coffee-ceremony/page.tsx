import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title: "The Ethiopian Coffee Ceremony: More Than Just Coffee | Kitengela Injera Hub",
  description:
    "Discover the Ethiopian coffee ceremony, a timeless tradition of hospitality, roasting, storytelling, and connection deeply rooted in Ethiopian culture.",
  keywords:
    "Ethiopian coffee ceremony, Ethiopian coffee culture, buna ceremony, Ethiopian traditions, coffee ceremony Kitengela, Ethiopian coffee Kenya",
  openGraph: {
    title: "The Ethiopian Coffee Ceremony: More Than Just Coffee",
    description:
      "Discover the Ethiopian coffee ceremony, a timeless tradition of hospitality and connection rooted in Ethiopian culture.",
    type: "article",
    publishedTime: "2025-01-15",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function EthiopianCoffeeCeremonyBlogPost() {
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
              Culture &amp; Traditions
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              The Ethiopian Coffee Ceremony: More Than Just Coffee
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Kitengela Injera Hub
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 15, 2025
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">☕</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Coffee is woven deeply into Ethiopian identity. While many people
              around the world simply brew coffee and move on with their day,
              Ethiopia transformed coffee into a beautiful social ritual known
              as the <strong>Coffee Ceremony</strong>, or <strong>Buna</strong>.
              It is not merely about drinking coffee—it is about hospitality,
              conversation, respect, and community.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              1. The Birthplace of Coffee
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Ethiopia is widely regarded as the birthplace of coffee.
              According to legend, a goat herder named Kaldi noticed his goats
              becoming energetic after eating berries from a certain tree. That
              discovery eventually spread across the world and transformed into
              one of humanity's most beloved drinks.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Today, coffee remains deeply tied to Ethiopian culture and daily
              life, with ceremonies happening in homes, villages, and social
              gatherings.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              2. Preparing the Ceremony
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The ceremony begins with careful preparation of the environment.
              Fresh grass and flowers may be spread on the floor, creating a
              welcoming atmosphere. Incense is burned to fill the room with
              calming aromas while guests gather together.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Green coffee beans are washed before being roasted slowly over
              hot coals. The roasting process itself becomes part of the
              experience as guests enjoy the rich aroma filling the room.
            </p>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">
                Coffee is Hospitality
              </h3>

              <p className="text-sm text-muted-foreground">
                In Ethiopia, offering coffee to guests is considered a sign of
                honor and respect. Refusing participation in a ceremony can
                sometimes be viewed as declining friendship or hospitality.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              3. Roasting, Grinding & Brewing
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Once roasted, the beans are ground manually and placed into a
              traditional clay coffee pot known as a <em>Jebena</em>. Water is
              added and the coffee slowly brews over heat.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The process is intentionally slow because the ceremony is not
              designed for speed. It encourages guests to relax, share stories,
              discuss family matters, and spend meaningful time together.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              4. Three Rounds of Coffee
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The Ethiopian coffee ceremony traditionally includes three rounds:
            </p>

            <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
              <li>
                <strong>Abol:</strong> The first and strongest serving
              </li>

              <li>
                <strong>Tona:</strong> A slightly lighter second round
              </li>

              <li>
                <strong>Baraka:</strong> The final blessing round
              </li>
            </ol>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Many Ethiopians believe completing all three rounds brings
              blessings and strengthens relationships.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              Learn More About the Ceremony
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Explore these resources to dive deeper into Ethiopian coffee
              traditions:
            </p>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Coffee_ceremony_of_Ethiopia_and_Eritrea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Wikipedia: Coffee Ceremony of Ethiopia & Eritrea
                </a>
              </li>

              <li>
                <a
                  href="https://www.bunnaethiopia.net/thecoffeeceremony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Bunna Ethiopia Coffee Ceremony
                </a>
              </li>

              <li>
                <a
                  href="https://espressocoffeeguide.com/gourmet-coffee/arabian-and-african-coffees/ethiopian-coffee/ethiopian-coffee-ceremony/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Espresso Coffee Guide
                </a>
              </li>
            </ul>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">
                Experience Ethiopian Taste at Home
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                Pair fresh Ethiopian coffee with authentic injera, berbere,
                and traditional Ethiopian products delivered in Kitengela and
                Athi River.
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20order%20Ethiopian%20coffee"
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
              The Ethiopian coffee ceremony reminds us that coffee is more than
              caffeine—it is a ritual that creates connection. It brings
              families together, strengthens friendships, and transforms a
              simple drink into a memorable cultural experience.
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
                href="/blog/how-to-eat-ethiopian-food"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Culture
                </span>

                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  How to Eat Ethiopian Food: A Beginner's Guide
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