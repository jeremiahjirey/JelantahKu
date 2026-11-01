import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JelantahKu — Setor Minyak Jelantah, Dapat Saldo | Semarang",
  description:
    "Jual minyak jelantah dari rumah atau usaha di Semarang. Dijemput, ditimbang, dan dapat poin yang bisa ditukar. One Drop, One Change.",
  keywords: [
    "jual minyak jelantah Semarang",
    "setor jelantah",
    "pengepul minyak jelantah",
    "daur ulang minyak goreng",
    "poin minyak jelantah",
  ],
  openGraph: {
    title: "JelantahKu — Setor Minyak Jelantah, Dapat Saldo | Semarang",
    description:
      "Jual minyak jelantah dari rumah atau usaha di Semarang. Dijemput, ditimbang, dan dapat poin yang bisa ditukar. One Drop, One Change.",
    url: siteConfig.url,
    siteName: "JelantahKu",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "JelantahKu — One Drop, One Change",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JelantahKu — Setor Minyak Jelantah, Dapat Saldo | Semarang",
    description:
      "Jual minyak jelantah dari rumah atau usaha di Semarang. Dijemput, ditimbang, dan dapat poin yang bisa ditukar.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "JelantahKu",
              description:
                "Layanan pengepul minyak jelantah dari rumah tangga dan UMKM di Semarang.",
              url: siteConfig.url,
              telephone: `+${siteConfig.whatsappNumber}`,
              email: siteConfig.email,
              areaServed: {
                "@type": "City",
                name: "Semarang",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Semarang",
                addressRegion: "Jawa Tengah",
                addressCountry: "ID",
              },
              slogan: siteConfig.tagline,
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-cream text-deep-green antialiased">
        {children}
      </body>
    </html>
  );
}
