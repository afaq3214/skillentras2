"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Sparkles } from "lucide-react"
import Image from "next/image"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
      const [isScrolled, setIsScrolled] = useState(false)
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
      const heroRef = useRef<HTMLElement>(null)
      
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
     <nav
           className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 ${
             isScrolled
               ? "bg-white backdrop-blur-xl shadow-lg border-b border-white/20"
               : "bg-white backdrop-blur-md"
           }`}
           style={{position: "sticky", }}
         >
           <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary-light/5 to-primary/5 opacity-50"></div>
   
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
             <div className="flex justify-between items-center py-4">
               {/* Enhanced Logo */}
               <Link href="/" className="flex items-center space-x-3 group relative">
                 <div className="relative">
                   <div className="absolute inset-0   rounded-full   group-hover:opacity-40 transition-opacity duration-300"></div>
                   <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                     <Image src="/cursor.png" alt="Skillentras" width={40} height={40} className="" />
                   </div>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary-light group-hover:to-primary">
                     Skillentras
                   </span>
                  
                 </div>
               </Link>
   
               {/* Desktop Navigation */}
               <div className="hidden lg:flex items-center space-x-1">
                 {[
                   { href: "/", label: "Home" },
                   { href: "/about", label: "About" },
                   { href: "/team", label: "Team" },
                   { href: "/services", label: "Services" },
                   { href: "/faq", label: "FAQ" },
                   { href: "/contact", label: "Contact" },
                 ].map((item, index) => (
                   <Link
                     key={item.href}
                     href={item.href}
                     className="relative px-4 py-2 text-gray-700 hover:text-primary transition-all duration-300 group rounded-lg hover:bg-white/50 font-medium"
                     style={{ animationDelay: `${index * 100}ms` }}
                   >
                     <span className="relative z-10 flex items-center space-x-2">
                       <span>{item.label}</span>
                     </span>
                     <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                     <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                   </Link>
                 ))}
               </div>
   
               {/* Enhanced Mobile Menu Button */}
               <div className="lg:hidden">
                 <Button
                   variant="ghost"
                   size="sm"
                   onClick={() => setIsMenuOpen(!isMenuOpen)}
                   className="relative p-2 rounded-xl hover:bg-white/50 transition-all duration-300"
                 >
                   <div className="relative w-6 h-6">
                     <span
                       className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3" : "top-1"}`}
                     ></span>
                     <span
                       className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "top-3"}`}
                     ></span>
                     <span
                       className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-3" : "top-5"}`}
                     ></span>
                   </div>
                 </Button>
               </div>
   
               {/* Enhanced CTA Button */}
               <Button
                 asChild
                 className="hidden lg:flex bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white border-0 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden group font-semibold"
               >
                 <Link href="/contact" className="relative z-10 flex items-center space-x-2">
                   <span>Get Started</span>
                   <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </Link>
               </Button>
             </div>
   
             {/* Enhanced Mobile Navigation */}
             <div
               className={`lg:hidden transition-all duration-500 ease-in-out ${
                 isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
               } overflow-hidden`}
             >
               <div className="py-6 space-y-2 border-t border-white/20 bg-white backdrop-blur-md rounded-b-2xl mt-4">
                 {[
                   { href: "/", label: "Home" },
                   { href: "/about", label: "About" },
                   { href: "/team", label: "Team" },
                   { href: "/services", label: "Services" },
                   { href: "/faq", label: "FAQ" },
                   { href: "/contact", label: "Contact" },
                 ].map((item, index) => (
                   <Link
                     key={item.href}
                     href={item.href}
                     className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary transition-all duration-300 hover:bg-white/50 rounded-lg mx-2 transform hover:translate-x-2 font-medium"
                     onClick={() => setIsMenuOpen(false)}
                     style={{ animationDelay: `${index * 50}ms` }}
                   >
                     <span>{item.label}</span>
                   </Link>
                 ))}
                 <div className="px-2 pt-4">
                   <Button
                     asChild
                     className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-semibold"
                   >
                     <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                       Get Started
                     </Link>
                   </Button>
                 </div>
               </div>
             </div>
           </div>
         </nav>
  )
}

export default Navbar
