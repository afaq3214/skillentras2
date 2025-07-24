import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur opacity-50"></div>
                  <Image src="/cursor.png" alt="Skillentras" width={45} height={45} className="relative" />
                </div>
                <Link href='/' className="text-2xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  Skillentras
                </Link>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed font-medium">
                Empowering entrepreneurs, coaches, and small businesses with premium virtual support and expertise.
              </p>
              <div className="space-y-2 text-gray-400 text-sm font-medium">
                <p>📧 info@skillentras.com</p>
                <p>🕒 Office No: Whatsapp: +92 321 8580007</p>
                <p>🕒 Office Cell No: +1 571 2765326</p>
                <p>🌍 Location: USA (Serving clients globally)</p>
                <p ><Link href='https://www.linkedin.com/company/skillentras/posts/?feedView=all' className='flex items-end'><Linkedin /> &nbsp;Linkedin</Link></p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Services" },
                  { href: "/team", label: "Team" },
                  { href: "/faq", label: "FAQ" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform relative group font-medium"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-primary/20 to-primary-light/20 group-hover:w-full transition-all duration-300 -z-10"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Services</h3>
              <div className="space-y-3 text-sm">
                <p className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer font-medium">
                 <Link href='/services'>Business Consultancy</Link> 
                </p>
                <p className="text-gray-300 hover:text-primary-light transition-colors duration-300 cursor-pointer font-medium">
                  <Link href='/services'>Scholarly Guidance</Link> 
                </p>
                <p className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer font-medium">
                  <Link href='/services'>Training & Development</Link> 
                </p>
                <p className="text-gray-300 hover:text-primary-light transition-colors duration-300 cursor-pointer font-medium">
                  <Link href='/services'> Virtual Assistant</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm font-medium">
              © {new Date().getFullYear()} Skillentras. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>
    
  )
}

export default Footer
