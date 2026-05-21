import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Eat Ethiopian Food: A Beginner's Guide | Kitengela Injera Hub",
  description: "Learn the traditional way of eating Ethiopian food—from tearing and scooping with injera to communal sharing and the beautiful art of gursha.",
  keywords: "how to eat Ethiopian food, injera etiquette, gursha, communal platter, Ethiopian dining, Ethiopian food Kitengela, hand eating guide",
  openGraph: {
    title: "How to Eat Ethiopian Food: A Beginner's Guide",
    description: "Learn the traditional way of eating Ethiopian food—from tearing and scooping with injera to communal sharing.",
    type: "article",
    publishedTime: "2025-01-10",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function HowToEatEthiopianFoodBlogPost() {
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
              Culture &amp; Etiquette
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              How to Eat Ethiopian Food: A Beginner&apos;s Guide
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Kitengela Injera Hub
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 10, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                4 min read
              </span>
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🍽️</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Eating Ethiopian food is a deeply communal, tactile, and sensory experience. If you are sitting down for your first traditional Ethiopian meal, you might notice something missing: silverware. Your hands—and the spongy sourdough <strong>injera</strong>—are your only utensils.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">1. Preparation: Washing Hands</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Because you eat exclusively with your hands, proper hygiene is paramount. Always wash your hands thoroughly before the meal begins. Traditionally, a host might bring a beautiful metal basin and a pitcher of water directly to the table to wash their guests&apos; hands before any food is touched.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">2. The Communal Platter (Gebeta)</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ethiopian food is rarely served on individual plates. Instead, it is presented on a large communal tray (called a <em>gebeta</em>) that is lined with a massive circular piece of injera. Various stews (wots), vegetables, and salads are arranged beautifully on top of this sourdough bread canvas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The meal is meant to be shared, encouraging connection, closeness, and rich conversation. For a comprehensive look at the delicious varieties of traditional stews and local specialties served on the platter, check out this guide on <a href="https://www.awazetours.com/ethiopia-food.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold transition-colors">Ethiopia Food &amp; Dining Culture</a>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">3. The Technique: Tearing and Scooping</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Eating with injera can take a little practice, but mastering the basic hand-eye coordination is simple. If you want to see step-by-step illustrations of this technique, we highly recommend checking out <a href="https://www.wikihow.com/Eat-Ethiopian-Food" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold transition-colors">wikiHow&apos;s guide on How to Eat Ethiopian Food</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Once you are ready to try it, follow these basic steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
              <li><strong>Use your right hand only:</strong> In Ethiopian culture, the left hand is traditionally reserved for non-dining purposes. Always tear, handle, and pass food with your right hand.</li>
              <li><strong>Tear a piece of injera:</strong> Pinch off a piece of extra injera (usually served rolled up on a side platter) roughly the size of your palm.</li>
              <li><strong>Pinch and scoop:</strong> Lay the piece of injera over the stew or vegetable portion you want to enjoy. Use your fingers to pinch the injera around the food, creating a secure, neat bundle.</li>
              <li><strong>Eat in one bite:</strong> Carry the bundle directly to your mouth. Try to place it inside without letting your fingers touch your lips or teeth.</li>
            </ol>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">The Golden Rule of the Platter</h3>
              <p className="text-sm text-muted-foreground">
                Do not reach across the platter to grab food from the opposite side. Always eat from the section of the gebeta that is directly in front of you. As the meal progresses, the host may rotate the platter so everyone can try different dishes.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">4. The Art of &quot;Gursha&quot;</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              One of the most beautiful customs in Ethiopian dining is <strong>Gursha</strong>. This is the act of wrapping up a particularly delicious, perfectly-balanced bite of food in injera and placing it directly into the mouth of a friend, family member, or guest at the table.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Gursha is a profound gesture of friendship, love, and immense respect. If someone offers you a gursha, accept it graciously by leaning forward and opening your mouth to take the bite. It is highly customary to return the favor by preparing a gursha for them later during the meal.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">5. Eating the &quot;Tablecloth&quot;</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As the meal winds down, the various wots will be mostly finished, leaving the bottom layer of injera fully exposed. Do not let this go to waste! This bottom layer has spent the entire meal soaking up the rich, spiced juices of the stews. Many Ethiopians consider this the absolute best part of the entire meal. Tear it up and enjoy!
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
                <a
                  href="tel:0720096575"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-4 py-2 rounded-lg text-sm font-semibold border border-border hover:border-primary transition-colors"
                >
                  Call 0720 096 575
                </a>
              </div>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dining in Ethiopia is about slowing down, sharing, and cherishing wonderful company. Once you get the hang of eating with your hands, you&apos;ll find that the tactile connection makes the food taste even better. Enjoy the complex flavors of berbere and niter kibbeh, and don&apos;t be afraid to get your hands a little messy!
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
              <Link href="/blog/what-is-injera-ethiopian-flatbread" className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors">
                <span className="text-xs text-[#2A5A44] font-medium">Ethiopian Cuisine</span>
                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">What is Injera? The Complete Guide to Ethiopian Sourdough Flatbread</h4>
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