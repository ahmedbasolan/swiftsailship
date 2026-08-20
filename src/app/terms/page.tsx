import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Commercial Freight & Customs Brokerage | Swift Sail Shipping L.L.C.",
  description:
    "Standard trading conditions for commercial freight forwarding, ocean charters, customs clearance, and port operations under UAE Maritime Commercial Law.",
  alternates: {
    canonical: "https://www.swiftsailship.com/terms",
  },
  openGraph: {
    type: "website",
    title: "Terms of Service | Swift Sail Shipping L.L.C.",
    description:
      "Standard trading conditions for commercial freight forwarding, ocean charters, customs clearance, and port operations under UAE Maritime Commercial Law.",
    url: "https://www.swiftsailship.com/terms",
    images: ["/assets/img/og-default.jpg"],
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col bg-[#FBF9F5] dark:bg-[#070E18]">
      {/* Editorial Hero */}
      <header className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-[#070E18] text-white border-b border-[#C5A47E]/30 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="editorial-stamp text-[#C5A47E]">
              LEGAL INSTRUMENT • MARITIME CODE
            </span>
            <span className="text-xs font-mono text-gray-400">
              UAE COMMERCIAL LAW COMPLIANT
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Standard Trading Terms & Conditions
          </h1>

          <p className="text-sm sm:text-base text-gray-300 font-sans font-light max-w-3xl leading-relaxed">
            General trading conditions governing commercial freight forwarding, vessel agency, customs brokerage, stevedoring, and multi-modal logistics operations.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-white dark:bg-[#0D1B2A] border border-gray-200 dark:border-[#C5A47E]/20 rounded-lg p-8 sm:p-12 text-slate-800 dark:text-gray-300 space-y-8 text-sm leading-relaxed">
          <div>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400 block mb-1">EFFECTIVE DATE: AUGUST 2026</span>
            <p className="text-xs text-slate-600 dark:text-gray-400">
              These Standard Trading Terms and Conditions govern all commercial freight forwarding, maritime agency, customs brokerage, stevedoring, and warehousing operations performed by <strong>Swift Sail Shipping L.L.C.</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a licensed maritime and logistics entity registered under the Department of Economy and Tourism (DET), Dubai, United Arab Emirates.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              1. Scope of Application & Role as Agent
            </h2>
            <p>
              Unless expressly agreed otherwise in writing signed by an authorized signatory of Swift Sail Shipping L.L.C., all business conducted, quotes provided, and contracts entered into are subject to these terms. Unless issued under our own House Bill of Lading (HBL) or Master Air Waybill (MAWB) as principal carrier, Swift Sail acts strictly as an agent for the Shipper/Customer in contracting with third-party ocean lines, air carriers, terminal operators, and hauliers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              2. Shipper Warranties & Cargo Declarations
            </h2>
            <p>The Customer warrants and guarantees:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-gray-300">
              <li>All descriptions, values, gross weights, measurements (CBM), and Harmonized System (HS) classifications provided to Swift Sail are exact and complete.</li>
              <li>Cargo is properly packed, marked, labeled, and prepared to withstand standard maritime and multi-modal handling hazards in accordance with IMO and IATA standards.</li>
              <li>No prohibited, contraband, or undeclared Dangerous Goods (DG) under the IMDG Code or IATA DGR regulations are tendered without prior written disclosure and safety documentation (MSDS, DGD).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              3. Customs Clearance & Regulatory Compliance
            </h2>
            <p>For customs brokerage engagements via Dubai Customs Mirsal 2 or Federal Customs Authority:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-gray-300">
              <li>The Customer is solely responsible for the authenticity of original commercial invoices, packing lists, and Certificates of Origin (CoO).</li>
              <li>All applicable customs duties, 5% UAE VAT, inspection fees, municipality charges, and regulatory permits (MOIAT, ESMA, MOCCAE, TDRA) are the sole liability of the Importer of Record.</li>
              <li>Swift Sail reserves the right to withhold cargo release until all statutory duties, port storage, and clearance disbursement charges are settled in full.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              4. Quotations, Surcharges & Demurrage
            </h2>
            <p>
              All rate quotations are based on carrier tariffs, bunker fuel surcharges (BAF), currency exchange rates, and port terminal handling charges (THC) prevailing at the date of issuance. Rates are subject to standard carrier GRI (General Rate Increases), peak season surcharges (PSS), and container demurrage/detention fees incurred beyond free-time allowances at origin or destination terminals.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              5. Limitation of Liability & Marine Insurance
            </h2>
            <p>
              Swift Sail’s liability for loss, damage, or delay to cargo is strictly limited in accordance with UAE Maritime Commercial Law (Federal Law No. 26 of 1981) and international conventions (Hague-Visby Rules, Montreal Convention 1999). We strongly advise all customers to procure comprehensive Marine Cargo Insurance (Institute Cargo Clauses A) for full consignment value protection.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-slate-950 dark:text-white border-b border-gray-100 dark:border-white/10 pb-2">
              6. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the Federal Laws of the United Arab Emirates. The competent courts of Dubai shall have exclusive jurisdiction.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-white/10 text-xs text-gray-500 dark:text-gray-400 font-mono">
            <span>Swift Sail Shipping L.L.C. • Legal & Compliance Desk</span>
            <br />
            <span>Tanvi Business Centre, M-101, Abu Hail, Dubai, UAE • info@swiftsailship.com</span>
          </div>
        </div>
      </main>
    </div>
  );
}
