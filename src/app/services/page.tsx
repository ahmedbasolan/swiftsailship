import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swift Sail Services - Global Logistics & Cargo Solutions",
  description: "Swift Sail Shipping offers comprehensive logistics and shipping services including sea freight, air freight, customs clearance, warehousing, and last-mile delivery across the UAE and internationally.",
  alternates: {
    canonical: "https://swiftsailship.com/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: "fa-boxes-stacked",
      title: "Cargo Loading & Unloading",
      description: "Professional and safe handling of your cargo at ports and warehouses.",
      features: ["Heavy Lift Operations", "Container Stuffing", "Fragile Goods Handling"]
    },
    {
      icon: "fa-handshake",
      title: "Freight Broker",
      description: "Connecting your cargo with the most efficient transport routes globally.",
      features: ["Air Freight", "Sea Freight", "Land Transport"]
    },
    {
      icon: "fa-file-contract",
      title: "Customs Broker",
      description: "Navigating complex customs regulations for smooth border crossing.",
      features: ["Document Preparation", "Duty Calculation", "Clearance Processing"]
    },
    {
      icon: "fa-anchor",
      title: "Sea Shipping Lines Agent",
      description: "Direct representation for major shipping lines ensuring priority booking.",
      features: ["Vessel Handling", "Port Operations", "Crew Change Support"]
    }
  ];

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
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Refining Global Trade <br />
            <span className="text-swift-primary">With Gulf Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Experience world-class shipping solutions tailored for the GCC region and beyond. We bridge continents with precision, speed, and luxury service standards.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-swift-primary">15+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-swift-primary">50+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-swift-primary">10,000+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Shipments</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-swift-primary">24/7</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Support</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-20 -mt-10">
        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-swift-surface-light dark:bg-swift-surface-dark rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-swift-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-swift-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold text-swift-primary uppercase tracking-widest mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-swift-secondary dark:text-white mb-4">
                Comprehensive Shipping Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                End-to-end logistics services ensuring your cargo reaches its destination safely, efficiently, and on time. We specialize in navigating the complex regulatory landscapes of the GCC.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-swift-surface-dark rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-swift-primary/10 rounded-bl-full transition-all group-hover:bg-swift-primary/20" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-lg flex items-center justify-center text-white mb-6 shadow-lg shadow-swift-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <i className={`fa-solid ${service.icon} text-2xl`} />
                    </div>
                    <h4 className="text-xl font-display font-bold text-swift-secondary dark:text-white mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <i className="fa-solid fa-check text-swift-primary mr-2 text-xs" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/get-quote"
                      className="inline-flex items-center text-swift-primary font-semibold text-sm hover:translate-x-1 transition-transform uppercase tracking-wider"
                    >
                      Learn More <i className="fa-solid fa-arrow-right ml-2 text-xs" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-24 bg-swift-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Global shipping routes" 
              className="w-full h-full object-cover opacity-40 mix-blend-screen" 
              src="/assets/img/global_shipping_1776261498445.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-swift-secondary to-swift-secondary/40"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-swift-primary uppercase tracking-widest mb-3">Global Reach, Local Expertise</h2>
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">Operating in Major Ports Across the Globe</h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Our extensive network of international partners and agents worldwide allows us to offer seamless logistics solutions, regardless of origin or destination.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-swift-primary/20 flex items-center justify-center mr-4">
                      <i className="fas fa-check text-swift-primary text-sm"></i>
                    </div>
                    Dedicated trade routes to Asia, Europe, and the Americas
                  </li>
                  <li className="flex items-center text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-swift-primary/20 flex items-center justify-center mr-4">
                      <i className="fas fa-check text-swift-primary text-sm"></i>
                    </div>
                    Strong compliance with international shipping laws
                  </li>
                  <li className="flex items-center text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-swift-primary/20 flex items-center justify-center mr-4">
                      <i className="fas fa-check text-swift-primary text-sm"></i>
                    </div>
                    Integrated multi-modal transport options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Tracking Section */}
        <section className="bg-swift-background-light dark:bg-swift-surface-dark py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-swift-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10 lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-swift-secondary dark:text-white mb-4">
                  Track Your Shipment
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Enter your tracking number or Bill of Lading to get real-time updates on your cargo's status.
                </p>
                <form className="flex flex-col sm:flex-row gap-4" data-track-form>
                  <input 
                    type="text" 
                    required 
                    className="flex-1 rounded-lg text-gray-900 dark:text-white dark:bg-gray-900 focus:outline-0 focus:ring-2 focus:ring-swift-primary/20 border border-gray-300 dark:border-gray-600 h-14 placeholder:text-gray-500 p-4" 
                    placeholder="Enter Container or B/L Number"
                  />
                  <button type="submit" className="bg-swift-primary hover:bg-swift-primary-hover text-white px-8 py-0 rounded-lg h-14 font-medium transition-all shadow-lg shadow-swift-primary/30 uppercase tracking-wide text-sm whitespace-nowrap">
                    Track Now
                  </button>
                </form>
              </div>
              <div className="relative z-10 lg:w-1/3 w-full text-center lg:text-left border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 pt-8 lg:pt-0 lg:pl-12">
                <h4 className="text-lg font-bold text-swift-secondary dark:text-white mb-2">Need Custom Solutions?</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Contact our sales team for tailored logistics plans.</p>
                <Link href="/get-quote" className="inline-block border border-swift-primary text-swift-primary hover:bg-swift-primary hover:text-white px-6 py-2.5 rounded-md font-medium transition-all text-sm uppercase tracking-wide">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
