import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/navbar"
import CustomCursor from '../components/CustomCursor';
import Footer from "@/components/footer/Footer"
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
})

export const metadata: Metadata = {
  title: "Skillentras - Premium Virtual Support & Expertise",
  description: "Empowering Entrepreneurs, Coaches, and Small Businesses with Premium Virtual Support and Expertise.",
   icons: {
    icon: '/cursor.png', 
    
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat`}>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
