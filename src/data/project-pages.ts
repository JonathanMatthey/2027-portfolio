export const numberedImages = (folder: string, basename: string, count: number) =>
  Array.from({ length: count }, (_, index) => `${folder}/${basename}-${index + 1}.webp`);

export const youtubeEmbedUrl = (videoId: string) => `https://www.youtube.com/embed/${videoId}`;

export const projectGalleryBySlug: Record<string, string[]> = {
  absordo: numberedImages("/img/projects/absordo", "absordo", 26),
  "artists-in-studio": numberedImages("/img/projects/artists-in-studios", "artists-in-studios", 24),
  "hijo-de-su-padre": numberedImages("/img/projects/hijo-de-su-padre", "hijo-de-su-padre", 16),
  ironwill: [
    "/img/projects/ironwill/ironwill-projection.webp",
    "/img/projects/ironwill/hungry-a4.webp",
    "/img/projects/ironwill/rahel1.webp",
    "/img/projects/ironwill/ironwill1.webp",
    "/img/projects/ironwill/ironwill2.webp",
  ],
  "on-the-mat": numberedImages("/img/projects/on-the-mat", "on-the-mat", 40),
  runaway: numberedImages("/img/projects/runaway", "runaway", 8),
  portraits: numberedImages("/img/projects/portraits", "portraits", 16),
};

export const projectVideoIds: Record<string, string[]> = {
  "fashion-videos": ["dPqsxJvNvM4", "akV9um-nCDk", "Xbv6fLyTXwM", "xb5yZcfUwEg"],
  dancers: [
    "2PiAk67Bngc",
    "TwY5JNJACrQ",
    "QJ2D9egKNZc",
    "JXA_18dVAIc",
    "cHM7KK3Qsng",
    "n_FcBeRzyng",
    "bABT9QB-R_k",
    "-_F5t7xpn7k",
    "4f8aFdUbKTQ",
    "yP7mPDQztLE",
    "s0EYmKaPuvM",
    "PttahWG1to4",
    "YJb5Cn29NKQ",
    "b2nfoVZZQvU",
    "t4IdHuUo9io",
    "3f2hP63gExc",
  ],
};

export const topVideoEmbedUrls: Record<string, string> = {
  sync: "https://drive.google.com/file/d/1_EjK8iHk8ulcyTHUlufgoy8yjg5Kwiz7/preview",
  dancers: youtubeEmbedUrl("yiA6AM7aQSY"),
  ironwill: youtubeEmbedUrl("js-8DswUVtc"),
  "cafe-aliou": youtubeEmbedUrl("zDi6gBxqco4"),
  "fashion-videos": youtubeEmbedUrl("nl5NraYykcA"),
};

export const syncWideImages = ["/img/projects/sync/wide1_2.4.webp"];
export const syncImageRow = ["/img/projects/sync/sync1.webp", "/img/projects/sync/sync2.webp"];
export const syncFinalWideImages = ["/img/projects/sync/sync6.webp"];
export const syncArtists = [
  {
    name: "Renee Kester",
    image: "/img/projects/sync/renee.webp",
    bio: "Renee “Nayya” Kester is a Los Angeles–based dancer, choreographer, singer and actress. With a background in breakdance, ballet and contemporary dance, she has performed internationally across stage, film and commercial work. She gained wider recognition through the viral dance film Slip and also releases music as Nayya.",
  },
  {
    name: "Marta Pajares",
    image: "/img/projects/sync/marta.webp",
    bio: "Dancer, performer and interdisciplinary creator whose practice moves through raw, unsettling and deeply human forms of expression. She approaches the body as primary material, exploring the urgency of sensation. Her work has developed through collaborations with projects and companies including United Cowboys, La Taimada and Teatre Fluks.",
  },
];

export const ironwillBtsImages = numberedImages("/img/projects/ironwill/BTS", "ironwill-bts", 5);

export const cafeAliouBtsImages = numberedImages("/img/projects/cafe-aliou", "cafe-aliou-bts", 8);

export const berlinFashionWeekImages = numberedImages(
  "/img/projects/berlin-fashion-week",
  "berlin-fashion-week",
  20,
);

export const hijoDeSuPadreFullWidth = [
  "/img/projects/hijo-de-su-padre/hijo-de-su-padre-9.webp",
  "/img/projects/hijo-de-su-padre/hijo-de-su-padre-16.webp",
];
