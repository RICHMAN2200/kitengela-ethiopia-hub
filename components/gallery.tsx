"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/injera-header.jpg",
    alt: "Traditional Ethiopian injera platter with colorful stews",
    caption: "Traditional Injera Platter",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Ethiopian feast with Doro Wat and assorted sides",
    caption: "Ethiopian Feast",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Injera rolls with misir wat and vegetable sides",
    caption: "Vegetarian Selection",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Traditional mesob basket with Ethiopian food",
    caption: "Mesob Presentation",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Various Ethiopian stews in cast iron dishes",
    caption: "Authentic Stews",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Colorful Ethiopian platter in traditional basket",
    caption: "Full Spread",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "People sharing Ethiopian food communally",
    caption: "Shared Experience",
  },
  {
    src: "/images/doro-wat-2.png",
    alt: "Doro Wat - Ethiopian spicy chicken stew",
    caption: "Signature Doro Wat",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#2A5A44]/10 text-[#2A5A44] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            Our Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Taste of Our Creations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our authentic Ethiopian dishes, from traditional injera platters to signature stews like Doro Wat.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 || index === 5 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2810]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to taste these delicious dishes?
          </p>
          <a
            href="https://wa.me/254719377666?text=Hello%2C%20I%20saw%20your%20gallery%20and%20would%20like%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Order Your Feast Today
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-[#C98D43] transition-colors p-2"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
