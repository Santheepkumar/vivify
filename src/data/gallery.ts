export interface GalleryProject {
  id: string;
  title: string;
  category: "acrylic-led" | "acp-elevation" | "commercial" | "cnc-wayfinding";
  categoryLabel: string;
  location: string;
  image: string;
  specs: string;
  description: string;
  featured?: boolean;
}

export const galleryProjects: GalleryProject[] = [
  {
    id: "proj-1",
    title: "Golden Aura 3D Acrylic LED Display",
    category: "acrylic-led",
    categoryLabel: "3D Acrylic & LED",
    location: "RS Puram, Coimbatore",
    image: "/images/signage/1000504398.jpg",
    specs: "Titanium gold mirror return with warm 3000K diffuse acrylic face",
    description: "Custom illuminated 3D liquid acrylic letters engineered for luxury retail storefront, delivering radiant warm halo and face luminescence.",
    featured: true
  },
  {
    id: "proj-2",
    title: "Commercial High-Lumen Glow Board",
    category: "commercial",
    categoryLabel: "Commercial Boards",
    location: "Gandhipuram, Coimbatore",
    image: "/images/signage/1000504399.jpg",
    specs: "Galvanized sub-frame with translucent UV-cured face and waterproof LED modules",
    description: "High-contrast commercial glow signboard installation with edge-to-edge illumination for maximum night roadway visibility.",
    featured: true
  },
  {
    id: "proj-3",
    title: "Modern Corporate ACP Elevation",
    category: "acp-elevation",
    categoryLabel: "ACP Elevation",
    location: "Avinashi Road, Coimbatore",
    image: "/images/signage/1000504400.jpg",
    specs: "4mm PVDF coated metallic charcoal ACP cladding with hidden fasteners",
    description: "Full building facade renovation transforming a standard multistory exterior into a sleek corporate architectural statement.",
    featured: true
  },
  {
    id: "proj-4",
    title: "Precision Laser Cut Backlit Nameboard",
    category: "acrylic-led",
    categoryLabel: "3D Acrylic & LED",
    location: "Race Course, Coimbatore",
    image: "/images/signage/1000504401.jpg",
    specs: "Cast acrylic 10mm letters on matte black composite base with rear white LED glow",
    description: "Architectural reception identity board featuring crisp laser-cut acrylic contours and soft backlit halo lighting.",
    featured: true
  },
  {
    id: "proj-5",
    title: "Frosted Glass & Office Plotting Graphics",
    category: "cnc-wayfinding",
    categoryLabel: "CNC & Graphics",
    location: "Tidel Park, Coimbatore",
    image: "/images/signage/1000504402.jpg",
    specs: "Dusted crystal architectural film with precision plotter geometric cutouts",
    description: "Contemporary privacy glass branding for conference suites and executive cabins with seamless bubble-free finish.",
    featured: false
  },
  {
    id: "proj-6",
    title: "Circular Flange Lollipop Projecting Sign",
    category: "commercial",
    categoryLabel: "Commercial Boards",
    location: "Saibaba Colony, Coimbatore",
    image: "/images/signage/1000504403.jpg",
    specs: "Double-sided thermoformed acrylic face with heavy-duty cast mounting bracket",
    description: "High-impact street-level blade sign commanding attention from dual pedestrian walking flows along a busy shopping street.",
    featured: true
  },
  {
    id: "proj-7",
    title: "Campus Monolith Wayfinding Totem",
    category: "cnc-wayfinding",
    categoryLabel: "CNC & Graphics",
    location: "Saravanampatti, Coimbatore",
    image: "/images/signage/1000504404.jpg",
    specs: "Anodized aluminum slat pylon with reflective vinyl directional arrows",
    description: "Outdoor multi-tenant directory pylon engineered with heavy steel ground anchors and clear visual hierarchy for visitors.",
    featured: false
  },
  {
    id: "proj-8",
    title: "Architectural CNC Geometric Jali Facade",
    category: "acp-elevation",
    categoryLabel: "ACP Elevation",
    location: "Peelamedu, Coimbatore",
    image: "/images/signage/1000504406.jpg",
    specs: "CNC routed 4mm ACP panels with integrated concealed LED backlighting",
    description: "Intricate laser and CNC carved architectural screen creating dramatic evening shadows and contemporary daylight depth.",
    featured: true
  },
  {
    id: "proj-9",
    title: "Stainless Steel Titanium Glow Board",
    category: "acrylic-led",
    categoryLabel: "3D Acrylic & LED",
    location: "Trichy Road, Coimbatore",
    image: "/images/signage/1000504407.jpg",
    specs: "Rose gold titanium stainless steel letters with embedded waterproof white LED",
    description: "High-end corporate entrance board combining the luxury of metallic finishes with razor-sharp nighttime illumination.",
    featured: false
  },
  {
    id: "proj-10",
    title: "Panoramic Shopfront Signage & Canopy Cladding",
    category: "commercial",
    categoryLabel: "Commercial Boards",
    location: "Cross Cut Road, Coimbatore",
    image: "/images/signage/1000504408.jpg",
    specs: "30-foot continuous ACP fascia with integrated 3D glowing lettermark",
    description: "Wide-span commercial shopfront transformation linking entrance canopy cladding with prominent glowing brand identity.",
    featured: true
  },
  {
    id: "proj-11",
    title: "Boutique Retail Illuminated Facade",
    category: "commercial",
    categoryLabel: "Commercial Boards",
    location: "R.S. Puram, Coimbatore",
    image: "/images/gallery/project-3.jpeg",
    specs: "Cast acrylic 3D profile letters with bright daylight-white LED",
    description: "Clean modern retail storefront installation designed for maximum visibility along high-traffic shopping avenues.",
    featured: false
  },
  {
    id: "proj-12",
    title: "Healthcare Centre Directional Facade",
    category: "cnc-wayfinding",
    categoryLabel: "CNC & Graphics",
    location: "Ganapathy, Coimbatore",
    image: "/images/gallery/project-4.jpg",
    specs: "Weather-sealed LED flex board with medical cross illumination",
    description: "High-clarity emergency and department signage designed for rapid 24/7 legibility and weather endurance.",
    featured: false
  },
  {
    id: "proj-13",
    title: "Corporate Tower Entrance Pylon",
    category: "acp-elevation",
    categoryLabel: "ACP Elevation",
    location: "Singanallur, Coimbatore",
    image: "/images/gallery/project-5.jpeg",
    specs: "Heavy gauge ACP cladding with contrasting silver and anthracite finishes",
    description: "Sophisticated corporate lobby portal and facade cladding installation with recessed architectural linear lighting.",
    featured: false
  },
  {
    id: "proj-14",
    title: "Vibrant Night-Glow Restaurant Signage",
    category: "acrylic-led",
    categoryLabel: "3D Acrylic & LED",
    location: "Hopes College, Coimbatore",
    image: "/images/gallery/project-7.jpg",
    specs: "Dual-color acrylic letters with high-density LED arrays",
    description: "High-spirited hospitality signage crafted with ultra-bright luminous letters that draw evening dining patrons.",
    featured: false
  },
  {
    id: "proj-15",
    title: "Automotive Showroom Fascia Elevation",
    category: "commercial",
    categoryLabel: "Commercial Boards",
    location: "Mettupalayam Road, Coimbatore",
    image: "/images/gallery/project-11.jpeg",
    specs: "Curved ACP elevation with massive 4-foot illuminated 3D brand logo",
    description: "Large format automobile dealership exterior elevation built to strict corporate brand guidelines and wind load specs.",
    featured: false
  },
  {
    id: "proj-16",
    title: "Multi-Storey Architectural Cladding",
    category: "acp-elevation",
    categoryLabel: "ACP Elevation",
    location: "Avinashi Road, Coimbatore",
    image: "/images/gallery/project-14.jpg",
    specs: "Complete 3-story ACP exterior enclosure with custom window reveal grooves",
    description: "Large scale commercial building renovation showing seamless panel alignments, clean caulking, and modern aesthetic.",
    featured: false
  },
  {
    id: "proj-17",
    title: "Premium Acrylic Halo-Lit Identity Sign",
    category: "acrylic-led",
    categoryLabel: "3D Acrylic & LED",
    location: "Brookefields Mall Area, Coimbatore",
    image: "/images/gallery/project-17.jpg",
    specs: "Solid 15mm laser-profiled black acrylic letters with warm white rear halo",
    description: "Exquisite interior executive branding mounted with precision stainless standoffs to create floating depth and illumination.",
    featured: false
  },
  {
    id: "proj-18",
    title: "Dual-Faced Street Commercial Sign",
    category: "commercial",
    categoryLabel: "Commercial Boards",
    location: "Town Hall, Coimbatore",
    image: "/images/gallery/project-19.jpg",
    specs: "Heavy structural cantilever with dual high-output LED glow sign panels",
    description: "High-density retail hub landmark sign engineered for harsh outdoor monsoon conditions and continuous operation.",
    featured: false
  }
];

export const galleryCategories = [
  { id: "all", label: "All Works" },
  { id: "acrylic-led", label: "3D Acrylic & LED" },
  { id: "acp-elevation", label: "ACP Elevations" },
  { id: "commercial", label: "Commercial Boards" },
  { id: "cnc-wayfinding", label: "CNC & Graphics" },
];
