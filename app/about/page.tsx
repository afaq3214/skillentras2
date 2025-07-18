import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, CheckCircle, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
     

      {/* Breadcrumb */}
       <div className="bg-gradient-to-r from-blue-50 to-primary/5 py-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5 animate-gradient-x"></div>
               <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="flex items-center space-x-2 text-sm animate-fade-in-up">
                   <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                     Home
                   </Link>
                   <span className="text-gray-400">/</span>
                   <span className="text-gray-700 font-medium">About Us</span>
                 </div>
               </div>
             </div>      

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[20rem] font-black text-gray-100/30 select-none transform -rotate-12 animate-pulse">
            TEAM
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-primary-light/20 to-primary/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-primary-light/10 text-white hover:from-primary-light/10 hover:to-primary/10 transform transition-all duration-300 hover:scale-105 font-semibold">
              <Users className="w-4 h-4 mr-2" />
              About Skitllentras
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent mb-6 animate-gradient-x">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Skillentras is a dynamic virtual service agency based in the USA, dedicated to empowering entrepreneurs, coaches, and small businesses globally. Our name blends "Skill" and "Entras" — representing the gateway to expertise and enterprise.
            </p>
          </div>
        </div>
      </section>

    

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">Our Story</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div className="space-y-6">
                <div className="prose prose-lg text-gray-700">
                  <p className="text-lg leading-relaxed mb-6 font-medium">
                    With a team of handpicked professionals, we offer specialized consulting, training, content
                    creation, and support to help our clients grow efficiently in today's business environment.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 font-medium">
                    We become your extended team, not just a service provider. Our approach is built on understanding
                    your unique challenges and delivering solutions that create lasting impact.
                  </p>
                  <p className="text-lg leading-relaxed font-medium">
                    Founded with the vision to bridge the gap between expertise and accessibility, Skillentras has grown
                    from a small consultancy to a comprehensive virtual agency serving clients across the globe. Our
                    commitment to excellence and personalized service has made us the trusted partner for hundreds of
                    businesses seeking growth and innovation.
                  </p>
                </div>

                <div className="flex items-center space-x-6 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600 font-medium">Expert Team</div>
                  </div>
                </div>
              </div>

              {/* Story Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/logo.png"
                    alt="Skillentras team collaboration and growth story"
                    className="w-full md:h-[700px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-lg animate-float">
                  <Users className="w-12 h-12 text-white" />
                </div>

                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
                  <Target className="w-10 h-10 text-white" />
                </div>

                {/* Stats Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg" style={{height:"73px"}}>
                  <div className="flex items-center justify-between text-sm w-full">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium text-gray-700">Growing Since 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Global Reach</span>
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  To provide high-quality, customized consulting, coaching, research, and virtual support that empowers
                  entrepreneurs, coaches, and small businesses to grow and succeed efficiently.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  To be the leading global agency that transforms how small businesses access expertise — through
                  innovative, human-centered, and results-driven solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Skillentras?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We deliver excellence through our core principles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom-fit Solutions</h3>
              <p className="text-gray-600">Aligned with your unique goals and business requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Consultants</h3>
              <p className="text-gray-600">Trainers, writers, and VAs with proven expertise</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">Clear communication and upfront pricing structure</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agile Delivery</h3>
              <p className="text-gray-600">With long-term impact and sustainable results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help you achieve your goals with our expert team and tailored solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}
