export interface Project {
  year: string;
  title: string;
  shortTitle?: string;
  slug: string;
  categories: string[];
  image: string;
  homepageImage?: string;
  alt: string;
  details?: {
    date?: string;
    location?: string[];
    locationUrl?: string;
    description: string[];
  };
}

export const projects = [
  {
    year: "2026 - 2027",
    title: "Sync",
    slug: "sync",
    categories: ["Performance", "Director"],
    image: "/img/projects/sync/sync-feature.webp",
    alt: "Jonathan Matthey - Sync, 2026-2027",
    details: {
      date: "13.06.2026 - 2027",
      location: ["GALERIA ALEGRIA", "Barcelona, Spain"],
      description: [
        "Sync unfolds within a moment of ceremony: an attempt at unification between distinct embodied forces and two bodies on stage.",
        "Two presences embody polarities that coexist and clash: the emotional and the rational, the chaotic and the ordered. Through encounter, repetition, confrontation, and listening, the bodies traverse states of proximity and distance, alignment and misalignment, where synchronicity is not a fixed state but something unstable and constantly negotiated.",
        "The piece thus proposes a journey toward mutual recognition, where neither force imposes itself, but rather both are needed to sustain a single, dynamic unity.",
      ],
    },
  },
  {
    year: "2026",
    title: "Berlin Fashion Week",
    shortTitle: "BFW",
    slug: "berlin-fashion-week",
    categories: ["Photographer"],
    image: "/img/projects/berlin-fashion-week/berlin-fashion-week-feature.webp",
    homepageImage: "/img/projects/berlin-fashion-week/berlin-fashion-week-polaroids.webp",
    alt: "Jonathan Matthey - Berlin Fashion Week, 2026",
    details: {
      location: ["Berlin"],
      description: [
        "Behind-the-scenes Polaroids taken across fashion week events, capturing the atmosphere around shows, fittings, presentations and backstage moments.",
        "The Polaroids were given directly to the designers and models after the shoot.",
      ],
    },
  },
  {
    year: "2025 - WIP",
    title: "IRONWILL",
    slug: "ironwill",
    categories: ["Exhibition", "Photographer"],
    image: "/img/projects/ironwill/ironwill-feature.webp",
    alt: "Jonathan Matthey - IRONWILL, 2025-2026",
    details: {
      location: ["Barcelona"],
      description: [
        "A study of weight carried by the body, imposed by society and endured through faith. IRONWILL is not a migration documentary. It is a study of men pushed toward their physical, social and psychological limits, and of the forces that allow them to continue.",
        "An estimated 3,200 informal scrap collectors work across Barcelona, many of them undocumented migrants from Senegal and other parts of West Africa. The work examines how men transform pressure through discipline, brotherhood, obligation and belief.",
      ],
    },
  },
  {
    year: "2026",
    title: "Cafe Aliou",
    slug: "cafe-aliou",
    categories: ["Short Film", "Director", "Writer"],
    image: "/img/projects/cafe-aliou/cafe-aliou-feature.webp",
    alt: "Jonathan Matthey - Cafe Aliou, 2026",
    details: {
      location: ["Old School Cafe", "Barcelona"],
      description: [
        "In a Barcelona café, an undocumented Senegalese scrap collector rehearses with a Catalan woman for the interview that could change his life. She believes she is helping him. He lets her believe it.",
        "The film needs one final scene and will be submitted to festivals.",
      ],
    },
  },
  {
    year: "2025",
    title: "On The Mat",
    slug: "on-the-mat",
    categories: ["Photobook", "Photographer"],
    image: "/img/projects/on-the-mat/on-the-mat-feature.webp",
    alt: "Jonathan Matthey - On The Mat, 2025",
    details: {
      location: ["Aranha Jiujitsu Gym", "Barcelona"],
      description: [
        "No performance. No posing.\nBodies testing limits.\nThe silence after training\nafter it's been stripped.",
      ],
    },
  },
  {
    year: "2024",
    title: "Absordo",
    slug: "absordo",
    categories: ["Exhibition", "Photographer"],
    image: "/img/projects/absordo/absordo-feature.webp",
    alt: "Jonathan Matthey - Absordo, 2024",
    details: {
      location: ["Barcelona", "Studio Pintor Tapiro"],
      description: [
        "Bodies strain, collapse and grasp.",
        "Fabric clings like fate.",
        "A hand reaches. A back bends. Someone holds on a little longer than they should.",
        "The work sits in that moment before release, where effort turns into shape and the body gives away what it cannot say.",
      ],
    },
  },
  {
    year: "2022",
    title: "Hijo De Su Padre",
    slug: "hijo-de-su-padre",
    categories: ["Photobook", "Photographer"],
    image: "/img/projects/hijo-de-su-padre/hijo-de-su-padre-feature.webp",
    alt: "Jonathan Matthey - Hijo De Su Padre, 2022",
    details: {
      location: ["Sierra Nevada, Andalucia", "Barcelona, Catalunia"],
      description: [
        "My first photobook, exploring the space between my father and I.",
      ],
    },
  },
  {
    year: "2022 - WIP",
    title: "Artists in Studio",
    slug: "artists-in-studio",
    categories: ["Exhibition", "Photographer"],
    image: "/img/projects/artists-in-studios/artists-in-studio-feature.webp",
    alt: "Jonathan Matthey - Artists in Studio, 2022 - ...",
    details: {
      location: ["LA", "Chicago", "New York", "Barcelona"],
      description: [
        "“When you start working, everybody is in your studio — the past, your friends, enemies, the art world, and above all, your own ideas — all are there. But as you continue painting, they start leaving, one by one, and you are left completely alone. Then, if you are lucky, even you leave.”\n— Philip Guston (after John Cage)",
      ],
    },
  },
  {
    year: "2025-2026",
    title: "Fashion Videos",
    slug: "fashion-videos",
    categories: ["Director"],
    image: "/img/projects/fashion-videos-feature.webp",
    alt: "Jonathan Matthey - Fashion Videos, 2025-2026",
    details: {
      location: ["Barcelona", "Berlin", "Paris"],
      description: [
        "“Fashion is very important. It is life-enhancing and, like everything that gives pleasure, it is worth doing well.”\n— Vivienne Westwood",
      ],
    },
  },
  {
    year: "2024",
    title: "Runaway",
    slug: "runaway",
    categories: ["Photographer"],
    image: "/img/projects/runaway/runaway-feature.webp",
    alt: "Jonathan Matthey - Runaway, 2024",
    details: {
      location: ["Sierra Nevada"],
      description: [],
    },
  },
  {
    year: "2023",
    title: "Dancers",
    slug: "dancers",
    categories: ["Director"],
    image: "/img/projects/dancers-feature.webp",
    alt: "Jonathan Matthey - Dancers, 2023",
    details: {
      location: ["Project location", "New York, LA, Barcelona"],
      description: [
        "Body, breath, motion",
        "one moment, then gone.",
      ],
    },
  },
  {
    year: "ongoing",
    title: "Portraits",
    slug: "portraits",
    categories: ["Photographer"],
    image: "/img/projects/portraits/portraits-feature.webp",
    alt: "Jonathan Matthey - Portraits, ongoing",
    details: {
      description: [
        "Black-and-white portraiture has always been my core.\nThese are tests from over the years — not great, but evolving.\nAs the work improves I remove the ones that no longer speak to me, aiming for something timeless.", "Not there yet.",
      ],
    },
  },
] satisfies Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProject(slug: ProjectSlug): Project {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown project slug: ${slug}`);
  return project;
}
