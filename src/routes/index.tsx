import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";
import { seoConfig, buildJsonLd } from "@/config/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const ld = buildJsonLd();
    return {
      meta: [
        { title: seoConfig.title },
        { name: "description", content: seoConfig.description },
        { property: "og:title", content: seoConfig.title },
        { property: "og:description", content: seoConfig.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: ld ? [{ type: "application/ld+json", children: JSON.stringify(ld) }] : [],
    };
  },
  component: Home,
});
