import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Target, Users, TrendingUp } from "lucide-react"

export default function CorporatePage() {
  const solutions = [
    {
      icon: Target,
      title: "In-House Programme Design",
      description:
        "Every Skillentras programme can be delivered in-house, fully customised to your organisation's context, culture, and specific development needs.",
    },
    {
      icon: Users,
      title: "Leadership & Team Development",
      description:
        "Build confident, capable, and accountable leaders at every level with practitioner-led development that changes behaviour, not just knowledge.",
    },
    {
      icon: TrendingUp,
      title: "Sales & Commercial Excellence",
      description:
        "Develop sales leaders and commercial teams that inspire, sell customer-first, and deliver sustainable, measurable growth.",
    },
    {
      icon: Building2,
      title: "Organisational Development Consulting",
      description:
        "Strategic L&D consulting — training needs analysis, L&D strategy, and performance consulting that aligns learning with real business outcomes.",
    },
  ]

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
            <span className="text-gray-700 font-medium">Corporate</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-primary-light/20 to-primary/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-primary-light/10 text-white hover:from-primary-light/10 hover:to-primary/10 transform transition-all duration-300 hover:scale-105 font-semibold">
              <Building2 className="w-4 h-4 mr-2" />
              Corporate Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent mb-6 animate-gradient-x">
              Training That Transforms Organisations
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Skillentras partners with organisations to design and deliver in-house training and organisational
              development — built on 30 years of practitioner experience and a commitment to real performance change.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm h-full"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Bring Skillentras In-House</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 font-medium">
            Tell us about your organisation's development needs and we will design a solution accordingly.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-gray-100 border-0 shadow-xl transform transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/contact" className="flex items-center space-x-2">
              <span>Talk to Us</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
