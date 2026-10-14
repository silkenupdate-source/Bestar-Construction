export type ProjectStatus = "Completed" | "In Progress" | "Planning";

export interface Project {
  id: string;
  name: string;
  category: "Residential" | "Commercial" | "Infrastructure" | "Renovation";
  location: string;
  description: string;
  mainImage: string;
  gallery: string[];
  status: ProjectStatus;
  isDemo?: boolean;
}

export const projects: Project[] = [
  {
    id: "sample-residential-1",
    name: "Modern Luxury Villa",
    category: "Residential",
    location: "Yaoundé, Cameroon",
    description: "A contemporary residential project featuring open-plan living spaces, sustainable materials, and custom architectural details. (Sample Project)",
    mainImage: "/images/projects/residential-1.jpg",
    gallery: [
      "/images/projects/residential-1-g1.jpg",
      "/images/projects/residential-1-g2.jpg"
    ],
    status: "Completed",
    isDemo: true,
  },
  {
    id: "sample-commercial-1",
    name: "Downtown Corporate Office",
    category: "Commercial",
    location: "Yaoundé, Cameroon",
    description: "A multi-story commercial office building designed for modern businesses with energy-efficient infrastructure. (Sample Project)",
    mainImage: "/images/projects/commercial-1.jpg",
    gallery: [],
    status: "Completed",
    isDemo: true,
  },
  {
    id: "sample-infrastructure-1",
    name: "Urban Highway Expansion",
    category: "Infrastructure",
    location: "Cameroon",
    description: "Major civil engineering project improving urban connectivity and traffic flow with advanced paving technologies. (Sample Project)",
    mainImage: "/images/projects/infrastructure-1.jpg",
    gallery: [],
    status: "In Progress",
    isDemo: true,
  },
  {
    id: "sample-renovation-1",
    name: "Heritage Building Restoration",
    category: "Renovation",
    location: "Yaoundé, Cameroon",
    description: "Careful restoration and modernization of a historic commercial property, preserving its architectural integrity. (Sample Project)",
    mainImage: "/images/projects/renovation-1.jpg",
    gallery: [],
    status: "Completed",
    isDemo: true,
  }
];
