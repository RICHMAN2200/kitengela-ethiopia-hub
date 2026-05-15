"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is injera and how is it made?",
    answer: "Injera is a traditional Ethiopian sourdough flatbread made from teff flour. Our injera is naturally fermented for 2-3 days using traditional methods, giving it the authentic sour taste and spongy texture. We prepare it fresh daily based on customer orders."
  },
  {
    question: "What areas do you deliver to?",
    answer: "We deliver across Kitengela and Athi River. Our average delivery time is 30-60 minutes depending on your location. We use motorbike delivery for faster service."
  },
  {
    question: "What is your order cutoff time for same-day delivery?",
    answer: "For same-day delivery, please place your order before 5PM. Orders placed after 5PM will be delivered the next day. You can order via WhatsApp or phone call."
  },
  {
    question: "Do you offer bulk orders for events or restaurants?",
    answer: "Yes! We accept both small personal orders and larger bulk orders for families, events, and restaurants. We also offer wholesale supply for businesses with consistent quality and reliable delivery."
  },
  {
    question: "What other Ethiopian products do you sell?",
    answer: "Besides fresh injera, we offer berbere chili spice, shiro (chickpea powder), Ethiopian coffee from regions like Yirgacheffe, Sidamo, and Harrar, as well as traditional Ethiopian ingredients and cultural products."
  },
  {
    question: "How do I place an order?",
    answer: "You can order through WhatsApp at 0719 377 666 or call us directly. Simply tell us what you need, your delivery location, and we&apos;ll confirm your order and delivery time."
  },
  {
    question: "What makes your injera different from others?",
    answer: "Our injera is made fresh daily using traditional fermentation methods passed down through generations. We don&apos;t use shortcuts - each batch is naturally fermented for the authentic sour taste that Ethiopian cuisine is known for. We&apos;ve been trusted by the community for over 3 years."
  },
  {
    question: "Do you cater for events?",
    answer: "Yes, we provide catering services for corporate events, weddings, parties, and other gatherings. Contact us to discuss your event requirements and we&apos;ll create a custom menu for your needs."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#2A5A44]/10 text-[#2A5A44] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about ordering authentic Ethiopian injera and products in Kitengela.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#C98D43] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-[#2A5A44]/5 rounded-2xl p-8 border border-[#2A5A44]/20">
          <p className="text-foreground font-medium mb-2">Still have questions?</p>
          <p className="text-muted-foreground text-sm mb-4">
            {"We're here to help! Reach out to us on WhatsApp or give us a call."}
          </p>
          <a
            href="https://wa.me/254719377666?text=Hello%2C%20I%20have%20a%20question%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2A5A44] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#2A5A44]/90 transition-colors"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
