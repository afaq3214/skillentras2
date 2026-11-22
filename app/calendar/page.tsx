import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react"

import ProgrammeCard from "@/components/programs/ProgrammeCard"
import { Button } from "@/components/ui/button"
import { programmes } from "@/lib/programmes"

export const metadata: Metadata = {
  title: "Skillentras Training Calendar | Skillentras",
  description:
    "View the Skillentras in-person training calendar for January to March 2027.",
}

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-teal-800 py-16 text-white sm:py-20">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border-[48px] border-white/5" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#in-person-programmes"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sky-100 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to programmes
          </Link>

          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              January – March 2027
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Skillentras Training Calendar
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-sky-100">
              Explore the upcoming in-person programmes, course dates and facilitators.
            </p>
          </div>

          <a
            href="https://forms.gle/ihBf1NovCtCuLASr9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-emerald-700"
          >
            Register Now
            <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                In-person programmes
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                2027 Course Schedule
              </h2>
            </div>
            <Button variant="outline" asChild className="border-sky-700 text-sky-700 hover:bg-sky-50">
              <a
                href="https://docs.google.com/spreadsheets/d/1kGdW6Tg6Kpu-EKNZuNxtZ2h0D4y3XWv8Z9g1xKXIDSY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Master Calendar
              </a>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {programmes.map((programme) => (
              <ProgrammeCard
                key={`${programme.date}-${programme.title}`}
                programme={programme}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
