import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI for HR Professionals | Skillentras",
  description:
    "A practical, in-person programme helping HR professionals apply Artificial Intelligence across the HR function.",
}

const objectives = [
  "Understand the evolving role of AI in modern HR",
  "Identify practical AI applications across key HR functions",
  "Apply AI tools to selected HR workflows and tasks",
  "Evaluate AI tools for fit, practicality and workplace application",
  "Recognise and address risks related to bias, privacy and transparency",
  "Apply appropriate human judgment and oversight when using AI",
  "Identify opportunities to integrate AI into their own HR practices",
  "Develop a practical AI-Ready HR Action Plan",
]

const audience = [
  "HR Generalists & HR Business Partners",
  "Talent Acquisition & Recruitment Professionals",
  "Learning & Development Professionals",
  "HR Managers & Team Leads",
  "People & Organisational Development Professionals",
  "HR Professionals exploring AI adoption",
  "Professionals responsible for HR transformation and digitalisation",
]

const coursePlan = [
  {
    module: "Introduction to AI in HR",
    focus: "AI fundamentals, HR transformation & AI-augmented HR",
  },
  {
    module: "AI in Recruitment & Talent Acquisition",
    focus: "Sourcing, screening, job descriptions & interview support",
  },
  {
    module: "AI in Learning & Development",
    focus: "Skills gaps, learning design, content & assessment",
  },
  {
    module: "AI in Employee Engagement",
    focus: "Employee listening, feedback, sentiment & engagement",
  },
  {
    module: "AI in Performance Management",
    focus: "Goals, KPIs, feedback & performance support",
  },
  {
    module: "AI for HR Operations",
    focus: "HR communications, policies, reporting & productivity",
  },
  {
    module: "Responsible & Ethical AI in HR",
    focus: "Bias, privacy, transparency & human oversight",
  },
  {
    module: "Future of HR",
    focus: "AI-augmented HR, emerging roles & AI-readiness",
  },
]

const methodology = [
  "Short, focused lectures on each HR function",
  "Live demonstrations of real AI tools relevant to each session",
  "Case discussions and practical scenarios",
  "Hands-on practice, such as drafting a job description with AI or reviewing an AI-generated performance summary",
  "Open discussion on ethical use, limitations and human oversight",
]

const learningOutcomes = [
  {
    title: "Practical AI knowledge",
    description: "Understand where and how AI fits into HR.",
  },
  {
    title: "Hands-on experience",
    description: "Practise using AI for real HR-related tasks.",
  },
  {
    title: "AI evaluation skills",
    description: "Assess whether an AI application is appropriate for a specific HR need.",
  },
  {
    title: "Responsible AI awareness",
    description: "Recognise issues around bias, privacy, transparency and human oversight.",
  },
  {
    title: "An AI-Ready HR Action Plan",
    description: "Identify practical next steps for applying AI in your own HR work.",
  },
]

function ContentSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-slate-100 px-5 py-7 sm:px-8">
      <h2 className="mb-4 text-xl font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  )
}

