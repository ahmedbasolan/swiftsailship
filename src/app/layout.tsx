import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Swift Sail Shipping - Premium Logistics & Cargo Solutions UAE",
  description: "Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE. Your trusted partner for global shipping solutions.",
  keywords: ["freight forwarding", "logistics", "shipping", "cargo", "UAE", "Dubai", "customs clearance", "sea freight", "air freight"],
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
    url: "https://swiftsailship.com",
    siteName: "Swift Sail Shipping",
    title: "Swift Sail Shipping - Premium Logistics & Cargo Solutions UAE",
    description: "Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Sail Shipping - Premium Logistics & Cargo Solutions UAE",
    description: "Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Swift Sail Shipping L.L.C.",
              "description": "Premium freight forwarding, customs clearance, and logistics services in the UAE.",
              "url": "https://swiftsailship.com",
              "telephone": "+971553424700",
              "email": "info@swiftsailship.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tanvi Business Centre, M - 101, Abu Hail",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
              "sameAs": ["https://www.linkedin.com/company/swift-sail-shipping"]
            })
          }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} min-h-full flex flex-col font-sans text-swift-text-light bg-swift-background-light`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
