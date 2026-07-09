import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Lightbulb } from "lucide-react"

export default function InsightsPage() {
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
            <span className="text-gray-700 font-medium">Insights</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-primary-light/20 to-primary/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-primary-light/10 text-white hover:from-primary-light/10 hover:to-primary/10 transform transition-all duration-300 hover:scale-105 font-semibold">
              <Lightbulb className="w-4 h-4 mr-2" />
              Insights
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent mb-6 animate-gradient-x">
              Ideas on Learning, Leadership & Performance
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10">
              Practitioner perspectives from 30 years across pharma, banking, FMCG, and corporate sectors — drawn from
              real programmes, real teams, and what actually changes performance.
            </p>

            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl px-6 py-4 shadow-lg">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-gray-700 font-medium">
                Articles &amp; thought leadership are on the way. In the meantime, get in touch to talk about your team.
              </span>
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white border-0 shadow-xl transform transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
