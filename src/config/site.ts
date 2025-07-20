export const site = {
  author: {
    links: "https://github.com/kevinnhou",
    name: "Kevin Hou",
    tag: "@kevinnhou",
  },
  category: "EducationalApplication",
  datePublished: "",
  description:
    "Feynman brings productivity to life. Streamline tasks and simplify complex workflows, delivering clarity and efficiency in execution.",
  keywords: [
    "academic weapon",
    "learning",
    "active learning",
    "Feynman Technique",
    "knowledge application",
    "concept visualisation",
    "effective productivity",
    "concept mapping",
    "knowledge synthesis",
    "student productivity",
  ],
  links: {
    repo: "https://github.com/kevinnhou/feynman-docs",
    baseUrl:
      process.env.NODE_ENV === "development" || !process.env.VERCEL_URL
        ? new URL("http://localhost:3000")
        : new URL(`https://${process.env.VERCEL_URL}`),
  },
  name: {
    default: "Feynman / Productivity Reimagined",
    short: "Feynman",
  },
  offers: {
    "@type": "Offer",
    price: 0,
  },
  operatingSystem: "iOS, macOS, Linux, Android, Windows",
  rating: {
    bestRating: 5,
    ratingCount: 24,
    ratingValue: 4.7,
    worstRating: 4,
  },
  type: "SoftwareApplication",
}
