import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Sudanese Food in Kitengela: Traditional Sudanese Meals & East African Flavors | Kitengela Injera Hub",
  description:
    "Looking for Sudanese food in Kitengela? Discover traditional Sudanese meals, East African flavors, fresh injera, spices, and authentic African food experiences at Kitengela Injera Hub.",
  keywords:
    "Sudanese food Kitengela, Sudanese cuisine Kenya, African food Kitengela, Sudanese meals, Ethiopian and Sudanese food, East African cuisine Kitengela, Sudanese recipes",
  openGraph: {
    title:
      "Sudanese Food in Kitengela | Traditional Sudanese & East African Cuisine",
    description:
      "Explore traditional Sudanese cuisine, East African flavors, fresh injera, spices and authentic African food culture in Kitengela.",
    type: "article",
    publishedTime: "2025-01-30",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function SudaneseFoodKitengelaBlogPost() {
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
              African Cuisine &amp; Local Guide
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Sudanese Food in Kitengela: Discover Rich East African Flavors
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">

              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Kitengela Injera Hub
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 30, 2025
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                7 min read
              </span>

            </div>
          </header>

          {/* Featured */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🇸🇩🍲</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Sudanese cuisine is one of Africa&apos;s hidden culinary gems.
              Rich in spices, grilled meats, stews, beans, fresh bread and
              deeply rooted hospitality, Sudanese food combines North African,
              East African and Middle Eastern influences into something truly
              unique.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In Kitengela, more people are searching for authentic African food
              experiences that feel homemade, comforting and culturally rich.
              At <strong>Kitengela Injera Hub</strong>, we celebrate the
              flavors and traditions that connect East African communities —
              from Ethiopian injera and Berbere to the warm, flavorful spirit
              found throughout Sudanese cuisine.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              1. What Makes Sudanese Cuisine Special?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sudanese food is known for hearty meals, slow-cooked dishes and
              generous hospitality. Meals often bring families and friends
              together around shared platters, similar to many Ethiopian dining
              traditions.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Traditional Sudanese cuisine includes dishes built around sorghum,
              beans, meat stews, grilled kebabs, fresh salads and aromatic
              spices. If you want to explore some of the most loved dishes in
              Sudan, browse this collection of{" "}
              <a
                href="https://www.tasteatlas.com/best-rated-dishes-in-sudan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                top-rated Sudanese foods on TasteAtlas
              </a>.
            </p>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">

              <h3 className="font-semibold text-foreground mb-2">
                East African Food Culture
              </h3>

              <p className="text-sm text-muted-foreground">
                Across Sudan, Ethiopia and Eritrea, food is more than a meal —
                it is hospitality, community and tradition shared around one
                table.
              </p>

            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              2. Similarities Between Sudanese & Ethiopian Food
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sudanese and Ethiopian cuisines share many cultural and regional
              influences. Both cuisines value communal eating, spice-rich
              cooking and traditional preparation methods passed down through
              generations.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Foods like stews, lentils, beans and fermented breads create a
              familiar experience for many East African families living in
              Kenya. Injera especially connects deeply with communities across
              the Horn of Africa.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              You can learn more about the history and diversity of Sudanese
              cuisine through{" "}
              <a
                href="https://en.wikipedia.org/wiki/Sudanese_cuisine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                this overview of Sudanese cuisine
              </a>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              3. Traditional Sudanese Meals Worth Exploring
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sudanese cuisine offers a wide variety of flavorful everyday
              meals. Popular dishes often include rich meat broths, bean-based
              meals, grilled lamb, peanut sauces and traditional breads served
              with tea or coffee.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              For authentic inspiration and home-style cooking ideas, explore
              these{" "}
              <a
                href="https://tasteofsouthsudan.com/category/recipes/everyday-meals/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                South Sudan everyday meal recipes
              </a>.
            </p>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>Bean and lentil-based comfort meals</li>
              <li>Slow-cooked meat dishes and broths</li>
              <li>Fresh breads and fermented staples</li>
              <li>Tea and coffee-centered hospitality culture</li>
              <li>Family-style communal dining experiences</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              4. African Food Communities in Kitengela
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Kitengela continues growing into a diverse community where people
              from different African countries live, work and study together.
              This creates demand for authentic home-style foods that remind
              people of family, culture and tradition.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              At Kitengela Injera Hub, we proudly serve customers looking for
              authentic East African flavors including fresh injera, Berbere,
              Shiro and Ethiopian products made with care and traditional
              preparation methods.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">

              <h3 className="font-semibold text-foreground mb-2">
                Looking for Authentic East African Food?
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                Order fresh injera, Ethiopian spices and traditional East
                African food products delivered around Kitengela and Athi River.
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20order%20East%20African%20food"
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
              Sudanese cuisine represents warmth, tradition and the beauty of
              African hospitality. As Kitengela continues becoming home to
              diverse East African communities, authentic cultural foods are
              becoming more important than ever.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you are Sudanese, Ethiopian, Kenyan or simply someone who
              loves discovering African cuisine, Kitengela Injera Hub welcomes
              you to experience flavors that bring people together.
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
                href="/blog/ethiopian-food-kitengela"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Local Guide
                </span>

                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  Ethiopian Food in Kitengela: Where to Find Fresh Injera
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