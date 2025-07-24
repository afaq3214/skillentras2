"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Lightbulb,
  Award,
  Star,
  TrendingUp,
  Zap,
  Sparkles,
  ChevronDown, Globe, 
  HelpCircle
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)
  const [faqStates, setFaqStates] = useState<{ [key: number]: boolean }>({})

  const toggleFaq = (index: number) => {
    setFaqStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative hoverable">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full blur-3xl animate-float"
          style={{
            left: mousePosition.x * 0.02 + "px",
            top: mousePosition.y * 0.02 + "px",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-primary-light/10 to-primary/10 rounded-full blur-3xl animate-float-delayed"
          style={{
            right: mousePosition.x * 0.01 + "px",
            bottom: mousePosition.y * 0.01 + "px",
          }}
        />
      </div>

      {/* Enhanced Navigation */}
    

      {/* Enhanced Hero Section */}
   <section
  ref={heroRef}
  className="pt-24  lg:pb-10 sm:py-32 lg:py-32 relative overflow-hidden  bg-cover bg-center bg-no-repeat"
  style={{ backgroundBlendMode: 'overlay',paddingBottom: '8rem' }}
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden background">
    {/* Existing Gradient Circles */}
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-3xl animate-pulse"></div>
    <div
      className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-primary-light/20 to-primary/20 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: '1s' }}
    ></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full blur-3xl animate-spin-slow"></div>

    {/* New Animated Background Spans */}
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center max-w-5xl mx-auto">
      <div className="animate-on-scroll opacity-0 translate-y-8">
        <Badge className="mb-8 bg-gradient-to-r from-primary/10 to-primary-light/10 text-white hover:from-primary-light/10 hover:to-primary/10 transform transition-all duration-300 hover:scale-105 shadow-lg font-semibold">
          <Sparkles className="w-4 h-4 mr-2" />
          Premium Virtual Support & Expertise
        </Badge>
      </div>

      <div className="animate-on-scroll opacity-0 translate-y-8" style={{ animationDelay: '200ms' }}>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Welcome to{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent animate-gradient-x">
              Skillentras
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-lg blur opacity-20 animate-pulse"></div>
          </span>
        </h1>
      </div>

      <div className="animate-on-scroll opacity-0 translate-y-8" style={{ animationDelay: '400ms' }}>
        <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
          Empowering Entrepreneurs, Coaches, and Small Businesses with Premium Virtual Support and Expertise.
        </p>
      </div>

      <div className="animate-on-scroll opacity-0 translate-y-8" style={{ animationDelay: '600ms' }}>
        <p className="text-base sm:text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          At Skillentras, we blend expertise and innovation to help your business grow efficiently. Whether you need business consulting, professional training, digital solutions, or virtual support, we provide tailored services designed to meet your unique goals.
        </p>
      </div>

      <div
        className="animate-on-scroll opacity-0 translate-y-8 flex flex-col sm:flex-row gap-6 justify-center"
        style={{ animationDelay: '800ms' }}
      >
        <Button
          size="lg"
          asChild
          className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white border-0 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden group px-8 py-4 text-lg font-semibold"
        >
          <Link href="/contact" className="relative z-10 flex items-center space-x-2">
            <span>Get Started Today</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold"
        >
          <Link href="/services" className="flex items-center space-x-2">
            <span>View Services</span>
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Link>
        </Button>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute sm:mt-12 lg:mt-0 bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>
      {/* Enhanced Services Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services at a{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Glance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Comprehensive solutions tailored to your business needs with cutting-edge expertise
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                title: "Website Content Writing",
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
                icon: Globe,
                title: "WordPress Website Development",
                description: "Complete website setup with mobile-friendly, SEO-optimized design.",
                features: [
                  "Full setup, theme customization",
                  "Mobile-friendly, SEO-optimized websites",
                  "Handover and training included",
                  "Easy self-management",
                ],
                color: "from-teal-500 to-teal-600",
                delay: "800ms",
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
            ].map((service, index) => (
              <div
                key={index}
                className="group animate-on-scroll opacity-0 translate-y-8"
                style={{ animationDelay: service.delay }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-white/80 backdrop-blur-sm relative overflow-hidden h-full">
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative z-10 pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed font-normal">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} shadow-sm`}></div>
                          <span className="text-gray-700 text-sm font-normal">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text hover:bg-primary/5 p-0 h-auto font-semibold group/btn transition-all duration-300`}
                    >
                      <Link href='/services'>
                      Learn More
                      </Link>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
       <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-white to-primary-light/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-on-scroll opacity-0 translate-y-8">
            <div className="relative">
              <div className="absolute -top-8 -left-8 text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 italic mb-12 leading-relaxed relative z-10">
                We open the door to expert skills and tailored solutions that empower your business to{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  grow, innovate, and succeed.
                </span>
              </blockquote>
              <div className="absolute -bottom-8 -right-8 text-6xl text-primary-light/20 font-serif">"</div>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white border-0 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 px-8 py-4 text-lg relative overflow-hidden group font-semibold"
              >
                <Link href="/contact" className="relative z-10 flex items-center space-x-2">
                  <span>Ready to Get Started?</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 animate-gradient-x"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: TrendingUp },
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "50+", label: "Expert Team Members", icon: Users },
              { number: "24/7", label: "Support Available", icon: Zap },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 translate-y-8 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm sm:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
       
      {/* Enhanced Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0 translate-y-8 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Skillentras?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Custom-fit Solutions", desc: "Aligned with your unique goals", delay: "0ms" },
                {
                  icon: Award,
                  title: "Certified Experts",
                  desc: "Consultants, trainers, writers & VAs",
                  delay: "200ms",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing",
                  desc: "Clear communication & pricing",
                  delay: "400ms",
                },
                { icon: Lightbulb, title: "Agile Delivery", desc: "Long-term impact focus", delay: "600ms" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-on-scroll opacity-0 translate-y-8 group"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quote Section */}
      
 <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-primary-light/10 text-white hover:from-primary-light/10 hover:to-primary/10 font-semibold">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Got Questions? We Have{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Answers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Quick answers to the most common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  question: "Are business plans customized?",
                  answer:
                    "Yes, all plans are tailored to your goals and market. We conduct thorough research on your industry, target audience, and competitive landscape to create a comprehensive business plan.",
                  category: "Business Consulting",
                  icon: Target,
                  featured: true,
                },
                {
                  question: "Is the writing plagiarism-free?",
                  answer:
                    "Yes. 100% original content with proper citations. We use advanced plagiarism detection tools and follow strict academic integrity standards.",
                  category: "Academic Services",
                  icon: Award,
                  featured: true,
                },
                {
                  question: "Are sites mobile and SEO friendly?",
                  answer:
                    "Absolutely, by default. All our websites are built with responsive design principles and SEO best practices with optimized loading speeds.",
                  category: "Web Development",
                  icon: Zap,
                  featured: true,
                },
                {
                  question: "What tasks can VAs handle?",
                  answer:
                    "CRM, emails, calendar, SOPs, admin support, research, data entry, social media management, customer service, and various administrative tasks.",
                  category: "Virtual Assistant",
                  icon: Users,
                  featured: false,
                },
              ].map((faq, index) => {
                const isOpen = faqStates[index] || false

                return (
                  <div
                    key={index}
                    className="group animate-on-scroll opacity-0 translate-y-8"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Card className="border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <CardHeader className="cursor-pointer" onClick={() => toggleFaq(index)}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 flex-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-light/20 transition-colors duration-300">
                              <faq.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <Badge
                                variant="outline"
                                className="text-xs font-medium mb-2 border-primary/30 text-primary"
                              >
                                {faq.category}
                              </Badge>
                              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 text-left">
                                {faq.question}
                              </CardTitle>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {faq.featured && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
                            <div
                              className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            >
                              <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary" />
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <CardContent className="pt-0">
                          <div className="sm:pl-0 lg:pl-16">
                            <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-xl p-4 border-l-4 border-primary">
                              <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                              <div className="flex items-center mt-3 text-sm text-primary">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                <span className="font-medium">Helpful answer</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>

            {/* View All FAQs CTA */}
            <div
              className="text-center mt-12 animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: "800ms" }}
            >
              <p className="text-gray-600 mb-6 font-medium">Have more questions?</p>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 px-8 py-4 text-lg relative overflow-hidden group font-semibold"
              >
                <Link href="/faq" className="relative z-10 flex items-center space-x-2">
                  <span>View All FAQs</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
     
      
    </div>
  )
}
