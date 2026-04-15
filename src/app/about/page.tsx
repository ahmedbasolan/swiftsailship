import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Swift Sail Shipping LLC",
  description: "Learn about Swift Sail Shipping LLC - our history, mission, and commitment to excellence in global logistics and shipping services.",
  alternates: {
    canonical: "https://swiftsailship.com/about",
  },
};

export default function AboutPage() {
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
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            About <span className="text-swift-primary">Swift Sail</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Discover our journey, values, and commitment to excellence in global shipping and logistics.
          </p>
        </div>
      </header>

      <main className="relative z-20 -mt-10">
        {/* Who We Are Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-swift-surface-light dark:bg-swift-surface-dark rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-swift-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-swift-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold text-swift-primary uppercase tracking-widest mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-swift-secondary dark:text-white mb-4">
                A Premier UAE Logistics Partner
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Founded with a vision to revolutionize freight forwarding in the Gulf, Swift Sail Shipping L.L.C. has grown into a cornerstone of the UAE's supply chain infrastructure. We are dedicated to streamlining global trade through efficient UAE gateways, providing end-to-end freight solutions that are as reliable as they are swift.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                Our operational coverage extends extensively around major ports like Sharjah and Jebel Ali, where our expert customs brokerage and on-ground teams ensure your cargo moves without delay. We don't just ship goods; we navigate complexities to deliver peace of mind.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <i className="fas fa-calendar-alt text-2xl" />
                </div>
                <p className="text-3xl font-display font-bold text-swift-primary mb-2">15+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <i className="fas fa-map-marked-alt text-2xl" />
                </div>
                <p className="text-3xl font-display font-bold text-swift-primary mb-2">12</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Ports Covered</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <i className="fas fa-weight text-2xl" />
                </div>
                <p className="text-3xl font-display font-bold text-swift-primary mb-2">500k+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Tons Shipped</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="relative py-24 bg-swift-secondary overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-sm font-bold text-swift-primary uppercase tracking-widest mb-3">Our Driving Force</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Mission, Vision & Values</h3>
              <p className="text-gray-300">The principles that guide every shipment, every contract, and every handshake at Swift Sail Shipping.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-flag text-2xl" />
                </div>
                <h3 className="text-white text-xl font-display font-bold mb-3">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To simplify the complexities of global logistics for UAE businesses by providing reliable, transparent, and efficient freight solutions that empower growth.
                </p>
              </div>
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-eye text-2xl" />
                </div>
                <h3 className="text-white text-xl font-display font-bold mb-3">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the undisputed leader in Gulf maritime logistics, recognized for our commitment to innovation, sustainability, and customer-centric service.
                </p>
              </div>
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-gem text-2xl" />
                </div>
                <h3 className="text-white text-xl font-display font-bold mb-3">Our Values</h3>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-swift-primary font-medium">Precision:</span> In documentation and delivery.<br />
                  <span className="text-swift-primary font-medium">Integrity:</span> Honest pricing and transparency.<br />
                  <span className="text-swift-primary font-medium">Agility:</span> Adapting to the dynamic needs of trade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Swift Sail Section */}
        <section className="bg-gradient-to-br from-swift-surface-light to-white dark:from-swift-surface-dark dark:to-swift-background-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-sm border border-swift-primary/60 text-swift-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-swift-secondary dark:text-white mb-6">
                Why Swift Sail
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Trust and expertise that set us apart in the competitive UAE logistics landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative bg-white dark:bg-swift-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-swift-primary/10 rounded-bl-full transition-all group-hover:bg-swift-primary/20" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-lg flex items-center justify-center text-white mb-6 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="fa-solid fa-bolt text-2xl" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-swift-secondary dark:text-white mb-3">Fast Response</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Quick response times and clear communication throughout your shipping journey.
                  </p>
                </div>
              </div>
              <div className="group relative bg-white dark:bg-swift-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-swift-primary/10 rounded-bl-full transition-all group-hover:bg-swift-primary/20" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-lg flex items-center justify-center text-white mb-6 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="fa-solid fa-file-alt text-2xl" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-swift-secondary dark:text-white mb-3">Documentation Accuracy</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Meticulous focus on documentation accuracy to avoid costly clearance delays.
                  </p>
                </div>
              </div>
              <div className="group relative bg-white dark:bg-swift-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-swift-primary/10 rounded-bl-full transition-all group-hover:bg-swift-primary/20" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-lg flex items-center justify-center text-white mb-6 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="fa-solid fa-anchor text-2xl" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-swift-secondary dark:text-white mb-3">UAE Port Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Extensive experience with Sharjah and Jebel Ali ports and free zones.
                  </p>
                </div>
              </div>
              <div className="group relative bg-white dark:bg-swift-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-swift-primary/10 rounded-bl-full transition-all group-hover:bg-swift-primary/20" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-lg flex items-center justify-center text-white mb-6 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <i className="fa-solid fa-exchange-alt text-2xl" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-swift-secondary dark:text-white mb-3">Re-Export Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Specialized support for re-export and free zone movements across the UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-swift-background-light dark:bg-swift-surface-dark py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="relative z-10 lg:w-2/3">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-swift-secondary dark:text-white mb-2">
                  Ready to Move Your Cargo?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Experience the Swift Sail difference today. Get in touch for a personalized quote tailored to your specific logistics needs.
                </p>
              </div>
              <div className="relative z-10 lg:w-1/3 w-full">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/get-quote"
                    className="bg-swift-primary hover:bg-swift-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-swift-primary/30 uppercase tracking-wide text-sm flex items-center justify-center gap-2"
                  >
                    Get a Free Quote <i className="fa-solid fa-arrow-right" />
                  </Link>
                  <Link
                    href="/get-quote"
                    className="border border-gray-300 dark:border-gray-600 hover:border-swift-primary text-gray-700 dark:text-gray-300 hover:text-swift-primary px-6 py-3 rounded-md font-medium transition-all uppercase tracking-wide text-sm flex items-center justify-center"
                  >
                    Contact Operations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
