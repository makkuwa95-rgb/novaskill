import Script from "next/script";

interface CourseJsonLdProps {
  slug: string;
  title?: string;
  description?: string;
  image?: string;
}

export default function CourseJsonLd({
  slug,
  title = "NovaSkill Course",
  description = "Learn industry-ready skills with NovaSkill courses.",
  image = "https://novaskill.org/og-image/og-image.png",
}: CourseJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description,
    provider: {
      "@type": "Organization",
      name: "NovaSkill",
      url: "https://novaskill.org",
    },
    url: `https://novaskill.org/courses/${slug}`,
    image,
  };

  return (
    <Script
      id={`course-jsonld-${slug}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}