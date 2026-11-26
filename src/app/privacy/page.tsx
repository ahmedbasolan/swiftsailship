import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { site } from "@/lib/site";

const title = "Privacy policy";
const description =
  "How Swift Sail Shipping L.L.C. collects, uses and protects client data under UAE Federal Decree-Law No. 45 of 2021 on personal data protection.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/privacy` },
  openGraph: { title, description, url: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy policy"
        lead="What information we collect through this website and our freight work, why we collect it and who we share it with. Last updated August 2026."
      />

      <div className="wrap section">
        <div className="article max-w-[68ch]">
          <p>
            Swift Sail Shipping L.L.C. (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your right to data privacy. This Policy outlines our practices regarding information collected through <Link href="/">swiftsailship.com</Link> and associated freight operations in compliance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection.
          </p>

          <h2>1. Information we collect</h2>
          <p>We collect information submitted directly by shippers, importers, and partners:</p>
          <ul>
            <li><strong>Contact Identifiers:</strong> Name, corporate entity, trade license number, business email, and direct telephone numbers.</li>
            <li><strong>Consignment Data:</strong> Cargo specifications, origin/destination ports, Harmonized System (HS) codes, commercial invoice values, and bill of lading consignee records.</li>
            <li><strong>Technical Metadata:</strong> IP address, browser type, submission timestamps, and interaction logs for system security and rate quotation processing.</li>
          </ul>

          <h2>2. Purpose of data processing</h2>
          <p>Client information is processed strictly for legitimate maritime and logistics functions:</p>
          <ul>
            <li>Preparing accurate sea, air, and land freight quotations.</li>
            <li>Executing customs declarations and electronic Mirsal 2 submissions.</li>
            <li>Issuing Bills of Lading, Air Waybills, and delivery orders with port authorities and carriers.</li>
            <li>Maintaining mandatory UAE regulatory trade records.</li>
          </ul>

          <h2>3. Data sharing and disclosure</h2>
          <p>
            We do not sell, rent, or trade client information. Consignment data is shared strictly on a need-to-know basis with authorized third parties necessary to complete your shipment:
          </p>
          <ul>
            <li>Ocean carriers, airlines, and feeder operators for booking execution.</li>
            <li>Dubai Customs, Federal Customs Authority, and port terminal operators (DP World, Sharjah Ports).</li>
            <li>Inspection authorities (MOIAT, ESMA, Municipality) when mandated for statutory clearance.</li>
          </ul>

          <h2>4. Data security and storage</h2>
          <p>
            All customer documentation and digital communications are safeguarded using enterprise-grade encryption and secure access controls. Data is retained only for the duration required by UAE commercial law and statutory tax/customs auditing obligations.
          </p>

          <h2>5. Contact information</h2>
          <p>For data access requests, corrections, or privacy inquiries, contact our compliance desk:</p>
          <p>
            {site.legalName}
            <br />
            Attn: Data Compliance Officer
            <br />
            {site.address}
            <br />
            <a href={site.emailHref}>{site.email}</a> · <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </div>
    </>
  );
}
