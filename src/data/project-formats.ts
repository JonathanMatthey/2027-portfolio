export interface FormatSection {
  heading: string;
  items: string[];
}

export interface FormatNote {
  label: string;
  text: string;
}

export interface ProjectFormatContent {
  title: string;
  primaryParagraphs: string[];
  secondaryParagraphs?: string[];
  secondarySections?: FormatSection[];
  secondaryNotes?: FormatNote[];
}

export const syncFormatContent: ProjectFormatContent = {
  title: "THE FORMAT",
  primaryParagraphs: [
    "SYNC is a 30-minute performance designed for galleries, museums, and alternative spaces.",
    "The work consists of a suspended 13 x 11 metre painted cotton canvas, illuminated by soft overhead lighting, with an open performance area where the audience surrounds and shares the space with the performers.",
    "The audience remains present throughout the performance, witnessing the changing relationship between the two performers as they move between shared sequences, individual solos, and a final duet.",
  ],
  secondarySections: [
    {
      heading: "Performance",
      items: [
        "30-minute live performance",
        "Two performers",
        "Three acts (duets, solo pieces, final duet)",
      ],
    },
    {
      heading: "Technical Requirements",
      items: [
        "Suspended rigging point for a 13 x 11 metre cotton canvas",
        "Soft overhead lighting",
        "Basic sound playback",
        "Open performance area allowing the audience to gather around the performers",
        "1-2 rehearsal days",
      ],
    },
  ],
  secondaryNotes: [
    { label: "Performance area", text: "approximately 15 x 8 m" },
    { label: "Ideal audience", text: "40-80 people" },
  ],
};

export const ironwillFormatContent: ProjectFormatContent = {
  title: "THE FORMAT",
  primaryParagraphs: [
    "IRONWILL is a multi-channel moving-image and sound installation accompanied by a series of large-format Polaroid portraits.",
    "The central installation consists of three independent looping films. Each channel explores a different register of pressure: physical labour, psychological endurance, and the rituals of faith, brotherhood and recovery.",
    "The films do not follow a fixed sequence or resolve into a single narrative. Their relationships shift continuously as separate images, gestures and sounds coincide unpredictably. A body under strain may appear beside a moment of prayer, silence or rest, producing new meanings with each cycle.",
  ],
  secondaryParagraphs: [
    "The sound composition combines metal, breath, street noise, testimony, prayer and silence. Each channel retains its own rhythm while contributing to the wider spatial environment. The photographic series comprises twelve original 8 × 10-inch Polaroids produced in a restricted black-and-yellow palette. The portraits act as still counterpoints to the moving image, removing the subjects from the flow of labour and confronting the viewer directly.",
  ],
  secondarySections: [
    {
      heading: "Technical Specifications",
      items: [
        "3 independent looping video projections",
        "Spatial multi-channel sound",
        "12 original 8 × 10-inch Polaroids",
        "Variable installation dimensions",
      ],
    },
  ],
};

export const ironwillBtsContent: ProjectFormatContent = {
  title: "Behind The Scenes",
  primaryParagraphs: [
    "IRONWILL took shape slowly across Barcelona, through months of gaining access and trust. These images document that process.",
  ],
  secondaryParagraphs: [
    "The work called for long observation, learning the culture, traveling to Senegal, understanding the men and their lives. Trust had to be earned in places where being seen can carry a cost.",
  ],
};
