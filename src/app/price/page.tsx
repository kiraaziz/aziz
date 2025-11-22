import { Button } from '@/components/ui/button'
import { metaData } from '@/utils/content/metaData'
import { cn } from '@/utils/global'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function PricePage() {
  const { title, description, plans } = metaData.pricePage

  return (
    <div className="w-full mt-2 lg:mt-5 max-w-6xl mx-auto min-h-[65vh] lg:flex flex-col items-center justify-center">
      <div className="w-full">
        <div className=" max-w-xl mb-5 to-start-animation">
          <h1 className="text-xl lg:text-3xl font-bold">{title}</h1>
          <p className="text-foreground/60 max-w-xl hidden lg:flex font-light text-sm">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mt-10">
          {plans.map((plan) => (
            <div className={`to-start-animation border p-3 rounded-2xl bg-muted/20 ${plan.isFeatured && "lg:scale-110 bg-linear-to-b from-primary/10"}`}>
              <span className='to-start-animation bg-primary text-xs text-foreground px-3 rounded-full'>
                {plan.name}
              </span>
              <div className='to-start-animation mt-1'>
                <h1 className='text-2xl font-medium'>
                  {plan.priceLabel.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
                  <span className="ml-1 text-xs font-light text-muted-foreground">per {plan.scale}</span>
                </h1>
              </div>
              <Link href={metaData.contact.gmail.name}>
                <Button className={`gap-2 hover:gap-5 w-full mt-3 bg-transparent rounded-xl ${plan.isFeatured && "bg-primary text-background border-primary hover:border-transparent"}`} variant="outline">
                Get Started
                  <ArrowRight size={17} />
                </Button>
              </Link>
              <div className=' to-start-animation mt-3 space-y-1.5 border-t pt-3'>
                {plan.features.map((f) => (
                  <div className='to-start-animation flex items-center gap-2 justify-center text-sm font-extralight text-foreground/60 '>
                    <CheckCircle className='w-4' />
                    <p className='flex-1'>{f}</p>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
