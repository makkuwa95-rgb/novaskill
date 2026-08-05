import { courses } from "../../data/courses";

type Props = {
  slug: string;
};


export default function CourseJsonLd({ slug }: Props) {

  const course = courses.find(
    (item) => item.slug === slug
  );


  if (!course) return null;


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",

    name: course.title,

    description: course.description,

    provider: {
      "@type": "Organization",
      name: "NovaSkill",
      url: "https://novaskill.org",
    },


    educationalLevel: course.level,


    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: course.currency,
      availability: "https://schema.org/InStock",
    },


    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating,
      bestRating: "5",
      ratingCount: course.students.replace("+", ""),
    },


    image: [
      `https://novaskill.org${course.image}`,
    ],


    hasCourseInstance: {
      "@type": "CourseInstance",

      courseMode: "Online",

      duration: course.duration,

    },


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