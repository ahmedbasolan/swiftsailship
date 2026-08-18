import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FontAwesomeLoader } from "@/components/layout/font-awesome-loader";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swiftsailship.com"),
  title: {
    default: "Swift Sail Shipping - Premium Logistics & Cargo Solutions UAE",
    template: "%s | Swift Sail Shipping L.L.C.",
  },
  description:
    "Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE. Your trusted partner for global shipping solutions.",
  authors: [{ name: "Swift Sail Shipping L.L.C." }],
  creator: "Swift Sail Shipping L.L.C.",
  publisher: "Swift Sail Shipping L.L.C.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.swiftsailship.com",
    siteName: "Swift Sail Shipping",
    title: "Swift Sail Shipping - Premium Logistics & Cargo Solutions UAE",
    description:
      "Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE.",
    images: [
      {
        url: "/assets/img/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Swift Sail Shipping L.L.C. - Freight Forwarding & Logistics UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Sail Shipping - Premium Logistics & Cargo Solutions UAE",
    description:
      "Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE.",
    images: ["/assets/img/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // TODO(GSC): Replace this placeholder with your real Google Search Console
  // verification code. Get it at:
  //   https://search.google.com/search-console → "Add property" → "Google
  //   Site Verification" → copy the `content="..."` value, OR use the DNS TXT
  //   method to verify without touching this file.
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeLoader />
        <noscript>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            rel="stylesheet"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Swift Sail Shipping L.L.C.",
              "description": "Premium freight forwarding, customs clearance, and logistics services in the UAE.",
              "url": "https://www.swiftsailship.com",
              "image": "https://www.swiftsailship.com/assets/img/og-default.jpg",
              "telephone": "+971553424700",
              "email": "info@swiftsailship.com",
              "priceRange": "$$",
              "foundingDate": "2011",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tanvi Business Centre, M - 101, Abu Hail",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2833,
                "longitude": 55.3401
              },
              "hasMap": "https://maps.google.com/?q=Tanvi+Business+Centre+Abu+Hail+Dubai",
              "areaServed": ["AE", "GCC", "Middle East", "Africa", "Indian Subcontinent", "Europe"],
              "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
              "sameAs": [
                "https://www.linkedin.com/company/swift-sail-shipping",
                "https://wa.me/971553424700"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-full flex flex-col font-sans text-slate-900 bg-[#FBF9F5] antialiased selection:bg-[#C5A47E]/30 selection:text-current`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
