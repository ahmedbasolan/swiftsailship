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

              {/* Map Module */}
              <div className="rounded-xl overflow-hidden h-64 w-full relative group">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-0" />
                <img 
                  alt="Map Location" 
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110" 
                  src="/assets/img/dubai_map_location_1776261655983.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 flex items-end p-4">
                  <a className="text-white text-sm font-bold flex items-center gap-1 hover:underline" href="https://maps.google.com/?q=Tanvi+Business+Centre+Abu+Hail+Dubai" target="_blank" rel="noopener noreferrer">
                    View on Google Maps <i className="fas fa-external-link-alt text-sm ml-1" />
                  </a>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-swift-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg">
                  <i className="fas fa-certificate text-swift-primary" />
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-300">ISO 9001 Certified</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-swift-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg">
                  <i className="fas fa-anchor text-swift-primary" />
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Port Auth. Member</span>
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

          {/* FAQ Section */}
          <div className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-swift-secondary dark:text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">Do you handle hazardous materials?</h4>
                <p className="text-gray-600 dark:text-gray-400">Yes, we are fully certified to handle and transport hazardous classes 2 through 9. Please specify this in your inquiry.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">What regions do you serve?</h4>
                <p className="text-gray-600 dark:text-gray-400">We operate globally with a strong focus on GCC, European, and Asian shipping routes.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">How can I track my shipment?</h4>
                <p className="text-gray-600 dark:text-gray-400">Once your shipment is booked, you will receive a unique tracking ID to monitor progress via our client portal.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">Do you offer customs brokerage services?</h4>
                <p className="text-gray-600 dark:text-gray-400">Absolutely. Our in-house customs brokers ensure your goods clear borders smoothly and efficiently.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
