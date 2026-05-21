import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Ethiopian Food in Kitengela: Fresh Injera, Berbere & Delivery | Kitengela Injera Hub",
  description:
    "Looking for authentic Ethiopian food in Kitengela? Discover fresh injera, homemade Berbere, Ethiopian coffee, Shiro and fast local delivery from Kitengela Injera Hub.",
  keywords:
    "Ethiopian food Kitengela, injera Kitengela, Ethiopian restaurant Kitengela, Ethiopian delivery Kitengela, Ethiopian coffee Kenya, Berbere Kitengela, Shiro Kitengela",
  openGraph: {
    title:
      "Ethiopian Food in Kitengela | Fresh Injera & Authentic Ethiopian Taste",
    description:
      "Fresh homemade injera, Ethiopian coffee, Berbere spice and traditional Ethiopian food delivered in Kitengela and Athi River.",
    type: "article",
    publishedTime: "2025-01-25",
    authors: ["Kitengela Injera Hub"],
  },
}

export default function EthiopianFoodKitengelaBlogPost() {
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
              Local Guide &amp; Ethiopian Cuisine
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Ethiopian Food in Kitengela: Where to Find Fresh Injera & Authentic Flavor
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Kitengela Injera Hub
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 25, 2025
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                7 min read
              </span>
            </div>
          </header>

          {/* Featured */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-[#C98D43]/20 to-[#2A5A44]/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🇪🇹🍽️</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If you are searching for authentic <strong>Ethiopian food in Kitengela</strong>,
              you no longer need to travel far. From warm freshly-made injera
              and spicy Berbere blends to rich Ethiopian coffee and comforting
              Shiro, Kitengela is slowly becoming a home for genuine Ethiopian
              flavors.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              At <strong>Kitengela Injera Hub</strong>, our mission is simple:
              bring traditional Ethiopian food closer to families, students,
              professionals and anyone craving real East African highland
              flavors—without compromising authenticity.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              1. Why Ethiopian Food is Growing in Kitengela
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Kitengela has grown rapidly over the years. New estates,
              businesses and diverse communities continue creating demand for
              new food experiences. Ethiopian cuisine naturally fits into this
              growing culture because meals are designed around sharing,
              hospitality and bold flavor.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Ethiopian food isn't just food—it is an experience. Meals are
              served on large platters, eaten communally and built around fresh
              injera, rich spices and family traditions.
            </p>

            <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-foreground mb-2">
                Local Delivery Available
              </h3>

              <p className="text-sm text-muted-foreground">
                We currently serve Kitengela, Athi River and nearby areas with
                fresh injera and Ethiopian products delivered directly to your
                doorstep.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              2. What We Offer at Kitengela Injera Hub
            </h2>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>Fresh homemade Ethiopian Injera</li>
              <li>Authentic Berbere spice blends</li>
              <li>Traditional Shiro powder</li>
              <li>Ethiopian coffee products</li>
              <li>Family and bulk orders</li>
              <li>Fast local delivery around Kitengela</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Our injera is prepared using traditional fermentation methods to
              preserve authentic texture and taste. The goal is not simply to
              sell food—but to deliver a genuine Ethiopian dining experience.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              3. Visit Us Online
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We are building a community around Ethiopian food and culture.
              You can explore reviews, updates, food photos and local customer
              experiences through our platforms:
            </p>

            <ul className="list-disc list-inside space-y-4 text-muted-foreground mb-6">

              <li>
                View our location and reviews on{" "}
                <a
                  href="https://maps.app.goo.gl/qA4mosnhRHsZKgL57"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Google Business Profile
                </a>
              </li>

              <li>
                Follow us on{" "}
                <a
                  href="https://www.facebook.com/people/Kitengela-Injera-hub/61589508767893/?rdid=RxDjpii44yOVYLFB&share_url=https://www.facebook.com/share/18WFHzkxY2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Facebook
                </a>{" "}
                for updates and community posts
              </li>

              <li>
                See food photos and behind-the-scenes content on{" "}
                <a
                  href="https://www.instagram.com/kitengelainjerahub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Instagram
                </a>
              </li>

            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
              4. More Than Food — Sharing Ethiopian Culture
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Ethiopian culture revolves around hospitality. Whether through a
              coffee ceremony, sharing gursha, or gathering around a large
              platter of injera and wot, every meal becomes a social
              experience.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We want customers in Kitengela to experience not just the food,
              but the stories, traditions and warmth behind it.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">

              <h3 className="font-semibold text-foreground mb-2">
                Order Fresh Ethiopian Food Today
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                Looking for fresh injera, Ethiopian spices or homemade products
                delivered around Kitengela? Contact us today.
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
              Great food creates memories. At Kitengela Injera Hub, we are
              proud to bring authentic Ethiopian flavors to homes throughout
              Kitengela and nearby areas. Whether you are Ethiopian, discovering
              injera for the first time, or searching for a taste of home,
              we look forward to serving you.
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
                href="/blog/ethiopian-coffee-ceremony"
                className="group bg-card border border-border rounded-xl p-4 hover:border-[#C98D43] transition-colors"
              >
                <span className="text-xs text-[#2A5A44] font-medium">
                  Ethiopian Culture
                </span>

                <h4 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  Ethiopian Coffee Ceremony: More Than Just Coffee
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