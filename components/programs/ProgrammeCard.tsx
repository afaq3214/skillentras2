"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Clock3, UserRound } from "lucide-react"

import { Card } from "@/components/ui/card"
import type { Programme } from "@/lib/programmes"
import { courseImages } from "@/lib/course-images"

type ProgrammeCardProps = {
  programme: Programme
}

export default function ProgrammeCard({ programme }: ProgrammeCardProps) {
  const detailsHref = programme.detailsHref ?? programme.brochureHref ?? "/contact"
  const courseSlug = programme.detailsHref?.replace("/programs/", "")
  const imageSrc = programme.imageSrc ?? (courseSlug ? courseImages[courseSlug] : undefined)
  const isBrochureLink = !programme.detailsHref && Boolean(programme.brochureHref)
  const linkLabel = programme.detailsHref
    ? "View details"
    : programme.brochureHref
      ? "View brochure"
      : "Enquire"

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[2.05/1] overflow-hidden bg-gradient-to-br from-sky-950 via-blue-900 to-teal-700">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={programme.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
                In-person programme
              </span>
              <CalendarDays aria-hidden="true" className="h-6 w-6 text-white/80" />
            </div>
            <div>
              <p className="text-sm font-medium text-sky-100">Upcoming session</p>
              <p className="mt-1 text-2xl font-bold tracking-tight">{programme.date}</p>
            </div>
            <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full border-[24px] border-white/10" />
            <div className="absolute -bottom-24 right-24 h-40 w-40 rounded-full border-[18px] border-teal-300/20" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="min-h-[3.5rem] text-lg font-semibold leading-7 text-slate-900">
          {programme.title}
        </h3>
        <p className="mt-2 min-h-[3rem] text-sm leading-6 text-slate-600">
          {programme.shortDescription}
        </p>

        <div className="mt-4 grid gap-2 text-sm text-slate-500">
          <p className="flex items-center gap-2">
            <CalendarDays aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400" />
            <span>{programme.date}</span>
          </p>
          <p className="flex items-center gap-2">
            <Clock3 aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400" />
            <span>{programme.duration}</span>
          </p>
          <p className="flex items-center gap-2">
            <UserRound aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400" />
            <span>{programme.facilitator}</span>
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
          <span className="text-sm font-medium text-slate-500">2027 schedule</span>
          <Link
            href={detailsHref}
            target={isBrochureLink ? "_blank" : undefined}
            rel={isBrochureLink ? "noreferrer" : undefined}
            className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-900"
          >
            {linkLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  )
}