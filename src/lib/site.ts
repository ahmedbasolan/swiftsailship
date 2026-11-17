/** One source for the facts every page repeats. Change them here only. */
export const site = {
  name: "Swift Sail Shipping",
  legalName: "Swift Sail Shipping L.L.C.",
  url: "https://www.swiftsailship.com",
  phone: "+971 55 342 4700",
  phoneHref: "tel:+971553424700",
  whatsappHref: "https://wa.me/971553424700",
  email: "info@swiftsailship.com",
  emailHref: "mailto:info@swiftsailship.com",
  address: "Tanvi Business Centre, M-101, Abu Hail, Dubai, United Arab Emirates",
  addressShort: "Tanvi Business Centre, Abu Hail, Dubai",
  mapHref: "https://maps.google.com/?q=Tanvi+Business+Centre+Abu+Hail+Dubai",
  hours: "Monday to Friday 08:00 to 18:00, Saturday 09:00 to 14:00",
  founded: "2011",
  /** The one main action, worded the same in the header, the hero and the close. */
  cta: "Get a freight quote",
  ctaHref: "/get-quote",
} as const;

/** The path most visitors take to a quote. Each page hands on to the next. */
export const journey = [
  {
    href: "/services",
    name: "Services",
    invite: "Choose a freight service",
    line: "Sea freight, air freight, customs clearance and project cargo.",
  },
  {
    href: "/how-it-works",
    name: "Process",
    invite: "See how a shipment moves",
    line: "Six stages from the quote to the delivery note, and what you receive at each one.",
  },
  {
    href: "/tools",
    name: "Tools",
    invite: "Work out your volume and duty",
    line: "A CBM calculator, a UAE duty guide, Incoterms and transit times.",
  },
  {
    href: "/get-quote",
    name: "Quote",
    invite: "Get a freight quote",
    line: "Send the route, the weight and the volume. We reply within two business hours.",
  },
] as const;

/** One licensed photograph per page and per guide. Credits are in the footer. */
export const photos = {
  ship: { src: "/assets/img/container-terminal-ship-1600.webp", alt: "A container ship berthed under gantry cranes at a container terminal" },
  aerial: { src: "/assets/img/container-ship-aerial-1920.webp", alt: "A loaded container ship under way, seen from the air" },
  air: { src: "/assets/img/air-freighter-loading-1600.webp", alt: "A freighter aircraft with its nose open beside a cargo loader" },
  warehouse: { src: "/assets/img/warehouse-pallet-racks-1600.webp", alt: "Palletised cargo and racking inside a freight warehouse" },
  gantry: { src: "/assets/img/jebel-ali-gantry-cranes-1600.webp", alt: "Rows of container gantry cranes at Jebel Ali Port" },
  berth: { src: "/assets/img/container-terminal-berth-1600.webp", alt: "A container ship berthed alongside gantry cranes at a port terminal" },
} as const;

export const postPhotos: Record<string, { src: string; alt: string }> = {
  "navigating-arabian-gulf-red-sea-maritime-corridors-2026": photos.aerial,
  "mastering-moiat-industrial-duty-exemptions-uae-mirsal-2": photos.warehouse,
  "fob-vs-cif-mitigating-demurrage-risk-gcc-importers": photos.berth,
  "sea-freight-vs-air-freight-cost-decision-framework": photos.air,
  "choosing-the-right-container-type-uae-shipment": photos.ship,
  "uae-customs-import-process-guide": photos.gantry,
};

export const services = [
  {
    id: "ocean-freight",
    name: "Sea freight",
    line: "Full containers (FCL) and shared containers (LCL) through Jebel Ali, Port Khalid and Khalifa Port.",
  },
  {
    id: "air-cargo",
    name: "Air freight",
    line: "Scheduled and express cargo through Dubai International (DXB) and Dubai World Central (DWC).",
  },
  {
    id: "customs-clearance",
    name: "Customs clearance",
    line: "Import, export, transit and free zone declarations filed through Dubai Customs' Mirsal 2 system.",
  },
  {
    id: "breakbulk-project",
    name: "Project cargo",
    line: "Oversized and heavy loads on flat racks, open tops and low-bed trailers.",
  },
] as const;

export const tools = [
  {
    id: "calculator",
    name: "CBM calculator",
    title: "Calculate CBM and container fit",
    line: "Enter the carton sizes and get volume, chargeable weight and the container that fits.",
    sample: ["120 × 80 × 100 cm × 24", "23.04 CBM", "Fits one 20ft container"],
  },
  {
    id: "customs-guide",
    name: "UAE duty guide",
    title: "Check UAE customs duty",
    line: "See the duty rate, VAT and the documents customs asks for, by type of goods.",
    sample: ["Most imported goods", "5% duty and 5% VAT", "Duty on the CIF value"],
  },
  {
    id: "incoterms",
    name: "Incoterms 2020",
    title: "Compare Incoterms 2020",
    line: "See who pays freight and insurance, and where the risk passes, for each term.",
    sample: ["FOB", "Buyer pays the freight", "Risk passes on board"],
  },
  {
    id: "corridors",
    name: "Transit times",
    title: "See transit times from Jebel Ali",
    line: "Typical sea and air transit times between the UAE and the main trade lanes.",
    sample: ["Jebel Ali to Nhava Sheva", "3 to 5 days by sea", "3.5 hours by air"],
  },
] as const;
