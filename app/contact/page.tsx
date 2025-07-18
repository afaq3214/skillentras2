'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Clock,
  MapPin,
  Send,
  Calendar,
  Phone,
  MessageSquare,
  CheckCircle,
  Star,
  Globe,
  Users,
  Zap,
  Heart,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLImageElement | null>(null);

  // Custom cursor movement
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      // setError('Failed to send your message. Please try again later.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@skillentras.com',
      description: 'We\'ll respond within 24 hours',
      color: 'from-blue-500 to-blue-600',
      delay: '0ms',
    },
    {
      icon: Clock,
      title: 'Office No',
    value: 'Cell No: +1 571 2765326',
      description: 'Whatsapp: +92 321 8580007',
      color: 'from-green-500 to-green-600',
      delay: '200ms',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'USA',
      description: 'Serving clients globally',
      color: 'from-purple-500 to-purple-600',
      delay: '400ms',
    },
    {
      icon: Phone,
      title: 'Quick Response',
      value: '24/7 Support',
      description: 'Emergency assistance available',
      color: 'from-orange-500 to-orange-600',
      delay: '600ms',
    },
  ];

  const quickActions = [
    {
      icon: Linkedin,
      title: 'Connect on LinkedIn',
      description: 'Follow us for updates',
      color: 'from-blue-500 to-blue-600',
      href: 'https://www.linkedin.com/company/skillentras/posts/?feedView=all',
    },
    {
      icon: Calendar,
      title: 'Book a Discovery Call',
      description: 'Schedule a free consultation',
      color: 'from-primary to-primary-light',
      href: '/services',
    },
    {
      icon: Globe,
      title: 'View Our Services',
      description: 'Explore what we offer',
      color: 'from-purple-500 to-purple-600',
      href: '/services',
    },
  ];

  const stats = [
    { number: '24h', label: 'Response Time', icon: Zap },
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Satisfaction Rate', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Custom Cursor */}
      <img
        ref={cursorRef}
        src={isHovering ? '/cursor-hover.png' : '/cursor.png'}
        alt="Custom Cursor"
        className="hidden sm:block"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-blue-50 to-primary/5 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5 animate-gradient-x"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-sm animate-fade-in-up">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary-light/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-主的3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-primary-light/20 to-primary/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[20rem] font-black text-gray-100/20 select-none transform -rotate-12 animate-pulse">
            CONTACT
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
              <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-primary-light/10 text-white hover:from-primary-light/10 hover:to-primary/10 transform transition-all duration-300 hover:scale-105 shadow-lg font-semibold">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent animate-gradient-x">
                  Great Together
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
                Have a project or question? Reach out — we'll respond within 24 hours with personalized solutions for your business needs.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '800ms' }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group transform transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[15rem] font-black text-gray-50/10 select-none transform rotate-6">CONNECT</div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div className="animate-fade-in-left opacity-0" style={{ animationDelay: '200ms' }}>
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full blur-2xl opacity-50"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg font-medium">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                  )}
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="group">
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors"
                          >
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            required
                            className="transform transition-all duration-300 focus:scale-105 hover:shadow-md"
                          />
                        </div>
                        <div className="group">
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:tex
                            t-primary transition-colors"
                          >
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            required
                            className="transform transition-all duration-300 focus:scale-105 hover:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="transform transition-all duration-300 focus:scale-105 hover:shadow-md"
                        />
                      </div>
                      <div className="group">
                        <label
                          htmlFor="company"
                          className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors"
                        >
                          Company (Optional)
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company Name"
                          className="transform transition-all duration-300 focus:scale-105 hover:shadow-md"
                        />
                      </div>
                      <div className="group">
                        <label
                          htmlFor="service"
                          className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors"
                        >
                          Service Interest *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transform transition-all duration-300 focus:scale-105 hover:shadow-md font-medium"
                        >
                          <option value="">Select a service</option>
                          <option value="business-consulting">Business Consulting & Coaching</option>
                          <option value="academic-research">Academic Research & Publication</option>
                          <option value="training">Training & Development</option>
                          <option value="content-writing">Website Content Writing</option>
                          <option value="web-development">WordPress Development</option>
                          <option value="virtual-assistant">Virtual Assistant Services</option>
                          <option value="custom">General Inquiry</option>
                        </select>
                      </div>
                      <div className="group">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project or how we can help you..."
                          rows={5}
                          required
                          className="transform transition-all duration-300 focus:scale-105 hover:shadow-md"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white border-0 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden group font-semibold py-3"
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Send Message</span>
                              <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </>
                          )}
                        </span>
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12 animate-bounce-in">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-600 font-medium">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            <div className="animate-fade-in-right opacity-0" style={{ animationDelay: '400ms' }}>
              <div className="relative mb-8 group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <img
                    src="/contactus.jpg?height=200&width=300"
                    alt="Professional team collaboration and communication"
                    className="w-full h-[461px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg animate-float">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float-delayed">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-700">Available 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-8">
                  Contact Information
                </h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <info.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 text-lg">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 font-semibold">{info.value}</p>
                        <p
                          className={`text-sm ${
                            info.title === 'Office No' ? 'text-gray-700 font-semibold text-md' : 'text-gray-500'
                          } font-medium`}
                        >
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/5 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[12rem] font-black text-primary/10 select-none transform -rotate-12 animate-pulse">
            QUICK
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent mb-6 animate-gradient-x">
              Quick Actions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Choose the fastest way to get the help you need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-white/80 backdrop-blur-sm relative overflow-hidden animate-fade-in-up opacity-0"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl`}
                  >
                    <action.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {action.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-medium">{action.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <Button
                    asChild
                    className={`bg-gradient-to-r ${action.color} hover:shadow-xl transform transition-all duration-300 hover:scale-105 font-semibold group/btn`}
                  >
                    <Link href={action.href} className="flex items-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 transform transition-all duration-300 hover:scale-110 hover:rotate-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 font-medium">
              Join hundreds of satisfied clients who have transformed their businesses with our expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="transform transition-all duration-300 hover:scale-105 font-semibold group"
              >
                <Link href="/services" className="flex items-center space-x-2">
                  <span>View Services</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent transform transition-all duration-300 hover:scale-105 font-semibold group"
              >
                <Link href="/faq" className="flex items-center space-x-2">
                  <span>Read FAQ</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}