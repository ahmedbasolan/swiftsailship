import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { site } from "@/lib/site";

const title = "Standard trading terms and conditions";
const description =
  "Standard trading conditions for freight forwarding, customs clearance and logistics services provided by Swift Sail Shipping L.L.C. in Dubai.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/terms` },
  openGraph: { title, description, url: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Standard trading terms and conditions"
        lead="The conditions that apply to freight forwarding, vessel agency, customs brokerage, stevedoring and logistics work carried out by Swift Sail Shipping L.L.C. Effective August 2026."
      />

      <div className="wrap section">
        <div className="article max-w-[68ch]">
          <p>
            These Standard Trading Terms and Conditions govern all commercial freight forwarding, maritime agency, customs brokerage, stevedoring, and warehousing operations performed by <strong>Swift Sail Shipping L.L.C.</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a licensed maritime and logistics entity registered under the Department of Economy and Tourism (DET), Dubai, United Arab Emirates.
          </p>

          <h2>1. Scope of application and role as agent</h2>
          <p>
            Unless expressly agreed otherwise in writing signed by an authorized signatory of Swift Sail Shipping L.L.C., all business conducted, quotes provided, and contracts entered into are subject to these terms. Unless issued under our own House Bill of Lading (HBL) or Master Air Waybill (MAWB) as principal carrier, Swift Sail acts strictly as an agent for the Shipper/Customer in contracting with third-party ocean lines, air carriers, terminal operators, and hauliers.
          </p>

          <h2>2. Shipper warranties and cargo declarations</h2>
          <p>The Customer warrants and guarantees:</p>
          <ul>
            <li>All descriptions, values, gross weights, measurements (CBM), and Harmonized System (HS) classifications provided to Swift Sail are exact and complete.</li>
            <li>Cargo is properly packed, marked, labeled, and prepared to withstand standard maritime and multi-modal handling hazards in accordance with IMO and IATA standards.</li>
            <li>No prohibited, contraband, or undeclared Dangerous Goods (DG) under the IMDG Code or IATA DGR regulations are tendered without prior written disclosure and safety documentation (MSDS, DGD).</li>
          </ul>

          <h2>3. Customs clearance and regulatory compliance</h2>
          <p>For customs brokerage engagements via Dubai Customs Mirsal 2 or Federal Customs Authority:</p>
          <ul>
            <li>The Customer is solely responsible for the authenticity of original commercial invoices, packing lists, and Certificates of Origin (CoO).</li>
            <li>All applicable customs duties, 5% UAE VAT, inspection fees, municipality charges, and regulatory permits (MOIAT, ESMA, MOCCAE, TDRA) are the sole liability of the Importer of Record.</li>
            <li>Swift Sail reserves the right to withhold cargo release until all statutory duties, port storage, and clearance disbursement charges are settled in full.</li>
          </ul>

          <h2>4. Quotations, surcharges and demurrage</h2>
          <p>
            All rate quotations are based on carrier tariffs, bunker fuel surcharges (BAF), currency exchange rates, and port terminal handling charges (THC) prevailing at the date of issuance. Rates are subject to standard carrier GRI (General Rate Increases), peak season surcharges (PSS), and container demurrage/detention fees incurred beyond free-time allowances at origin or destination terminals.
          </p>

          <h2>5. Limitation of liability and marine insurance</h2>
          <p>
            Swift Sail’s liability for loss, damage, or delay to cargo is strictly limited in accordance with UAE Maritime Commercial Law (Federal Law No. 26 of 1981) and international conventions (Hague-Visby Rules, Montreal Convention 1999). We strongly advise all customers to procure comprehensive Marine Cargo Insurance (Institute Cargo Clauses A) for full consignment value protection.
          </p>

          <h2>6. Governing law and jurisdiction</h2>
          <p>
            These terms and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the Federal Laws of the United Arab Emirates. The competent courts of Dubai shall have exclusive jurisdiction.
          </p>

          <h2>Contact</h2>
          <p>
            {site.legalName}
            <br />
            {site.address}
            <br />
            <a href={site.emailHref}>{site.email}</a>
          </p>
        </div>
      </div>
    </>
  );
}
