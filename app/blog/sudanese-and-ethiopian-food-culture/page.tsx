import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Sudanese and Ethiopian Food Culture: A Shared East African Culinary Heritage | Kitengela Injera Hub",
  description:
    "Explore the deep cultural connection between Sudanese and Ethiopian food traditions, from injera and kisra to shared spices, stews, and East African hospitality.",
  keywords:
    "Sudanese and Ethiopian food culture, injera vs kisra, East African cuisine, Ethiopian food culture, Sudanese cuisine comparison, Kitengela African food, Horn of Africa food traditions",
  openGraph: {
    title:
      "Sudanese and Ethiopian Food Culture: A Shared East African Culinary Heritage",
    description:
      "Discover the similarities between Sudanese and Ethiopian cuisine, including injera, kisra, spices, and shared food traditions across the Horn of Africa.",
    type: "article",
    publishedTime: "2025-02-01",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function SudaneseEthiopianFoodCultureBlogPost() {
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
              Culture &amp; Food Heritage
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Sudanese and Ethiopian Food Culture: A Shared East African
              Culinary Heritage
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">

              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Kitengela Injera Hub
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                February 1, 2025
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </span>

            </div>
          </header>

          {/* Featured */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🌍🍽️</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Sudanese and Ethiopian cuisines sit side by side in the rich
              culinary map of the Horn of Africa. While each has its own
              identity, they share deep cultural roots, cooking techniques,
              spices, and a powerful tradition of communal eating that brings
              families together around one table.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In Kitengela and across East Africa, these food traditions are
              not just history — they are lived experiences. From injera in
              Ethiopia to kisra in Sudan, food becomes a bridge connecting
              cultures, languages, and generations.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              1. How Similar Are Sudanese and Ethiopian Foods?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              At first glance, the cuisines may look different, but when you
              explore deeper, you discover shared ingredients, similar cooking
              methods, and overlapping cultural values.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Both cuisines rely heavily on slow-cooked stews, legumes, grains,
              and richly spiced sauces. Meals are designed to be shared,
              encouraging conversation and connection.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              You can explore a detailed comparison of both food cultures here:
              {" "}
              <a
                href="https://whatworldeats.com/compare/?countryA=sudan&countryB=ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Sudan vs Ethiopia food comparison
              </a>.
            </p>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">

              <h3 className="font-semibold text-foreground mb-2">
                Shared East African Identity
              </h3>

              <p className="text-sm text-muted-foreground">
                Despite borders, Sudanese and Ethiopian food traditions reflect
                one shared story — resilience, agriculture, spice culture, and
                hospitality.
              </p>

            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              2. Injera and Kisra: Two Cousins of the Same Table
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              One of the most fascinating connections between the two cuisines
              is their staple flatbreads.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Ethiopia has <strong>injera</strong> — a soft, spongy, slightly
              sour fermented flatbread made mainly from teff. Sudan has{" "}
              <strong>kisra</strong> — a thin fermented bread made from sorghum
              or wheat flour.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              While they differ in texture and ingredients, both serve the same
              purpose: they are edible utensils used to scoop stews, meats, and
              vegetables. In many ways, kisra and injera are culinary cousins
              — shaped by geography but connected by tradition.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              You can learn more about Ethiopian food culture and its roots
              here:{" "}
              <a
                href="https://www.wildfrontierstravel.com/en_EU/blog/ethiopian-cultural-food"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Ethiopian food culture explained
              </a>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              3. Shared Flavors and Cooking Traditions
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Both Sudanese and Ethiopian cuisines rely on slow cooking and
              deep flavor development. Onions, garlic, chili, coriander,
              cumin, and ginger form the base of many dishes.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Stews are central in both cultures — from Ethiopian wot dishes to
              Sudanese tagines and bean-based meals. Food is rarely rushed;
              flavor is built patiently over time.
            </p>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>Slow-cooked meat and vegetable stews</li>
              <li>Fermented breads like injera and kisra</li>
              <li>Spice-rich sauces and broths</li>
              <li>Shared communal dining traditions</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              4. Food as Culture, Identity, and Connection
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In both Sudan and Ethiopia, food is more than nourishment — it is
              identity. Meals are often shared from one large platter,
              symbolizing unity and trust.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Even celebrations, weddings, and religious gatherings are centered
              around food. Hospitality is sacred, and offering food to guests is
              a sign of respect and honor.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              You can also explore deeper cultural insights from this resource:
              {" "}
              <a
                href="https://www.scribd.com/presentation/779852913/Food"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                African food culture presentation
              </a>.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">

              <h3 className="font-semibold text-foreground mb-2">
                Experience East African Food in Kitengela
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                From Ethiopian injera to Sudanese-inspired flavors, Kitengela
                Injera Hub celebrates the shared culinary heritage of the Horn
                of Africa.
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="https://wa.me/254719377666?text=Hello%2C%20I%20want%20to%20explore%20East%20African%20food"
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
              Sudanese and Ethiopian cuisines tell a shared story of culture,
              migration, resilience, and community. Whether it is injera or
              kisra, stew or sauce, the heart of the meal remains the same —
              connection.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              At Kitengela Injera Hub, we celebrate these connections by
              bringing authentic East African food experiences closer to you.
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
                href="/blog/sudanese-food-kitengela"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  African Cuisine
                </span>

                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  Sudanese Food in Kitengela: Traditional East African Meals
                </h4>
              </Link>

              <Link
                href="/blog/ethiopian-food-kitengela"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Local Guide
                </span>

                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  Ethiopian Food in Kitengela: Fresh Injera & Spices
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