import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Swift Sail Shipping Process",
  description: "Learn how Swift Sail Shipping handles your cargo from start to finish. Our transparent process ensures smooth logistics, customs clearance, and delivery across the UAE and beyond.",
  alternates: {
    canonical: "https://swiftsailship.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: "fa-handshake",
      title: "Initial Inquiry",
      description: "Share your cargo requirements and receive personalized consultation from our logistics experts.",
      details: ["Cargo specifications analysis", "Route planning consultation", "Timeline assessment", "Cost estimation"]
    },
    {
      number: 2,
      icon: "fa-file-contract",
      title: "Quote & Agreement",
      description: "Receive detailed pricing and service terms. Review and confirm the agreement to proceed.",
      details: ["Detailed cost breakdown", "Service level agreement", "Timeline confirmation", "Payment terms"]
    },
    {
      number: 3,
      icon: "fa-file-alt",
      title: "Documentation",
      description: "Prepare and submit all necessary shipping documents with our expert guidance.",
      details: ["Commercial invoice preparation", "Packing list verification", "Bill of lading processing", "Certificate of origin"]
    },
    {
      number: 4,
      icon: "fa-ship",
      title: "Cargo Booking",
      description: "Secure vessel space and coordinate shipping schedules for optimal transit times.",
      details: ["Vessel selection", "Space reservation", "Schedule confirmation", "Loading coordination"]
    },
    {
      number: 5,
      icon: "fa-shield-alt",
      title: "Customs Clearance",
      description: "Navigate customs procedures efficiently with our experienced brokers and compliance team.",
      details: ["Document submission", "Duty calculation", "Inspection coordination", "Release authorization"]
    },
    {
      number: 6,
      icon: "fa-truck",
      title: "Final Delivery",
      description: "Complete the journey with efficient last-mile delivery to your specified destination.",
      details: ["Transport arrangement", "Delivery scheduling", "Unloading supervision", "Document handover"]
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
            Transparent Process • Reliable Results
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            How It Works <br />
            <span className="text-swift-primary">Your Cargo Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            From initial inquiry to final delivery, our streamlined process ensures your cargo moves efficiently through every stage. We handle the complexity so you can focus on your business.
          </p>
        </div>
      </header>

      <main className="relative z-20 -mt-10">
        {/* Process Steps */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-swift-surface-light dark:bg-swift-surface-dark rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-16 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-swift-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-swift-primary/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-xs font-bold text-swift-primary uppercase tracking-[0.2em] mb-4">Process Overview</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-swift-secondary dark:text-white mb-6">
                Step-by-Step Journey
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our proven process ensures your cargo moves smoothly from origin to destination. Each step is carefully managed by our experienced team to guarantee efficiency and compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="bg-white dark:bg-swift-surface-dark border border-gray-200 dark:border-gray-700 rounded-2xl p-8 relative hover:shadow-xl transition-all duration-300">
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-swift-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <i className={`fas ${step.icon} text-2xl text-swift-primary`} />
                    <h3 className="text-2xl font-bold text-swift-secondary dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="fas fa-check text-swift-primary mt-1 mr-3" />
                        {detail}
                      </li>
                    ))}
                  </ul>
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
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Contact us today and experience our streamlined shipping process firsthand.
                </p>
              </div>
              <div className="relative z-10 lg:w-1/3 w-full">
                <Link
                  href="/get-quote"
                  className="block w-full bg-swift-primary hover:bg-swift-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-swift-primary/30 uppercase tracking-wide text-sm text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
