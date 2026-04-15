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
      icon: "fa-ship",
      title: "Sea Freight",
      description: "Reliable ocean shipping worldwide with competitive rates and flexible scheduling.",
      features: ["FCL & LCL options", "Door-to-door delivery", "Real-time tracking"]
    },
    {
      icon: "fa-plane",
      title: "Air Freight",
      description: "Fast air cargo delivery for time-sensitive shipments.",
      features: ["Express delivery", "Customs handling", "Priority routing"]
    },
    {
      icon: "fa-file-contract",
      title: "Customs Brokerage",
      description: "Expert customs clearance and documentation services.",
      features: ["Document preparation", "Duty calculation", "Compliance management"]
    },
    {
      icon: "fa-warehouse",
      title: "Warehousing",
      description: "Secure storage solutions with inventory management.",
      features: ["Climate control", "24/7 security", "Inventory tracking"]
    },
    {
      icon: "fa-truck",
      title: "Last-Mile Delivery",
      description: "Efficient final mile delivery to your doorstep.",
      features: ["Flexible scheduling", "Real-time updates", "Proof of delivery"]
    },
    {
      icon: "fa-globe",
      title: "Global Logistics",
      description: "End-to-end supply chain management across continents.",
      features: ["Multi-modal transport", "Risk management", "Cost optimization"]
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

        {/* CTA Section */}
        <section className="bg-swift-background-light dark:bg-swift-surface-dark py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="relative z-10 lg:w-2/3">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-swift-secondary dark:text-white mb-2">
                  Need Custom Shipping Solutions?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team of experts will create a tailored logistics plan for your specific requirements.
                </p>
              </div>
              <div className="relative z-10 lg:w-1/3 w-full">
                <Link
                  href="/get-quote"
                  className="block w-full bg-swift-primary hover:bg-swift-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-swift-primary/30 uppercase tracking-wide text-sm text-center"
                >
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
