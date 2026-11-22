import type { Metadata } from "next"
import { notFound } from "next/navigation"

import CourseDetailPage from "@/components/programs/CourseDetailPage"
import { courseDetails } from "@/lib/course-details"

export function generateStaticParams() {
  return courseDetails.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = courseDetails.find((item) => item.slug === slug)

  if (!course) {
    return { title: "Programme Not Found | Skillentras" }
  }

  return {
    title: `${course.title} | Skillentras`,
    description: `${course.title}: ${course.subtitle}`,
  }
}

export default async function ProgrammeDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = courseDetails.find((item) => item.slug === slug)

  if (!course) {
    notFound()
  }

  return <CourseDetailPage course={course} />
}
