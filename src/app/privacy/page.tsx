import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Swift Sail Shipping L.L.C.",
  description:
    "How Swift Sail Shipping L.L.C. collects, processes, and protects client data in compliance with UAE Federal Decree-Law No. 45 of 2021 (PDPL).",
  alternates: {
    canonical: "https://www.swiftsailship.com/privacy",
  },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Swift Sail Shipping L.L.C.",
    description:
      "How Swift Sail Shipping L.L.C. collects, processes, and protects client data in compliance with UAE Federal Decree-Law No. 45 of 2021 (PDPL).",
    url: "https://www.swiftsailship.com/privacy",
    images: ["/assets/img/og-default.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col bg-[#FBF9F5] dark:bg-[#070E18]">
      {/* Editorial Hero */}
      <header className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-[#070E18] text-white border-b border-[#C5A47E]/30 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="editorial-stamp text-[#C5A47E]">
              DATA PROTECTION • PRIVACY CHARTER
            </span>
            <span className="text-xs font-mono text-gray-400">
              UAE PDPL COMPLIANT
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Client Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-gray-300 font-sans font-light max-w-3xl leading-relaxed">
            Information handling, data privacy safeguards, and regulatory disclosures governing digital inquiries and freight consignments.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-white dark:bg-[#0D1B2A] border border-gray-200 dark:border-[#C5A47E]/20 rounded-lg p-8 sm:p-12 text-slate-800 dark:text-gray-300 space-y-8 text-sm leading-relaxed">
          <div>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400 block mb-1">LAST UPDATED: AUGUST 2026</span>
            <p className="text-xs text-slate-600 dark:text-gray-400">
              Swift Sail Shipping L.L.C. (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your right to data privacy. This Policy outlines our practices regarding information collected through <Link href="/" className="text-[#C5A47E] underline">swiftsailship.com</Link> and associated freight operations in compliance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              1. Information We Collect
            </h2>
            <p>We collect information submitted directly by shippers, importers, and partners:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-gray-300">
              <li><strong>Contact Identifiers:</strong> Name, corporate entity, trade license number, business email, and direct telephone numbers.</li>
              <li><strong>Consignment Data:</strong> Cargo specifications, origin/destination ports, Harmonized System (HS) codes, commercial invoice values, and bill of lading consignee records.</li>
              <li><strong>Technical Metadata:</strong> IP address, browser type, submission timestamps, and interaction logs for system security and rate quotation processing.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              2. Purpose of Data Processing
            </h2>
            <p>Client information is processed strictly for legitimate maritime and logistics functions:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-gray-300">
              <li>Preparing accurate sea, air, and land freight quotations.</li>
              <li>Executing customs declarations and electronic Mirsal 2 submissions.</li>
              <li>Issuing Bills of Lading, Air Waybills, and delivery orders with port authorities and carriers.</li>
              <li>Maintaining mandatory UAE regulatory trade records.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              3. Data Sharing & Disclosure
            </h2>
            <p>
              We do not sell, rent, or trade client information. Consignment data is shared strictly on a need-to-know basis with authorized third parties necessary to complete your shipment:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-gray-300">
              <li>Ocean carriers, airlines, and feeder operators for booking execution.</li>
              <li>Dubai Customs, Federal Customs Authority, and port terminal operators (DP World, Sharjah Ports).</li>
              <li>Inspection authorities (MOIAT, ESMA, Municipality) when mandated for statutory clearance.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              4. Data Security & Storage
            </h2>
            <p>
              All customer documentation and digital communications are safeguarded using enterprise-grade encryption and secure access controls. Data is retained only for the duration required by UAE commercial law and statutory tax/customs auditing obligations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              5. Contact Information
            </h2>
            <p>
              For data access requests, corrections, or privacy inquiries, contact our compliance desk:
            </p>
            <p className="font-mono text-xs text-slate-700 dark:text-gray-300">
              Swift Sail Shipping L.L.C.<br />
              Attn: Data Compliance Officer<br />
              Tanvi Business Centre, M - 101, Abu Hail, Dubai, UAE<br />
              Email: info@swiftsailship.com • Tel: +971 55 342 4700
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
