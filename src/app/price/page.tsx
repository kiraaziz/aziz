import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: "Consultation",
    description: "One-on-one session for advice, code review, or troubleshooting your project.",
    priceLabel: 70,
    scale: "hour",
    features: [
      "Video or chat session",
      "Direct Q&A",
      "Code review or bug fix",
      "Actionable next steps"
    ]
  },
  {
    name: "Basic",
    description: "Perfect for personal portfolios, landing pages, or small businesses seeking an online presence.",
    priceLabel: 4000,
    scale: "project",
    features: [
      "Professional showcase website",
      "Up to 5 uniquely designed pages",
      "Responsive design (mobile & desktop)",
      "Delivered in 3 days",
      "20 days of free bug fixes & support"
    ]
  },
  {
    name: "Custom",
    description: "Enterprise-grade, scalable SaaS solutions with advanced integrations.",
    priceLabel: 18000,
    scale: "project",
    features: [
      "Custom SaaS application built from scratch",
      "AI integration & automation features",
      "Full project lifecycle: from concept to deployment",
      "3 to 12 months of agile development",
      "1 year of free premium maintenance & support"
    ],
    isFeatured: true
  },
  {
    name: "Pro",
    description: "Dynamic multi-page website for growing businesses needing advanced features.",
    priceLabel: 10000,
    scale: "project",
    features: [
      "E-commerce integration (shop & cart)",
      "Comprehensive management system (admin panel, dashboard)",
      "Custom, dynamic content (CMS integration)",
      "Up to 60 days of collaborative development",
      "90 days of free post-launch maintenance"
    ]
  }
]

export default function PricePage() {
  return (
    <div className="w-full mt-2 lg:mt-5 max-w-6xl mx-auto lg:py-24 lg:flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="max-w-xl mb-5 to-start-animation">
          <h1 className="text-xl lg:text-3xl font-bold">Plans & Pricing</h1>
          <p className="text-foreground/60 max-w-xl hidden lg:flex font-light text-sm">
            Flexible options for every client: from code review and consulting to full-scale SaaS development. Choose what fits you best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mt-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`to-start-animation border p-3 rounded-2xl bg-muted/20 ${plan.isFeatured ? "lg:scale-110 bg-linear-to-b from-primary/10" : ""}`}
            >
              <span className='to-start-animation bg-primary text-xs text-foreground px-3 rounded-full'>
                {plan.name}
              </span>
              <div className='to-start-animation mt-1'>
                <h1 className='text-2xl font-medium'>
                  {plan.priceLabel.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
                  <span className="ml-1 text-xs font-light text-muted-foreground">per {plan.scale}</span>
                </h1>
              </div>
              <Link href="mailto:kiraaziz2020@gmail.com">
                <Button className={`gap-2 hover:gap-5 w-full mt-3 bg-transparent rounded-xl ${plan.isFeatured ? "bg-primary text-background border-primary hover:border-transparent" : ""}`} variant="outline">
                  Get Started
                  <ArrowRight size={17} />
                </Button>
              </Link>
              <div className='to-start-animation mt-3 space-y-1.5 border-t pt-3'>
                {plan.features.map((f, i) => (
                  <div key={i} className='to-start-animation flex items-center gap-2 justify-center text-sm font-extralight text-foreground/60'>
                    <CheckCircle className='w-4' />
                    <p className='flex-1'>{f}</p>
                  </div>
                ))}
              </div>
              <p className="my-2 text-xs text-foreground/80 font-extralight">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
