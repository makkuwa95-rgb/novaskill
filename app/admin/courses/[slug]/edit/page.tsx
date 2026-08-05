import { notFound } from "next/navigation";

import EditCourseForm from "@/components/admin/EditCourseForm";
import { getCourse } from "@/lib/course-service";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EditCoursePage({
  params,
}: Props) {
  const { slug } = await params;

  const course: any = await getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl p-8">

      <h1 className="mb-8 text-4xl font-bold text-white">
        Edit Course
      </h1>

      <EditCourseForm
        course={course}
      />

    </div>
  );
}