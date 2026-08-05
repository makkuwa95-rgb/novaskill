type Props = {
  courseTitle: string;
  slug: string;
};


export default function BreadcrumbJsonLd({
  courseTitle,
  slug,
}: Props) {


  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [

      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://novaskill.org",
      },


      {
        "@type": "ListItem",

        position: 2,

        name: "Courses",

        item: "https://novaskill.org/courses",
      },


      {
        "@type": "ListItem",

        position: 3,

        name: courseTitle,

        item: `https://novaskill.org/courses/${slug}`,
      },

    ],
  };


  return (

    <script

      type="application/ld+json"

      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}

    />

  );

}