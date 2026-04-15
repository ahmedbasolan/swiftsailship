"use client"

import { useState } from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Quote - Swift Sail Shipping",
  description: "Request a shipping quote from Swift Sail Shipping LLC. Fast response, competitive rates, and expert logistics solutions for your cargo needs.",
  alternates: {
    canonical: "https://swiftsailship.com/get-quote",
  },
};

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    cargoType: "",
    origin: "",
    destination: "",
    weight: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send to a backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                  <i className="fas fa-check-circle text-4xl text-green-500 mb-4" />
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">Thank You!</h3>
                  <p className="text-green-700 dark:text-green-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Cargo Type *
                      </label>
                      <select
                        name="cargoType"
                        required
                        value={formData.cargoType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                      >
                        <option value="">Select type</option>
                        <option value="fcl">FCL (Full Container)</option>
                        <option value="lcl">LCL (Less than Container)</option>
                        <option value="air">Air Freight</option>
                        <option value="project">Project Cargo</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Weight (kg) *
                      </label>
                      <input
                        type="number"
                        name="weight"
                        required
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                        placeholder="1000"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Origin *
                      </label>
                      <input
                        type="text"
                        name="origin"
                        required
                        value={formData.origin}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                        placeholder="Dubai, UAE"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Destination *
                      </label>
                      <input
                        type="text"
                        name="destination"
                        required
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                        placeholder="London, UK"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                      placeholder="Any special requirements or instructions..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-swift-primary hover:bg-swift-primary-hover text-white px-6 py-4 rounded-md font-medium transition-all shadow-lg hover:shadow-swift-primary/30 uppercase tracking-wide text-sm"
                  >
                    Submit Request
                  </button>
                </form>
              )}
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
