"use client"

import Link from "next/link";
import { GlobeInteractive } from "@/components/ui/globe-interactive";

const globalMarkers = [
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], name: "Dubai HQ", users: 2840 },
  { id: "sharjah", location: [25.2854, 55.3861] as [number, number], name: "Sharjah", users: 1250 },
  { id: "abudhabi", location: [24.4539, 54.3773] as [number, number], name: "Abu Dhabi", users: 980 },
  { id: "jebelali", location: [25.0356, 55.3184] as [number, number], name: "Jebel Ali", users: 2150 },
  { id: "rotterdam", location: [51.9225, 4.4793] as [number, number], name: "Rotterdam", users: 1850 },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], name: "Singapore", users: 2420 },
];

export default function GlobeSection() {
  return (
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
  );
}
