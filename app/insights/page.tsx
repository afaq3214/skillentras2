"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  Clock,
  CreditCard,
  Download,
  FileText,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Ticket,
  Video,
} from "lucide-react"

/**
 * SPDC external links.
 *
 * The Course Calendar and Membership Policy are Google Docs published to the
 * web so they can be updated without a code change. When a document URL is
 * replaced, edit it here only — every button on the page reads from this
 * object, so no other file needs to change.
 */
const SPDC_LINKS = {
  register: "https://forms.gle/MsUXbhyZXvuCSBDS6",
  courseCalendar:
    "https://docs.google.com/document/d/1brNA8F9QIuh2X0XSetN5mEtFRLBsiiZ59WlRZheCUKw/edit?usp=sharing",
  membershipPolicy:
    "https://docs.google.com/document/d/1wZf4MIQhdoF8bZIfUTdpv4hOIPCTJJ_8_jmrdZz-ncI/edit?usp=sharing",
  cpdRegister: "https://thecpdregister.com/providers/cpd-group-providers--790884",
  phone: "+92 309 9087453",
  email: "spdc@skillentras.com",
}

const topics = [
  "Leadership",
  "Communication",
  "Sales",
  "Emotional Intelligence",
  "AI",
  "Personal Branding",
  "& more",
]

const steps = [
  {
    icon: CreditCard,
    title: "Join SPDC",
    description: "Pay the membership fee and your 3-month cycle begins.",
  },
  {
    icon: Ticket,
    title: "Get 6 Learning Credits",
    description:
      "Every membership includes 6 Learning Credits — your ticket to attend sessions of your choice.",
  },
  {
    icon: CalendarDays,
    title: "Pick Your Sessions",
    description:
      "Browse the quarterly calendar and register for any sessions that interest you. 1 session = 1 Credit. Two-part courses use 1 Credit per part.",
  },
  {
    icon: Video,
    title: "Attend & Learn",
    description: "Join live online, or catch up later via recording if you miss a session.",
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Receive a Participation Certificate for each session you complete.",
  },
  {
    icon: RefreshCw,
    title: "Renew & Continue",
    description:
      "When your cycle ends, renew for a fresh set of 6 Credits and a brand-new lineup of sessions.",
  },
]

const planRows = [
  { icon: Sparkles, label: "Membership", value: "SPDC Professional Membership" },
  { icon: CreditCard, label: "Fee", value: "Rs. 6,000" },
  { icon: Clock, label: "Duration", value: "3 months" },
  { icon: Ticket, label: "Learning Credits", value: "6 per cycle" },
  { icon: Globe, label: "Delivery", value: "100% Online" },
  { icon: Award, label: "Certificate", value: "Participation Certificate per eligible session" },
  { icon: RefreshCw, label: "Renewal", value: "New 3-month cycle + fresh 6 Credits" },
]

const policyPoints = [
  "Your 6 Learning Credits are valid for your 3-month membership period and reset with each renewal.",
  "Sessions can be cancelled or transferred up to 24 hours in advance.",
  "Membership is personal and non-transferable.",
  "Membership fees are non-refundable once activated.",
]

const faqs = [
  {
    id: "faq-1",
    question: "What if I can't attend a session I've registered for?",
    answer:
      "You can cancel or transfer your registration to another available session up to 24 hours before it starts, and your Learning Credit will be restored.",
  },
  {
    id: "faq-2",
    question: "What happens if I miss a session without cancelling?",
    answer:
      "The session will be counted as one Learning Credit used, unless an exceptional circumstance applies.",
  },
  {
    id: "faq-3",
    question: "Can I attend more than 6 sessions in a cycle?",
    answer:
      "Your membership includes 6 Learning Credits per 3-month cycle. Additional sessions may be available on a pay-per-session basis, subject to availability.",
  },
  {
    id: "faq-4",
    question: "What if I don't use all my credits?",
    answer:
      "Unused Learning Credits expire at the end of your membership cycle and cannot be carried forward, transferred, or refunded as cash.",
  },
  {
    id: "faq-5",
    question: "Can I share my membership with someone else?",
    answer: "No. SPDC membership is personal and non-transferable.",
  },
  {
    id: "faq-6",
    question: "Do I need to attend sessions live?",
    answer:
      "Live attendance is encouraged, but recordings are made available for members who miss a live session.",
  },
  {
    id: "faq-7",
    question: "When does my membership actually start?",
    answer:
      "Your 3-month cycle begins on the date your payment is confirmed, not the date you registered or transferred funds.",
  },
  {
    id: "faq-8",
    question: "How do I renew my membership?",
    answer:
      "Simply pay the renewal fee before or after your current cycle ends to begin a fresh 3-month cycle with a new set of 6 Learning Credits.",
  },
  {
    id: "faq-9",
    question: "If SPDC cancels a session, does my whole membership get cancelled?",
    answer:
      "No. If SPDC cancels an individual session, your Learning Credit for that session will be restored or an alternative arrangement provided — your overall membership continues unaffected.",
  },
]

