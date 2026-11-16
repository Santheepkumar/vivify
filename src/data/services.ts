export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  materials: string[];
  illumination: string;
  applications: string[];
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: "liquid-letters",
    slug: "liquid-letters",
    title: "Liquid Letters",
    category: "3D Premium Acrylic",
    tagline: "Seamless resin liquid acrylic letters with ultra-high gloss front",
    description: "Premium high-gloss liquid resin acrylic letters offering seamless rounded edges and uniform high-intensity luminescence.",
    longDescription: "Liquid acrylic letters represent the pinnacle of modern 3D lettercraft. Cast with high-grade UV-resistant optical polymers over formed aluminum return profiles, they eliminate seam lines and offer an incomparable liquid-gloss finish with vibrant edge-to-edge LED diffusion.",
    image: "/images/signage/1000504398.jpg",
    materials: ["Optically Clear Liquid Polymer", "Formed Aluminum Channel", "High-efficiency Samsung LED modules"],
    illumination: "Face-lit diffuse LED with 180° light distribution",
    applications: ["Luxury Retail Boutiques", "Jewellery Showrooms", "High-End Corporate Reception Walls", "Tech Headquarters"],
    features: [
      "Zero-seam front face with diamond-smooth liquid resin",
      "Vibrant daylight color and radiant night luminescence",
      "IP67 waterproof encapsulation for indoor and exterior use",
      "Custom pantone color matching and corporate typeface reproduction"
    ]
  },
  {
    id: "lighting-board",
    slug: "lighting-board",
    title: "Lighting Board (LED Glow Sign)",
    category: "Illuminated Signage",
    tagline: "Architectural illuminated glow sign boxes with crystal clear front graphics",
    description: "High-visibility illuminated glow sign boards built with heavy-duty structural frames and weather-resistant backlit flex or acrylic faces.",
    longDescription: "Our LED Glow Sign Boards are engineered for maximum night visibility and all-weather durability. Constructed with anti-corrosive powder-coated steel frameworks, energy-efficient waterproof LED strips, and UV-stabilized translucent acrylic or heavy flex faces, these signboards maintain brilliant clarity 24/7.",
    image: "/images/signage/1000504399.jpg",
    materials: ["Powder-coated Galvanized Steel", "Cast Polycarbonate/Acrylic Face", "Uniform Backlit LED Array"],
    illumination: "High-lumen uniform LED backlighting (Cool White, Warm White, Custom RGB)",
    applications: ["Commercial Storefronts", "Healthcare Centers & Clinics", "Automobile Showrooms", "Highway Landmarks"],
    features: [
      "Maximum night visibility from wide viewing angles",
      "Anti-glare uniform light distribution with zero hot spots",
      "Energy-efficient LED drivers with over-voltage surge protection",
      "Sturdy wind-load tested architectural casing"
    ]
  },
  {
    id: "acp-elevation",
    slug: "acp-elevation",
    title: "ACP Elevation & Cladding",
    category: "Architectural Facade",
    tagline: "Aluminum Composite Panel exterior cladding that transforms commercial buildings",
    description: "Architectural ACP facade elevation that elevates building aesthetics with sleek modern metallic finishes, concealed fasteners, and durable weatherproofing.",
    longDescription: "ACP Exterior Finishing is the ultimate touch that transforms an ordinary building into a sophisticated corporate landmark. We provide complete design, CNC grooving, structural sub-framing, and meticulous on-site panel installation using premium fire-retardant Aluminum Composite Panels in metallic, wooden, and solid finishes.",
    image: "/images/signage/1000504400.jpg",
    materials: ["3mm & 4mm Exterior Grade ACP", "Aluminum Sub-Frame Extrusions", "Weatherproof Silicone Sealants"],
    illumination: "Integrated LED groove profile lighting or warm wall-washers",
    applications: ["Commercial Building Facades", "Automobile Dealerships", "Corporate Headquarters", "Shopping Complexes"],
    features: [
      "Complete facade renovation with sleek modern geometric styling",
      "Thermal insulation, sound deadening, and superior weather resistance",
      "CNC v-groove bending for razor-sharp 90-degree corners",
      "Durable PVDF coating resistant to UV fading, humidity, and acid rain"
    ]
  },
  {
    id: "led-name-board",
    slug: "led-name-board",
    title: "LED Name Board (3D Acrylic)",
    category: "3D Letters",
    tagline: "3D Acrylic fabricated letters with vibrant front-lit and halo backlit glow",
    description: "Custom manufactured 3D acrylic letters with clean polished edges, stainless steel or acrylic sides, and internal LED illumination.",
    longDescription: "Manufactured with clean laser-polished edges in any custom font, our 3D Acrylic Letter Name Boards give brands an authoritative three-dimensional physical presence. Available with front-lit, edge-lit, or halo back-lit configurations mounted with precision standoffs and installation templates.",
    image: "/images/signage/1000504401.jpg",
    materials: ["Cast Acrylic Sheets (3mm to 20mm)", "SS 304 Titanium Gold/Rose Gold/Silver", "Osram/Samsung LEDs"],
    illumination: "Front-lit, Halo Back-lit, or Dual Combination Illumination",
    applications: ["Retail Shopfront Entrances", "Hospitality & Restaurant Signage", "Office Interior Branding", "Mall Showrooms"],
    features: [
      "Clean laser-polished edges in virtually any typography or logo shape",
      "Available in Acrylic, Stainless Steel, Brass, and Titanium finishes",
      "Supplied with precision 1:1 mounting template and threaded stud anchors",
      "Low power consumption with 50,000+ hours LED operational lifespan"
    ]
  },
  {
    id: "stickering",
    slug: "stickering",
    title: "Stickering & Glass Branding",
    category: "Graphics & Vinyl",
    tagline: "High-precision vinyl plotting, frosted privacy glass graphics, and window films",
    description: "Architectural vinyl stickering, custom frosted film plotting, reflective graphics, and perforated one-way vision for retail glass and offices.",
    longDescription: "Our vinyl and stickering division offers computer-cut precision graphics for glass facades, office partitions, wall murals, and vehicle branding. From sophisticated dusted-crystal frosted films that provide privacy while transmitting light, to full-color large format UV-printed window displays.",
    image: "/images/signage/1000504402.jpg",
    materials: ["Avery Dennison / 3M Cast Vinyl", "Dusted & Frosted Architectural Films", "One-Way Vision Perforated Films"],
    illumination: "Non-illuminated or edge-lit glass integration",
    applications: ["Conference Room Partitions", "Retail Store Window Displays", "Corporate Wall Branding", "Glass Safety Decals"],
    features: [
      "Precision computerized plotter cutting for intricate logos and patterns",
      "Bubble-free wet/dry professional installation",
      "UV-stable inks that resist peeling, bubbling, and sun-fading",
      "Easy removal without adhesive residue on glass surfaces"
    ]
  },
  {
    id: "lollipop-name-board",
    slug: "lollipop-name-board",
    title: "Lollipop Projecting Board",
    category: "Blade Signage",
    tagline: "Double-sided illuminated flange signs for pedestrian and street-level visibility",
    description: "Double-sided projecting lollipop signs mounted perpendicularly to walls for capturing foot traffic from both walking directions.",
    longDescription: "Lollipop and flange projecting signs are essential for high-density retail corridors and shopping streets where storefronts sit parallel to foot traffic. With double-sided circular, square, or custom contoured illuminated faces, they make your business visible from blocks away.",
    image: "/images/signage/1000504403.jpg",
    materials: ["Die-cast Aluminum / Fabricated Steel Bracket", "Vacuum-formed or Flat Acrylic Faces", "Internal Circular LED Array"],
    illumination: "Double-sided internal LED illumination with uniform light diffusion",
    applications: ["Cafes & Bakeries", "Pharmacies & Optical Stores", "High-Street Boutiques", "Commercial Arcades"],
    features: [
      "Double-sided graphics ensuring 360-degree street visibility",
      "Robust heavy-duty wall bracket designed for high wind resistance",
      "Compact footprint with high impact visual recall",
      "Available in round, pill, square, and custom-shaped silhouettes"
    ]
  },
  {
    id: "way-sign-board",
    slug: "way-sign-board",
    title: "Wayfinding & Directional Signs",
    category: "Architectural Systems",
    tagline: "Intuitive campus, hospital, and building navigation signage systems",
    description: "Architectural wayfinding systems including pylon totem signs, floor directories, cantilevered directional arrows, and room identity plaques.",
    longDescription: "Effective wayfinding reduces visitor friction and reinforces corporate professionalism. We design and manufacture comprehensive indoor and outdoor directional systems engineered for quick legibility, compliance with architectural standards, and cohesive corporate aesthetics.",
    image: "/images/signage/1000504404.jpg",
    materials: ["Anodized Modular Aluminum Extrusions", "Etched Brass & Stainless Steel", "High-Density Acrylic"],
    illumination: "Edge-lit LED, Top-down wash lighting, or Non-illuminated",
    applications: ["Multi-Speciality Hospitals", "University Campuses & Schools", "IT Parks & Corporate Towers", "Industrial Facilities"],
    features: [
      "Modular updateable slat systems for changing tenant names",
      "High-contrast universal iconography and multilingual typography",
      "Weather-sealed outdoor monolithic pylons with concrete footing anchors",
      "Braille and tactile compliance options available for accessible facilities"
    ]
  },
  {
    id: "cnc-router",
    slug: "cnc-router",
    title: "CNC Router & Laser Cutting",
    category: "Precision Fabrication",
    tagline: "Industrial CNC routing and precision laser cutting for acrylic, ACP, wood, and metals",
    description: "High-precision computer-controlled cutting, 3D engraving, and jali fretwork for architectural screens, custom waveboards, and letter profiles.",
    longDescription: "Our in-house heavy-duty CNC routing and laser cutting station powers Vivify's fabrication speed and accuracy. Capable of processing full 8x4ft sheets of Acrylic, ACP, MDF, WPC, HPL, Brass, and Aluminum, we deliver intricate geometric jali screens, 3D relief waveboards, and micron-accurate letter cutouts.",
    image: "/images/signage/1000504406.jpg",
    materials: ["Acrylic (2mm–30mm)", "Aluminum Composite Panels", "MDF, WPC & Teak Woods", "Brass & Aluminum Plates"],
    illumination: "Compatible with backlit acrylic inserts and cove lighting",
    applications: ["Architectural Jali Partitions", "Ceiling Fretwork Panels", "3D Wall Relief Panels", "Custom Signage Base Plates"],
    features: [
      "Micron-level cut accuracy with zero tool drift or rough edge chatter",
      "Large-format bed processing sheets up to 8x4 feet seamlessly",
      "Complex 2D and 3D surface relief carving and contour profiling",
      "Rapid turnaround for bespoke interior designer and architect blueprints"
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find(s => s.slug === slug);
}
