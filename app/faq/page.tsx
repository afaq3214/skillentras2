"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

import {
  Search,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Lightbulb,
  Users,
  BookOpen,
  Globe,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle, count: 12 },
    { id: "business", label: "Business Consulting", icon: Users, count: 2 },
    { id: "scholar", label: "Scholarly Support", icon: BookOpen, count: 4 },
    { id: "training", label: "Training", icon: Lightbulb, count: 1 },
    { id: "content", label: "Content Writing", icon: Globe, count: 1 },
    { id: "web", label: "Web Development", icon: Zap, count: 2 },
    { id: "va", label: "Virtual Assistant", icon: MessageCircle, count: 2 },
    { id: "pricing", label: "Pricing & Process", icon: Star, count: 2 },
  ]

  const faqs = [
    {
      id: "business-1",
      category: "business",
      question: "Are business plans customized?",
      answer:
        "Yes, all plans are tailored to your goals and market. We conduct thorough research on your industry, target audience, and competitive landscape to create a comprehensive business plan that aligns with your specific objectives and vision.",
      featured: true,
    },
    {
      id: "business-2",
      category: "business",
      question: "Who should take coaching sessions?",
      answer:
        "Entrepreneurs, startup founders, team leads, and sales professionals who want to enhance their leadership skills, improve communication, and accelerate their business growth. Our coaching is designed for individuals at all levels of experience.",
      featured: false,
    },
    {
      id: "scholar-1",
      category: "scholar",
      question: "Can you help me choose a suitable journal for my research?",
      answer:
        "Yes! We assist in identifying the most appropriate and reputable journals based on your field, topic, and research goals.",
      featured: true,
    },
    {
      id: "scholar-2",
      category: "scholar",
      question: "Do you provide data analysis services?",
      answer:
        "We guide you through data analysis and help interpret your results using tools like SPSS, SmartPLS, and others — especially if you're stuck or need clarity.",
      featured: false,
    },{
      id: "scholar-3",
      category: "scholar",
      question: "Can you help improve the language of my manuscript?",
      answer:
        "Yes, we offer language enhancement, grammar correction, and clarity improvements to help your manuscript meet publication standards.",
      featured: false,
    },{
      id: "scholar-4",
      category: "scholar",
      question: "Who can benefit from this service?",
      answer:
        "Researchers, early-career professionals, doctoral candidates, and anyone preparing work for publication.",
      featured: false,
    },
    {
      id: "training-1",
      category: "training",
      question: "Is training customizable?",
      answer:
        "Yes, all modules are tailored per industry needs. We conduct a thorough needs assessment before designing the training program to ensure it addresses your specific challenges and objectives. Our trainers adapt content, examples, and exercises to your industry context.",
      featured: false,
    },
    {
      id: "content-1",
      category: "content",
      question: "Is SEO included?",
      answer:
        "Optional add-on (+$20/page). Editing available at $25/page. Our SEO optimization includes keyword research, meta descriptions, header optimization, and content structure that helps improve your search engine rankings.",
      featured: false,
    },
    {
      id: "web-1",
      category: "web",
      question: "Can I manage the site myself?",
      answer:
        "Yes, we provide handover and training. You'll receive comprehensive documentation and a training session to help you manage content updates, add new pages, and perform basic maintenance tasks on your WordPress website.",
      featured: false,
    },
    {
      id: "web-2",
      category: "web",
      question: "Are sites mobile and SEO friendly?",
      answer:
        "Absolutely, by default. All our websites are built with responsive design principles and SEO best practices. They automatically adapt to different screen sizes and include optimized loading speeds, clean code, and search engine-friendly structure.",
      featured: true,
    },
    {
      id: "va-1",
      category: "va",
      question: "What tasks can VAs handle?",
      answer:
        "CRM, emails, calendar, SOPs, admin support, research, data entry, social media management, customer service, and various administrative tasks. Our VAs are trained professionals who can adapt to your specific business needs and workflows.",
      featured: false,
    },
    {
      id: "va-2",
      category: "va",
      question: "Can I get urgent help?",
      answer:
        "Yes. Urgent: +30% rush fee. Weekend: +$50/month. We understand that business needs can be unpredictable, so we offer flexible support options to accommodate urgent requests and weekend work when necessary.",
      featured: false,
    },
    {
      id: "pricing-1",
      category: "pricing",
      question: "Do you offer discounts?",
      answer:
        "Bundled discounts and long-term retainers available. We offer special pricing for clients who choose multiple services or commit to longer-term partnerships. Contact us to discuss custom pricing for your specific needs.",
      featured: false,
    },
    {
      id: "pricing-2",
      category: "pricing",
      question: "What are payment terms?",
      answer:
        "50% deposit or full payment for smaller projects. For larger projects, we typically require 50% upfront with the balance due upon completion. We accept various payment methods and can discuss flexible payment schedules for ongoing services.",
      featured: false,
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredFAQs = faqs.filter((faq) => faq.featured)

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary-light/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-40 h-40 bg-primary-light/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-primary-light/10 text-white hover:from-primary-light/10 hover:to-primary/10 font-semibold">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Got Questions? We Have{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Answers
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
              Find answers to common questions about our services, pricing, and processes.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-primary rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured FAQs */}
      {searchTerm === "" && selectedCategory === "all" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Star className="inline w-8 h-8 text-primary mr-2" />
                Most Asked Questions
              </h2>
              <p className="text-gray-600 font-medium">Quick answers to our most popular questions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {featuredFAQs.map((faq, index) => {
                const categoryInfo = categories.find((cat) => cat.id === faq.category)
                return (
                  <Card
                    key={faq.id}
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <CardHeader className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        {categoryInfo && <categoryInfo.icon className="w-6 h-6 text-primary" />}
                        <Badge variant="secondary" className="text-xs font-medium">
                          {categoryInfo?.label}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        {faq.answer.substring(0, 120)}...
                      </p>
                      <Button
                        variant="ghost"
                        onClick={() => toggleItem(faq.id)}
                        className="mt-4 p-0 h-auto text-primary hover:text-primary-dark font-semibold group/btn"
                      >
                        Read Full Answer
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category.id
                    ? "bg-primary hover:bg-primary-dark text-white shadow-lg"
                    : "border-gray-300 hover:border-primary hover:text-primary"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
                <Badge
                  variant="secondary"
                  className={`ml-1 text-xs ${
                    selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-100"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 font-medium">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => {
                const isOpen = openItems.includes(faq.id)
                const categoryInfo = categories.find((cat) => cat.id === faq.category)

                return (
                  <Card
                    key={faq.id}
                    className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary/30 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <CardHeader className="cursor-pointer" onClick={() => toggleItem(faq.id)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="flex items-center space-x-3">
                            {categoryInfo && (
                              <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-light/20 transition-colors duration-300">
                                <categoryInfo.icon className="w-5 h-5 text-primary" />
                              </div>
                            )}
                            <div>
                              <Badge
                                variant="outline"
                                className="text-xs font-medium mb-2 border-primary/30 text-primary"
                              >
                                {categoryInfo?.label}
                              </Badge>
                              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                {faq.question}
                              </CardTitle>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {faq.featured && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
                          <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary" />
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <CardContent className="pt-0">
                        <div className="sm:pl-0 lg:pl-16">
                          <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-xl p-6 border-l-4 border-primary">
                            <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                            <div className="flex items-center mt-4 text-sm text-primary">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              <span className="font-medium">Helpful answer</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8 font-medium">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="font-semibold">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent font-semibold"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
