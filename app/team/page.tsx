import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, BookOpen, Target, Users, Award, Briefcase, Globe, Heart } from "lucide-react"

export default function TeamPage() {
  // Team members data array
  const teamMembers = [
    {
      id: 1,
      name: "Zulfiqar Ali Qureshi",
      title: "Co-Founder | Marketing Consultant & Digital Strategist",
      description:
        "Zulfiqar brings 25+ years of experience in strategic marketing, training, and digital outreach across Asia, with a strong focus on education and healthcare. As a published author and founder of zulfiqaraliqureshi.com, he leads Skillentras' mission to deliver purpose-driven growth solutions.",
      experience: "25+ years experience",
      skills: ["Strategic Marketing", "Digital Strategy", "Published Author", "Training & Development"],
      icon: User,
      gradientFrom: "from-primary/20",
      gradientTo: "to-primary-light/20",
      hoverGradientFrom: "group-hover:from-primary",
      hoverGradientTo: "group-hover:to-primary-light",
      bgGradient: "hover:from-primary/5 hover:to-primary-light/5",
      iconColor: "text-primary",
      hoverIconColor: "group-hover:text-white",
      titleHoverColor: "group-hover:text-primary",
      descriptionHoverColor: "group-hover:text-primary-light",
      specialties: ["Asia Market Expert", "Healthcare Focus", "Education Sector"],
      achievements: ["Published Author", "25+ Years Experience", "Founder of zulfiqaraliqureshi.com"],
      location: "Asia Pacific",
      languages: ["English", "Urdu", "Hindi"],
    },
    {
      id: 2,
      name: "Waleed Faisal Malik",
      title: "Co-Founder | Business Strategy Lead",
      description:
        "Waleed specializes in executive coordination, IT systems, and business process optimization. With 12+ years of experience, he leads consulting and coaching services that support structured growth for startups and small firms.",
      experience: "12+ years experience",
      skills: ["Business Strategy", "IT Systems", "Process Optimization", "Executive Coordination"],
      icon: Users,
      gradientFrom: "from-primary-light/20",
      gradientTo: "to-primary/20",
      hoverGradientFrom: "group-hover:from-primary-light",
      hoverGradientTo: "group-hover:to-primary",
      bgGradient: "hover:from-primary-light/5 hover:to-primary/5",
      iconColor: "text-primary-light",
      hoverIconColor: "group-hover:text-white",
      titleHoverColor: "group-hover:text-primary-light",
      descriptionHoverColor: "group-hover:text-primary",
      specialties: ["Startup Growth", "IT Solutions", "Business Processes"],
      achievements: ["12+ Years Experience", "Startup Specialist", "IT Systems Expert"],
      location: "North America",
      languages: ["English", "Urdu"],
    },
    {
      id: 3,
      name: "Elsa ",
      title: "Director of Operations & HR Specialist",
      description:
        "Elsa is an HRM expert with over 6 years of experience in HR operations and policy. Author of 'HRM in Pakistan: From Theory to Practices,' she ensures strategic alignment and operational excellence at Skillentras.",
      experience: "6+ years experience",
      skills: ["HR Operations", "Policy Development", "Published Author", "Strategic Alignment"],
      icon: Users,
      gradientFrom: "from-primary/20",
      gradientTo: "to-primary-light/20",
      hoverGradientFrom: "group-hover:from-primary",
      hoverGradientTo: "group-hover:to-primary-light",
      bgGradient: "hover:from-primary/5 hover:to-primary-light/5",
      iconColor: "text-primary",
      hoverIconColor: "group-hover:text-white",
      titleHoverColor: "group-hover:text-primary",
      descriptionHoverColor: "group-hover:text-primary-light",
      specialties: ["HR Policy", "Operations Management", "Team Development"],
      achievements: ["Published Author", "HR Expert", "Operations Director"],
      location: "Pakistan",
      languages: ["English", "Urdu"],
    }
  ]

  // Team values data
  const teamValues = [
    {
      id: 1,
      title: "Expertise",
      description: "Decades of combined experience across multiple industries and disciplines",
      icon: Target,
      gradientFrom: "from-primary",
      gradientTo: "to-primary-light",
      hoverGradientFrom: "group-hover:from-primary-light",
      hoverGradientTo: "group-hover:to-primary",
      hoverTextColor: "group-hover:text-primary",
    },
    {
      id: 2,
      title: "Collaboration",
      description: "Working together as your extended team to achieve shared success",
      icon: Users,
      gradientFrom: "from-primary-light",
      gradientTo: "to-primary",
      hoverGradientFrom: "group-hover:from-primary",
      hoverGradientTo: "group-hover:to-primary-light",
      hoverTextColor: "group-hover:text-primary-light",
    },
    {
      id: 3,
      title: "Innovation",
      description: "Continuously learning and adapting to deliver cutting-edge solutions",
      icon: BookOpen,
      gradientFrom: "from-primary",
      gradientTo: "to-primary-light",
      hoverGradientFrom: "group-hover:from-primary-light",
      hoverGradientTo: "group-hover:to-primary",
      hoverTextColor: "group-hover:text-primary",
    },
  ]

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
            <span className="text-gray-700">Meet the Team</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Text */}
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
              Our Leadership Team
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent mb-6 animate-gradient-x">
              Meet the Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our experienced leaders bring decades of expertise in business consulting, strategy, and operations to
              help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members with Enhanced Hover Effects */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[15rem] font-black text-gray-50/20 select-none transform rotate-6">EXPERTS</div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon
              return (
                <Card
                  key={member.id}
                  className={`group border-gray-200 hover:border-transparent transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-white hover:bg-gradient-to-br ${member.bgGradient} relative overflow-hidden shadow-lg hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Animated Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-16 -translate-y-16`}
                  ></div>

                  <CardHeader className="text-center relative z-10">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} ${member.hoverGradientFrom} ${member.hoverGradientTo} rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl`}
                    >
                      <IconComponent
                        className={`h-12 w-12 ${member.iconColor} ${member.hoverIconColor} transition-colors duration-300`}
                      />
                    </div>
                    <CardTitle
                      className={`text-xl text-gray-900 ${member.titleHoverColor} transition-colors duration-300 font-semibold`}
                    >
                      {member.name}
                    </CardTitle>
                    <CardDescription
                      className={`text-gray-600 ${member.descriptionHoverColor} font-medium transition-colors duration-300`}
                    >
                      {member.title}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Target
                          className={`h-4 w-4 ${member.iconColor} ${member.hoverIconColor} transition-colors duration-300`}
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-700 font-medium">
                          {member.experience}
                        </span>
                      </div>

                      <p className="text-gray-700 group-hover:text-gray-800 text-sm leading-relaxed font-medium transition-colors duration-300">
                        {member.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className={`text-xs group-hover:bg-primary/10 ${member.titleHoverColor} transition-colors duration-300 font-medium`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Values with Enhanced Hover Effects */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/5 relative overflow-hidden">
        

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent mb-8 animate-gradient-x">
              Our Team Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamValues.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={value.id}
                    className="text-center group transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${value.gradientFrom} ${value.gradientTo} ${value.hoverGradientFrom} ${value.hoverGradientTo} rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-2xl`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3
                      className={`text-xl font-semibold text-gray-900 ${value.hoverTextColor} mb-3 transition-colors duration-300`}
                    >
                      {value.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 font-medium transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Hover Effects */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[10rem] font-black text-gray-50/30 select-none transform rotate-12">READY</div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent mb-6 animate-gradient-x">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-medium">
              Let's discuss how our experienced professionals can help accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold group"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Schedule a Consultation</span>
                  <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold group"
              >
                <Link href="/services" className="flex items-center space-x-2">
                  <span>View Our Services</span>
                  <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
