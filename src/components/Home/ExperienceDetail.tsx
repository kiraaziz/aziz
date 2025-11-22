import { metaData } from '@/utils/content/metaData'
import React from 'react'

export default function ExperienceDetail() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-14 lg:mt-24 grid gap-3 ">
      <div className="col-span-full w-full items-center justify-center flex-col mx-auto max-w-2xl lg:text-center mb-2 to-start-animation">
        <h1 className="text-lg lg:text-3xl font-bold">{metaData.experience.title}</h1>
        <p className="text-foreground/60 max-w-xl hidden lg:flex">{metaData.experience.description}</p>
      </div>
      <div className="grid grid-cols-1 w-full mx-auto max-w-2xl">
        {
          metaData.experience.jobs.map((item, index) => (
            <div className={'w-full flex flex-col gap-1 justify-between py-2 lg:py-4 border-dashed ' + (index === 0 ? ' lg:border-t' : ' lg:border-t')}>
              <div className="flex items-start justify-start gap-4">
                <div className={'h-12 w-12 bg-muted/20 rounded-full flex items-center justify-center border p-1.5 to-start-animation '}>
                  <img className="filter grayscale contrast-200 invert w-full opacity-55 " src={item.image} />
                </div>
                <div className="">
                  <div className="w-full">
                    <p className="text-xs text-foreground/50 whitespace-nowrap to-start-animation">{item.date}</p>
                    <div className="text-lg text-foreground/90 mb-2 flex flex-row gap-1 items-center  to-start-animation">
                      <div className="lg:hidden">{index === 0 ? 'BPW' : item.company}</div>
                      <div className="lg:flex hidden">{item.company}</div>
                      <span className="text-sm text-foreground/60">{item.title}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-foreground/50 text-sm font-thin w-full lg:pl-16 hidden lg:flex  to-start-animation">{item.description}</p>
              {item?.tech && (
                <div className="flex-wrap gap-2 w-full mt-2 lg:pl-16 hidden lg:flex">
                  {item.tech.map((tech) => (
                    <p className="text-primary text-xs font-thin  bg-primary/10 rounded-full px-3 py-1 to-start-animation">{tech}</p>
                  ))}
                </div>
              )}
            </div>
          ))
        }
      </div>
    </div>

  )
}
