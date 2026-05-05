"use client"
import { useState } from "react";

const options = [
  {
    name: "Custom",
    class: "w-[100%] mt-10 mx-auto",
    image: "prototype-2.png"
  },
  {
    name: "Supabase",
    class: "w-[100%] mt-10 mx-auto",
    image: "prototype-1.png"
  },
  {
    name: "Firebase",
    class: "w-[100%] mt-10 mx-auto",
    image: "prototype-3.png"
  },
  {
    name: "Desktop",
    class: "w-[80%] mx-auto",
    image: "prototype-5.png"
  },
  {
    name: "Mobile",
    class: "w-[90%] mx-auto",
    image: "prototype-4.png"
  }
];

export default function DesignSystem() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto mt-14 lg:mt-28 lg:pt-10 mb-10 hidden lg:grid gap-3">
      <div className="max-w-xl mb-2 to-start-animation">
        <h1 className="text-lg lg:text-3xl font-bold mb-2">My Design System</h1>
        <p className="text-foreground/60 max-w-xl hidden lg:flex font-light text-sm mb-2.5">
          I've been working on a design system for my side projects that makes the apps load quickly and efficiently from the start.
        </p>
      </div>
      <div className="to-start-animation flex-wrap flex gap-2 lg:w-max">
        {options.map((v, i) => (
          <button
            key={v.name}
            onClick={() => setCurrent(i)}
            className={`${i === current ? 'font-medium border bg-muted/15  rounded-full' : 'lg:hover:text-foreground text-foreground/60'} px-3 text-sm font-light py-1`}
          >
            {v.name}
          </button>
        ))}
      </div>
      {options.map((v, i) =>
        i === current ? (
          <div
            key={v.name}
            className="to-start-animation relative flex w-full lg:items-center items-start justify-center overflow-hidden min-h-60 pt-5 lg:pt-0 lg:min-h-165 pointer-events-none"
          >
            <img src={`/images/design-system/${v.image}`} className={v.class} />
          </div>
        ) : null
      )}
    </div>
  );
}
