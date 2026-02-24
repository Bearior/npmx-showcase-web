"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const reasonIcons: Record<string, React.ReactNode> = {
  doctors: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  ),
  equipment: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.456 1.455A2.25 2.25 0 0 0 4.5 19.5h15a2.25 2.25 0 0 0 .957-3.545L19.8 15.3m-14.8-.8h14.8" />
    </svg>
  ),
  pricing: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  ),
  patient: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  ),
};

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section
      id="why-choose-us"
      className="py-20 bg-white"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading and description */}
          <div>
            <h2
              id="why-choose-heading"
              className="text-4xl sm:text-5xl font-bold text-gray-900"
            >
              {t.whyChooseUs.title}
            </h2>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              {t.whyChooseUs.subtitle}
            </p>

            {/* Doctor profiles + stats */}
            <div className="mt-10 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
              {/* Doctor images */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src="/images/doctor-1.svg"
                    alt="นักกายภาพบำบัด"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md -ml-4">
                  <Image
                    src="/images/doctor-2.svg"
                    alt="นักกายภาพบำบัด"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">{t.whyChooseUs.teamLabel}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-primary-600">98%</p>
                  <p className="text-sm text-gray-600 mt-1">{t.whyChooseUs.statSatisfaction}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-primary-600">10+</p>
                  <p className="text-sm text-gray-600 mt-1">{t.whyChooseUs.statYears}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-accent-600">5,000+</p>
                  <p className="text-sm text-gray-600 mt-1">{t.whyChooseUs.statPatients}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-accent-600">6</p>
                  <p className="text-sm text-gray-600 mt-1">{t.whyChooseUs.statServices}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: reasons cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {t.whyChooseUs.reasons.map((reason, index) => (
              <article
                key={index}
                className="group bg-gray-50 hover:bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center text-primary-600 transition-colors">
                  {reasonIcons[reason.icon] || reasonIcons.doctors}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
