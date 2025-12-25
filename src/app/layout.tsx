import Navbar from "@/components/Global/Navbar"
import { type Metadata } from "next"
import { Poppins } from "next/font/google"
import "@/utils/styles/globals.css"
import Footer from "@/components/Global/Footer"
import Animator from "@/components/ui/animator"
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: "Kira Aziz | Fullstack Developer Portfolio",
  description: "Showcasing the work, skills, and projects of Kira Aziz – a Tunisian full-stack developer with a passion for crafting web apps, creative problem-solving, and delivering impactful digital experiences. Explore my latest software, SaaS launches, and design system – let’s build something amazing together.",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
}

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="sitemap" href="/sitemap.xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className="bg-background relative text-foreground">
        <div className="h-screen w-screen bg fixed top-0 right-0 z-0"></div>
        <div className="flex h-svh w-full flex-col z-10 overflow-hidden">
          <Navbar />
          <Animator />
          <main id="root" className="  h-[calc(100svh-4rem)] z-10 overflow-x-hidden">
            <div className="bgs" />
            <div className="h-max p-5 lg:p-0 min-h-[calc(100svh-11rem)]">
              {children}
              <div className="w-full h-20"></div>
            </div>
            <Footer />
          </main>
        </div>
        <Analytics mode={'production'} />
      </body>
    </html>
  )
}
