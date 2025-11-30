"use client"
import { metaData } from "@/utils/content/metaData";
import { useState } from "react";

export default function DesignSystem() {

  const [current, setCurrent] = useState(0)

  return (
    <div className="w-full max-w-5xl mx-auto mt-14 lg:mt-28 lg:pt-10 mb-10 grid gap-3">
      <div className=" max-w-xl mb-2 to-start-animation">
        <h1 className="text-lg lg:text-3xl font-bold">{metaData.design.title}</h1>
        <p className="text-foreground/60 max-w-xl hidden lg:flex font-light text-sm">{metaData.design.text}</p>
      </div>
      <div className="to-start-animation flex-wrap flex gap-2 lg:border lg:w-max rounded-2xl lg:p-1">
        {metaData.design.options.map((v, i) => (
          <button onClick={() => setCurrent(i)} className={`${i === current && "bg-muted/40 text-foreground! border "} py-1.5 text-foreground/40 px-3 rounded-xl`}>{v.name}</button>
        ))}
      </div>
      {Object.keys(metaData.design.options).map((v: any, i) => (
        i === current && <div className="to-start-animation relative flex w-full lg:items-center items-start justify-center overflow-hidden min-h-60 pt-5 lg:pt-0 lg:min-h-165  pointer-events-none">
          <img src={`/images/design-system/${metaData.design.options[v]?.image}`} className={`${metaData.design.options[v]?.class}`} />
        </div>
      ))}
    </div>
  )
}
