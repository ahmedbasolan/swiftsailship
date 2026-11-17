import type { Metadata, Viewport } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ActionBar } from "@/components/layout/action-bar";
import { FontAwesomeLoader } from "@/components/layout/font-awesome-loader";
import { site } from "@/lib/site";

const display = Red_Hat_Display({
  variable: "--ff-display",
  subsets: ["latin"],
  display: "swap",
});

const text = Red_Hat_Text({
  variable: "--ff-text",
  subsets: ["latin"],
  display: "swap",
});

const title = "Swift Sail Shipping: freight forwarder in Dubai, UAE";
const description =
  "Sea freight, air freight, UAE customs clearance and project cargo from Dubai. Swift Sail Shipping L.L.C. books the carrier, files the customs declaration and delivers to your door.";

export const viewport: Viewport = {
  themeColor: "#fbf6ee",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Swift Sail",
  },
  description,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/assets/img/og-ship.jpg",
        width: 1200,
        height: 630,
        alt: "A loaded container ship seen from above",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/img/og-ship.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  // Google Search Console: set NEXT_PUBLIC_GSC_VERIFICATION in the hosting
  // environment (or verify by DNS and leave it unset). No placeholder is sent.
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.legalName,
  description:
    "Freight forwarder and customs broker in Dubai: sea freight, air freight, UAE customs clearance and project cargo.",
  url: site.url,
  logo: `${site.url}/android-chrome-512x512.png`,
  image: `${site.url}/assets/img/og-ship.jpg`,
  telephone: "+971553424700",
  email: site.email,
  priceRange: "$$",
  foundingDate: site.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tanvi Business Centre, M-101, Abu Hail",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2833,
    longitude: 55.3401,
  },
  hasMap: site.mapHref,
  areaServed: ["AE", "GCC", "Middle East", "Africa", "Indian Subcontinent", "Europe"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: ["https://www.linkedin.com/company/swift-sail-shipping"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#business` },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${display.variable} ${text.variable} min-h-full flex flex-col font-sans antialiased selection:bg-[#c5a47e]/40 selection:text-current`}
      >
        <Navbar />
        <main id="top" className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
        <ActionBar />
      </body>
    </html>
  );
}