export default function AiForHrProfessionalsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-teal-800 text-white">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border-[48px] border-white/5" />
        <div className="absolute -bottom-48 right-1/3 h-80 w-80 rounded-full border-[36px] border-teal-300/10" />
        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/#in-person-programmes"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-sky-100 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            All programmes
          </Link>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
              Skillentras · Skills That Transform
            </p>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">
              Human Resources, People & Culture
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              AI for HR Professionals
            </h1>
            <p className="mt-4 text-xl font-medium text-sky-100 sm:text-2xl">
              Transforming HR with Artificial Intelligence
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">2 Days</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">In-Person</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Fee: PKR 25,000</span>
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
              <div className="relative mx-5 mb-2 aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 sm:mx-8">
                <Image
                  src="/courseimages/optimized/ai-for-ht-professionals.webp"
                  alt="AI for HR Professionals programme"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <ContentSection title="About the Programme">
                <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    AI for HR Professionals is a practical, application-focused professional development
                    programme designed to help HR professionals understand, evaluate and apply Artificial
                    Intelligence across the HR function.
                  </p>
                  <p>
                    The programme explores AI applications across recruitment, learning &amp; development,
                    employee engagement, performance management and HR operations, while developing the
                    judgment required to use AI effectively, ethically and responsibly.
                  </p>
                  <p>
                    Through live demonstrations, practical exercises, case discussions and hands-on
                    activities, participants move beyond understanding AI to applying it to real HR tasks
                    and workflows.
                  </p>
                </div>
              </ContentSection>

              <ContentSection title="Instructor">
                <div className="rounded-xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">Facilitator: Noor-ul-Ain</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                    Noor-ul-Ain is a Career Coach, Corporate Trainer and HR &amp; Professional Development
                    Specialist with over eight years of experience in HR and career coaching. She brings a
                    practitioner&apos;s perspective on integrating emerging technology into everyday HR
                    practice, with an emphasis on hands-on, tool-based learning rather than theory alone.
                    Her workshops combine self-assessments, case discussions, group activities and
                    practical workplace scenarios.
                  </p>
                </div>
              </ContentSection>

              <ContentSection title="Course Objectives">
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 sm:text-base">
                  {objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Who Should Attend">
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 sm:text-base">
                  {audience.map((participant) => (
                    <li key={participant}>{participant}</li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Course Plan">
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        <th scope="col" className="w-20 px-4 py-3 font-semibold">Session</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Module</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Focus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {coursePlan.map((item, index) => (
                        <tr key={item.module}>
                          <td className="px-4 py-3 align-top">{index + 1}</td>
                          <td className="px-4 py-3 align-top font-medium text-slate-800">{item.module}</td>
                          <td className="px-4 py-3 align-top leading-6">{item.focus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Note: Each session includes a live demonstration of relevant AI tools and a brief
                  hands-on practice activity.
                </p>
              </ContentSection>

              <ContentSection title="Teaching & Learning Methodology">
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 sm:text-base">
                  {methodology.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Learning Outcomes">
                <p className="mb-4 text-sm text-slate-600 sm:text-base">Participants will leave with:</p>
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome) => (
                    <li key={outcome.title} className="text-sm leading-6 text-slate-600 sm:text-base">
                      <span className="font-semibold text-slate-900">{outcome.title}: </span>
                      {outcome.description}
                    </li>
                  ))}
                </ul>
              </ContentSection>

              <ContentSection title="Prerequisites">
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  No formal qualification or technical background is required. The programme is suitable
                  for HR professionals at any stage of their career who want to build practical, working
                  knowledge of AI tools relevant to HR.
                </p>
              </ContentSection>
            </CardContent>
          </Card>

          <aside className="lg:sticky lg:top-24">
            <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-slate-900">Training details</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-2 text-slate-500">
                      <CalendarDays aria-hidden="true" className="h-4 w-4" /> Date
                    </dt>
                    <dd className="text-right font-semibold text-slate-900">16 Jan 2027</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-2 text-slate-500">
                      <Clock3 aria-hidden="true" className="h-4 w-4" /> Duration
                    </dt>
                    <dd className="text-right font-semibold text-slate-900">2 Days</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-2 text-slate-500">
                      <MapPin aria-hidden="true" className="h-4 w-4" /> Mode
                    </dt>
                    <dd className="text-right font-semibold text-slate-900">In-Person</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-2 text-slate-500">
                      <Users aria-hidden="true" className="h-4 w-4" /> Facilitator
                    </dt>
                    <dd className="text-right font-semibold text-slate-900">Noor-ul-Ain</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-slate-500">Participant fee</dt>
                    <dd className="text-right font-semibold text-slate-900">PKR 25,000</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-slate-500">Certification</dt>
                    <dd className="max-w-44 text-right font-semibold text-slate-900">
                      Certificate of Completion — Skillentras
                    </dd>
                  </div>
                </dl>
                <div className="mt-7 grid gap-3">
                  <Button
                    asChild
                    className="w-full border border-sky-700 bg-white text-sky-700 hover:bg-sky-50"
                  >
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
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Contact Skillentras to confirm availability and complete your registration.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto flex flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span className="font-semibold text-slate-700">Skillentras · Skills That Transform</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="tel:+923099087453" className="hover:text-sky-700">+92 3099087453</a>
            <a href="https://www.skillentras.com" className="hover:text-sky-700">www.skillentras.com</a>
            <a href="mailto:info@skillentras.com" className="hover:text-sky-700">info@skillentras.com</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
