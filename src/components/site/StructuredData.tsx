import { profile, services } from "@/lib/site";
import { works } from "@/lib/work";

/**
 * JSON-LD for the studio and every video on the page. Google's VideoObject
 * needs name, description, thumbnailUrl and uploadDate at minimum; contentUrl
 * lets it index the file itself.
 */
export function StructuredData({ siteUrl }: { siteUrl: string }) {
  const abs = (path: string) => new URL(path, siteUrl).toString();

  const graph = [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}#studio`,
      name: profile.brand,
      description: profile.intro,
      url: siteUrl,
      email: profile.email,
      telephone: profile.phone,
      image: abs("/og.png"),
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      founder: { "@type": "Person", name: profile.lead },
      sameAs: [profile.instagram],
      knowsAbout: [...services],
    },
    ...works.map((work) => ({
      "@type": "VideoObject",
      "@id": `${siteUrl}#${work.slug}`,
      name: work.title,
      description: work.summary,
      thumbnailUrl: [abs(work.poster)],
      uploadDate: "2026-10-11",
      duration: `PT${Math.floor(work.seconds / 60)}M${work.seconds % 60}S`,
      contentUrl: abs(work.src),
      genre: work.category,
      creator: { "@id": `${siteUrl}#studio` },
      isFamilyFriendly: true,
    })),
  ];

  return (
    <script
      type="application/ld+json"
      // Content is built from local data, never user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
