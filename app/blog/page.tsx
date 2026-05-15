import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Ethiopian Food, Injera Recipes & Culture | Kitengela Injera Hub",
  description: "Learn about Ethiopian cuisine, injera making, traditional recipes, and Ethiopian culture. Tips for cooking with teff, berbere spice recipes, and more from Kitengela Injera Hub.",
  keywords: "Ethiopian food blog, injera recipes, berbere spice, Ethiopian coffee, teff flour, Ethiopian cuisine Kitengela, traditional Ethiopian recipes",
}

const blogPosts = [
  {
    slug: "what-is-injera-ethiopian-flatbread",
    title: "What is Injera? The Complete Guide to Ethiopian Sourdough Flatbread",
    excerpt: "Discover the history, preparation, and cultural significance of injera - the spongy, tangy flatbread that forms the foundation of Ethiopian cuisine.",
    category: "Ethiopian Cuisine",
    readTime: "5 min read",
    date: "January 15, 2025",
    author: "Kitengela Injera Hub",
    featured: true,
  },
  {
    slug: "how-to-eat-ethiopian-food",
    title: "How to Eat Ethiopian Food: A Beginner's Guide",
    excerpt: "Learn the traditional Ethiopian way of eating - from tearing injera to sharing meals communally. Master the art of gursha and dining etiquette.",
    category: "Culture",
    readTime: "4 min read",
    date: "January 10, 2025",
    author: "Kitengela Injera Hub",
    featured: true,
  },
  {
    slug: "berbere-spice-guide",
    title: "Berbere Spice: The Soul of Ethiopian Cooking",
    excerpt: "Everything you need to know about berbere - the iconic Ethiopian spice blend. Learn about its ingredients, uses, and how to incorporate it into your cooking.",
    category: "Ingredients",
    readTime: "6 min read",
    date: "January 5, 2025",
    author: "Kitengela Injera Hub",
    featured: false,
  },
  {
    slug: "ethiopian-coffee-ceremony",
    title: "The Ethiopian Coffee Ceremony: A Sacred Tradition",
    excerpt: "Experience the rich tradition of Ethiopian coffee ceremonies. Learn about the ritual, its significance, and why Ethiopia is the birthplace of coffee.",
    category: "Culture",
    readTime: "7 min read",
    date: "December 28, 2024",
    author: "Kitengela Injera Hub",
    featured: false,
  },
  {
    slug: "shiro-wot-recipe",
    title: "How to Make Shiro Wot: Ethiopian Chickpea Stew",
    excerpt: "A step-by-step guide to making authentic shiro wot - a delicious, protein-rich Ethiopian stew perfect for vegetarians and meat-lovers alike.",
    category: "Recipes",
    readTime: "8 min read",
    date: "December 20, 2024",
    author: "Kitengela Injera Hub",
    featured: false,
  },
  {
    slug: "health-benefits-teff",
    title: "Health Benefits of Teff: Ethiopia's Ancient Superfood",
    excerpt: "Discover why teff is considered a superfood. Learn about its nutritional profile, gluten-free benefits, and why it's gaining popularity worldwide.",
    category: "Health",
    readTime: "5 min read",
    date: "December 15, 2024",
    author: "Kitengela Injera Hub",
    featured: false,
  },
  {
    slug: "ethiopian-food-kitengela",
    title: "Where to Find Authentic Ethiopian Food in Kitengela",
    excerpt: "Your guide to authentic Ethiopian cuisine in Kitengela, Kenya. From fresh injera to traditional spices - discover local options for Ethiopian food lovers.",
    category: "Local Guide",
    readTime: "4 min read",
    date: "December 10, 2024",
    author: "Kitengela Injera Hub",
    featured: false,
  },
  {
    slug: "doro-wot-chicken-stew",
    title: "Doro Wot: The Queen of Ethiopian Dishes",
    excerpt: "Learn about Ethiopia's most celebrated dish - Doro Wot. Discover its history, significance in Ethiopian culture, and what makes it special.",
    category: "Recipes",
    readTime: "6 min read",
    date: "December 5, 2024",
    author: "Kitengela Injera Hub",
    featured: false,
  },
]

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Ethiopian Cuisine", count: 1 },
  { name: "Recipes", count: 2 },
  { name: "Culture", count: 2 },
  { name: "Ingredients", count: 1 },
  { name: "Health", count: 1 },
  { name: "Local Guide", count: 1 },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#2A5A44]/10 text-[#2A5A44] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              Blog
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Ethiopian Food, Culture &amp; Recipes
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore the rich traditions of Ethiopian cuisine. From injera-making tips to authentic recipes, discover the flavors and culture of Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#C98D43] transition-all duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-[#C98D43]/20 flex items-center justify-center">
                  <span className="text-6xl opacity-50">🍽️</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded font-medium">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Posts Grid */}
            <div className="flex-1">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Recent Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <article key={post.slug} className="group bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-[#C98D43] transition-all duration-300">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="bg-[#2A5A44]/10 text-[#2A5A44] px-2 py-1 rounded font-medium">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 space-y-8">
              {/* Categories */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="flex items-center justify-between w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        <span>{category.name}</span>
                        <span className="text-xs bg-secondary px-2 py-0.5 rounded">{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-[#2A5A44] text-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-white/80 mb-4">Get Ethiopian recipes and food tips delivered to your inbox.</p>
                <a
                  href="https://wa.me/254719377666?text=Hello%2C%20I%20want%20to%20receive%20updates%20about%20Ethiopian%20recipes%20and%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#2A5A44] text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  Join on WhatsApp
                </a>
              </div>

              {/* CTA */}
              <div className="bg-[#C98D43]/10 border border-[#C98D43]/30 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Order Fresh Injera</h3>
                <p className="text-sm text-muted-foreground mb-4">Ready to taste authentic Ethiopian injera? Order now for same-day delivery in Kitengela.</p>
                <a
                  href="https://wa.me/254719377666?text=Hello%2C%20I%20would%20like%20to%20order%20fresh%20injera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-primary-foreground text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Order Now
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
