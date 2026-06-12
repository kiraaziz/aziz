import React from 'react'

export default function ExperienceDetail() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-14 lg:mt-24 grid gap-3 ">
      <div className="col-span-full w-full items-center justify-center flex-col mx-auto max-w-2xl lg:text-center mb-2 to-start-animation">
        <h1 className="text-lg lg:text-3xl font-bold mb-2">Work Experience</h1>
        <p className="text-foreground/60 max-w-xl hidden lg:flex mb-5">Since 2023, I've worked with various companies and clients, embracing opportunities to grow and make an impact.</p>
      </div>
      <div className="grid grid-cols-1 w-full mx-auto max-w-2xl">
        <div className="w-full flex flex-col gap-1 relative justify-between py-2 lg:py-4 border-dashed lg:border-y">
          <div className='pb-7 -translate-x-7 -translate-y-7 pt-3 hidden lg:flex absolute w-1/2 h-full top-0 -z-20 max-w-80'>
            <img className="w-full " src="/experience/delib.svg" />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-tr opacity-60 from-background top-0' />
          </div>
          <div className="flex items-start justify-start gap-4">
            <div className="h-12 w-12 bg-muted/20 rounded-full flex items-center justify-center border p-1.5 to-start-animation">
              <img className="w-full " src="/experience/delib.svg" />
            </div>
            <div>
              <div className="w-full">
                <p className="text-xs text-foreground/50 whitespace-nowrap to-start-animation">
                  Oct 2025 - Present
                  <span className="hidden lg:inline"> (Paris, France)</span>
                </p>
                <div className="text-lg text-foreground/90 mb-2 flex flex-row gap-1 items-center to-start-animation">
                  <div>Délib</div>
                  <span className="ml-2 text-sm text-foreground/60 hidden lg:block">- Tech Lead</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-foreground/50 text-sm font-thin w-full lg:pl-16 hidden lg:flex to-start-animation">
            Built the first demo version of the Délib application, transitioned to maintaining the product, and now responsible for the production version used by customers.
          </p>
          <div className="flex-wrap gap-2 w-full mt-2 lg:pl-16 hidden lg:flex">
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">scraping</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">ai</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">python</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">next js</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">postgresql</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 justify-between py-2 lg:py-4 border-dashed lg:border-b relative">
          <div className='pb-7 -translate-x-7 -translate-y-7 hidden lg:flex  items-end justify-end absolute w-1/2 h-full top-0 -z-20'>
            <img className="w-full filter grayscale contrast-200 invert" src="/experience/capyxis.png" />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-tr opacity-100 from-background top-0' />
          </div>
          <div className="flex items-start justify-start gap-4">
            <div className="h-12 w-12 bg-muted/20 rounded-full flex items-center justify-center border p-1.5 to-start-animation">
              <img className="filter grayscale contrast-200 invert w-full" src="/experience/capyxis.png" />
            </div>
            <div>
              <div className="w-full">
                <p className="text-xs text-foreground/50 whitespace-nowrap to-start-animation">
                  July 2024 - Present
                  <span className="hidden lg:inline"> (Paris, France)</span>
                </p>
                <div className="text-lg text-foreground/90 mb-2 flex flex-row gap-1 items-center to-start-animation">
                  <div>Capyxis </div>
                  <span className="ml-2 text-sm text-foreground/60 hidden lg:block">- Software Engineer </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-foreground/50 text-sm font-thin w-full lg:pl-16 hidden lg:flex to-start-animation">
            I started at Capyxis as a mobile developer, building a mobile app with significant growth potential and contributing to various innovative applications. Later, as a software engineer, I learned to harness the power of AI and integrate it into real-world projects.
          </p>
          <div className="flex-wrap gap-2 w-full mt-2 lg:pl-16 hidden lg:flex">
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">next js</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">tailwind</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">openai api</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">express</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">prisma</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">postgresql</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">firebase</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">electron</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">expo</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 justify-between py-2 lg:py-4 border-dashed lg:border-b relative">
          <div className='pb-7 -translate-x-7 hidden lg:flex pt-3 items-end justify-start absolute  h-full top-0 -z-20 '>
            <img className="h-full " src="/experience/better.svg" />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-l opacity-90 from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-r opacity-90 from-background top-0' />
          </div>
          <div className="flex items-start justify-start gap-4">
            <div className="h-12 w-12 bg-muted/20 rounded-full flex items-center justify-center border p-1.5 to-start-animation">
              <img className="w-full " src="/experience/better.svg" />
            </div>
            <div>
              <div className="w-full">
                <p className="text-xs text-foreground/50 whitespace-nowrap to-start-animation">
                  Jan 2025 - Sept 2025
                  <span className="hidden lg:inline"> (Montreal, Canada)</span>
                </p>
                <div className="text-lg text-foreground/90 mb-2 flex flex-row gap-1 items-center to-start-animation">
                  <div>Better Player Win</div>
                  <span className="ml-2 text-sm text-foreground/60 hidden lg:block">- Software Engineer </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-foreground/50 text-sm font-thin w-full lg:pl-16 hidden lg:flex to-start-animation">
            My journey as a software engineer at Better Player Win involved maintaining a production-ready application that has been used by thousands of users.
          </p>
          <div className="flex-wrap gap-2 w-full mt-2 lg:pl-16 hidden lg:flex">
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">firebase</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">react</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">vite</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">scss</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">mongo</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">redis</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">express</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 justify-between py-2 lg:py-4 relative">
          <div className='pb-7 -translate-x-7 -translate-y-15 pt-3 hidden lg:flex  items-end justify-end absolute w-1/2 h-full top-0 -z-30 max-w-36'>
            <img   className="w-full filter grayscale contrast-200 invert" src="/experience/kombas.png" />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-bl from-background top-0' />
            <div className='absolute h-full w-full bg-linear-to-tr opacity-100 from-background top-0' />
          </div>
          <div className="flex items-start justify-start gap-4">
            <div className="h-12 w-12 bg-muted/20 rounded-full flex items-center justify-center border p-1.5 to-start-animation">
              <img  className="filter grayscale contrast-200 invert w-full" src="/experience/kombas.png" />
            </div>
            <div>
              <div className="w-full">
                <p className="text-xs text-foreground/50 whitespace-nowrap to-start-animation">
                  July 2023 - July 2024
                  <span className="hidden lg:inline"> (Monastir, Tunisia)</span>
                </p>
                <div className="text-lg text-foreground/90 mb-2 flex flex-row gap-1 items-center to-start-animation">
                  <div>Kombas Net </div>
                  <span className="ml-2 text-sm text-foreground/60 hidden lg:block">- Software Engineer </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-foreground/50 text-sm font-thin w-full lg:pl-16 hidden lg:flex to-start-animation">
            This is where I started my journey as a software engineer. My first project involved migrating a PrestaShop website to a Next.js website. I also built projects and apps from scratch, including e-commerce platforms, content management systems, and more.
          </p>
          <div className="flex-wrap gap-2 w-full mt-2 lg:pl-16 hidden lg:flex">
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">next js</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">tailwind</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">react native</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">express</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">prisma</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">postgresql</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">firebase</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">electron</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">expo</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">prestashop</p>
            <p className="text-primary text-xs bg-primary/5 border border-border/60 tracking-wide rounded-full px-3 py-1 to-start-animation">mongo</p>
          </div>
        </div>
      </div>
    </div>
  )
}
