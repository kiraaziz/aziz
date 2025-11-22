import { metaData } from '@/utils/content/metaData'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="w-full mt-5 h-[calc(100svh-23rem)] lg:flex flex-col items-center justify-center">
        <h1 className="to-start-animation text-2xl font-bold mx-auto mb-2 w-max">{metaData.contactPage.title}</h1>
        <p className="to-start-animation text-center max-w-2xl mx-auto text- text-foreground/70">{metaData.contactPage.description}</p>
        <div className="mx-auto w-full lg:w-max mt-5 grid grid-cols-2 lg:grid-cols-3 gap-2">
          {
            Object.keys(metaData.contact).map((link) => (
              <a
                href={(metaData as any).contact[link].name}
                target="_blank" rel="noopener"
                className="flex lg:hover:text-foreground ease-in-out duration-200 lg:hover:bg-muted/10 lg:hover:gap-4 gap-3 p-4 bg-muted/20 to-start-animation backdrop-blur rounded-lg border w-full text-sm lg:last:items-center lg:last:justify-center text-foreground/70 lg:last:col-span-2">
                <img src={`/contact/${(metaData as any).contact[link].title.toLowerCase().replace(" ", "")}.svg`} className="h-5 w-5 to-start-animation" />
                {(metaData as any).contact[link].title}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}
