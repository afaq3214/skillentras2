import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Award, Users, Lightbulb, CheckCircle, Globe, ArrowRight,Code,Smartphone } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Breadcrumb */}
      <div className="bg-blue-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Flexible Solutions for Your Business Needs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive services designed to help entrepreneurs, coaches, and small businesses grow efficiently and
              achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Target,
                title: "Business Consultancy & Coaching",
                description: "Strategic guidance to accelerate your business growth and leadership development.",
                features: [
                  "Business plan & proposal development",
                  "Pitch decks and startup advisory",
                  "Leadership & communication coaching",
                  "Marketing and HR consulting",
                ],
                color: "from-blue-500 to-blue-600",
                delay: "0ms",
              },
              {
                icon: Award,
                title: "Academic Research & Publication Support",
                description: "Professional academic writing and research services for scholars and professionals.",
                features: [
                  "Thesis, research paper writing, and editing",
                  "Journal formatting and submission",
                  "SPSS/SmartPLS data analysis",
                  "100% plagiarism-free content",
                ],
                color: "from-purple-500 to-purple-600",
                delay: "200ms",
              },
              {
                icon: CheckCircle,
                title: "Virtual Assistant Services",
                description: "Flexible administrative support with monthly plans from 10 to 50 hours.",
                features: [
                  "Email, calendar, CRM management",
                  "SOPs, research, admin support",
                  "Monthly plans (10 to 50 hours)",
                  "Urgent support available (+30% rush fee)",
                ],
                color: "from-pink-500 to-pink-600",
                delay: "1000ms",
              },
              {
                icon: Users,
                title: "Training & Development",
                description: "Customized training programs to enhance your team's skills and performance.",
                features: [
                  "Certified sales, leadership, and EI workshops",
                  "Team building and pharma-specific training",
                  "Industry-tailored modules",
                  "Interactive and engaging sessions",
                ],
                color: "from-green-500 to-green-600",
                delay: "400ms",
              },
              {
                icon: Lightbulb,
                title: "Content Writing",
                description: "Professional content creation to establish your brand's online presence.",
                features: [
                  "SEO copywriting for 4-page starter sites",
                  "Brand messaging, mission/vision",
                  "Content editing and optimization",
                  "SEO add-on available (+$20/page)",
                ],
                color: "from-orange-500 to-orange-600",
                delay: "600ms",
              },
              
              {
    "icon": Code,
    "title": "Web Development Services",
    "description": "Custom web solutions to build responsive, scalable, and high-performance websites tailored to your business needs.",
    "features": [
      "Custom website design and development",
      "Responsive and mobile-optimized UI/UX",
      "Integration with CMS or e-commerce platforms",
      "SEO optimization and performance tuning"
    ],
    "color": "from-blue-500 to-blue-600",
    "delay": "1200ms"
  },
  {
    "icon": Smartphone,
    "title": "Digital Marketing Services",
    "description": "Comprehensive digital marketing strategies to boost your brand’s online presence and drive conversions.",
    "features": [
      "Social media marketing and management",
      "Search engine optimization (SEO) and PPC campaigns",
      "Content creation (blogs, videos, infographics)",
      "Analytics and performance tracking"
    ],
    "color": "from-purple-500 to-purple-600",
    "delay": "1400ms"
  }
            ].map((service, index) => (
              <div
                key={index}
                className="group animate-fade-in-up card-hover"
                style={{ animationDelay: service.delay }}
              >
                <Card className="border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl bg-white relative overflow-hidden h-full">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <CardHeader className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button
                      
                       variant="ghost"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn"
                      ><Link href='/contact'>
                        Learn More
                      </Link>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Packages Section */}
      {/* <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           
            <Card className="border-blue-200 bg-white hover:border-blue-400 transition-colors">
              <CardHeader className="text-center">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 w-fit mx-auto">Most Popular</Badge>
                <CardTitle className="text-2xl text-blue-900">Starter Package</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">$299</div>
                <CardDescription className="text-gray-600 mt-2">
                  Perfect for small businesses getting started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">Basic business consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">4-page website content</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">10 hours VA support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">Email support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            Professional Growth Package
            <Card className="border-blue-200 bg-white hover:border-blue-400 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-900">Professional Growth Package</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">$599</div>
                <CardDescription className="text-gray-600 mt-2">
                  Comprehensive support for growing businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">Advanced business consulting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">WordPress website development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">25 hours VA support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">Training workshop included</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

         
            <Card className="border-blue-200 bg-white hover:border-blue-400 transition-colors">
              <CardHeader className="text-center">
                <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-100 w-fit mx-auto">Premium</Badge>
                <CardTitle className="text-2xl text-blue-900">Executive Impact Package</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">$999</div>
                <CardDescription className="text-gray-600 mt-2">
                  Complete solution for established businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">Full business strategy consulting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">Academic research support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">Complete website solution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">50 hours VA support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">Dedicated account manager</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution?</p>
            <Button variant="outline" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
              <Link href="/contact">
                Compare Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose the service that fits your needs and let our expert team help you achieve your goals.
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
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
