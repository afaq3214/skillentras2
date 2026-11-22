import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { CourseDetail } from "@/lib/course-details"
import { courseImages } from "@/lib/course-images"

export default function CourseDetailPage({ course }: { course: CourseDetail }) {
  const imageSrc = courseImages[course.slug]
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-teal-800 text-white">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border-[48px] border-white/5" />
        <div className="absolute -bottom-48 right-1/3 h-80 w-80 rounded-full border-[36px] border-teal-300/10" />
        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link href="/#in-person-programmes" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-sky-100 hover:text-white">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            All programmes
          </Link>
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Skillentras · Skills That Transform</p>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">{course.category}</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{course.title}</h1>
            <p className="mt-4 max-w-3xl text-xl font-medium text-sky-100 sm:text-2xl">{course.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">{course.duration}</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">{course.mode}</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Fee: {course.fee}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.9fr)]">
          <Card className="overflow-hidden rounded-2xl border-slate-200 bg-white shadow-sm">
            <CardHeader className="px-5 pb-2 pt-6 sm:px-8">
              <CardTitle className="text-2xl text-slate-900">Programme overview</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              {imageSrc ? (
                <div className="relative mx-5 mb-2 aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 sm:mx-8">
                  <Image
                    src={imageSrc}
                    alt={`${course.title} programme`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative mx-5 mb-2 flex min-h-56 items-end overflow-hidden rounded-xl bg-gradient-to-br from-sky-950 via-blue-800 to-teal-700 p-6 text-white sm:mx-8 sm:min-h-80 sm:p-10">
                  <p className="relative z-10 text-3xl font-bold sm:text-4xl">{course.subtitle}</p>
                </div>
              )}

              <ContentSection title="About the Programme">
                <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {course.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </ContentSection>

              <ContentSection title="Instructor">
                <div className="rounded-xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">Facilitator: {course.instructor}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{course.instructorBio}</p>
                </div>
              </ContentSection>

              <ContentSection title="Course Objectives">
                <BulletList items={course.objectives} />
              </ContentSection>

              <ContentSection title="Who Should Attend">
                <BulletList items={course.audience} />
              </ContentSection>

              <ContentSection title="Course Plan">
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        <th scope="col" className="w-28 px-4 py-3 font-semibold">Session / Day</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Module</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Focus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {course.coursePlan.map((row) => (
                        <tr key={`${row.session}-${row.module}`}>
                          <td className="px-4 py-3 align-top">{row.session}</td>
                          <td className="px-4 py-3 align-top font-medium text-slate-800">{row.module}</td>
                          <td className="px-4 py-3 align-top leading-6">{row.focus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {course.note && <p className="mt-4 text-sm leading-6 text-slate-600">Note: {course.note}</p>}
              </ContentSection>

              <ContentSection title="Teaching & Learning Methodology">
                <BulletList items={course.methodology} />
              </ContentSection>

              <ContentSection title="Learning Outcomes">
                <p className="mb-4 text-sm text-slate-600 sm:text-base">Participants will leave with:</p>
                <ul className="space-y-3">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome.title} className="text-sm leading-6 text-slate-600 sm:text-base">
                      <span className="font-semibold text-slate-900">{outcome.title}: </span>{outcome.description}
                    </li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Prerequisites">
                <p className="text-sm leading-7 text-slate-600 sm:text-base">{course.prerequisites}</p>
              </ContentSection>

              {course.references && (
                <ContentSection title="Key References">
                  <BulletList items={course.references} />
                </ContentSection>
              )}
            </CardContent>
          </Card>

          <aside className="lg:sticky lg:top-24">
            <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardHeader className="pb-3"><CardTitle className="text-xl text-slate-900">Training details</CardTitle></CardHeader>
              <CardContent>
                <dl className="space-y-4 text-sm">
                  <DetailRow icon={<CalendarDays aria-hidden="true" className="h-4 w-4" />} label="Date" value={course.date} />
                  <DetailRow icon={<Clock3 aria-hidden="true" className="h-4 w-4" />} label="Duration" value={course.duration} />
                  <DetailRow icon={<MapPin aria-hidden="true" className="h-4 w-4" />} label="Mode" value={course.mode} />
                  <DetailRow icon={<Users aria-hidden="true" className="h-4 w-4" />} label="Facilitator" value={course.instructor} />
                  <DetailRow label="Participant fee" value={course.fee} />
                  <DetailRow label="Certification" value="Certificate of Completion — Skillentras" />
                </dl>
                <div className="mt-7 grid gap-3">
                  <Button asChild className="w-full border border-sky-700 bg-white text-sky-700 hover:bg-sky-50">
                    <a
                      href="https://docs.google.com/spreadsheets/d/1kGdW6Tg6Kpu-EKNZuNxtZ2h0D4y3XWv8Z9g1xKXIDSY/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarDays aria-hidden="true" className="mr-2 h-4 w-4" />
                      Skillentras Calendar
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-emerald-700 text-white hover:bg-emerald-800"
                  >
                    <a
                      href="https://forms.gle/ihBf1NovCtCuLASr9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                      <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <p className="mt-4 text-xs leading-5 text-slate-500">Contact Skillentras to confirm availability and complete your registration.</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  )
}

function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-slate-100 px-5 py-7 sm:px-8">
      <h2 className="mb-4 text-xl font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 sm:text-base">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}

function DetailRow({ icon, label, value }: { icon?: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="flex items-center gap-2 text-slate-500">{icon}{label}</dt>
      <dd className="max-w-44 text-right font-semibold text-slate-900">{value}</dd>
    </div>
  )
}
