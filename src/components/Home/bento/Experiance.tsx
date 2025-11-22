import { metaData } from '@/utils/content/metaData'

export default function Experiance() {
  return (
    <div className="w-full h-full flex flex-col pt-5 ">
      <div className="flex items-center justify-between w-full px-5">
        <h1 className="text-lg lg:text-xl to-start-animation font-medium ">{metaData.experience.title}</h1>
      </div>
      <div className="w-full h-full p-5 space-y-3 bg-linear-to-t from-muted/10 via-transparent">
        {
          metaData.experience.jobs.filter((_, i) => metaData.experience.active.includes(i)).map((item) => (
            <div className="w-full flex justify-between items-end to-start-animation">
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-12 bg-muted/20 border flex items-center justify-center rounded-full p-1.5">
                  <img className="filter grayscale contrast-200 invert w-full opacity-55" src={item.image} />
                </div>
                <div className="">
                  <p className="text-md text-foreground/90">
                    {item.company}
                    <span className="text-sm text-foreground/60"> {item.title} </span>
                  </p>
                  <p className="text-xs text-foreground/50">{item.date.split('(')[0]}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
