import Link from "next/link";
import { Metadata } from "next";
import QuoteForm from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Get Quote - Swift Sail Shipping",
  description: "Request a shipping quote from Swift Sail Shipping LLC. Fast response, competitive rates, and expert logistics solutions for your cargo needs.",
  alternates: {
    canonical: "https://swiftsailship.com/get-quote",
  },
};

export default function GetQuotePage() {
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
            Get Started
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Request a <span className="text-swift-primary">Free Quote</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Get in touch with our team for a personalized shipping solution tailored to your specific logistics needs.
          </p>
        </div>
      </header>

      <main className="relative z-20 -mt-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-swift-surface-light dark:bg-swift-surface-dark rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-12">
              <h2 className="text-2xl font-display font-bold text-swift-secondary dark:text-white mb-6">
                Send Us Your Requirements
              </h2>
              <QuoteForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-swift-surface-light dark:bg-swift-surface-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-8">
                <h3 className="text-xl font-display font-bold text-swift-secondary dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-swift-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-swift-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-swift-secondary dark:text-white">Phone</p>
                      <a href="tel:+971553424700" className="text-gray-600 dark:text-gray-400 hover:text-swift-primary transition-colors">
                        +971 55 342 4700
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-swift-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-swift-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-swift-secondary dark:text-white">Email</p>
                      <a href="mailto:info@swiftsailship.com" className="text-gray-600 dark:text-gray-400 hover:text-swift-primary transition-colors">
                        info@swiftsailship.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-swift-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-swift-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-swift-secondary dark:text-white">Address</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Dubai, Abu Hail, Tanvi Business Centre, M - 101
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-swift-secondary rounded-xl p-8 text-center">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-300 mb-6">
                  Our team is available 24/7 to assist with urgent shipping needs.
                </p>
                <a
                  href="tel:+971553424700"
                  className="inline-flex items-center bg-swift-primary hover:bg-swift-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all uppercase tracking-wide text-sm"
                >
                  <i className="fas fa-phone mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
