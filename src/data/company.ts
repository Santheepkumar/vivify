export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappLink: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    mapQuery: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  highlights: {
    stat: string;
    label: string;
    detail: string;
  }[];
}

export const company: CompanyInfo = {
  name: "Vivify Signage",
  legalName: "Vivify Signage Coimbatore",
  tagline: "Architectural Signage & Precision LED Glow Sign Boards",
  shortDescription: "Coimbatore's trusted manufacturer of LED Glow Sign Boards, 3D Acrylic Letters, ACP Architectural Elevation, and CNC routed architectural displays.",
  fullDescription: "VIVIFY SIGNAGE is a premier LED & Glow Sign Board Manufacturer in Coimbatore, Tamil Nadu. We specialize in exterior ACP elevation finishing, precision 3D acrylic illuminated letters, commercial shopfront boards, and custom architectural signage crafted to elevate brand presence.",
  phone: "+91 79045 40645",
  phoneRaw: "+917904540645",
  whatsapp: "917904540645",
  whatsappLink: "https://wa.me/917904540645?text=Hi%20Vivify%20Signage%2C%20I%20would%20like%20to%20inquire%20about%20a%20signage%20project.",
  email: "vivifysignage@gmail.com",
  address: {
    street: "No.32/5, Anniyappan Gounder St",
    area: "Nallampalayam, PO, Ganapathy",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641006",
    full: "No.32/5, Anniyappan Gounder St, Nallampalayam, PO, Ganapathy, Coimbatore - 641006",
    mapQuery: "No.32/5+Anniyappan+Gounder+St+Nallampalayam+Ganapathy+Coimbatore+641006"
  },
  hours: {
    weekdays: "9:30 AM – 6:00 PM",
    saturday: "9:30 AM – 2:00 PM",
    sunday: "Closed"
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com"
  },
  highlights: [
    {
      stat: "10+ Years",
      label: "Fabrication Mastery",
      detail: "Decade-long expertise in architectural LED and ACP elevation."
    },
    {
      stat: "100%",
      label: "In-House Precision",
      detail: "CNC routing, laser acrylic cutouts, and LED assembly under one roof."
    },
    {
      stat: "All-Weather",
      label: "Exterior Durability",
      detail: "Waterproof IP67 LED modules and marine-grade ACP paneling."
    },
    {
      stat: "500+",
      label: "Projects Installed",
      detail: "Commercial shopfronts, corporate spaces, and hospitals across South India."
    }
  ]
};

export function getWhatsAppInquiryUrl(serviceName?: string): string {
  if (serviceName) {
    const text = encodeURIComponent(`Hi Vivify Signage, I am interested in getting a quote for ${serviceName}. Please share details and pricing.`);
    return `https://wa.me/917904540645?text=${text}`;
  }
  return company.whatsappLink;
}
