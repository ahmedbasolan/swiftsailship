import Link from "next/link";
import { Metadata } from "next";
import GlobeSection from "@/components/globe-section";

export const metadata: Metadata = {
  title: "Swift Sail Shipping - Premium Logistics & Cargo Solutions UAE",
  description: "Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE. Your trusted partner for global shipping solutions.",
  alternates: {
    canonical: "https://swiftsailship.com",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-swift-secondary to-swift-secondary/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-swift-secondary/90 to-swift-secondary/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-swift-primary/20 border border-swift-primary/40 text-swift-primary text-xs font-semibold tracking-widest uppercase mb-4 backdrop-blur-sm">
            Premium Logistics Partner
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Global Shipping Solutions <br />
            <span className="text-swift-primary">With UAE Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Experience world-class shipping solutions tailored for the GCC region and beyond. We bridge continents with precision, speed, and luxury service standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-swift-primary hover:bg-swift-primary-hover text-white px-8 py-3 rounded-sm font-medium transition-all shadow-lg hover:shadow-swift-primary/30 text-sm uppercase tracking-wider"
            >
              Explore Services
            </Link>
            <Link
              href="/get-quote"
              className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-sm font-medium transition-all hover:bg-white/5 text-sm uppercase tracking-wider"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Interactive Globe Section */}
      <GlobeSection />

      {/* Stats Section */}
      <section className="py-20 bg-swift-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="stat-item">
              <p className="text-4xl font-display font-bold text-swift-primary mb-2">15+</p>
              <p className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="stat-item">
              <p className="text-4xl font-display font-bold text-swift-primary mb-2">50+</p>
              <p className="text-sm text-gray-600 uppercase tracking-wider">Countries Served</p>
            </div>
            <div className="stat-item">
              <p className="text-4xl font-display font-bold text-swift-primary mb-2">10,000+</p>
              <p className="text-sm text-gray-600 uppercase tracking-wider">Shipments</p>
            </div>
            <div className="stat-item">
              <p className="text-4xl font-display font-bold text-swift-primary mb-2">24/7</p>
              <p className="text-sm text-gray-600 uppercase tracking-wider">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-swift-secondary to-swift-secondary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Ship?</h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Get in touch with our team today for a personalized shipping solution tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="bg-swift-primary hover:bg-swift-primary-hover text-white px-8 py-4 rounded-sm font-bold transition-all shadow-lg hover:shadow-swift-primary/30 text-sm uppercase tracking-wider"
              >
                Request Quote
              </Link>
              <a
                href="tel:+971553424700"
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-sm font-bold transition-all border border-white/20 text-sm uppercase tracking-wider"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