export default function SpdcPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const toggleFaq = (id: string) => setOpenFaq((prev) => (prev === id ? null : id))

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-blue-50 to-primary/5 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5 animate-gradient-x"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">SPDC</span>
          </div>
        </div>
      </div>

      {/* 1. Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden isolate">
        {/* Layered hero background */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          {/* Base wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-primary/[0.07]"></div>

          {/* Blueprint grid, faded out toward the edges */}
          <svg
            className="absolute inset-0 w-full h-full text-primary/20"
            style={{
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 75%)",
            }}
          >
            <defs>
              <pattern id="spdc-grid" width="56" height="56" patternUnits="userSpaceOnUse">
                <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#spdc-grid)" />
          </svg>

          {/* Soft mesh glow behind the headline */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] max-w-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(57,68,188,0.13), rgba(57,68,188,0) 65%)",
            }}
          ></div>

          {/* Depth orbs */}
          <div className="absolute top-16 right-[12%] w-72 h-72 bg-gradient-to-br from-primary/25 to-primary-light/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-8 left-[8%] w-80 h-80 bg-gradient-to-tr from-primary-light/20 to-primary/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>

          {/* Thin accent rings */}
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full border border-primary/10"></div>
          <div className="absolute -top-10 -right-10 w-[280px] h-[280px] rounded-full border border-primary/10"></div>

          {/* Fade into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-primary-light text-white border-0 transform transition-all duration-300 hover:scale-105 font-semibold">
              <Sparkles className="w-4 h-4 mr-2" />
              Membership Club
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent mb-4 animate-gradient-x leading-tight">
              Skillentras Professional Development Club
            </h1>

            <p className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
              Skills That Transform — Together
            </p>

            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8 max-w-3xl mx-auto">
              Join a community of professionals committed to continuous learning, professional growth and
              meaningful connection.
            </p>

            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl px-6 py-4 shadow-lg mb-10">
              <CalendarDays className="w-6 h-6 text-primary shrink-0" />
              <span className="text-gray-700 font-medium text-left">
                Join anytime — your 3-month membership starts the day you activate, not on a fixed schedule.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white border-0 shadow-xl transform transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                <a href={SPDC_LINKS.register} target="_blank" rel="noopener noreferrer">
                  Join SPDC
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary shadow-lg transform transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold bg-white"
              >
                <a href={SPDC_LINKS.courseCalendar} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Course Calendar
                </a>
              </Button>
            </div>

            {/* CPD accreditation badge */}
            <div className="flex flex-col items-center">
              <a
                href={SPDC_LINKS.cpdRegister}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skillentras is a CPD Group Approved Provider. View our listing on The CPD Register."
                className="inline-block bg-white rounded-2xl p-4 shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/cpd.jpeg"
                  alt="CPD Accredited"
                  width={240}
                  height={82}
                  className="h-auto w-[240px]"
                />
              </a>
              <p className="mt-4 text-sm text-gray-500 font-medium">
                Skillentras is a CPD Group Approved Provider — #790884
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is SPDC? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-0 font-semibold hover:bg-primary/10">
                What is SPDC?
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                A learning community built for people who keep growing
              </h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  The Skillentras Professional Development Club (SPDC) is a membership-based learning community
                  for professionals who want to keep growing — without committing to a single long course or a
                  single skill area.
                </p>
                <p>
                  Every quarter, SPDC brings together a diverse set of live online sessions spanning leadership,
                  communication, sales, emotional intelligence, AI, personal branding, and more — delivered by a
                  curated pool of experienced trainers and subject-matter experts.
                </p>
                <p>
                  As a member, you choose the sessions that matter most to you, attend live or catch up via
                  recording, and walk away with practical, workplace-ready skills — plus a certificate of
                  participation for each session you complete.
                </p>
              </div>
              <p className="mt-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                No long-term commitment. No single-topic tunnel vision. Just consistent, flexible, high-quality
                learning — three months at a time.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-3xl animate-float"></div>
              <Card className="relative border border-gray-200 shadow-xl rounded-3xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-primary-light"></div>
                <CardContent className="p-8">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
                    Topics you can expect
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary font-semibold text-sm border border-primary/15"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        6
                      </p>
                      <p className="text-sm text-gray-600 font-medium mt-1">Learning Credits per cycle</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        3
                      </p>
                      <p className="text-sm text-gray-600 font-medium mt-1">Months per membership</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        100%
                      </p>
                      <p className="text-sm text-gray-600 font-medium mt-1">Online delivery</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                        Rs. 6,000
                      </p>
                      <p className="text-sm text-gray-600 font-medium mt-1">Per 3-month cycle</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-0 font-semibold hover:bg-primary/10">
              How It Works
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              From sign-up to certificate in six steps
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Straightforward by design — join, choose what you need, and learn on your own schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card
                key={step.title}
                className="group bg-white border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 rounded-2xl relative overflow-hidden h-full"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-primary-light flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-gray-100 group-hover:text-primary/15 transition-colors duration-300 leading-none">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Membership Plan */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-0 font-semibold hover:bg-primary/10">
              Membership Plan
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">At a glance</h2>
            <p className="text-base text-gray-600 font-medium">
              One simple plan. Everything you need for a full quarter of learning.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-6 sm:px-8 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 animate-gradient-x"></div>
                <div className="relative z-10">
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white/80 mb-1">
                    SPDC Professional Membership
                  </p>
                  <p className="text-4xl sm:text-5xl font-bold tracking-tight leading-none">Rs. 6,000</p>
                  <p className="text-sm text-white/90 font-medium mt-1.5">for a 3-month cycle</p>
                </div>
              </div>

              <CardContent className="p-0">
                <div className="px-6 sm:px-8 py-3 border-b border-gray-100 bg-gray-50/60">
                  <h3 className="text-sm font-bold text-gray-900">What&apos;s included</h3>
                </div>

                <dl className="divide-y divide-gray-100">
                  {planRows.map((row, index) => (
                    <div
                      key={row.label}
                      className={`group/row flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 px-6 sm:px-8 py-2.5 transition-colors duration-200 hover:bg-primary/[0.03] ${
                        index % 2 === 1 ? "bg-gray-50/50" : ""
                      }`}
                    >
                      <dt className="flex items-center gap-3 shrink-0">
                        <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-200 group-hover/row:bg-primary/15">
                          <row.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-primary" />
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest">
                          {row.label}
                        </span>
                      </dt>
                      <dd className="text-sm sm:text-base text-gray-900 font-semibold sm:text-right pl-11 sm:pl-0 leading-snug min-w-0 text-balance">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="px-6 sm:px-8 py-5 bg-gray-50/60 border-t border-gray-100">
                  <Button
                    size="lg"
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white border-0 shadow-lg transform transition-all duration-300 hover:scale-[1.02] py-5 text-base font-semibold"
                  >
                    <a href={SPDC_LINKS.register} target="_blank" rel="noopener noreferrer">
                      Join SPDC Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <p className="text-center text-xs text-gray-500 font-medium mt-3">
                    Membership becomes active from the date of payment confirmation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Certificates & Recognition */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-primary/10 text-primary border-0 font-semibold hover:bg-primary/10">
                Certificates &amp; Recognition
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Every session you attend counts
              </h2>
            </div>

            <Card className="border border-gray-200 shadow-xl rounded-3xl overflow-hidden bg-white">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-light flex items-center justify-center shadow-lg shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    Every session you attend as an SPDC member comes with recognition for your effort. On
                    successful completion of a session, as per SPDC certificate criteria, you&apos;ll receive an{" "}
                    <span className="font-semibold text-gray-900">SPDC Participation Certificate</span> — a record
                    of the skills you&apos;ve built and the time you&apos;ve invested in your growth.
                  </p>
                </div>

                <div className="mt-8 flex gap-4 items-start bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed font-medium">
                    The SPDC Participation Certificate recognizes participation in a session. It does not
                    represent an academic qualification, professional license, degree, or regulated professional
                    certification.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Membership Policy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-primary/10 text-primary border-0 font-semibold hover:bg-primary/10">
                Membership Policy
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Simple, flexible, and fair</h2>
              <p className="text-lg text-gray-600 font-medium">A few key points to know:</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {policyPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 items-start bg-gradient-to-br from-gray-50 to-blue-50/40 border border-gray-200 rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300"
                >
                  <BadgeCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed font-medium">{point}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 font-medium mb-6">
                For complete terms and conditions, please review the full policy document.
              </p>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary shadow-lg transform transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold bg-white"
              >
                <a href={SPDC_LINKS.membershipPolicy} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Download Membership Policy
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full blur-3xl animate-float"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-0 font-semibold hover:bg-primary/10">
              FAQ
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 font-medium">
              Everything you need to know about credits, sessions, and renewals.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id

              return (
                <Card
                  key={faq.id}
                  className={`border transition-all duration-300 rounded-2xl overflow-hidden bg-white ${
                    isOpen
                      ? "border-primary/40 shadow-lg"
                      : "border-gray-200 hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-panel`}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
                  >
                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-gradient-to-r from-primary to-primary-light" : "bg-primary/10"
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-white" : "text-primary"
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`${faq.id}-panel`} className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20"></div>
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-primary-light/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to keep growing — together?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-medium mb-10">
              Join the Skillentras Professional Development Club today and get access to practical, expert-led
              learning every quarter.
            </p>

            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white border-0 shadow-2xl transform transition-all duration-300 hover:scale-105 px-10 py-6 text-lg font-semibold mb-12"
            >
              <a href={SPDC_LINKS.register} target="_blank" rel="noopener noreferrer">
                Join SPDC
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <div className="border-t border-white/10 pt-10">
              <p className="text-gray-400 font-medium mb-6">Have questions? Get in touch.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
                <a
                  href={`tel:${SPDC_LINKS.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </span>
                  {SPDC_LINKS.phone}
                </a>
                <a
                  href={`mailto:${SPDC_LINKS.email}`}
                  className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </span>
                  {SPDC_LINKS.email}
                </a>
                <span className="flex items-center gap-3 text-gray-200 font-medium">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </span>
                  www.skillentras.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
