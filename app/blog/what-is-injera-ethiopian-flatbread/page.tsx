import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title: "What is Injera? Complete Guide to Ethiopian Flatbread | Kitengela Injera Hub",
  description: "Learn everything about injera - the traditional Ethiopian sourdough flatbread. Discover its history, how it's made, nutritional benefits, and why it's central to Ethiopian cuisine.",
  keywords: "injera, Ethiopian bread, teff flatbread, Ethiopian food, sourdough bread, gluten-free bread, injera Kitengela, Ethiopian cuisine",
  openGraph: {
    title: "What is Injera? Complete Guide to Ethiopian Flatbread",
    description: "Learn everything about injera - the traditional Ethiopian sourdough flatbread made from teff flour.",
    type: "article",
    publishedTime: "2025-01-15",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function WhatIsInjeraBlogPost() {
  return (
    <main>
      <Header />
      
      <article className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-xs font-medium mb-4">
              Ethiopian Cuisine
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              What is Injera? The Complete Guide to Ethiopian Sourdough Flatbread
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

          {/* Featured Image Placeholder */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🫓</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If you&apos;ve ever dined at an Ethiopian restaurant, you&apos;ve likely encountered <strong>injera</strong> - the spongy, tangy flatbread that serves as both plate and utensil in Ethiopian cuisine. This remarkable bread is more than just food; it&apos;s a cultural cornerstone that has been central to Ethiopian dining for thousands of years.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">What Exactly is Injera?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Injera is a sourdough flatbread made primarily from <strong>teff flour</strong>, an ancient grain native to Ethiopia. The batter is fermented for 2-3 days, giving injera its characteristic sour taste and unique texture. The result is a large, circular bread with a soft, spongy texture full of small holes (called &quot;eyes&quot;) that make it perfect for scooping up stews and vegetables.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">The History of Injera</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Teff has been cultivated in Ethiopia for over 3,000 years, making injera one of the oldest prepared foods still consumed today. The grain thrives in the Ethiopian highlands and has sustained generations of Ethiopians. Today, injera remains the staple food of Ethiopia and Eritrea, consumed daily by millions.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">How is Injera Made?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Traditional injera making is an art passed down through generations:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
              <li><strong>Mixing:</strong> Teff flour is mixed with water to form a batter</li>
              <li><strong>Fermentation:</strong> The batter ferments for 2-3 days at room temperature</li>
              <li><strong>Cooking:</strong> The fermented batter is poured onto a hot clay plate (mitad) in a spiral pattern</li>
              <li><strong>Steaming:</strong> The injera is covered and steam-cooked until the surface is full of holes</li>
              <li><strong>Cooling:</strong> Once cooked, injera is cooled and stacked for serving</li>
            </ol>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">Did You Know?</h3>
              <p className="text-sm text-muted-foreground">
                At Kitengela Injera Hub, we follow these traditional methods, fermenting our injera naturally for the authentic sour taste. We prepare fresh injera daily based on customer orders, ensuring you get the best quality every time.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Nutritional Benefits of Injera</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Injera isn&apos;t just delicious - it&apos;s also incredibly nutritious:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>High in protein</strong> - Teff contains more protein than most grains</li>
              <li><strong>Rich in iron</strong> - Excellent for preventing anemia</li>
              <li><strong>High in fiber</strong> - Supports digestive health</li>
              <li><strong>Contains calcium</strong> - Good for bone health</li>
              <li><strong>Naturally gluten-free</strong> - Safe for those with celiac disease (when made with 100% teff)</li>
              <li><strong>Low glycemic index</strong> - Helps maintain stable blood sugar levels</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">How to Eat Ethiopian Food with Injera</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In Ethiopian cuisine, injera serves multiple purposes - it&apos;s your plate, your utensil, and part of your meal. Here&apos;s how to eat like a local:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
              <li>Tear off a small piece of injera with your right hand</li>
              <li>Use it to scoop up stews (wots), vegetables, or meat</li>
              <li>Wrap the food in the injera piece and eat in one bite</li>
              <li>Share from a communal plate - it&apos;s a sign of friendship!</li>
            </ol>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Common Ethiopian Dishes Served on Injera</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>Doro Wot</strong> - Spicy chicken stew, the queen of Ethiopian dishes</li>
              <li><strong>Shiro Wot</strong> - Chickpea stew, popular for vegetarian meals</li>
              <li><strong>Misir Wot</strong> - Red lentil stew</li>
              <li><strong>Gomen</strong> - Collard greens cooked with spices</li>
              <li><strong>Tibs</strong> - Sautéed meat with vegetables</li>
              <li><strong>Kitfo</strong> - Ethiopian beef tartare</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Where to Get Fresh Injera in Kitengela</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you&apos;re in Kitengela or Athi River and craving authentic Ethiopian injera, you don&apos;t need to travel to Nairobi. <strong>Kitengela Injera Hub</strong> offers fresh, homemade injera prepared daily using traditional fermentation methods. We deliver across Kitengela and Athi River with average delivery times of 30-60 minutes.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">Order Fresh Injera Today</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Experience authentic Ethiopian injera without leaving Kitengela. Order before 5PM for same-day delivery!
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
              </div>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Injera is much more than a bread - it&apos;s a symbol of Ethiopian hospitality, community, and culinary heritage. Whether you&apos;re new to Ethiopian cuisine or a longtime fan, there&apos;s nothing quite like fresh, properly fermented injera to complete your Ethiopian meal experience.
            </p>
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Share this article</span>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog" className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors">
                <span className="text-xs text-[#2A5A44] font-medium">Culture</span>
                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">How to Eat Ethiopian Food: A Beginner&apos;s Guide</h4>
              </Link>
              <Link href="/blog" className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors">
                <span className="text-xs text-[#2A5A44] font-medium">Health</span>
                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">Health Benefits of Teff: Ethiopia&apos;s Ancient Superfood</h4>
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
