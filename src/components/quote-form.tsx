"use client"

import { useState } from "react";

export default function QuoteForm() {
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

  if (isSubmitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <i className="fas fa-check-circle text-4xl text-green-500 mb-4" />
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">Thank You!</h3>
        <p className="text-green-700 dark:text-green-300">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
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
  );
}
