"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            {t.socialProof.title}
          </h2>
          <p className="mt-4 text-xl text-gray-600">{t.socialProof.subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.socialProof.testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-200 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
