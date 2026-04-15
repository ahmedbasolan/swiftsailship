"use client"

import Link from "next/link";
import { GlobeInteractive } from "@/components/ui/globe-interactive";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swift Sail Shipping - Premium Logistics & Cargo Solutions UAE",
  description: "Swift Sail Shipping LLC offers premium freight forwarding, customs clearance, and logistics services in the UAE. Your trusted partner for global shipping solutions.",
  alternates: {
    canonical: "https://swiftsailship.com",
  },
};

const globalMarkers = [
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], name: "Dubai HQ", users: 2840 },
  { id: "sharjah", location: [25.2854, 55.3861] as [number, number], name: "Sharjah", users: 1250 },
  { id: "abudhabi", location: [24.4539, 54.3773] as [number, number], name: "Abu Dhabi", users: 980 },
  { id: "jebelali", location: [25.0356, 55.3184] as [number, number], name: "Jebel Ali", users: 2150 },
  { id: "rotterdam", location: [51.9225, 4.4793] as [number, number], name: "Rotterdam", users: 1850 },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], name: "Singapore", users: 2420 },
];

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
      <section className="py-20 bg-gradient-to-b from-swift-background-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-swift-primary/10 border border-swift-primary/30 text-swift-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Global Network
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-swift-secondary dark:text-white mb-6">
                Connecting the World
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Our strategic partnerships and global network ensure your cargo reaches every corner of the world efficiently and reliably.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-swift-primary rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300">50+ countries served worldwide</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-swift-primary rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300">Strategic port partnerships</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-swift-primary rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300">Real-time cargo tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-swift-primary rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300">24/7 global support</span>
                </li>
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center text-swift-primary font-semibold hover:translate-x-1 transition-transform"
              >
                Learn More <i className="fa-solid fa-arrow-right ml-2 text-xs" />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <GlobeInteractive markers={globalMarkers} className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
