import type { MetadataRoute } from "next";

const BASE_URL = "https://kaanyigit.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reading`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
