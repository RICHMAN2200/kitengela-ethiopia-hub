import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: 'Kitengela Injera Hub | Fresh Ethiopian Injera & Products Delivery',
    template: '%s | Kitengela Injera Hub',
  },

  description:
    'Fresh homemade Ethiopian injera, berbere spice, Ethiopian coffee, and shiro delivered in Kitengela and Athi River. Order before 5PM for same-day delivery. 3+ years trusted.',

  keywords: [
    'injera Kitengela',
    'Ethiopian food Kitengela',
    'fresh injera delivery',
    'Ethiopian restaurant Kitengela',
    'berbere spice Kenya',
    'Ethiopian coffee Kitengela',
    'shiro Kenya',
    'Athi River Ethiopian food',
    'teff injera',
    'Ethiopian catering Kenya',
  ],

  authors: [{ name: 'Kitengela Injera Hub' }],
  creator: 'Kitengela Injera Hub',
  publisher: 'Kitengela Injera Hub',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ✅ FIXED DOMAIN HERE
  metadataBase: new URL('https://kitengelainjerahub.co.ke'),

  alternates: {
    canonical: 'https://kitengelainjerahub.co.ke',
  },

  openGraph: {
    title: 'Kitengela Injera Hub | Fresh Ethiopian Injera Delivery',
    description:
      'Fresh homemade Ethiopian injera and premium traditional products delivered in Kitengela and Athi River. Order before 5PM for same-day delivery.',

    // ✅ FIXED DOMAIN HERE
    url: 'https://kitengelainjerahub.co.ke',

    siteName: 'Kitengela Injera Hub',
    locale: 'en_KE',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kitengela Injera Hub | Fresh Ethiopian Injera Delivery',
    description:
      'Fresh homemade Ethiopian injera and premium traditional products delivered in Kitengela and Athi River.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ⚠️ Optional: remove if you're not using this anymore
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <head>
          <link rel="apple-touch-icon" href="/images/logo.png" />
        
        <meta name="theme-color" content="#FDF9ED" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kitengela Injera Hub",
              "image": "/images/logo.png",
              "description":
                "Fresh homemade Ethiopian injera and premium traditional products delivered in Kitengela and Athi River.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chuna Estate, New Valley",
                "addressLocality": "Kitengela",
                "addressCountry": "KE",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -1.4694,
                "longitude": 36.9611,
              },
              "telephone": "+254719377666",
              "openingHours": "Mo-Su 07:00-20:00",
              "priceRange": "$$",
              "servesCuisine": "Ethiopian",
              "areaServed": ["Kitengela", "Athi River"],
              "sameAs": ["https://wa.me/254719377666"],
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
