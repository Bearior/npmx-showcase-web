"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { getServiceBySlug } from "@/lib/serviceDetails";
import { FACEBOOK_URL } from "@/lib/constants";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { locale, t } = useLanguage();

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-8">ไม่พบบริการนี้</p>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors font-semibold"
          >
            กลับหน้าบริการ
          </Link>
        </div>
      </div>
    );
  }

  const detail = locale === "th" ? service.th : service.en;
  const backLabel = locale === "th" ? "กลับหน้าแรก" : "Back to Home";

  return (
    <div className="min-h-screen bg-white">
      {/* Top nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-lg transition-transform group-hover:scale-105">
              P
            </div>
            <span className="text-xl font-bold text-gray-900">
              Physio<span className="text-primary-600">Plus</span>
            </span>
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {backLabel}
          </Link>
        </div>
      </nav>

      {/* Hero / Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute top-10 right-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/#services"
            className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {locale === "th" ? "บริการทั้งหมด" : "All Services"}
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            {detail.title}
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl font-bold text-primary-600">
            {detail.subtitle}
          </p>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {detail.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {locale === "th" ? "สิ่งที่คุณจะได้รับ" : "What You Get"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {detail.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-primary-50 rounded-xl p-5"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {locale === "th" ? "ขั้นตอนการรักษา" : "Treatment Process"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-14 h-14 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4">
                  {p.step}
                </div>
                <p className="text-lg font-semibold text-gray-800">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-500 text-lg">
            <svg className="inline-block w-5 h-5 mr-1 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {detail.duration}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-400 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {detail.ctaText}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-primary-700 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              {locale === "th" ? "นัดหมายเลย" : "Book Now"}
            </a>
            <a
              href={`tel:${t.cta.phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {t.cta.secondaryButton}: {t.cta.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center">
        <p className="text-sm text-gray-500">{t.footer.copyright}</p>
      </footer>
    </div>
  );
}
