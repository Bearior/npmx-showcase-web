import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { OrganizationJsonLd, ServiceJsonLd, FAQJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  display: "swap",
  variable: "--font-noto-thai",
});

const SITE_URL = "https://www.physioplus.co.th";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0891b2",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "PhysioPlus Clinic – กายภาพบำบัด กรุงเทพ | คลินิกฟิสิโอพลัส",
    template: "%s | PhysioPlus Clinic",
  },
  description:
    "คลินิกกายภาพบำบัดครบวงจรกรุงเทพ ปวดหลัง ออฟฟิศซินโดรม ฟื้นฟูหลังผ่าตัด นักกายภาพมีใบประกอบวิชาชีพ นัดหมายวันนี้",
  keywords: [
    "กายภาพบำบัด กรุงเทพ",
    "คลินิกกายภาพบำบัด",
    "ปวดหลัง",
    "ออฟฟิศซินโดรม",
    "ฟื้นฟูหลังผ่าตัด",
    "กายภาพบำบัดกีฬา",
    "physiotherapy Bangkok",
    "PhysioPlus Clinic",
    "physical therapy clinic",
    "back pain treatment Bangkok",
  ],
  authors: [{ name: "PhysioPlus Clinic" }],
  creator: "PhysioPlus Clinic",
  publisher: "PhysioPlus Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "th": SITE_URL,
      "en": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "PhysioPlus Clinic",
    title: "PhysioPlus Clinic – หายปวด กลับมาใช้ชีวิตได้เต็มที่",
    description:
      "คลินิกกายภาพบำบัดครบวงจร ปวดหลัง ออฟฟิศซินโดรม ฟื้นฟูหลังผ่าตัด นักกายภาพมืออาชีพ ปรึกษาฟรีครั้งแรก",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PhysioPlus Clinic – กายภาพบำบัด กรุงเทพ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhysioPlus Clinic – กายภาพบำบัด กรุงเทพ",
    description:
      "คลินิกกายภาพบำบัดครบวงจร นักกายภาพมืออาชีพ เครื่องมือทันสมัย นัดหมายวันนี้",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${inter.variable} ${notoSansThai.variable}`}>
      <head>
        <OrganizationJsonLd />
        <ServiceJsonLd />
        <FAQJsonLd />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
